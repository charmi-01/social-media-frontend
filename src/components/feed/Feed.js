import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"

const Feed = ({username}) => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchPosts= async()=>{
            const res=username? await axios.get("/posts/profile/"+ username) : await axios.get("/posts/timeline/63d8c62b4680d5cb3cdb2a16")
            setPosts(res.data)
        }
        fetchPosts();
    },[username])
    
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share/>
                {posts.map((post,index)=>{
                    return(
                        <Post key={index} post={post}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Feed