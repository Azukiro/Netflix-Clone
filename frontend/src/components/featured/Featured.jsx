import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({ type }) {

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

                src="http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg" alt="paysage" />
            <div className="info">

                <img
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/48/Jumanji_%28film%2C_1995%29_Logo.png/220px-Jumanji_%28film%2C_1995%29_Logo.png" alt="Jumanhi" />

                <span className='desc'>
                    uis porttitor massa dictum sit amet. Sed suscipit est ac elit bibendum, in pharetra mauris scelerisque. Sed porta justo ac euismod finibus. Vivamus nisi ligula, consectetur non blandit id, pretium et velit. Praesent vestibulum sollicitudin justo, ac lacinia libero sollicitudin ac. Maecenas rutrum erat quis condimentum varius. Mauris tempor dui lectus, vitae pulvinar justo pretium vel. In hac habitasse platea dictumst. Sed id elementum justo. Quisque accumsan augue ut dolor laoreet, sed imperdiet orci vulputate. Morbi blandit purus nec massa tempor dictum. Nam et nibh eu nisi auctor euismod vitae pretium mauris.
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
