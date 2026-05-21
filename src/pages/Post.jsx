import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../data/posts';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Post = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Schema Markup for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      post.coverImage
    ],
    "datePublished": post.date,
    "author": [{
        "@type": "Person",
        "name": post.author,
      }]
  };

  return (
    <div className="post-page">
      <Helmet>
        <title>{post.title} | DevInsight</title>
        <meta name="description" content={post.excerpt} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.coverImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="post-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(15, 17, 21, 1)), url(${post.coverImage})` }}>
        <div className="post-header-container">
          <Link to="/" className="back-link"><ArrowLeft size={18} /> 목록으로 돌아가기</Link>
          <span className="category-badge">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
            <span className="meta-item"><User size={16} /> {post.author}</span>
          </div>
        </div>
      </div>

      <div className="post-body-container post-content-container">
        <article 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="sidebar">
          <div className="sidebar-widget">
            <h3>관련 아티클</h3>
            <ul className="related-posts">
              {posts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                <li key={p.id}>
                  <Link to={`/post/${p.slug}`}>
                    <img src={p.coverImage} alt="" />
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .post-page {
          background: #0f1115;
          min-height: 100vh;
        }
        .post-header {
          padding: 120px 0 60px;
          background-size: cover;
          background-position: center;
          text-align: center;
        }
        .post-header-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .post-body-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .back-link:hover {
          color: #fff;
        }
        .category-badge {
          display: block;
          width: fit-content;
          margin: 0 auto 1.5rem;
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .post-header h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.3;
          color: #fff;
          margin-bottom: 1.5rem;
          word-break: keep-all;
        }
        .post-meta {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .post-content-container {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 4rem;
          padding: 4rem 1.5rem 8rem;
        }
        @media (max-width: 968px) {
          .post-content-container {
            grid-template-columns: 1fr;
          }
        }
        
        .post-content {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.15rem;
          line-height: 1.8;
          word-break: keep-all;
        }
        .post-content :global(h2) {
          font-size: 2rem;
          color: #fff;
          margin: 3rem 0 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.5rem;
        }
        .post-content :global(h3) {
          font-size: 1.5rem;
          color: #e2e8f0;
          margin: 2rem 0 1rem;
        }
        .post-content :global(p) {
          margin-bottom: 1.5rem;
        }
        .post-content :global(ul), .post-content :global(ol) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .post-content :global(li) {
          margin-bottom: 0.5rem;
        }
        .post-content :global(code) {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          color: #f87171;
          font-family: monospace;
          font-size: 0.9em;
        }
        .post-content :global(strong) {
          color: #fff;
        }

        .sidebar-widget {
          position: sticky;
          top: 100px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
        }
        .sidebar-widget h3 {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1.5rem;
          border-left: 3px solid #3b82f6;
          padding-left: 0.8rem;
        }
        .related-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .related-posts li {
          margin-bottom: 1rem;
        }
        .related-posts li:last-child {
          margin-bottom: 0;
        }
        .related-posts a {
          display: flex;
          gap: 1rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease;
        }
        .related-posts a:hover {
          color: #3b82f6;
        }
        .related-posts img {
          width: 80px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }
        .related-posts span {
          font-size: 0.95rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Post;
