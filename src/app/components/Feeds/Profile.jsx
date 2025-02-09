import { useParams } from "react-router-dom";
import users from "../data/users";
import posts from "../data/posts";
import Feed from "./Feed";

function Profile() {
    const { id } = useParams(); // Get ID from params
    const user = users.find(user => user.id.toString() === id); // Filter user from id

    if (!user) return <p className="text-red-500">User not found</p>;

    const userPosts = posts.filter(post => post.user_id === user.id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-black-900">
            
            {userPosts.length > 0 ? (
                userPosts.map((post) => <Feed key={post.id} post={post} />)
            ) : (
                <p className="text-white">No posts from this user.</p>
            )}
        </div>
    );
}

export default Profile;