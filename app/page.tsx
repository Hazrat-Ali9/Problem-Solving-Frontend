import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import { Button } from "antd";
import ArticleCard from "@/components/ArticleCard";
import { getBlogs } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";
import SearchBar from "@/components/SearchBar";
// page Tsx
async function App() {
  const blogs: PostType[] = await getBlogs(6);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Hazrat Ali, <br /> Problem Solving
            </h1>
            <p className="text-base text-gray-300 max-w-4xl mx-auto text-center">
              Welcome to Hazrat Ali, Problem Solving Website “At Hazrat Ali, we
              provide a platform for aspiring problem solvers and developers to
              sharpen their coding and algorithmic skills. Whether you’re a
              beginner or an advanced coder, our wide range of challenges and
              resources will help you grow. From mastering data structures and
              algorithms to participating in competitive coding contests, we
              offer tools and a community that supports your journey in
              programming. Explore our curated problems, get involved in
              discussions, and start Solving problems that will elevate your
              coding expertise. Join us today and start your problem-Solving
              adventure!”
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Recent Articles
            </h2>
            <div className="space-y-8">
              {blogs.map((post, index) => (
                <ArticleCard key={index} post={post} />
              ))}
            </div>
            <div className="mt-10">
              {/* <Pagination current={2} pageSize={10} total={50} /> */}
              <Link href="/articles">
                <Button type="primary" size="large">
                  Read More Articles →
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
