import { Helmet } from 'react-helmet-async';

const checklistGroups = [
  {
    title: '검색과 애드센스 준비',
    rows: [
      ['고유한 페이지 제목', '홈, 글, 소개, 자료실, 정책 페이지의 title이 서로 다릅니다.', '중복 title 없음'],
      ['canonical 주소', '실제 접속되는 www 주소와 sitemap 주소가 일치해야 합니다.', 'https://www.gamsgocode.co.kr 기준'],
      ['정책 페이지', '개인정보처리방침, 이용약관, 문의 페이지가 상시 접근 가능해야 합니다.', '푸터와 메뉴에서 접근 가능'],
      ['콘텐츠 독창성', '본문마다 체크리스트, 판단 기준, 실무 적용 예시가 포함되어야 합니다.', '단순 요약문보다 실제 활용성 우선'],
    ],
  },
  {
    title: '사용자 경험',
    rows: [
      ['첫 화면 가독성', '방문자가 사이트 주제와 주요 글 목록을 즉시 파악할 수 있어야 합니다.', '명확한 h1과 최신 글 카드'],
      ['모바일 탐색', '모바일 메뉴, 글 목록, 표 자료가 화면 밖으로 깨지지 않아야 합니다.', '가로 스크롤은 표 영역에만 제한'],
      ['광고 배치 기준', '광고가 본문 클릭을 방해하거나 콘텐츠처럼 보이면 안 됩니다.', '본문과 광고 구분 유지'],
      ['외부 링크', '공식 문서와 도구 링크는 새 탭으로 열고, 출처를 명확히 표시합니다.', 'target, rel 적용'],
    ],
  },
  {
    title: '기술 품질',
    rows: [
      ['정적 HTML', '중요 페이지와 글은 크롤러가 JavaScript 실행 전에도 내용을 볼 수 있어야 합니다.', 'prerender 결과 확인'],
      ['sitemap 갱신', '새 페이지를 추가하면 sitemap.xml에 함께 반영합니다.', 'resources, checklist 포함'],
      ['성능 점검', '이미지 lazy loading, 번들 크기, CLS/LCP 지표를 확인합니다.', 'PageSpeed Insights 활용'],
      ['접근성', '버튼 라벨, heading 순서, 키보드 포커스, 색 대비를 점검합니다.', 'Lighthouse Accessibility'],
    ],
  },
];

const Checklist = () => {
  return (
    <div className="page-wrapper checklist-page">
      <Helmet>
        <title>배포 전 품질 체크리스트 | DevInsight</title>
        <meta name="description" content="DevInsight가 사용하는 검색 노출, 애드센스 준비, 사용자 경험, 기술 품질 배포 전 체크리스트입니다." />
      </Helmet>

      <div className="page-container wide-page-container">
        <h1>배포 전 품질 체크리스트</h1>
        <div className="content">
          <p>이 체크리스트는 DevInsight의 글과 페이지를 배포하기 전에 확인하는 기준입니다. 검색 노출, 애드센스 심사, 사용자의 실제 탐색 경험을 함께 고려해 정리했습니다.</p>

          {checklistGroups.map((group) => (
            <section className="resource-section" key={group.title}>
              <h2>{group.title}</h2>
              <div className="table-scroll">
                <table className="info-table checklist-table">
                  <thead>
                    <tr>
                      <th>점검 항목</th>
                      <th>확인 내용</th>
                      <th>권장 기준</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map(([item, detail, standard]) => (
                      <tr key={item}>
                        <td>{item}</td>
                        <td>{detail}</td>
                        <td>{standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <h2>업데이트 기준</h2>
          <p>새로운 글을 추가하거나 정책, 도구, 공식 문서가 바뀌면 이 체크리스트도 함께 갱신합니다. 오류 제보는 <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a>으로 받을 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
