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
    serviceCategory: "유튜브 프리미엄",
    postType: "후기",
    rating: 5,
    title: "겜스고 유튜브 프리미엄 3개월째 이용 후기",
    content:
      "가족 요금제 나눠쓰다가 겜스고로 갈아탔는데 광고 없는 건 똑같고 가격만 확 줄었어요. 초대 수락하고 5분도 안 걸려서 바로 적용됐습니다. 다만 계정 정책 바뀔 수도 있다는 건 감안하고 쓰는 중이에요. 화질도 전혀 차이 없고 유튜브 뮤직도 그대로 써서 만족스럽습니다. 재구독 의사 100%예요.",
    hoursAgo: 5,
    comments: ["저도 어제 신청했는데 진짜 빠르게 왔어요 ㅎㅎ"],
  },
  {
    serviceCategory: "챗GPT Plus",
    postType: "정보",
    rating: 4,
    title: "노션 플러스 vs 겜스고 챗gpt 같이 써보니",
    content:
      "업무는 노션, 글쓰기는 챗지피티로 나눠 쓰는데 둘 다 정가로 내면 한 달에 부담이 꽤 크더라고요. 챗gpt만 겜스고로 돌려도 체감이 확 다릅니다.",
    hoursAgo: 20,
    comments: [],
  },
  {
    serviceCategory: "기타 AI/OTT",
    postType: "정보",
    rating: 4,
    title: "다들 구독료로 한 달에 얼마 쓰세요?",
    content:
      "넷플릭스, 유튜브, 챗gpt 다 더하니까 예전엔 5만원 넘게 나갔는데 요즘은 절반도 안 써요. 다들 어떻게 관리하시는지 궁금합니다.",
    hoursAgo: 30,
    comments: ["저는 안 쓰는 구독부터 다 정리했어요. 그게 제일 크더라고요"],
  },
  {
    serviceCategory: "넷플릭스 프리미엄",
    postType: "후기",
    rating: 4.5,
    title: "넷플릭스 겜스고로 6개월째, 딱 한 번 끊긴 적 있어요",
    content:
      "6개월 이용하면서 딱 한 번 계정이 안 열린 적이 있었는데 고객센터 문의하니까 30분 안에 새 계정으로 바로 교체해줬어요. 4K 화질도 그대로라 만족합니다.",
    hoursAgo: 40,
    comments: [],
  },
  {
    serviceCategory: "젠스파크 (Genspark)",
    postType: "정보",
    rating: 4,
    title: "젠스파크 겜스고로 쓰는 사람 있나요?",
    content:
      "AI 에이전트로 요즘 젠스파크 많이 쓰던데 정가가 부담스러워서 겜스고로 알아보는 중입니다. 써보신 분 후기 궁금해요.",
    hoursAgo: 50,
    comments: [],
  },
  {
    serviceCategory: "디즈니플러스",
    postType: "후기",
    rating: 3.5,
    title: "디즈니플러스 겜스고, 콘텐츠는 좋은데 로그인이 가끔 느려요",
    content:
      "콘텐츠 라인업이나 화질은 만족하는데 가끔 로그인이 좀 오래 걸릴 때가 있어요. 그것 빼고는 가격 대비 만족합니다.",
    hoursAgo: 60,
    comments: [],
  },
  {
    serviceCategory: "스포티파이",
    postType: "후기",
    rating: 5,
    title: "스포티파이 패밀리 나눠쓰는 것보다 겜스고가 낫더라고요",
    content:
      "지인들이랑 패밀리 요금제 나눠쓰다가 정산이 귀찮아서 겜스고로 갈아탔어요. 광고 없고 오프라인 재생도 똑같이 돼요.",
    hoursAgo: 70,
    comments: [],
  },
  {
    serviceCategory: "클로드 (Claude)",
    postType: "정보",
    rating: 4,
    title: "클로드 겜스고 특가는 언제 자주 뜨나요?",
    content:
      "챗gpt는 겜스고로 쓰고 있는데 클로드도 특가가 있는지 궁금합니다. 코딩할 때는 클로드가 더 편해서요.",
    hoursAgo: 80,
    comments: [],
  },
  {
    serviceCategory: "유튜브 프리미엄",
    postType: "정보",
    rating: 4.5,
    title: "유튜브 프리미엄 가족형 vs 개인 충전형 차이 정리해봤어요",
    content:
      "가족형은 프로필 1개 공유라 계정 관리가 좀 더 필요하고, 개인 충전형은 내 계정에 바로 적용돼서 훨씬 편해요. 가격은 개인 충전형이 조금 더 비싸지만 그만한 가치가 있더라고요.",
    hoursAgo: 90,
    comments: [],
  },
];

const connectionString = process.env.POSTGRES_URL_NON_POOLING;
if (!connectionString) {
  console.error("POSTGRES_URL_NON_POOLING is not set");
  process.exit(1);
}
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

const { rows: existing } = await client.query("select count(*)::int as c from posts");
if (existing[0].c > 0) {
  console.log(`posts table already has ${existing[0].c} rows, skipping seed.`);
  await client.end();
  process.exit(0);
}

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

console.log(`Seeded ${posts.length} posts.`);
await client.end();
