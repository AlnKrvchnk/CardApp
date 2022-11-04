import { Link } from 'react-router-dom';
import { Paths } from './routes/Path';

function Main() {
    return (
        <>
            <h1>Search:</h1>
            <h2>
                <Link to={Paths.Notifications}>Notifications App</Link>
            </h2>
            <h2>
                <Link to={Paths.Card}>Card App</Link>
            </h2>
        </>
    );
}

export default Main;
