import React from 'react';
import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs');

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
