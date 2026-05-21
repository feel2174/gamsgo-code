import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../data/posts';
import { Calendar, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>DevInsight | 2026 웹 프론트엔드 & AI 기술 블로그</title>
        <meta name="description" content="최신 웹 프론트엔드 개발 트렌드와 AI 활용 노하우를 깊이 있게 다룹니다. React 19, ChatGPT API 등 고품질 튜토리얼을 만나보세요." />
      </Helmet>

      <section className="hero">
        <div className="home-container">
          <h1>최신 기술 트렌드를<br/><span>가장 깊이 있게</span> 탐구합니다</h1>
          <p>DevInsight는 웹 프론트엔드, AI, 생산성 도구에 대한 실무 중심의 전문적인 아티클을 제공합니다.</p>
        </div>
      </section>

      <section className="post-list-section">
        <div className="home-container">
          <div className="section-header">
            <h2>최신 아티클</h2>
          </div>
          <div className="post-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <Link to={`/post/${post.slug}`} className="card-image-link">
                  <div className="image-wrapper">
                    <img src={post.coverImage} alt={post.title} loading="lazy" />
                  </div>
                </Link>
                <div className="card-content">
                  <span className="category-badge">{post.category}</span>
                  <h3>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="meta">
                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                    <span className="meta-item"><User size={14} /> {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding-top: 80px;
          min-height: 100vh;
        }
        .hero {
          padding: 6rem 0;
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
          text-align: center;
        }
        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        h1 span {
          color: #3b82f6;
        }
        .hero p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
        }
        .post-list-section {
          padding: 4rem 0 8rem;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h2 {
          font-size: 2rem;
          color: #fff;
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
        }
        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .post-card {
          background: #1e222b;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
          border-color: rgba(59, 130, 246, 0.3);
        }
        .image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .post-card:hover .image-wrapper img {
          transform: scale(1.05);
        }
        .card-content {
          padding: 1.5rem;
        }
        .category-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .post-card h3 {
          font-size: 1.3rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }
        .post-card h3 a {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .post-card h3 a:hover {
          color: #3b82f6;
        }
        .excerpt {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-content .meta {
          display: flex;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.85rem;
        }
        .card-content .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
