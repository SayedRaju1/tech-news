import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'

const Home = () => {

    return (
        <div className="home-div">
            <SearchBar></SearchBar>
            <Results />

        </div>
    );
};

export default Home;