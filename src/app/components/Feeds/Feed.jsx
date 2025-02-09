import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link
import users from "../data/users";
import { FaRegHeart, FaHeart, FaRegPaperPlane, FaRegComment, FaBookmark, FaRegBookmark } from "react-icons/fa";

function Feed({ post }) {
    if (!post) return <p className="text-red-500">Post not found</p>;

    const user = users.find((user) => user.id === post.user_id);
    const currentUser = users.find((user) => user.id === "a1b2c3d4e5f6g7h8i9j0"); // samuelckl, no posts but only for testing likes and saved by button and localStorage
    const dayCount = Math.floor((new Date() - new Date(post.created_at)) / (1000 * 60 * 60 * 24)); // Calculate day for post.

    const storedLikes = JSON.parse(localStorage.getItem(`likes-${post.id}`)) || post.likes; // loading likes and saved from localStorage if found, do not know how to modify the data.js file yet
    const storedSavedBy = JSON.parse(localStorage.getItem(`saved-${post.id}`)) || post.saved_by;

    const [likes, setLikes] = useState(storedLikes); // Set likes and saved using useState
    const [savedBy, setSavedBy] = useState(storedSavedBy);

    useEffect(() => { // Allow user to change the likes and saved to localStorage
        localStorage.setItem(`likes-${post.id}`, JSON.stringify(likes));
        localStorage.setItem(`saved-${post.id}`, JSON.stringify(savedBy));
    }, [likes, savedBy, post.id]); 

    const isLiked = likes.includes(currentUser.id); // Check if isLiked by user samuelckl
    const isSaved = savedBy.includes(currentUser.id);

    const toggleLike = () => { // Toggle for changing like 
        setLikes(isLiked ? likes.filter((userId) => userId !== currentUser.id) : [...likes, currentUser.id]);
    };

    const toggleSave = () => {
        setSavedBy(isSaved ? savedBy.filter((userId) => userId !== currentUser.id) : [...savedBy, currentUser.id]);
    };

    return (
        <div className="flex flex-col w-full text-white p-4">
            <div className="flex items-center space-x-3">
                <img src={user?.profile_pic} alt={user?.name} className="w-10 h-10 rounded-full" />
                <Link to={`/profile/${user?.id}`} className="font-bold hover:text-blue-500">
                    {user?.name}
                </Link>
                <p className="text-sm text-gray-500">{dayCount} days ago</p>
                <button className="px-3 py-1 border rounded-lg text-blue-500">Follow</button>
                <button className="ml-auto px-2">⋯</button>
            </div>

            <img src={post.picture_url} alt="Post" className="w-[400px] h-[300px] my-3 rounded-lg" />

            <div className="flex justify-between w-full">
                <div className="flex space-x-4">
                    <button className="cursor-pointer" onClick={toggleLike}>
                        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    </button>
                    <button className="cursor-pointer"><FaRegComment /></button>
                    <button className="cursor-pointer"><FaRegPaperPlane /></button>
                </div>
                <button className="cursor-pointer" onClick={toggleSave}>
                    {isSaved ? <FaBookmark className="text-red-500" /> : <FaRegBookmark />}
                </button>
            </div>

            <p className="text-sm font-bold mt-2">{likes.length} likes</p>

            <div className="flex flex-row gap-2">
                <p className="font-bold">
                    {user?.name}
                </p>
                <p>{post.post_text}</p>
            </div>

            <p className="pt-4">Comments</p>
            <div className="mt-3 border-t pt-2">
                {post.comments.length < 1 ? (
                    <p className="text-sm font-bold">No comments yet..</p>
                ) : (
                    post.comments.map((comment) => {
                        const commentUser = users.find((u) => u.id === comment.user_id);
                        return (
                            <div key={comment.created_at} className="flex items-start space-x-2">
                                <img src={commentUser?.profile_pic} alt={commentUser?.name} className="w-6 h-6 rounded-full" />
                                <div>
                                    <Link to={`/profile/${commentUser?.id}`} className="text-sm font-bold hover:text-blue-500">
                                        {commentUser?.name}
                                    </Link>
                                    <p className="text-sm">{comment.text}</p>
                                    <p className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString()}</p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

// Define PropTypes for post, since its been warning me
Feed.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        picture_url: PropTypes.string.isRequired,
        post_text: PropTypes.string.isRequired,
        likes: PropTypes.arrayOf(PropTypes.number).isRequired,
        saved_by: PropTypes.arrayOf(PropTypes.number).isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                user_id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                created_at: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Feed;