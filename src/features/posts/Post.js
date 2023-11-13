import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

export default function Post() {
  const {isLoading,error,posts} = useSelector((state) => state.posts);

  console.log(posts);

  const dispacth = useDispatch();
  
    useEffect(()=>{
      dispacth(fetchPosts());
    },[])



  return (
    <div>
      <h2>Post View</h2>
      {isLoading  && <h3>Loading.... </h3> }
      {error  && <h3>{error.message} </h3> }
      {posts && posts.map((post)=>{
        return <article>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </article>
      })}
    </div>
  )
}
