import React from 'react';

const Create = () => {
	return (
		<div className='create'>
			<h2>Add a new Blog</h2>
			<form>
				<label htmlFor='tittle'>Blog title</label>
				<input type='text' required id='tittle' />
				<label htmlFor='body'>Blog body</label>
				<textarea name='' id='' cols='30' rows='10' required ></textarea>
				<label htmlFor='author'>Author</label>
				<input type='text' name='' id='author' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Create;
