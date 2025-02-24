import posts from "../data/posts"; 
import Feed from "./Feed";
import { useEffect } from "react";

function FeedsList() {
    useEffect(() => {
        document.title = "Clonestagram";
      }, []);
    // To map posts randomly 
    const postsData = posts.sort(() => .5 - Math.random());
    return (
        // Simply wrapped in grid and mapped all posts
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-black-900">
            {postsData.map((post) => (
                <Feed key={post.id} post={post} />
            ))}
        </div>
    );
}

export default FeedsList;