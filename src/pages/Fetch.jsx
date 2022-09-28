import React, {useEffect, useState} from "react";
import axios from "axios";

const Fetch = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/dosen")
			.then(res => {
				console.log(res);
				setPosts(res.data);
			})
			.catch(err => console.log(err));
	});
	return (
		<>
			{posts.map(post => (
				<li key={post.id}>{post.nama}</li>
			))}
		</>
	);
};

export default Fetch;
