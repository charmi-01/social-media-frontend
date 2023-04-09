import React from 'react'
import "./rightbar.css"

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>joe </b> and <b>3 others</b> have their bithday today.
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt=""/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar