import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useEffect, useState } from "react"
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            // console.log(res.data);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const likehandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    //console.log(post)

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                        <img className="postProfileImg" src={user.profilePicture || "/assets/noProfile.webp"} alt="" />
                    </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={`/assets/${post.img}`} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likehandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likehandler} alt="" />
                        <span className="postlikeCounter"> {like} people like it</span>
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