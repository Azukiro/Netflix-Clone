import './movieList.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import MovieListItem from '../movie_list_item/MovieListItem';
import { useRef, useState } from 'react';
const MovieList = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        } else if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <div className='movie_list'>
            <span className="list_title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className='slider_arrow left'
                    onClick={() => handleClick('left')}
                    style={{ display: slideNumber === 0 && 'none' }}
                />
                <div className="container" ref={listRef}>
                    <MovieListItem index={0} />
                    <MovieListItem index={1} />
                    <MovieListItem index={2} />
                    <MovieListItem index={3} />
                    <MovieListItem index={4} />
                    <MovieListItem index={5} />
                    <MovieListItem index={6} />
                    <MovieListItem index={7} />
                    <MovieListItem index={8} />
                    <MovieListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className='slider_arrow right'
                    onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}

export default MovieList
