import './movieList.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import MovieListItem from '../movie_list_item/MovieListItem';
import { useRef, useState } from 'react';
const MovieList = ({ movieList }) => {

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
            <span className="list_title">{movieList.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className='slider_arrow left'
                    onClick={() => handleClick('left')}
                    style={{ display: slideNumber === 0 && 'none' }}
                />
                <div className="container" ref={listRef}>
                    {
                        movieList.content.map((item, index) => {
                            return (
                                <MovieListItem index={index} key={item.id} item={item} />
                            )
                        })
                    }
                </div>
                <ArrowForwardIosOutlined className='slider_arrow right'
                    onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}

export default MovieList
