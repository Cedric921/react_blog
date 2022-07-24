import React, { useState } from 'react';

const Home = () => {
	const [name, setName] = useState('cedric');
	const handleClick = () => {
		setName('vb');
	};

	return (
		<div className='home'>
      <h2>homepage</h2>
      <p>{name}</p>
			<button onClick={handleClick}>click me</button>
		</div>
	);
};

export default Home;
