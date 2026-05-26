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

          <h2>콘텐츠 작성 기준</h2>
          <p>DevInsight의 글은 단순한 용어 설명에 그치지 않고, 실제 개발자가 의사결정할 때 확인해야 하는 장단점, 적용 조건, 점검 항목을 함께 정리하는 것을 원칙으로 합니다. 기술 변화가 빠른 주제는 공식 문서와 실무 적용 사례를 함께 확인하며, 오래된 정보나 오류가 발견되면 수정합니다.</p>

          <h2>운영 원칙</h2>
          <p>이 사이트는 독자가 광고보다 콘텐츠를 먼저 읽을 수 있도록 명확한 문서 구조와 쉬운 탐색을 지향합니다. 광고가 게재되더라도 본문과 구분되도록 배치하며, 클릭을 유도하거나 사용자를 혼동시키는 표현은 사용하지 않습니다.</p>

          <h2>운영 정보</h2>
          <p>DevInsight는 gamsgocode.co.kr 도메인에서 운영되는 기술 정보 사이트입니다. 2026년 5월 26일 사이트 구조와 콘텐츠 정책을 개편했으며, 이후 글의 최신성, 오류 여부, 공식 문서 변경 사항을 주기적으로 확인합니다.</p>
          <p>새 글을 작성할 때는 독자가 바로 활용할 수 있는 점검 항목, 적용 조건, 참고 링크를 포함하는 것을 기준으로 삼습니다. 오래된 정보가 확인되면 글 하단의 참고 자료와 함께 수정 내용을 반영합니다.</p>

          <h2>오류 제보와 수정 요청</h2>
          <p>기술 문서 특성상 프레임워크 버전, 브라우저 지원 현황, API 정책이 바뀔 수 있습니다. 잘못된 설명이나 깨진 링크를 발견하면 이메일로 알려주세요. 확인 후 필요한 경우 본문을 수정하고 업데이트 기준에 반영합니다.</p>

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
