import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>개인정보처리방침 | DevInsight</title>
      </Helmet>
      
      <div className="page-container">
        <h1>개인정보처리방침</h1>
        <div className="content">
          <p><strong>시행일자: 2026년 5월 21일</strong></p>
          <p>DevInsight("본 사이트")는 이용자의 개인정보 보호를 매우 중요하게 생각하며, 관련 법령을 준수하고 있습니다.</p>
          
          <h2>1. 수집하는 개인정보 항목</h2>
          <p>본 사이트는 회원가입 절차가 없으며, 원칙적으로 사용자를 식별할 수 있는 민감한 개인정보를 수집하지 않습니다. 다만, 서비스 개선 및 구글 애드센스 등 맞춤형 광고 제공을 위해 쿠키(Cookie)와 방문 기록 등의 정보가 자동으로 수집될 수 있습니다.</p>

          <h2>2. 쿠키(Cookie)의 운용</h2>
          <p>본 사이트는 구글(Google)과 같은 제3자 업체가 제공하는 광고를 게재할 수 있습니다. 구글 등 광고 업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다.</p>
          <ul>
            <li>사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
            <li>구글 광고 설정 페이지를 방문하여 맞춤설정 광고에 사용되는 쿠키를 거부할 수 있습니다.</li>
          </ul>

          <h2>3. 웹 분석 도구의 사용</h2>
          <p>트래픽 분석을 위해 구글 애널리틱스(Google Analytics)를 사용하고 있습니다. 이를 통해 비식별화된 통계 데이터가 수집됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
