function About() {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 w-full md:w-200 min-h-screen bg-black text-white items-start">
            {/* Left Column - About Section */}
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold text-white mb-4">About Clonestagram</h1>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Clonestagram is a project designed to mimic the core functionalities of Instagram, 
                    demonstrating how social media platforms structure and display user-generated content. 
                    This application retrieves **user data** and **posts** from dummy data, simulating a 
                    real-world feed experience. Each user has a profile containing their details and posts, 
                    while the feed dynamically updates based on the data.
                </p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                    The project showcases modern **React development** practices, implementing **React Router** 
                    for navigation, **component-based architecture**, and efficient state management for rendering posts 
                    and profiles. The UI is built with **Tailwind CSS**, ensuring a sleek, responsive design. 
                </p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                    Whether you are exploring frontend development, learning about data-driven rendering, or 
                    experimenting with mock APIs, Clonestagram offers a hands-on approach to building a 
                    social media-style web application.
                </p>
            </div>
        </div>
    );
}

export default About;