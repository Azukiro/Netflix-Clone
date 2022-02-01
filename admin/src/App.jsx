import './app.scss';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
    return (
        <div className='app'>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className='other_page'>Other page</div>
            </div>
        </div>);
}

export default App;
