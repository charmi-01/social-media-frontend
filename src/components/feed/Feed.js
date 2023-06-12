import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"

const Feed = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchPosts= async()=>{
            const res= await axios.get("/posts/timeline/63d8c62b4680d5cb3cdb2a16")
            console.log(res)
        }
        fetchPosts();
    },[])
    
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share/>
                <Post/>
                {/* <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/> */}
            </div>
        </div>
    )
}

export default Feed