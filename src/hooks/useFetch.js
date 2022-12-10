import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = url => {
	const [data, setData] = useState(null);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data.data);
				setTotal(response.data.data.total);
			} catch (err) {
				setError(err.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [url]);
	return {data, loading, error, total};
};

export default useFetch;
