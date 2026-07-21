const NATURE_WORDS = [
  "구름",
  "노을",
  "이슬",
  "바람",
  "햇살",
  "달빛",
  "별빛",
  "파도",
  "눈꽃",
  "단풍",
  "새벽",
  "무지개",
  "소나기",
  "물안개",
  "봄비",
  "첫눈",
  "폭풍",
  "안개",
  "장마",
  "노을빛",
];

const PRODUCE_WORDS = [
  "딸기",
  "당근",
  "감자",
  "토마토",
  "무화과",
  "자몽",
  "브로콜리",
  "옥수수",
  "수박",
  "참외",
  "가지",
  "오이",
  "포도",
  "배추",
  "고구마",
  "망고",
  "복숭아",
  "무",
  "양파",
  "청귤",
];

export function generateNickname(): string {
  const nature = NATURE_WORDS[Math.floor(Math.random() * NATURE_WORDS.length)];
  const produce =
    PRODUCE_WORDS[Math.floor(Math.random() * PRODUCE_WORDS.length)];
  return `${nature}${produce}`;
}
