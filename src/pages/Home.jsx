import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../data/posts';
import { Calendar, User } from 'lucide-react';

const Home = () => {
  const handleImageError = (event) => {
    event.currentTarget.src = '/og-image.svg';
  };

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
                    <img src={post.coverImage} alt={post.title} loading="lazy" onError={handleImageError} />
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
    </div>
  );
};

export default Home;
