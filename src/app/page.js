import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); //, { cache: 'no-store' }
  const posts = await res.json();

  return (
    <main className="page-container home-page">
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link href={`/posts/${post.id}`}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}