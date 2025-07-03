import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams(); // gets blog ID from URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://access-assist-admin-backend.vercel.app/api/blog/${id}`)
            .then((res) => {
                setBlog(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load blog:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!blog) return <p>Blog not found.</p>;

    return (
        <div className="max-w-7xl mx-auto p-4 mt-4">
            <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
            <img src={blog.image} alt={blog.blogTitle} className="mb-4 w-full" />
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: blog.description }}
            ></div>
        </div>
    );
};

export default BlogDetail;
