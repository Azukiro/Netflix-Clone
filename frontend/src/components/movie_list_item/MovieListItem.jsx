import './movieListItem.scss';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
function MovieListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movieItem, setMovieItem] = useState([]);


    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVlNTYzNDBjOGFlM2MxZWEzNDMzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzMwODg4OCwiZXhwIjoxNjQzNzQwODg4fQ.wPIf5IPVVwlyIuA6IqsDfmUesjSw5fbOSLR7UZDSU0Q"
                    }
                });
                setMovieItem(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, [item]);

    return (
        <Link to={{ pathname: `/watch/${movieItem._id}` }}>
            <div className="list_movieItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            >
                <img src={movieItem.image} alt='movie_poster'
                />
                {isHovered &&
                    (
                        <>
                            <video src={movieItem.trailer} autoPlay={true} loop />
                            <div className="item_info">
                                <div className="icons">
                                    <PlayArrow className='icon' />
                                    <Add className='icon' />
                                    <ThumbUpAltOutlined className='icon' />
                                    <ThumbDownAltOutlined className='icon' />
                                </div>

                                <div className="item_info_top">
                                    <span>
                                        {movieItem.duration}
                                    </span>
                                    <span className='limit'>
                                        {movieItem.limit}
                                    </span>
                                    <span>{movieItem.year}</span>
                                </div>

                                <div className="desc">
                                    {movieItem.description}
                                </div>
                                <div className="genre">
                                    {movieItem.genre}
                                </div>
                            </div>
                        </>
                    )}
            </div>
        </Link>
    )
}

export default MovieListItem

