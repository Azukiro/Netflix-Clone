import './movieListItem.scss';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
function MovieListItem({ index, item }) {

    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        const getMovie = async () => {
        }
    });

    return (
        <div className="list_item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        >
            <img src={item.image} alt='movie_poster'
            />
            {isHovered &&
                (
                    <>
                        <video src={item.trailer} autoPlay={true} loop />
                        <div className="item_info">
                            <div className="icons">
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownAltOutlined className='icon' />
                            </div>

                            <div className="item_info_top">
                                <span>
                                    {item.duration}
                                </span>
                                <span className='limit'>{item.limit}</span>
                                <span>{item.year}</span>
                            </div>

                            <div className="desc">
                                {item.description}
                            </div>
                            <div className="genre">{item.genre}</div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default MovieListItem

