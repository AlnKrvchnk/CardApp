import { Paths } from './Path';
import { Navigate, Route, Routes } from 'react-router-dom';
import Card from '../components/Pages/Card';
const Router = () => {
    return (
        <Routes>
            <Route path={Paths.Card} element={<Card />} />
        </Routes>
    );
};

export default Router;
