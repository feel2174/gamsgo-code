import { Helmet } from 'react-helmet-async';
import { Mail, Github, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>소개 | DevInsight</title>
        <meta name="description" content="DevInsight 블로그와 운영자에 대한 소개 페이지입니다." />
      </Helmet>
      
      <div className="page-container">
        <h1>DevInsight 소개</h1>
        <div className="content">
          <p>안녕하세요. DevInsight에 오신 것을 환영합니다.</p>
          <p>이 블로그는 2026년 급변하는 IT 트렌드 속에서 프론트엔드 개발자, 기획자, 그리고 AI 기술에 관심 있는 모든 분들을 위해 양질의 기술 문서와 튜토리얼을 제공하기 위해 설립되었습니다.</p>
          
          <h2>우리의 미션</h2>
          <p>단편적인 지식이 아닌, 실무에서 즉시 활용할 수 있는 깊이 있는 정보(Insight)를 제공하는 것이 목표입니다. React, TypeScript, 최신 성능 최적화 기법부터 ChatGPT API를 활용한 업무 자동화까지 다양한 주제를 다룹니다.</p>

          <h2>연락처</h2>
          <ul className="contact-list">
            <li><Mail size={18}/> devzucca@gmail.com</li>
            <li><Github size={18}/> github.com/feel2174</li>
            <li><Twitter size={18}/> feel2174</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
