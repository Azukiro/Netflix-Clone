import { Router } from "express";
import MovieList from "../models/MovieList.js";
import verify from "../verifyToken.js";
const router = Router();

//CREATE
router.put("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovieList = new Movie(req.body);
        
        try {
            const createdMovieList = await MovieList.save();
            res.status(200).json(createdMovieList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You are not allowed" });
    }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
         try {
            const updatedMovieList = await newMovieList.findByIdAndUpdate(req.params.id,
                {
                    $set : req.body
                },
                {
                    neww: true
                });
            res.status(200).json(updatedMovieList);
        } catch (err) {
            res.status(500).json(err);
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
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You are not allowed" });
    }
});

//GET
router.get("/find/:id",verify, async (req, res) => {
  try {
    const movieList = await MovieList.findById(req.params.id);
    res.status(200).json(movieList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM
router.get("/random",verify, async (req, res) => {
    const type = req.query.type;
    let movieList;
    try {
        if(type === "series"){
            movieList = await MovieList.aggregate(
                [
                    {
                        $match : {
                            isSeries : true
                        }
                    },
                    {
                        $sample: { 
                            size: 1
                        }
                    }
                ]
            );
        }else{
            movieList = await MovieList.aggregate(
                [
                    {
                        $match : {
                            isSeries : false
                        }
                    },
                    {
                        $sample: { 
                            size: 1
                        }
                    }
                ]
            );
        }
        res.status(200).json(movieList);
    } catch (err) {
        res.status(500).json(err);
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
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ message: "You are not allowed to see all users !" });
  }
});

export default router;
