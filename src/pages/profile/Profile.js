import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className='profile'>
        <Sidebar/>
        <div className='profileRight'>
            <div className='profileRightTop'>
              <div className='profileCover'>

                <img className='profileCoverImg' src="assets/1.jpg" alt="" />
                <img className='profileUserImg' src="assets/1.jpg" alt="" />
              </ div>
              <div className='profileInfo'>
                <h4 className='profileInfoName'> Chirag Sharma</h4>
                <span className='profileInfoDesc'>helloooooooooo friends</span>
              </div>
            </div>
            <div className='profileRightBottom'>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    </div>
  </>
  )
}

export default Profile