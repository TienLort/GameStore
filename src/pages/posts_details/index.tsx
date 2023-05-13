import React, { useState } from 'react'
import Navigation from 'src/components/posts/Navigation';
import Content from './content';
import Info from './info';
import Interact from './interact';
import '../../scss/posts_details/index.scss'

const PostsDetails = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggle = () => {
        setMobileMenu(!mobileMenu);
    };
    return (
        <>
            {/* <Navigation openMenu={toggle} /> */}

            <main className="main-container">
                <Interact />
                <Content />
                <Info />
            </main>
        </>
    )
}

export default PostsDetails