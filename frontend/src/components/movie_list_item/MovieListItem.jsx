import './movieListItem.scss';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { useState } from 'react';
function MovieListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="list_item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        >
            <img src="https://img.search.brave.com/6hBCjfWTO0NSkjDbwLckyAWhKn4A-LN3GvxtRO0d30I/rs:fit:1200:700:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDkv/bWlsZXMtbW9yYWxl/cy5qcGc"
                alt='movie_poster'
            />
            {isHovered &&
                (
                    <>
                        <video src={trailer} autoPlay={true} loop />
                        <div className="item_info">
                            <div className="icons">
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownAltOutlined className='icon' />
                            </div>

                            <div className="item_info_top">
                                <span>
                                    1 hour 16 mins
                                </span>
                                <span className='limit'>+16</span>
                                <span>1999</span>
                            </div>

                            <div className="desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit totam tenetur tempora id. Cumque id non eaque, animi doloremque at magni distinctio molestias sit facilis quod sapiente quaerat veritatis?
                            </div>
                            <div className="genre">Action</div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default MovieListItem

