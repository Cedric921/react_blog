import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				console.log(response);
				if (!response.ok) {
					throw Error('Failed to fetch blog data');
				}
				return response.json();
			})
			.then((d) => {
				setData(d);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsPending(false);
			});
	}, []);

    return { data, isPending, error };
};

export default useFetch;
