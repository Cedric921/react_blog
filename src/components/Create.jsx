import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('cedric');
	const [isPending, setIsPending] = useState(false);
	// useNavigate for redirection
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsPending(true);

		const blog = { title, body, author };

		fetch('http://localhost:8080/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then((data) => {
			setIsPending(false);
			console.log('new blog created');
			navigate(-1);
		});
	};

	return (
		<div className='create'>
			<h2>Add a new Blog</h2>
			<form onSubmit={handleSubmit}>
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
					onChange={(e) => setAuthor(e.target.value)}
				/>
				{!isPending && <button type='submit'>Submit</button>}
				{isPending && (
					<button type='submit' disabled>
						Adding blog ...
					</button>
				)}
			</form>
		</div>
	);
};

export default Create;
