import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@components/Blog/Post";

interface GetPostsFrontmatter {
  title: string;
  pubDate: string;
  description: string;
}

interface GetPostsPost {
  filename: string;
  frontmatter: GetPostsFrontmatter;
}

const getPosts = (): GetPostsPost[] => {
  const postsDir = path.join(process.cwd(), "src", "pages", "posts");
  const postFiles = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"));
  return postFiles.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      filename: file,
      frontmatter: data as GetPostsFrontmatter,
    };
  });
};

const Posts: React.FC = () => {
  const posts = getPosts();

  return (
    <ul>
      {posts.map(({ frontmatter, filename }) => (
        <li className="mt-5">
          <a href={`/posts/${filename.replace(".mdx", "")}`}>
            <Post {...frontmatter} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
