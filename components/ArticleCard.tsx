/* eslint-disable @typescript-eslint/no-explicit-any */
import { categorys } from "@/lib/categorys";
import { PostType } from "@/lib/posts";
import moment from "moment";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ post }: { post: PostType }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-sm text-gray-500 mb-2">
        {moment(post.date).format("MMM DD, YYYY")} •{" "}
        <Link
          href={
            categorys.find((category) => category.name === post.category)
              ?.slug as any
          }
        >
          {post.category}
        </Link>
      </div>
      <h3 className="text-xl font-semibold mb-2 hover:text-blue-800 text-gray-700">
        <Link href={`/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link
        href={`/${post.id}`}
        className="text-blue-700 hover:text-blue-900 font-medium"
      >
        Read more →
      </Link>
    </article>
  );
};

export default ArticleCard;