import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../scss/posts_details/index.scss'

const Info = () => {
    const navigate = useNavigate();
    const movePerson = () => {
        navigate('/ben');
    }
    return (
        <div className='Box'>
            <aside className="rightBar">
                <div className="rightBar__card-info">
                    <div className="rightBar__card-info-title">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--99Dq5PZH--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png" alt="" />
                        <h2 onClick={movePerson}>Ben Halpen</h2>
                    </div>
                    <button className='btn'>Follow</button>
                    <div className="rightBar__card-info-desc">
                        <div className="intro">
                            A Canadian software developer who thinks he funny. He/Him.
                        </div>
                        <ul className="inner">
                            <li>
                                <div className="key">
                                    Location
                                </div>
                                <div className="value">
                                    NY
                                </div>
                            </li>
                            <li>
                                <div className="key">
                                    Education
                                </div>
                                <div className="value">
                                    Mount Allison University
                                </div>
                            </li>
                            <li>
                                <div className="key">
                                    Work
                                </div>
                                <div className="value">
                                    Co-founder at Forem
                                </div>
                            </li>
                            <li>
                                <div className="key">
                                    Joined
                                </div>
                                <div className="value">
                                    27 thg 12, 2015
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="rightBar__card-more">
                    <header className="header">
                        <h3>
                            More from <a href="/ben">Ben Halpern</a>
                        </h3>
                    </header>
                    <div>
                        <a className="more-link" href="/ben/meme-monday-4c5o">
                            Meme Monday 😈
                            <div className="more-link__tags">
                                <span><span className="opacity-50">#</span>watercooler</span>
                                <span><span className="opacity-50">#</span>discuss</span>
                                <span><span className="opacity-50">#</span>jokes</span>
                            </div>
                        </a>
                        <a className="more-link" href="/ben/meme-monday-7b3">
                            Meme Monday 🧢
                            <div className="more-link__tags">
                                <span><span className="opacity-50">#</span>discuss</span>
                                <span><span className="opacity-50">#</span>watercooler</span>
                                <span><span className="opacity-50">#</span>jokes</span>
                            </div>
                        </a>
                        <a className="more-link" href="/devteam/welcome-devintelbyte-the-1-millionth-registered-dev-381i">
                            Welcome @devintelbyte, the 1 millionth registered DEV!
                            <div className="more-link__tags">
                                <span className="mr-1"><span className="opacity-50">#</span>meta</span>
                                <span className="mr-1"><span className="opacity-50">#</span>watercooler</span>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Info