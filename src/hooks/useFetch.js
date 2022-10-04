// import axios from "axios";
// import React, {useEffect, useState} from "react";

// const useFetch = url => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);
// 	useEffect(() => {
// 		const getData = async () => {
// 			try {
// 				const response = await axios.get(url);
// 				if (response.status === 200) {
// 					setData(response.data.data);
// 					console.log(data);
// 				} else {
// 					setError("gagal memuat data");
// 				}
// 				setError(null);
// 			} catch (err) {
// 				setError(err.message);
// 				setData(null);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		getData();
// 	}, [url]);

// 	return <div>useFetch</div>;
// };

// export default useFetch;
