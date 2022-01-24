import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import MovieList from '../../components/movie_list/MovieList';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />

            <Featured type='movie' />

            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
        </div>
    )
}

export default Home
