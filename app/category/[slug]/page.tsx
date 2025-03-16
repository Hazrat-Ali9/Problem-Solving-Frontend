import React from "react";
import BreadCrumb from "../_UI/BreadCrumb";
import ArticleCard from "@/components/ArticleCard";
import { PostType, recentPosts } from "@/lib/posts";
import { Category, categorys } from "@/lib/categorys";
import { getAllByCategory } from "@/lib/firebase/blogs";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const category: Category = categorys.find(
    (category) => category.path === params.slug
  ) as Category;
  const title = `${category.name} - Hazrat Ali Problem Solving Website`;
  const desc = `Read All ${category.name} articles in Hazrat Ali Problem Solving Website.`;
  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      images: [
        {
          url: category.image, // Ensure this file exists in the `public/` folder
          width: 100,
          height: 100,
          alt: category.name,
        },
      ],
    },
  };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const category: Category = categorys.find(
    (category) => category.path === params.slug
  ) as Category;
  if (!category) {
    return <h1>Category not found</h1>;
  }
  const blogs: PostType[] = await getAllByCategory(category?.name);
  return (
    <div>
      <BreadCrumb category={category} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10 lg:p-0 p-4">
        <div className="space-y-6 lg:col-span-2">
          {blogs.length === 0 && (
            <div className="text-center text-2xl font-bold text-gray-600 mt-10">
              No article found in this category{" "}
              <Link className="text-blue-600" href="/articles">
                Read All →
              </Link>
            </div>
          )}
          {blogs.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
