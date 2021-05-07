import express from 'express';
import { getPosts,createPosts,updatePost,deletePost } from '../controllers/posts.js'

const router = express.Router();

//CRUD
router.get('/', getPosts); //fetching or retrieving from the db
router.post('/', createPosts); //making a post to the db ,also post means we have access to the body
router.patch('/:id',updatePost) //this is used to update existing document in the db
router.delete('/:id',deletePost)
export default router;