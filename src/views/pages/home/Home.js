import React from 'react'
import AppHeader from "../common/header/AppHeader";
import AllProjects from "../project/AllProjects";
import AppFooter from "../common/footer/AppFooter";

const Home = () => {
    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <AllProjects/>
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default Home
