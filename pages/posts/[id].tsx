import { useRouter } from "next/router";
import { NextPage } from "next";

const Post:NextPage = () => {
	const router = useRouter();
	const {id} = router.query;
	return (
		<>
		<div>Post: {id}</div>
		</>
	)
}

export default Post;