import { Container } from '@mui/material'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import LeftBar from './left_bar'
import RightBar from './right_bar'
import '../../scss/profile/index.scss';

const Profile = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '85px' }}>
            <div className="header">
                <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--GnVPQkCU--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png' alt='' />
                <button>Follow</button>
                <div className="header__details">
                    <h1 className="header__details-name">Daniel Reis</h1>
                    <p className="header__details-desc">PHP Evangelist &gt;

                        Twitch LiveCoder &gt;
                        Microsoft MVP &gt;

                        Coding useless stuff since 2011
                    </p>
                    <div className="header__details__meta">
                        <span className="header__details__meta__item">
                            <HiLocationMarker className="header__details__meta__item-icon" />
                            <span>
                                São Paulo
                            </span>
                        </span>
                        <span className="header__details__meta__item">
                            <FaBirthdayCake className="header__details__meta__item-icon" />

                            <span>
                                Joined on&nbsp;14 thg 9, 2020
                            </span>
                        </span>

                        <a href="mailto:hey@danielheart.dev" className="header__details__meta__item">
                            <MdEmail className="header__details__meta__item-icon" />
                            <span>
                                hey@danielheart.dev
                            </span>
                        </a>

                        <a href="https://danielheart.dev" rel="noreferrer" className="header__details__meta__item">
                            <AiOutlineLink className="header__details__meta__item-icon" />
                            <span>
                                https://danielheart.dev
                            </span>
                        </a>
                        <div>
                            <a href="https://github.com/DanielHe4rt" rel="noreferrer" className="header__details__meta__item">
                                <BsGithub className="header__details__meta__item-icon" />
                                <span>
                                    https://danielheart.dev
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom-box">
                        <strong className="header__bottom__title">
                            <p>Education</p>
                        </strong>
                        <p className="header__bottom__desc">Stackoverflow Researcher</p>
                    </div>
                    <div className="header__bottom-box">
                        <strong className="header__bottom__title">
                            <p>Work</p>
                        </strong>
                        <p className="header__bottom__desc">Developer Advocate at ScyllaDB</p>
                    </div>
                </div>
            </div>
            <div className="body">
                <LeftBar/>
                <RightBar/>
                
            </div>
        </Container>
    )
}

export default Profile