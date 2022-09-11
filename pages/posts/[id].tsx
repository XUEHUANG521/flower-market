import { useRouter } from "next/router";
import { NextPage } from "next";
import axios from "axios";

const Post:NextPage = () => {
	const router = useRouter();
	const {id} = router.query;
	const hello = () => {
		axios.get('http://localhost:3000/api/hello').then(res =>
			console.log(res)
		)
		
	}
	return (
		<>
		<div>Post: {id}</div>
		<button onClick={hello}>Click me</button>
		</>
	)
}

export default Post;