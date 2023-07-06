import React from 'react'
import "./rightbar.css"

const Rightbar = ({user}) => {

  const HomeRightBar=()=>{
    return(
      <>
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
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='/assets/post/1.jpg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className=''>John Carter</span>
          </li>
        </ul>
      </>
    )
  }

  const ProfileRightBar=()=>{
    return(
      <>
      <h4 className='rightbarTitle'> User Information</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>{user.city}</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>{user.from}</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>{user.relationship ===1?"single": user.relationship ===2? "married":''}</span>
        </div>
      </div>
      <h4 className='rightbarTitle'> User friends</h4>
      <div className='rightbarFollowings'>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src='/assets/post/1.jpg' alt=""/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {
          user ? <ProfileRightBar/> : <HomeRightBar/>
        }
      </div>
    </div>
  )
}

export default Rightbar