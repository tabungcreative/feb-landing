import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = url => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data.data);
			} catch (err) {
				throw new err("error masalah jaringan");
			}
		};
		getData();
	}, [url]);
	return data;
};

export default useFetch;
