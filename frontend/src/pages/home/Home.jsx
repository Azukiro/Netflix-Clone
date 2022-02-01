import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import MovieList from '../../components/movie_list/MovieList';
import './home.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
const Home = ({ type }) => {
    const [movieLists, setMovieLists] = useState([]);
    const [genre, setGenre] = useState();

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`/movieLists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVlNTYzNDBjOGFlM2MxZWEzNDMzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzMwODg4OCwiZXhwIjoxNjQzNzQwODg4fQ.wPIf5IPVVwlyIuA6IqsDfmUesjSw5fbOSLR7UZDSU0Q"
                    }

                });
                console.log(`/movieLists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`)
                setMovieLists(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre]);
    return (
        <div className='home'>
            <Navbar />

            <Featured type={type} />

            {

                movieLists.map(movieList => {

                    return (

                        <MovieList key={movieList._id} movieList={movieList} />
                    )
                })
            }
        </div>
    )
}

export default Home
