import { Router } from "express";
import MovieList from "../models/MovieList.js";
import verify from "../verifyToken.js";
const router = Router();

//CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovieList = new MovieList(req.body);

    try {
      const createdMovieList = await newMovieList.save();
      res.status(200).json(createdMovieList);
    } catch (err) {
      res.status(500).json(err + "");
    }
  } else {
    res.status(403).json({ message: "You are not allowed" });
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await MovieList.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "MovieList deleted" });
    } catch (err) {
      res.status(500).json(err + "");
    }
  } else {
    res.status(403).json({ message: "You are not allowed" });
  }
});

//GET
router.get("/", verify, async (req, res) => {
  const type = req.query.type;
  const genre = req.query.genre;
  let movieList = [];
  try {
    if (type) {
      if (genre) {
        movieList = await MovieList.aggregate([
          {
            $match: {
              type: type,
              genre: genre,
            },
          },
          {
            $sample: {
              size: 10,
            },
          },
        ]);
      } else {
        movieList = await MovieList.aggregate([
          {
            $match: {
              type: type,
            },
          },
          {
            $sample: {
              size: 10,
            },
          },
        ]);
      }
    } else {
      movieList = await MovieList.aggreagate({
        $sample: {
          size: 10,
        },
      });
    }
    res.status(200).json(movieList);
  } catch (err) {
    res.status(500).json(err + "");
  }
});

//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const movieLists = query
        ? await MovieList.find().sort({ _id: -1 }).limit(10)
        : await MovieList.find();
      res.status(200).json(movieLists);
    } catch (err) {
      res.status(500).json(err + "");
    }
  } else {
    res.status(403).json({ message: "You are not allowed to see all users !" });
  }
});

export default router;
