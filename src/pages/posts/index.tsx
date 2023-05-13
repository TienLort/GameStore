import React, { useState } from 'react'
import Navigation from "../../components/posts/Navigation";
import LeftSidebar from "../../components/posts/left_sidebar";
import Content from "../../components/posts/content";
import RightSidebar from "../../components/posts/right_sidebar";
import "../../scss/posts/posts.scss";


const Posts = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggle = () => {
        setMobileMenu(!mobileMenu);
    };
    return (
        <>
            <Navigation openMenu={toggle} />

            <main className="main-container">
                <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
                <Content />
                <RightSidebar />
            </main>
        </>
    )
}

export default Posts