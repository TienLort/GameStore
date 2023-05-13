import React, { useState } from 'react'
import '../../../scss/posts_details/index.scss'
import { RiHeart2Line, RiHeart2Fill } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs';
const Interact = () => {
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleList, setToggleList] = useState(false);

    const handleToggleLike = () => {
        setToggleLike(!toggleLike)
    }
    const handleToggleList = () => {
        setToggleList(!toggleList)
    }
    return (
        <div className='Box'>
            <div className='article_button'>
                <button id="btnh1" onClick={handleToggleLike}>
                    {toggleLike ? <>
                        <span><RiHeart2Line className="btn__icon_like" /></span>
                        <span className="btn__count">18</span>
                    </> : <>
                        <span><RiHeart2Fill className="btn__icon activeLike" /></span>
                        <span className="btn__count">44</span>
                    </>}

                </button>
                <button id="btnh2">
                    <span><FaRegComment className="btn__icon" /></span>
                    <span className="btn__count">21</span>
                </button>
                <button id="btnh3" onClick={handleToggleList}>
                    {toggleList ? <>
                        <span><BsBookmark className="btn__icon_list" /></span>
                        <span className="btn__count">12</span>
                    </> : <>
                        <span><BsFillBookmarkCheckFill className="btn__icon activeList" /></span>
                        <span className="btn__count ">43</span>
                    </>}
                </button>
            </div>
        </div>
    )
}

export default Interact