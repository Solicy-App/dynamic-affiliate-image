import { useSearchParams } from "react-router-dom";

import "./index.css";

const Post = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
            <p>Share this link to get post {searchParams.get("id")}'s metadata</p>
    );
}

export default Post
