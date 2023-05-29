import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../data/posts.json';

function BlogPost() {
    const { blogId } = useParams();
    const blogPost = posts.find((post) => post.id === blogId);

    return (
        <div>
            <h1>Blog Post Page</h1>
            {blogPost ? (
                <>
                    <h2>{blogPost.title}</h2>
                    <p>{blogPost.content}</p>
                </>
            ) : (
                <p>Blog post not found.</p>
            )}
        </div>
    );
}

export default BlogPost;