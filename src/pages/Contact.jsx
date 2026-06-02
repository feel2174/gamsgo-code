import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const contactEmail = 'devzucca@gmail.com';

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>문의하기 | DevInsight</title>
        <meta name="description" content="DevInsight 운영자에게 콘텐츠 오류 신고, 제휴 문의, 개인정보 관련 요청을 보낼 수 있는 연락처 안내 페이지입니다." />
      </Helmet>
      
      <div className="page-container">
        <h1>문의하기</h1>
        <div className="content">
          <p>DevInsight는 기술 콘텐츠의 정확성과 독자 경험을 중요하게 생각합니다. 글의 오류 신고, 보완 의견, 제휴 문의, 개인정보 관련 요청은 아래 이메일로 보내주세요.</p>
          <div className="contact-card">
            <h2>운영자 연락처</h2>
            <p><strong>운영자:</strong> 김영주</p>
            <p><strong>이메일:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <a className="submit-btn contact-mail-link" href={`mailto:${contactEmail}?subject=DevInsight%20문의`}>이메일 보내기</a>
          </div>
          <p>문의에는 오류가 있는 글 주소, 보완이 필요한 문장, 참고할 공식 문서 링크를 함께 보내주시면 더 빠르게 확인할 수 있습니다. 광고, 스팸, 자동화된 홍보성 메시지는 답변하지 않을 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
