import { useParams } from "react-router-dom";
import { useEffect } from "react";
import users from "../data/users";
import posts from "../data/posts";
import Feed from "./Feed";

function Profile() {
        useEffect(() => {
            document.title = "Clonestagram - Profile";
          }, []);
    const { id } = useParams(); // Get ID from params
    const user = users.find(user => user.id.toString() === id); // Filter user from id

    if (!user) return <p className="text-red-500">User not found</p>;

    const userPosts = posts.filter(post => post.user_id === user.id);
    const formattedDate = new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full h-full bg-gray-900 text-white">
            {/* Left Column - User Profile */}
            <div className="md:col-span-1 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="font-bold text-xl">Profile</h1>
                <img 
                    src={user.profile_pic} 
                    alt={user.name} 
                    className="w-32 h-32 rounded-full border-4 border-gray-600"
                />
                <h2 className="text-xl font-bold mt-4">{user.name}</h2>
                <p className="text-gray-400 mt-2">Member since: {formattedDate}</p>
            </div>

        <div className="md:col-span-2">
            {userPosts.length > 0 ? (
                userPosts.map((post) => <Feed key={post.id} post={post} />)
            ) : (
                <p className="text-white">No posts from this user.</p>
            )}
            </div>
        </div>
    );
}

export default Profile;

// Add left panel
// move clonestagram logo to let and maybe add a menu or something to make it not as empty