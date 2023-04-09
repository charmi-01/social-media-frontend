import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useState } from "react"

const Post = () => {
    const [like,setLike]= useState(4)
    const[isLiked,setIsLiked]=useState(false)

    const likehandler=()=>{
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/1.jpg" alt=""/>
                <span className="postUsername">Chirag Sharma</span>
                <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">hey! its my first post :)</span>
            <img  className="postImg" src="/assets/1.jpg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img  className="likeIcon" src="/assets/like.png" onClick={likehandler} alt=""/>
            <img  className="likeIcon" src="/assets/heart.png" onClick={likehandler} alt=""/>
            <span  className="postlikeCounter"> {like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> 9 comments</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Post