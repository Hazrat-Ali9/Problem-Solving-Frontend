import React from "react";
import { CommentSection } from "./_UI/CommentSection";
import { ArticleHeader } from "./_UI/ArticleHeader";
import { getSingleBlog } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";

export const generateMetadata = async ({
  params,
}: {
  params: { pid: string };
}) => {
  const post: PostType = await getSingleBlog(params.pid);
  if (!post) {
    return {
      title: "Page not found",
      description: "Page not found",
      openGraph: {
        title: "Page not found",
        description: "Page not found",
      },
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
};

async function SingleArticle({ params }: { params: { pid: string } }) {
  const post: PostType = await getSingleBlog(params.pid);
  if (!post) {
    return (
      <h1 className="text-center text-2xl font-bold text-gray-600 mt-10">
        Page not found
      </h1>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-8 overflow-hidden">
          <ArticleHeader
            title={post.title}
            author={{ name: post.user, avatar: "" }}
            user={post.user}
            date={post.date}
            readingTime={"5"}
            category={post.category}
            tags={[]}
          />

          <div
            className="prose prose-lg max-w-none text-gray-700 mt-8 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <CommentSection post={post} />
        </article>
      </main>
    </div>
  );
}

export default SingleArticle;
