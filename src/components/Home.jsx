import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		fetch('http://localhost:8080/blogs')
			.then((response) => {
				console.log(response);
				if (!response.ok) {
					throw Error('Failed to fetch blog data');
				}
				return response.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsPending(false);
			});
	}, []);

	return (
		<div className='home'>
			<div>
				{error && <div className='error'>{error}</div>}
				{isPending && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} />}
			</div>
		</div>
	);
};

export default Home;
