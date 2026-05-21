import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>문의하기 | DevInsight</title>
        <meta name="description" content="DevInsight 운영진에게 문의를 남겨주세요." />
      </Helmet>
      
      <div className="page-container">
        <h1>문의하기</h1>
        <div className="content">
          <p>블로그 콘텐츠에 대한 피드백, 비즈니스 제휴, 또는 오류 신고 등 어떠한 문의도 환영합니다.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>이름</label>
              <input type="text" placeholder="홍길동" required />
            </div>
            <div className="form-group">
              <label>이메일</label>
              <input type="email" placeholder="example@email.com" required />
            </div>
            <div className="form-group">
              <label>메시지</label>
              <textarea rows="5" placeholder="문의하실 내용을 입력해주세요." required></textarea>
            </div>
            <button type="submit" className="submit-btn">메시지 보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
