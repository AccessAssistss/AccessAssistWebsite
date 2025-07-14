import React, { useEffect, useState } from 'react';
import axios from 'axios';
import blog from '../../assets/blog.jpg';
import { Link } from 'react-router-dom';
const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://access-assist-admin-backend.vercel.app/api/blog/all');
                const blogsFromApi = response.data.blogs;

                // Transform API data to match the structure expected by UI
                const formattedBlogs = blogsFromApi.map((blog, index) => ({
                    id: blog._id || index,
                    title: blog.blogTitle,
                    excerpt: blog.description,
                    date: blog.createdAt,
                    image: blog.image,
                }));

                setBlogPosts(formattedBlogs);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            {/*<div>*/}
            {/*    <img width={'100%'} src={blog} alt="Blog" />*/}
            {/*</div>*/}
            <div className="w-full bg-gray-200 py-5">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 ">
                        Our Blog
                    </h1>
                    {/*<p className="text-lg text-gray-600 leading-relaxed">*/}
                    {/*    Welcome to our blog — your go-to source for thoughtful articles, practical tips, and the latest trends.*/}
                    {/*    We share stories that inform, inspire, and help you grow, both personally and professionally.*/}
                    {/*</p>*/}
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-center gap-2 mb-8">
                    {/*<span className="text-4xl">📖</span>*/}
                    {/*<h2 className="text-4xl font-bold text-gray-900">Blogs</h2>*/}
                   {/* <span className="text-gray-500 text-xl">
                        ({loading ? 'Loading...' : `${blogPosts.length} posts`})
                    </span>*/}
                </div>

                {/* Blog Grid */}
                {loading ? (
                    <div className="text-center text-gray-500">Loading blogs...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                 <span className="flex items-center gap-1">
                     📅 {new Date(post.date).toLocaleDateString()}
                 </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <div
                                            className="text-gray-500 mb-4 line-clamp-3 text-sm"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                        ></div>

                                        <div className="flex items-center justify-end pt-3 border-t border-gray-100">
            <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
              →
            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                )}
            </main>
        </div>
    );
};

export default Blog;
