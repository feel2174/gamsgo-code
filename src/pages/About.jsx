import { Helmet } from 'react-helmet-async';
import { Mail, Github, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>소개 | GamsGo Code</title>
        <meta name="description" content="GamsGo Code의 운영 목적, 콘텐츠 작성 기준, 공식 도메인과 문의 정보를 안내합니다." />
      </Helmet>
      
      <div className="page-container">
        <h1>GamsGo Code 소개</h1>
        <div className="content">
          <p>안녕하세요. GamsGo Code에 오신 것을 환영합니다.</p>
          <p>GamsGo Code는 한국어 프론트엔드 개발자가 실무에서 다시 찾아볼 수 있는 코드 자료와 문제 해결 노트를 정리하기 위해 운영되는 사이트입니다. 운영자는 김영주이며, 사이트 관련 문의는 devzucca@gmail.com으로 받고 있습니다.</p>
          
          <h2>우리의 미션</h2>
          <p>단편적인 용어 설명보다 실제 프로젝트에서 판단할 수 있는 기준을 제공하는 것이 목표입니다. React, TypeScript, JavaScript, CSS Layout, Web Performance, Accessibility, Git Workflow, Chrome DevTools처럼 프론트엔드 작업에 직접 연결되는 주제를 우선 다룹니다.</p>

          <h2>콘텐츠 작성 기준</h2>
          <p>GamsGo Code의 글은 단순한 용어 설명에 그치지 않고, 실제 개발자가 의사결정할 때 확인해야 하는 장단점, 적용 조건, 점검 항목을 함께 정리하는 것을 원칙으로 합니다. 기술 변화가 빠른 주제는 공식 문서와 실무 적용 사례를 함께 확인하며, 오래된 정보나 오류가 발견되면 수정합니다.</p>

          <h2>운영 원칙</h2>
          <p>이 사이트는 독자가 콘텐츠를 방해 없이 읽을 수 있도록 명확한 문서 구조와 쉬운 탐색을 지향합니다. 외부 위젯이나 안내 요소가 추가되더라도 본문과 명확히 구분되도록 배치하며, 사용자를 혼동시키는 표현은 사용하지 않습니다.</p>

          <h2>운영 정보</h2>
          <p>gamsgocode.co.kr는 프론트엔드 실무 코드와 개발 자료를 정리하는 GamsGo Code의 공식 도메인입니다. 도메인 이름은 개발 코드와 실무 개발 자료를 다루는 사이트라는 의미를 담고 있으며, 공개 브랜드명은 GamsGo Code로 통일해 사용합니다. 2026년 6월 3일 사이트 구조와 콘텐츠 정책을 프론트엔드 코드 자료실 중심으로 개편했으며, 이후 글의 최신성, 오류 여부, 공식 문서 변경 사항을 주기적으로 확인합니다.</p>
          <p>새 글을 작성할 때는 독자가 바로 활용할 수 있는 점검 항목, 적용 조건, 참고 링크를 포함하는 것을 기준으로 삼습니다. 오래된 정보가 확인되면 글 하단의 참고 자료와 함께 수정 내용을 반영합니다.</p>

          <h2>검토 방식</h2>
          <p>GamsGo Code의 글은 주제 선정, 초안 작성, 공식 문서 확인, 실무 적용 관점 보강, 최종 링크 점검 순서로 발행합니다. 특히 버전 변화가 빠른 React, TypeScript, 브라우저 성능 주제는 단정적인 표현을 피하고 적용 조건과 한계를 함께 적는 것을 원칙으로 합니다.</p>

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
