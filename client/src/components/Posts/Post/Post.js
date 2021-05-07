import React,{useContext} from 'react'
import { DotsHorizontalIcon, TrashIcon } from '@heroicons/react/outline';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';
import { SetContext } from '../../../App';
import {deletePost } from '../../../actions/posts'
import {RefreshIcon} from '@heroicons/react/solid'

function Post() {
  const posts = useSelector((state) => state.posts)
  const setCurrentId = useContext(SetContext)
 const dispatch = useDispatch()

  
console.log(posts)
  return !posts.length ? (
     <RefreshIcon className="h-10 animate-spin"/>
    
  ) : (
    <div className="sm:grid sm:grid-cols-2 sm:gap-3">
      {posts.map((post) => (
        <div
          key={post._id}
          className="group mt-3 card flex flex-col rounded-lg shadow-lg p-3 transition duratiton-100 ease-in transform hover:scale-105"
        >
          <div className="flex justify-between lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer">
            <DotsHorizontalIcon className="h-5" onClick={()=>setCurrentId(post._id)}/>
            <TrashIcon className="h-5 text-red-400" onClick={()=>dispatch(deletePost(post._id))} />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-sm tag">{post.creator}</h1>
            <h2 className="text-xs">
              {moment(post.createdAt).fromNow()}
            </h2>
          </div>
          <div className="flex flex-col mt-3">
            <h1 className="font-bold text-sm hover:underline">{post.title}</h1>
            <p className="text-sm mt-2 line-clamp-6">{post.details}</p>
            <p className="text-xs mt-3 tag">{post.tags.map((tag)=>`#${tag} `)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post

// {
//   /* <h1 className="text-sm">No Activity Available. Kindly add Activity.</h1> */
// }