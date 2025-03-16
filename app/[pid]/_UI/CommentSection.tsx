"use client";
import React, { useEffect, useState } from "react";
import { ThumbsUp, Reply } from "lucide-react";
import { Avatar } from "antd";
import { PostType } from "@/lib/posts";
import { getCommentByPostId, getComments } from "@/lib/firebase/comment";
import CommentForm from "./CommentForm";
import CommentComponent from "./CommentCard";

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

export type CommentType = {
  id: string;
  pid: string;
  user: string;
  email: string;
  content: string;
  timestamp: string;
  likes: string[];
  createdAt: Date;
  repliedTo?: string;
  replies: CommentType[];
};
export function CommentSection({ post }: { post: PostType }) {
  const [sortBy, setSortBy] = useState("newest");
  const [comments, setComments] = useState<CommentType[]>([]);
  const [reloadComments, setReloadComments] = useState<any>(null);
  // const comments: Comment[] = [
  //   {
  //     id: "1",
  //     user: {
  //       name: "John Doe",
  //       avatar:
  //         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  //     },
  //     content: "This is a fantastic article! Really enjoyed reading it.",
  //     timestamp: "2 hours ago",
  //     likes: 12,
  //     replies: [
  //       {
  //         id: "2",
  //         user: {
  //           name: "Jane Smith",
  //           avatar:
  //             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
  //         },
  //         content: "Completely agree with your points!",
  //         timestamp: "1 hour ago",
  //         likes: 5,
  //         replies: [],
  //       },
  //       {
  //         id: "3",
  //         user: {
  //           name: "Jane Smith",
  //           avatar:
  //             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
  //         },
  //         content: "Completely agree with your points!",
  //         timestamp: "1 hour ago",
  //         likes: 5,
  //         replies: [],
  //       },
  //     ],
  //   },
  // ];
  useEffect(() => {
    (async () => {
      try {
        const comments = await getCommentByPostId(post.id);
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [post, reloadComments]);
  const sortedComments = comments.sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    } else if (sortBy === "popular") {
      return b.likes.length - a.likes.length;
    }
    return 0;
  })
  return (
    <section className="mt-12 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded-lg text-gray-800"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      <CommentForm
        post={post}
        reloadComments={() => setReloadComments(Date.now())}
      />

      <div className="space-y-6">
        {sortedComments.map((comment, index) => (
          <CommentComponent
            mainComment={comment}
            key={index}
            comment={comment}
            depth={0}
            post={post}
            reloadComments={() => setReloadComments(Date.now())}
          />
        ))}
      </div>
    </section>
  );
}
