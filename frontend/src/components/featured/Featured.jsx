import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState, useEffect } from 'react';
import axios from "axios";

function Featured({ type }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random/?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVlNTYzNDBjOGFlM2MxZWEzNDMzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzMwODg4OCwiZXhwIjoxNjQzNzQwODg4fQ.wPIf5IPVVwlyIuA6IqsDfmUesjSw5fbOSLR7UZDSU0Q"
                    }
                });
                console.log(res.data)
                setContent(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    }, [type]);
    return (
        <div className='featured'>
            {
                type && (
                    <div className="category">
                        <span>{type === "movies" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documantary">Documentary</option>
                        </select>
                    </div>
                )}
            <img
                width='100%'

                src={content.image} alt="image" />
            <div className="info">

                <img
                    src={content.image_title}
                    alt="image_title" />

                <span className='desc'>
                    {content.description}
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured
