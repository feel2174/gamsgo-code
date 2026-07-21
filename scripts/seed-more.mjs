import pg from "pg";

const NATURE_WORDS = [
  "구름", "노을", "이슬", "바람", "햇살", "달빛", "별빛", "파도",
  "눈꽃", "단풍", "새벽", "무지개", "소나기", "물안개", "봄비", "첫눈",
];
const PRODUCE_WORDS = [
  "딸기", "당근", "감자", "토마토", "무화과", "자몽", "브로콜리", "옥수수",
  "수박", "참외", "가지", "오이", "포도", "배추", "고구마", "망고",
];

function nickname() {
  const n = NATURE_WORDS[Math.floor(Math.random() * NATURE_WORDS.length)];
  const p = PRODUCE_WORDS[Math.floor(Math.random() * PRODUCE_WORDS.length)];
  return `${n}${p}`;
}

const posts = [
  {
    serviceCategory: "Apple Music",
    postType: "후기",
    rating: 4,
    title: "애플뮤직 겜스고로 갈아탄 지 두 달, 만족도 상당히 높아요",
    content:
      "무손실 음질이라는 게 확실히 체감돼서 좋았고, 정가 대비 절반도 안 되는 가격이라 부담이 없어요. 아이폰 사용자라면 연동도 매끄러워서 추천합니다.",
    hoursAgo: 100,
    comments: ["저도 애플 생태계라 넘어가야겠네요"],
  },
  {
    serviceCategory: "노션 (Notion)",
    postType: "정보",
    rating: 4.5,
    title: "노션 팀플랜 겜스고로 쓰는 방법 정리",
    content:
      "개인 플랜만 되는 줄 알았는데 팀플랜도 할인 적용되더라고요. 협업할 때 파일 업로드 제한 없어지는 게 제일 체감 큽니다.",
    hoursAgo: 110,
    comments: [],
  },
  {
    serviceCategory: "PlayStation Plus",
    postType: "후기",
    rating: 5,
    title: "PS플러스 겜스고 3개월 이용 후기, 문제 없었어요",
    content:
      "매달 무료 게임 받는 재미로 가입했는데 겜스고로 하니까 훨씬 저렴하네요. 온라인 멀티도 끊김 없이 잘 됩니다.",
    hoursAgo: 120,
    comments: ["저도 이번 달에 가입했는데 좋네요"],
  },
  {
    serviceCategory: "피그마 (Figma)",
    postType: "정보",
    rating: 4,
    title: "프리랜서 디자이너인데 피그마 겜스고 써도 될까요?",
    content:
      "클라이언트 파일 공유할 일이 많아서 프로 플랜이 필수인데 정가가 부담스러워서 알아보는 중입니다. 써보신 분 안정성 어떤가요?",
    hoursAgo: 130,
    comments: [],
  },
  {
    serviceCategory: "디즈니플러스",
    postType: "정보",
    rating: 4,
    title: "디즈니플러스 4K 지원 되는지 궁금해서 남깁니다",
    content:
      "겜스고 계정으로도 4K, 돌비 애트모스 다 정상적으로 나와요. 티비로 볼 때 화질 차이 크게 못 느꼈습니다.",
    hoursAgo: 140,
    comments: [],
  },
  {
    serviceCategory: "기타 AI/OTT",
    postType: "정보",
    rating: 4.5,
    title: "구독 여러 개 겜스고로 통합하고 나서 가계부가 편해졌어요",
    content:
      "넷플릭스, 유튜브, 노션 다 겜스고로 정리하니까 결제일도 한눈에 보이고 관리가 훨씬 편해졌습니다. 처음엔 반신반의했는데 지금은 만족스러워요.",
    hoursAgo: 150,
    comments: ["저도 이번 기회에 정리해봐야겠어요"],
  },
];

const connectionString = process.env.POSTGRES_URL_NON_POOLING;
const url = new URL(connectionString);
const client = new pg.Client({
  host: url.hostname,
  port: Number(url.port),
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.replace(/^\//, ""),
  ssl: { rejectUnauthorized: false },
});

await client.connect();

for (const post of posts) {
  const createdAt = new Date(Date.now() - 1000 * 60 * 60 * post.hoursAgo);
  const { rows } = await client.query(
    `insert into posts (service_category, post_type, rating, nickname, title, content, hearts, created_at)
     values ($1,$2,$3,$4,$5,$6,$7,$8) returning id`,
    [
      post.serviceCategory,
      post.postType,
      post.rating,
      nickname(),
      post.title,
      post.content,
      Math.floor(Math.random() * 10) + 2,
      createdAt.toISOString(),
    ]
  );
  const postId = rows[0].id;
  for (const commentContent of post.comments) {
    await client.query(
      `insert into comments (post_id, nickname, content, hearts, created_at)
       values ($1,$2,$3,$4,$5)`,
      [
        postId,
        nickname(),
        commentContent,
        Math.floor(Math.random() * 3) + 1,
        new Date(createdAt.getTime() + 1000 * 60 * 60 * 2).toISOString(),
      ]
    );
  }
}

console.log(`Seeded ${posts.length} additional posts.`);
await client.end();
