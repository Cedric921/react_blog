import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: 'welcome blog',
			body: 'Welcome to the blogs',
			author: 'cedric',
			id: 1,
		},
		{
			title: 'welcome party',
			body: 'Welcome to the party',
			author: 'mario',
			id: 2,
		},
		{
			title: 'web dev conference',
			body: 'Welcome to the blogs',
			author: 'ben',
			id: 3,
		},
	]);
	return (
		<div className='home'>
			<div>
				<BlogList blogs={blogs} />
			</div>
		</div>
	);
};

export default Home;
