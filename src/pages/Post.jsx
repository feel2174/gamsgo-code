import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../data/posts';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Post = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const handleImageError = (event) => {
    event.currentTarget.src = '/og-image.svg';
  };

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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.gamsgocode.co.kr/post/${post.slug}`
    },
    "headline": post.title,
    "image": [
      post.coverImage
    ],
    "datePublished": post.date,
    "dateModified": post.updated ?? post.date,
    "publisher": {
      "@type": "Organization",
      "name": "GamsGo Code",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.gamsgocode.co.kr/apple-touch-icon.png"
      }
    },
    "author": [{
        "@type": "Person",
        "name": post.author,
      }]
  };

  return (
    <div className="post-page">
      <Helmet>
        <title>{post.title} | GamsGo Code</title>
        <meta name="description" content={post.excerpt} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:url" content={`https://www.gamsgocode.co.kr/post/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.updated ?? post.date} />
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
            <span className="meta-item">업데이트 {post.updated ?? post.date}</span>
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
                    <img src={p.coverImage} alt="" onError={handleImageError} />
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
