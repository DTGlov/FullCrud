import React, { useState,useContext,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';
import { CurrentContext,SetContext } from '../../App';
//import { CurrentContext, SetContext } from '../../App';


function Form() {
  const currentId = useContext(CurrentContext);
 const setCurrentId = useContext(SetContext);
  const post = useSelector((state) => currentId?state.posts.find((p)=>p._id ===currentId):null); //return only updated posts

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    details: "",
    tags: "",
  });
  const dispatch = useDispatch();
  const isInvalid = postData.creator === '' || postData.title === '' || postData.details === '' || postData.tags === ''

useEffect(() => {
  if(post) setPostData(post)
}, [post]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
   
    }
       clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      details: "",
      tags: "",
    });
  };

  return (
    <div className="col-span-1">
      <div className="flex flex-col card w-full p-3 rounded-lg">
        <h1 className="text-center tag font-bold">
          {currentId ? "Editing" : "Create"} an Activity
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            name="creator"
            aria-label="Enter your Name"
            type="text"
            className="w-full text-gray-900 text-sm placeholder-gray-800 mt-3 bg-gray-200"
            placeholder="Creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <input
            name="title"
            aria-label="Enter your title"
            type="text"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            className="w-full text-gray-900 text-sm placeholder-gray-800 mt-3 bg-gray-200"
            placeholder="Title"
          />
          <textarea
            name="details"
            cols="20"
            rows="5"
            value={postData.details}
            onChange={(e) =>
              setPostData({ ...postData, details: e.target.value })
            }
            className="w-full placeholder-gray-900 text-sm text-gray-800 mt-3 bg-gray-200"
            placeholder="Details"
          ></textarea>
          <input
            name="tags"
            className="w-full mt-3 placeholder-gray-800 text-sm text-gray-900 bg-gray-200"
            placeholder="Enter Tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
            type="text"
          />
          <div className="flex flex-col justify-center mt-3">
            <button disabled={isInvalid} type="submit" className={isInvalid?"cursor-not-allowed head bg-green-400 ":"head w-full"}>
              Post
            </button>
          </div>
        </form>
        <button onClick={clear} className="head mt-2 bg-red-500 w-full">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Form
