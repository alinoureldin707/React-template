import React, { Suspense, lazy } from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

const Loading = lazy(() => import('./components/loading/Loading'));
const Home = lazy(() => import('./components/home/Home'));
const Header = lazy(() => import('./components/assets/header/Header'));
const Footer = lazy(() => import('./components/assets/footer/Footer'));

function PagesSwitch() {
    return (
        <Suspense fallback={<Loading />}>
            {/* Header component */}
            <Header/>

            <Routes>
                {/* Home page */}
                <Route
                    path="/"
                    exact
                    element = {<Home/>}
                />
                
            </Routes>

            {/* Footer component*/}
            <Footer/>
        </Suspense>
    )
}

export default PagesSwitch
