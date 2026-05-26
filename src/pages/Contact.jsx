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
          <p><strong>운영자 이메일:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <p>문의 시 이름, 회신받을 이메일 주소, 문의 내용을 보내주시면 확인 후 가능한 범위에서 답변드립니다. 광고, 스팸, 자동화된 홍보성 메시지는 답변하지 않을 수 있습니다.</p>

          <form className="contact-form" action={`mailto:${contactEmail}`} method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="contact-name">이름</label>
              <input id="contact-name" name="name" type="text" placeholder="홍길동" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">이메일</label>
              <input id="contact-email" name="email" type="email" placeholder="example@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">메시지</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="문의하실 내용을 입력해주세요." required></textarea>
            </div>
            <button type="submit" className="submit-btn">이메일로 보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
