import React, { useState } from 'react';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('cedric');
	return (
		<div className='create'>
			<h2>Add a new Blog</h2>
			<form>
				<label htmlFor='tittle'>Blog title</label>
				<input
					type='text'
					required
					id='tittle'
					name={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor='body'>Blog body</label>
				<textarea
					id='body'
					required
					name={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label htmlFor='author'>Author</label>
				<input
					type='text'
					name={author}
					onChange={(e) => setAuthor((e.target.id = 'author'))}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Create;
