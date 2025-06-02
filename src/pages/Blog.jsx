import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, User, TrendingUp } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications with React",
      excerpt: "Learn how to build scalable and maintainable web applications using React and modern best practices. Discover component architecture, state management, and performance optimization techniques.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "React",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Understanding TypeScript: A Comprehensive Guide",
      excerpt: "Deep dive into TypeScript features and how to use them effectively in your projects. Master type definitions, interfaces, and advanced TypeScript patterns.",
      date: "2024-03-10",
      readTime: "10 min read",
      category: "TypeScript",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Modern CSS Techniques for Better Web Design",
      excerpt: "Explore modern CSS features and techniques for creating beautiful web interfaces. Learn about CSS Grid, Flexbox, custom properties, and responsive design patterns.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "My Journey in Full-Stack Development",
      excerpt: "Sharing my experience learning full-stack development, from my first lines of code to winning hackathons. Tips for aspiring developers and lessons learned.",
      date: "2024-02-28",
      readTime: "12 min read",
      category: "Career",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Mastering Node.js for Backend Development",
      excerpt: "Complete guide to Node.js development covering Express.js, middleware, authentication, and building RESTful APIs for modern web applications.",
      date: "2024-02-20",
      readTime: "9 min read",
      category: "Node.js",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Database Design Best Practices",
      excerpt: "Learn essential database design principles, normalization techniques, and optimization strategies for building efficient data storage solutions.",
      date: "2024-02-15",
      readTime: "7 min read",
      category: "Database",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const categoryColors = {
    "React": "bg-blue-100 text-blue-700 border-blue-200",
    "TypeScript": "bg-purple-100 text-purple-700 border-purple-200",
    "CSS": "bg-green-100 text-green-700 border-green-200",
    "Career": "bg-orange-100 text-orange-700 border-orange-200",
    "Node.js": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Database": "bg-indigo-100 text-indigo-700 border-indigo-200"
  };

  const stats = [
    { icon: <BookOpen size={18} />, value: "6", label: "Articles", color: "text-blue-600" },
    { icon: <Tag size={18} />, value: "6", label: "Categories", color: "text-emerald-600" },
    { icon: <Clock size={18} />, value: "50", label: "Min Read", color: "text-purple-600" },
    { icon: <TrendingUp size={18} />, value: "1.2K", label: "Views", color: "text-orange-600" }
  ];

  const categories = [
    { name: "React", count: 1, color: "text-blue-600" },
    { name: "TypeScript", count: 1, color: "text-purple-600" },
    { name: "CSS", count: 1, color: "text-green-600" },
    { name: "Career", count: 1, color: "text-orange-600" },
    { name: "Node.js", count: 1, color: "text-emerald-600" },
    { name: "Database", count: 1, color: "text-indigo-600" }
  ];

  const recentPosts = posts.slice(0, 3);

  return (
    // <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header */}
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
    //         Blog & Articles
    //       </h1>
    //       <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
    //         Sharing my thoughts, experiences, and learnings in web development, technology, and career growth.
    //       </p>


    //     </div>

    //     {/* Main Content Grid */}
    //     <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

    //       {/* Blog Posts - Main Content */}
    //       <div className="lg:col-span-3 space-y-8">
    //         {posts.map((post, index) => (
    //           <article 
    //             key={index}
    //             className="bg-white/80 rounded-xl overflow-hidden backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-md group"
    //           >
    //             <div className="md:flex">
    //               <div className="md:w-2/5">
    //                 <div className="relative overflow-hidden">
    //                   <img 
    //                     src={post.image}
    //                     alt={post.title}
    //                     className="h-48 w-full object-cover md:h-full transition-transform duration-300 group-hover:scale-105"
    //                   />
    //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //                 </div>
    //               </div>
    //               <div className="p-6 md:w-3/5">
    //                 <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
    //                   <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
    //                     {post.category}
    //                   </span>
    //                   <div className="flex items-center gap-1">
    //                     <Calendar size={14} className="text-blue-600" />
    //                     <span>{new Date(post.date).toLocaleDateString('en-US', { 
    //                       year: 'numeric', 
    //                       month: 'long', 
    //                       day: 'numeric' 
    //                     })}</span>
    //                   </div>
    //                   <div className="flex items-center gap-1">
    //                     <Clock size={14} className="text-emerald-600" />
    //                     <span>{post.readTime}</span>
    //                   </div>
    //                 </div>

    //                 <h2 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
    //                   {post.title}
    //                 </h2>
    //                 <p className="text-slate-700 mb-4 leading-relaxed">{post.excerpt}</p>

    //                 <a 
    //                   href="#"
    //                   className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium group/link"
    //                 >
    //                   Read More
    //                   <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
    //                 </a>
    //               </div>
    //             </div>
    //           </article>
    //         ))}
    //       </div>

    //       {/* Sidebar */}
    //       <div className="lg:col-span-1 space-y-6">

    //         {/* About Author */}
    //         <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-orange-200 shadow-sm">
    //           <div className="flex items-center gap-3 mb-4">
    //             <User className="text-orange-600" size={20} />
    //             <h3 className="text-lg font-semibold text-slate-800">About Author</h3>
    //           </div>
    //           <div className="text-center">
    //             <img 
    //               src="/api/placeholder/80/80" 
    //               alt="Nityanshu Ranawat" 
    //               className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-orange-200"
    //             />
    //             <h4 className="font-semibold text-slate-800 mb-2">Nityanshu Ranawat</h4>
    //             <p className="text-slate-600 text-sm mb-3">
    //               Computer Science student passionate about full-stack development and sharing knowledge.
    //             </p>
    //             <div className="flex justify-center gap-2">
    //               <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">React</span>
    //               <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs">Node.js</span>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Categories */}
    //         <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-orange-200 shadow-sm">
    //           <div className="flex items-center gap-2 mb-4">
    //             <Tag className="text-purple-600" size={20} />
    //             <h3 className="text-lg font-semibold text-slate-800">Categories</h3>
    //           </div>
    //           <div className="space-y-2">
    //             {categories.map((category, index) => (
    //               <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
    //                 <span className={`font-medium ${category.color}`}>{category.name}</span>
    //                 <span className="text-slate-500 text-sm">({category.count})</span>
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         {/* Recent Posts */}
    //         <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-orange-200 shadow-sm">
    //           <div className="flex items-center gap-2 mb-4">
    //             <BookOpen className="text-emerald-600" size={20} />
    //             <h3 className="text-lg font-semibold text-slate-800">Recent Posts</h3>
    //           </div>
    //           <div className="space-y-4">
    //             {recentPosts.map((post, index) => (
    //               <div key={index} className="flex gap-3 group cursor-pointer">
    //                 <img 
    //                   src={post.image} 
    //                   alt={post.title}
    //                   className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
    //                 />
    //                 <div>
    //                   <h4 className="font-medium text-slate-800 text-sm group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
    //                     {post.title}
    //                   </h4>
    //                   <p className="text-slate-500 text-xs mt-1">{post.date}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         {/* Newsletter */}
    //         <div className="bg-gradient-to-br from-orange-100 to-rose-100 p-6 rounded-xl border border-orange-200 shadow-sm">
    //           <h3 className="text-lg font-semibold text-slate-800 mb-3">Newsletter</h3>
    //           <p className="text-slate-700 text-sm mb-4">
    //             Get the latest articles delivered to your inbox.
    //           </p>
    //           <div className="space-y-3">
    //             <input
    //               type="email"
    //               placeholder="Your email"
    //               className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 text-sm"
    //             />
    //             <button className="w-full bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">Coming Soon</h1>
        <p className="text-xl text-slate-700">This Page is under development. We'll be back shortly!</p>
      </div>
    </div>

  );
};

export default Blog;
