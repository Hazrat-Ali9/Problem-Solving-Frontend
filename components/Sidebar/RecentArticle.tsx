import { getBlogs } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RecentArticle = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const p = await getBlogs(5);
        setPosts(p);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-black">Recent Posts</h3>
      <div className="flex flex-col gap-y-2">
        {posts.map((post: PostType) => (
          <ReacentPostcard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentArticle;

const ReacentPostcard = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/${post.id}`}
        className="text-sm font-medium mb-1 text-black hover:text-blue-800"
      >
        {post.title}
      </Link>
      <time className="text-xs text-gray-600">
        {moment(post.date).format("MMM DD, YYYY HH:mm")}
      </time>
    </div>
  );
};
