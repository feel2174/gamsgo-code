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
        <title>GamsGo Code | 프론트엔드 실무 코드 자료실</title>
        <meta name="description" content="React, TypeScript, JavaScript, CSS, 웹 성능과 접근성 문제를 코드 예시와 체크리스트로 정리하는 프론트엔드 개발 자료실입니다." />
      </Helmet>

      <section className="hero">
        <div className="home-container">
          <h1>프론트엔드 실무 코드를<br/><span>문제 해결 중심으로</span> 정리합니다</h1>
          <p>GamsGo Code는 React, TypeScript, JavaScript, CSS, 성능과 접근성을 실제 코드와 체크리스트로 정리하는 개발 자료실입니다.</p>
        </div>
      </section>

      <section className="home-focus-section">
        <div className="home-container">
          <div className="home-focus-grid">
            <article className="home-focus-card">
              <h2>실무 코드 가이드</h2>
              <p>새 문법 소개보다 실제 프로젝트에서 어디에 적용하고 무엇을 조심해야 하는지 기준을 먼저 정리합니다.</p>
            </article>
            <article className="home-focus-card">
              <h2>문제 해결 노트</h2>
              <p>느린 화면, 복잡한 상태, 깨지는 레이아웃처럼 자주 만나는 문제를 재현 순서와 수정 코드로 설명합니다.</p>
            </article>
            <article className="home-focus-card">
              <h2>개발 자료실</h2>
              <p>React, TypeScript, CSS, 접근성, 성능 점검에 바로 쓰는 공식 문서와 도구 링크를 모아둡니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="post-list-section">
        <div className="home-container">
          <div className="section-header">
            <h2>실무 코드 가이드</h2>
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
