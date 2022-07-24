import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		fetch('http://localhost:8080/blogs')
			.then((response) => response.json())
			.then((data) => {
        setBlogs(data);
        setIsPending(false)  
			})
			.catch();
	}, [blogs]);

	return (
		<div className='home'>
      <div>
        {isPending && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} />}
			</div>
		</div>
	);
};

export default Home;
