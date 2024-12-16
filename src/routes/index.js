
import express from 'express';

import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
}  from '../controller/blog.controller.js';

const router = express.Router();


router.post('/', createBlog);
router.get('/', getAllBlogs);  
router.get('/:id', getBlogById); 
router.put('/:id', updateBlog);  
router.delete('/:id', deleteBlog);  

export default router;