import React from "react";

export async function generateMetadata({ params }) {
	const { id } = params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();
	
	return {
		title: post.title,
		description: post.body.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.substring(0, 160),
      // url: `https://yourdomain.com/posts/${id}`,
      // images: [
      //   { url: 'https://via.placeholder.com/600x400', alt: 'Post Image' },
      // ],
    },
	};
}

export default async function PostDetailPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="page-container post-page">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

