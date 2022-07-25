import React from 'react'
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
  return (
      <div className="blog-details">
          <h3>Blog  for { id}</h3>
    </div>
  )
}

export default BlogDetails;