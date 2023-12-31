import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const [user,setUser]=useState({})

  const params= useParams();

  useEffect(()=>{
    const fetchUser= async ()=>{
      const res= await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };
    fetchUser();
  },[])
  return (
    <>
    <Topbar/>
    <div className='profile'>
        <Sidebar/>
        <div className='profileRight'>
            <div className='profileRightTop'>
              <div className='profileCover'>
                <img className='profileCoverImg' src={user.coverPicture || "/assets/noProfile.webp"} alt="" />
                <img className='profileUserImg' src={user.profilePicture || "/assets/noProfile.webp"} alt="" />
              </ div>
              <div className='profileInfo'>
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className='profileInfoDesc'>{user.desc}</span>
              </div>
            </div>
            <div className='profileRightBottom'>
                <Feed username={params.username}/>
                <Rightbar user={user}/>
            </div>
        </div>
    </div>
  </>
  )
}

export default Profile