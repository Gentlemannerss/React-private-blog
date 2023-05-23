import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';

function BlogOverview({  }) {
    /* Dit wordt nu gedaan in de App.js
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    */

    return (
        <div>
            <h1>Blog Overview Page</h1>
            <p>Total number of posts: {posts.length}</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogOverview;