import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import './watch.scss';

const Watch = () => {
    const { movieId } = useParams();
    const [movieItem, setMovieItem] = useState([]);


    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + movieId, {
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
    }, [movieId]);
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls src={movieItem.video} />

        </div>
    );
};

export default Watch;
