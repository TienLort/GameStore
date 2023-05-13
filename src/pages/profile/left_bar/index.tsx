import React from 'react'
import { BsGenderAmbiguous, BsBookmark } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiCommentDots, BiCalendar } from 'react-icons/bi';
import { RiUserFollowLine, } from 'react-icons/ri';
import { MdWifiTethering, } from 'react-icons/md';

const LeftBar = () => {
  return (
    <div className="left__bar">
      <div className="table">
        <h3>Bảng thông tin</h3>
        <div>
          <span>
            <BsGenderAmbiguous /> Giới tính
          </span>
          <span>Nam</span>
        </div>
        <div>
          <span>
            <AiOutlineEdit /> Đánh giá
          </span>
          <span>0</span>
        </div>
        <div>
          <span>
            <BiCommentDots /> Thảo luận</span>
          <span>0</span>
        </div>
        <div>
          <span>
            <BsBookmark /> Đã lưu
          </span>
          <span>0</span>
        </div>
        <div>
          <span>
            <RiUserFollowLine /> Đang theo dõi
          </span>
          <span>0</span>
        </div>
        <div>
          <span>
            <MdWifiTethering /> Người theo dõi
          </span>
          <span>0</span>
        </div>
        <div>
          <span>
            <BiCalendar /> Ngày tham gia
          </span>
          <span>21/02/2023</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar