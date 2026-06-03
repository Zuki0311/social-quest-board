export type QuestSize = "epic" | "large" | "medium" | "small";
export type QuestStatus = "open" | "in-progress" | "completed";
export type QuestCategory =
  | "environment"
  | "education"
  | "community"
  | "healthcare"
  | "employment"
  | "diversity";

export interface Quest {
  id: string;
  title: string;
  description: string;
  detail: string;
  size: QuestSize;
  status: QuestStatus;
  category: QuestCategory;
  companyId: string;
  rewards: string[];
  skills: string[];
  participants: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  vision: string;
  currentState: string;
  challenges: string[];
  industry: string;
  size: string;
  questCount: number;
}

export interface Comment {
  id: string;
  questId: string;
  author: string;
  avatar: string;
  body: string;
  createdAt: string;
}

export const categories: Record<QuestCategory, { label: string; color: string; emoji: string }> = {
  environment: { label: "環境", color: "bg-green-100 text-green-800", emoji: "🌱" },
  education: { label: "教育", color: "bg-blue-100 text-blue-800", emoji: "📚" },
  community: { label: "地域活性", color: "bg-orange-100 text-orange-800", emoji: "🏘️" },
  healthcare: { label: "医療・福祉", color: "bg-pink-100 text-pink-800", emoji: "🏥" },
  employment: { label: "雇用・働き方", color: "bg-purple-100 text-purple-800", emoji: "💼" },
  diversity: { label: "多様性", color: "bg-yellow-100 text-yellow-800", emoji: "🌈" },
};

export const sizeLabels: Record<QuestSize, { label: string; color: string }> = {
  epic: { label: "Epic", color: "bg-red-100 text-red-700 border-red-200" },
  large: { label: "Large", color: "bg-orange-100 text-orange-700 border-orange-200" },
  medium: { label: "Medium", color: "bg-blue-100 text-blue-700 border-blue-200" },
  small: { label: "Small", color: "bg-gray-100 text-gray-700 border-gray-200" },
};

export const statusLabels: Record<QuestStatus, { label: string; color: string; dot: string }> = {
  open: { label: "Open", color: "text-green-700", dot: "bg-green-500" },
  "in-progress": { label: "In Progress", color: "text-yellow-700", dot: "bg-yellow-500" },
  completed: { label: "Completed", color: "text-purple-700", dot: "bg-purple-500" },
};

export const companies: Company[] = [
  {
    id: "greentech-jp",
    name: "グリーンテック・ジャパン",
    logo: "🌿",
    vision: "2030年までに国内製造業のカーボンニュートラルを技術で実現する",
    currentState: "工場向けCO2可視化SaaSを展開中。導入企業50社。次のフェーズとして削減アクションの自動提案機能を開発したい。",
    challenges: ["AIエンジニアの採用が難航", "中小製造業へのリーチ不足", "データ連携の標準化"],
    industry: "CleanTech / 製造業DX",
    size: "42名",
    questCount: 3,
  },
  {
    id: "manabiya",
    name: "まなびや",
    logo: "🎓",
    vision: "すべての子どもが生まれた場所に関係なく、最高の学びにアクセスできる社会を作る",
    currentState: "離島・過疎地向けのオンライン学習プラットフォームを運営。利用者3,200名。コンテンツ制作が追いつかない。",
    challenges: ["教材コンテンツの制作スピード", "自治体との連携強化", "持続可能な収益モデルの構築"],
    industry: "EdTech / 教育",
    size: "18名",
    questCount: 2,
  },
  {
    id: "komorebi-care",
    name: "こもれびケア",
    logo: "🏠",
    vision: "介護する人もされる人も、笑顔でいられる社会インフラを作る",
    currentState: "訪問介護のマッチングアプリを関東圏で展開。登録ヘルパー800名。利用者満足度は高いが、ヘルパーの定着率に課題。",
    challenges: ["ヘルパーの定着率改善", "地方展開のオペレーション構築", "行政との制度連携"],
    industry: "HealthTech / 介護",
    size: "28名",
    questCount: 2,
  },
  {
    id: "tsunagu-works",
    name: "ツナグワークス",
    logo: "🤝",
    vision: "障がいの有無に関わらず、誰もが『得意』を活かして働ける労働市場を作る",
    currentState: "障がい者雇用コンサルティングと就労マッチングサービスを提供。年間200名の就労支援実績。企業側の理解促進が最大の壁。",
    challenges: ["企業の受け入れ体制づくり支援", "就労後のフォローアップ体制", "テクノロジー活用による業務切り出し"],
    industry: "HR / ソーシャル",
    size: "35名",
    questCount: 2,
  },
  {
    id: "machi-lab",
    name: "まちラボ",
    logo: "🏘️",
    vision: "人口が減っても、豊かさが増える地域のかたちを全国100箇所で実証する",
    currentState: "空き家リノベーション・コミュニティスペース運営を12拠点で展開。移住者マッチング年間150組の実績。",
    challenges: ["拠点ごとの収益化モデルの確立", "地域住民との合意形成", "リノベ人材の不足"],
    industry: "地域活性 / まちづくり",
    size: "24名",
    questCount: 5,
  },
  {
    id: "earth-kitchen",
    name: "アースキッチン",
    logo: "🌾",
    vision: "食べものが無駄にならない社会をテクノロジーで実現する",
    currentState: "フードロス削減マッチングアプリを首都圏で展開。登録飲食店1,200店。月間マッチング数3,000件。",
    challenges: ["地方展開の物流課題", "生産者側のデジタルリテラシー", "フードバンク連携の制度整備"],
    industry: "FoodTech / サステナビリティ",
    size: "30名",
    questCount: 3,
  },
  {
    id: "mirai-tech",
    name: "ミライテック",
    logo: "🔬",
    vision: "先端技術を、社会課題のある現場に届けるブリッジになる",
    currentState: "AI・IoT・ドローン技術を活用した社会課題解決プロジェクトを15件並行運営。大学・自治体との連携多数。",
    challenges: ["技術者と現場のコミュニケーションギャップ", "実証実験から社会実装への壁", "資金調達"],
    industry: "DeepTech / ソーシャルイノベーション",
    size: "55名",
    questCount: 5,
  },
  {
    id: "heritage-bridge",
    name: "ヘリテージブリッジ",
    logo: "🏯",
    vision: "日本の文化・伝統を次の100年に届ける架け橋をつくる",
    currentState: "伝統工芸のデジタルアーカイブ事業と海外向けECを運営。職人パートナー80名。海外売上が前年比200%。",
    challenges: ["後継者のいない工房の支援", "デジタル化への職人の理解促進", "物流コスト"],
    industry: "文化 / クリエイティブ",
    size: "20名",
    questCount: 4,
  },
  {
    id: "global-compass",
    name: "グローバルコンパス",
    logo: "🌍",
    vision: "国境を越えて、すべての人が自分の可能性を発揮できる世界をつくる",
    currentState: "途上国向け遠隔教育・医療プラットフォームを8カ国で展開。難民支援プログラムで年間500名のスキル研修を実施。",
    challenges: ["現地パートナーの育成", "通信インフラの制約", "各国の規制対応"],
    industry: "国際協力 / ソーシャルインパクト",
    size: "48名",
    questCount: 5,
  },
];

export const quests: Quest[] = [
  {
    id: "quest-001",
    title: "中小製造業100社のCO2排出量を可視化するダッシュボード構築",
    description: "製造業のカーボンニュートラル実現に向けて、中小企業でも簡単に使えるCO2可視化ダッシュボードを共同開発するプロジェクト",
    detail: `## 背景
日本の製造業におけるCO2排出量の約6割は中小企業が占めています。しかし、大企業と違い、中小企業にはCO2を計測・可視化するリソースがありません。

## やりたいこと
- 既存のSaaSをベースに、中小企業向けの簡易版ダッシュボードを開発
- 業種別テンプレートの作成（金属加工、食品、繊維など）
- 自治体の補助金申請に使えるレポート出力機能

## 求める仲間
- フロントエンドエンジニア（React/Next.js）
- 製造業の現場を知るドメインエキスパート
- UXデザイナー（非エンジニアが使えるUIの設計）`,
    size: "large",
    status: "open",
    category: "environment",
    companyId: "greentech-jp",
    rewards: ["開発メンバーとしてクレジット掲載", "完成後の導入支援業務への参加権", "CO2削減量に応じたインパクトレポート発行"],
    skills: ["React", "Next.js", "TypeScript", "データ可視化", "製造業知識"],
    participants: 8,
    comments: 12,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-01",
  },
  {
    id: "quest-002",
    title: "離島の中学生にプログラミング授業を届けるボランティア講師募集",
    description: "鹿児島県の離島3校で、月2回のオンラインプログラミング授業を実施する講師チームを結成します",
    detail: `## 背景
離島の中学校ではIT教育の人材が圧倒的に不足しています。生徒たちは意欲があるのに、学ぶ機会がありません。

## 具体的な活動
- 月2回×90分のオンライン授業（Scratch → Python の段階的カリキュラム）
- 教材は「まなびや」が提供
- 生徒の作品発表会を年2回開催

## 期間
2026年9月〜2027年3月（半年間）`,
    size: "medium",
    status: "open",
    category: "education",
    companyId: "manabiya",
    rewards: ["教育活動証明書の発行", "まなびやのプラットフォームでの講師プロフィール掲載", "交通費・通信費の実費支給"],
    skills: ["プログラミング指導", "Python", "Scratch", "教育経験"],
    participants: 3,
    comments: 7,
    createdAt: "2026-05-25",
    updatedAt: "2026-06-02",
  },
  {
    id: "quest-003",
    title: "訪問介護ヘルパーの『声』を集めるインタビュー調査",
    description: "ヘルパーが現場で感じている課題・やりがいを100人分のインタビューで可視化し、業界全体の働き方改善に活かすプロジェクト",
    detail: `## 背景
介護業界の人材不足は深刻ですが、「なぜ辞めるのか」「何があれば続けられるのか」の生の声は十分に集まっていません。

## プロジェクト内容
- 訪問介護ヘルパー100名へのオンラインインタビュー（1人30分）
- 定性データの分析・レポート作成
- 結果はオープンデータとして公開（個人情報匿名化）

## 成果物
業界初の大規模ヘルパー意識調査レポート（CC BY 4.0で公開）`,
    size: "large",
    status: "in-progress",
    category: "healthcare",
    companyId: "komorebi-care",
    rewards: ["調査レポートへの共著クレジット", "介護HR領域のネットワーキング", "調査スキル研修の無料受講"],
    skills: ["インタビュー設計", "定性調査", "データ分析", "介護業界知識"],
    participants: 15,
    comments: 23,
    createdAt: "2026-04-10",
    updatedAt: "2026-06-03",
  },
  {
    id: "quest-004",
    title: "工場のエネルギーデータAPI標準仕様の策定",
    description: "製造業のIoTセンサーデータを統一フォーマットで扱うためのオープンAPI仕様を業界横断で策定する",
    detail: `## 背景
各社バラバラのデータフォーマットが、CO2可視化の最大のボトルネックになっています。

## ゴール
- OpenAPI 3.0ベースの標準仕様ドラフト作成
- リファレンス実装（Python / Go）
- 業界団体への提案書作成`,
    size: "epic",
    status: "open",
    category: "environment",
    companyId: "greentech-jp",
    rewards: ["仕様策定メンバーとしてクレジット", "標準化団体への推薦", "技術カンファレンス登壇機会"],
    skills: ["API設計", "OpenAPI", "IoT", "製造業DX", "標準化"],
    participants: 5,
    comments: 18,
    createdAt: "2026-05-15",
    updatedAt: "2026-05-30",
  },
  {
    id: "quest-005",
    title: "障がい者雇用の成功事例マップを作る",
    description: "全国の障がい者雇用成功事例を収集・マッピングし、企業が参考にできるオープンなナレッジベースを構築する",
    detail: `## 背景
障がい者雇用に取り組みたい企業は多いが、「具体的にどうすればいいか」の情報が不足しています。

## やること
- 全国100社の成功事例をヒアリング・ドキュメント化
- 業種×障がい種別×業務内容のマトリクスで整理
- Webサイトとして公開（検索・フィルタ機能付き）`,
    size: "large",
    status: "open",
    category: "diversity",
    companyId: "tsunagu-works",
    rewards: ["プロジェクトメンバーとしてクレジット", "D&Iコンサルティング案件への参加機会", "取材先企業とのネットワーク"],
    skills: ["取材・ライティング", "Webサイト構築", "障がい者雇用の知識", "プロジェクトマネジメント"],
    participants: 6,
    comments: 9,
    createdAt: "2026-05-28",
    updatedAt: "2026-06-02",
  },
  {
    id: "quest-006",
    title: "過疎地域の空き教室をコワーキングスペースに変えるプロジェクト",
    description: "廃校・空き教室を活用したコワーキングスペースの企画・設計・運営モデルを作る実証実験",
    detail: `## 背景
地方の廃校が増え続ける一方、リモートワーカーの地方移住ニーズは高まっています。

## 実証実験
- 鹿児島県の廃校1校で3ヶ月間の実証
- 利用者20名のフィードバック収集
- 持続可能な運営モデルの設計`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "manabiya",
    rewards: ["実証実験への参加", "地域活性化の実践経験", "メディア掲載時のクレジット"],
    skills: ["空間デザイン", "コミュニティ運営", "事業計画策定", "地方創生"],
    participants: 4,
    comments: 5,
    createdAt: "2026-06-01",
    updatedAt: "2026-06-03",
  },
  {
    id: "quest-007",
    title: "介護記録のAI音声入力アプリのUXリサーチ",
    description: "ヘルパーが移動中に音声で介護記録を入力できるアプリのプロトタイプを検証するUXリサーチャー募集",
    detail: `## 背景
介護記録の入力は1日30分以上かかり、ヘルパーの大きな負担です。音声入力で解決したい。

## リサーチ内容
- プロトタイプを使ったユーザーテスト（ヘルパー10名）
- ユーザビリティの課題抽出
- 改善提案レポートの作成`,
    size: "small",
    status: "open",
    category: "healthcare",
    companyId: "komorebi-care",
    rewards: ["UXリサーチ実績としてポートフォリオ利用可", "介護×テック領域の知見"],
    skills: ["UXリサーチ", "ユーザーテスト設計", "プロトタイピング"],
    participants: 2,
    comments: 3,
    createdAt: "2026-06-02",
    updatedAt: "2026-06-03",
  },
  {
    id: "quest-008",
    title: "AI×製造業 カーボンニュートラル・ハッカソン開催",
    description: "製造業のCO2削減をテーマにした2日間のオンラインハッカソンを企画・運営する",
    detail: `## 概要
- 参加者100名規模のオンラインハッカソン
- テーマ: 「AIで工場のCO2を半減させるアイデア」
- 2026年10月開催予定

## 募集する役割
- イベント企画・運営
- メンター（AI / 製造業）
- スポンサー営業`,
    size: "medium",
    status: "open",
    category: "environment",
    companyId: "greentech-jp",
    rewards: ["運営メンバーとしてクレジット", "参加企業とのネットワーク", "ハッカソン成果物の事業化支援"],
    skills: ["イベント企画", "コミュニティ運営", "AI/ML", "製造業知識"],
    participants: 7,
    comments: 11,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
  {
    id: "quest-009",
    title: "就労移行支援プログラムのオープンソース教材開発",
    description: "障がいを持つ方の就労スキルトレーニング教材をオープンソースで開発し、全国の支援機関が無料で使えるようにする",
    detail: `## 背景
就労移行支援の教材は各機関がバラバラに作っており、品質にばらつきがあります。

## 開発する教材
- ビジネスマナー基礎（動画 + ワークシート）
- PC基本操作（ステップバイステップガイド）
- コミュニケーション練習（ロールプレイシナリオ集）
- すべてCC BY-SA 4.0で公開`,
    size: "large",
    status: "in-progress",
    category: "employment",
    companyId: "tsunagu-works",
    rewards: ["教材クレジット", "福祉教育分野のネットワーク", "支援機関での導入実績"],
    skills: ["教材設計", "動画制作", "アクセシビリティ", "福祉知識"],
    participants: 12,
    comments: 16,
    createdAt: "2026-04-15",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-nature-4",
    title: "脱炭素サプライチェーン設計ワークショップ",
    description: "製造業のサプライチェーン全体でCO2排出を最小化する設計手法を、ワークショップ形式で開発・普及する",
    detail: `## 背景
Scope3（サプライチェーン排出）の可視化と削減が企業の急務になっています。しかし中小企業には設計ノウハウがありません。

## やること
- 脱炭素サプライチェーン設計のフレームワーク開発
- 製造業向けワークショップ教材の作成
- パイロット企業5社での実証ワークショップ開催`,
    size: "medium",
    status: "open",
    category: "environment",
    companyId: "greentech-jp",
    rewards: ["ワークショップファシリテーター認定", "脱炭素コンサルティング案件への参加機会"],
    skills: ["サプライチェーン管理", "環境経営", "ワークショップ設計"],
    participants: 3,
    comments: 2,
    createdAt: "2026-05-28",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-life-3",
    title: "在宅医療の情報格差を埋めるポータルサイト構築",
    description: "在宅医療を必要とする患者・家族が、地域の医療リソースを簡単に見つけられるポータルサイトを構築する",
    detail: `## 背景
在宅医療の選択肢は地域によって大きく異なり、情報が分散しています。患者・家族は何から始めればいいかわかりません。

## やること
- 全国の在宅医療クリニック・訪問看護ステーションのデータベース構築
- 地域別・サービス別の検索機能
- 患者・家族向けのガイドコンテンツ制作`,
    size: "large",
    status: "open",
    category: "healthcare",
    companyId: "komorebi-care",
    rewards: ["医療情報プラットフォーム構築の実績", "医療従事者ネットワーク"],
    skills: ["Webアプリ開発", "データベース設計", "医療知識", "UXデザイン"],
    participants: 4,
    comments: 3,
    createdAt: "2026-05-30",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-culture-1",
    title: "伝統工芸×デジタルアーカイブプロジェクト",
    description: "消滅の危機にある伝統工芸の技法を3Dスキャン・映像で記録し、永久保存するデジタルアーカイブを構築する",
    detail: `## 背景
日本の伝統工芸の約7割が後継者不在。技法そのものが失われる前にデジタルで記録する必要があります。

## やること
- 職人の手仕事を3Dスキャン＋4K映像で記録
- インタラクティブなWebアーカイブの構築
- 教育機関向けのVR体験コンテンツ制作`,
    size: "epic",
    status: "open",
    category: "community",
    companyId: "heritage-bridge",
    rewards: ["文化庁プロジェクトへの推薦", "職人との直接交流", "アーカイブクレジット"],
    skills: ["3Dスキャン", "映像制作", "Web開発", "文化財知識"],
    participants: 6,
    comments: 8,
    createdAt: "2026-05-15",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-culture-2",
    title: "地方の祭りをオンラインで世界に発信",
    description: "地方の伝統的な祭りをライブ配信＋多言語解説で世界中に届けるプラットフォームを構築する",
    detail: `## 背景
地方の祭りは観光客減少と担い手不足で存続が危ぶまれています。オンラインで世界と繋がることで新たな支援者を獲得します。

## やること
- ライブ配信プラットフォームの構築
- 5つの祭りでのパイロット配信
- 英語・中国語・韓国語の多言語解説制作`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "heritage-bridge",
    rewards: ["映像制作実績", "地域文化の最前線体験", "国際的なネットワーク"],
    skills: ["ライブ配信", "映像制作", "多言語翻訳", "イベント企画"],
    participants: 3,
    comments: 4,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-work-3",
    title: "リモートワーク孤独解消プログラムの設計",
    description: "リモートワーカーの孤独感・孤立を解消するためのオンラインコミュニティプログラムを設計・実証する",
    detail: `## 背景
リモートワークの普及で生産性は上がったが、孤独感・メンタルヘルスの課題が顕在化しています。

## やること
- リモートワーカー200名へのアンケート調査
- 孤独解消プログラムの設計（バーチャルコワーク、ピアサポート等）
- 3ヶ月間のパイロット実施と効果測定`,
    size: "medium",
    status: "open",
    category: "employment",
    companyId: "tsunagu-works",
    rewards: ["組織開発コンサルティング実績", "HR領域のネットワーク"],
    skills: ["組織心理学", "プログラム設計", "コミュニティ運営", "データ分析"],
    participants: 4,
    comments: 5,
    createdAt: "2026-05-25",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-challenge-1",
    title: "社会起業家メンタリングネットワーク構築",
    description: "社会課題に挑む起業家と、経験豊富なメンターをマッチングするネットワークを全国規模で構築する",
    detail: `## 背景
社会起業家の廃業率は一般企業より高く、孤立した経営が最大の原因です。メンタリングで生存率を上げます。

## やること
- メンター100名の登録・審査
- マッチングアルゴリズムの開発
- 月次メンタリングセッションの運営体制構築`,
    size: "large",
    status: "open",
    category: "employment",
    companyId: "machi-lab",
    rewards: ["メンターネットワークへの参加", "ソーシャルイノベーション分野の実績"],
    skills: ["コミュニティ運営", "マッチングシステム開発", "起業支援"],
    participants: 9,
    comments: 7,
    createdAt: "2026-05-18",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-challenge-2",
    title: "高校生ソーシャルビジネスコンテスト運営",
    description: "高校生が社会課題をビジネスで解決するアイデアを競うコンテストを企画・運営する",
    detail: `## 背景
若い世代の社会課題への関心は高いが、ビジネスとして形にする機会が少ない。高校生のうちから挑戦できる場を作ります。

## やること
- コンテストの企画・募集要項作成
- 全国から100チームの応募を目標に広報
- メンタリング期間（3ヶ月）の運営
- 最終審査会・表彰式の開催`,
    size: "medium",
    status: "open",
    category: "education",
    companyId: "manabiya",
    rewards: ["教育イベント運営の実績", "高校との連携ネットワーク", "メディア露出"],
    skills: ["イベント企画", "教育プログラム設計", "広報・PR", "メンタリング"],
    participants: 7,
    comments: 6,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-tech-1",
    title: "AIで町工場の品質検査を自動化するプロジェクト",
    description: "画像認識AIを使って、町工場の目視検査工程を自動化するオープンソースツールを開発する",
    detail: `## 背景
町工場の品質検査は熟練工の目視に頼っており、高齢化で検査能力の低下が深刻です。

## やること
- 製品画像データセットの収集・アノテーション
- 画像認識モデルの学習・最適化
- 現場で使えるシンプルなUIの開発
- 3工場でのパイロット導入`,
    size: "large",
    status: "open",
    category: "environment",
    companyId: "mirai-tech",
    rewards: ["AI開発の実践経験", "製造業DXの実績", "論文共著の機会"],
    skills: ["機械学習", "画像認識", "Python", "製造業知識"],
    participants: 5,
    comments: 9,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-tech-2",
    title: "オープンソース農業IoTキット開発",
    description: "小規模農家でも導入できる低コストな農業IoTセンサーキットをオープンソースで開発する",
    detail: `## 背景
スマート農業の技術は大規模農家向けが中心で、小規模農家には手が届きません。

## やること
- 温湿度・土壌水分・日照センサーキットの設計
- Raspberry Pi / ESP32ベースのファームウェア開発
- データ可視化ダッシュボードの構築
- 農家10軒でのフィールドテスト`,
    size: "large",
    status: "in-progress",
    category: "environment",
    companyId: "mirai-tech",
    rewards: ["ハードウェア開発の実績", "農業テック分野のネットワーク", "キットクレジット"],
    skills: ["IoT", "組込み開発", "電子回路設計", "農業知識", "Web開発"],
    participants: 8,
    comments: 12,
    createdAt: "2026-04-20",
    updatedAt: "2026-06-03",
  },
  {
    id: "q-tech-3",
    title: "ドローン×災害救助シミュレーション開発",
    description: "災害時のドローン活用を訓練するためのシミュレーションソフトウェアを開発する",
    detail: `## 背景
災害時のドローン活用は期待されていますが、実践的な訓練環境がありません。

## やること
- 3D地形データを使った災害シミュレーション環境の構築
- ドローン操縦トレーニングモジュールの開発
- 自治体防災訓練での実証実験`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "mirai-tech",
    rewards: ["防災テック分野の実績", "自治体との連携機会", "技術カンファレンス登壇"],
    skills: ["3Dシミュレーション", "Unity/Unreal", "ドローン技術", "防災知識"],
    participants: 4,
    comments: 5,
    createdAt: "2026-05-25",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-life-s1",
    title: "サステナブルファッション新素材の共同研究",
    description: "廃棄衣料から新しい繊維素材を開発する産学連携プロジェクトの研究メンバーを募集",
    detail: `## 背景
ファッション業界は世界第2位の環境汚染産業。廃棄衣料のリサイクル率はわずか15%です。

## やること
- 廃棄衣料の素材分析と分類手法の開発
- ケミカルリサイクル技術の小規模実験
- 新素材のプロトタイプ制作と強度テスト`,
    size: "epic",
    status: "open",
    category: "environment",
    companyId: "earth-kitchen",
    rewards: ["研究論文の共著", "素材開発の実績", "ファッション業界ネットワーク"],
    skills: ["素材工学", "化学", "サステナビリティ", "研究設計"],
    participants: 3,
    comments: 2,
    createdAt: "2026-05-28",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-life-s2",
    title: "まちの小さな図書館ネットワーク",
    description: "空きスペースを活用した「まちの小さな図書館」を全国50箇所に設置し、ネットワークで繋ぐ",
    detail: `## 背景
公共図書館の閉館・縮小が進む中、地域の読書文化を守る新しい仕組みが必要です。

## やること
- 小さな図書館の設置ガイドライン作成
- 蔵書管理・貸出管理アプリの開発
- パイロット10箇所の設置と運営支援`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["地域文化活動の実績", "全国のコミュニティスペースネットワーク"],
    skills: ["コミュニティ運営", "アプリ開発", "空間デザイン", "図書館学"],
    participants: 5,
    comments: 4,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-infra-1",
    title: "限界集落のインフラ維持モデル策定",
    description: "人口減少が進む限界集落で、最小コストでインフラを維持するモデルを策定・実証する",
    detail: `## 背景
限界集落では水道・道路・通信などの維持コストが住民数に対して過大になっています。

## やること
- 全国10集落のインフラコスト調査
- IoTを活用した遠隔監視・予防保全モデルの設計
- 自治体向け提案書の作成`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["自治体政策提言の実績", "地方創生分野のネットワーク"],
    skills: ["土木工学", "IoT", "自治体行政", "データ分析", "コスト分析"],
    participants: 4,
    comments: 3,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-infra-2",
    title: "公共交通オープンデータ整備プロジェクト",
    description: "地方のバス・鉄道のリアルタイム運行データをオープンデータとして整備し、MaaSの基盤を作る",
    detail: `## 背景
地方の公共交通データはデジタル化が遅れ、乗り換え検索にすら対応できていない路線が多数あります。

## やること
- 地方交通事業者20社のGTFS形式データ整備
- リアルタイム運行情報のAPI構築
- オープンデータポータルサイトの公開`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "mirai-tech",
    rewards: ["交通データ分野の実績", "MaaS業界ネットワーク", "自治体連携機会"],
    skills: ["データエンジニアリング", "GTFS", "API開発", "交通計画"],
    participants: 6,
    comments: 7,
    createdAt: "2026-05-18",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-edu-3",
    title: "不登校児童のためのオンライン居場所づくり",
    description: "不登校の子どもたちが安心して過ごせるオンライン上の居場所（バーチャル教室）を構築する",
    detail: `## 背景
不登校の児童生徒は全国で約30万人。自宅にいながら社会と繋がれる場が求められています。

## やること
- バーチャル教室プラットフォームの開発
- 見守りスタッフの研修プログラム設計
- パイロット運営（50名規模、3ヶ月間）`,
    size: "large",
    status: "in-progress",
    category: "education",
    companyId: "manabiya",
    rewards: ["教育プラットフォーム開発の実績", "教育行政ネットワーク"],
    skills: ["Web開発", "教育心理学", "コミュニティ運営", "UI/UXデザイン"],
    participants: 8,
    comments: 10,
    createdAt: "2026-04-25",
    updatedAt: "2026-06-03",
  },
  {
    id: "q-edu-4",
    title: "STEAM教育キット無償配布プロジェクト",
    description: "経済的に恵まれない家庭の子どもたちにSTEAM教育キットを無償で届ける",
    detail: `## 背景
STEAM教育への関心は高まっていますが、教材費が高く、経済格差が学びの格差に直結しています。

## やること
- 低コストで作れるSTEAM教育キットの設計
- クラウドファンディングでの資金調達
- 全国500世帯への配布と学習サポート`,
    size: "medium",
    status: "open",
    category: "education",
    companyId: "manabiya",
    rewards: ["教材開発クレジット", "STEAM教育分野のネットワーク"],
    skills: ["教材設計", "STEAM教育", "プロダクトデザイン", "クラウドファンディング"],
    participants: 5,
    comments: 4,
    createdAt: "2026-05-25",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-food-1",
    title: "フードロス削減AIマッチングプラットフォーム",
    description: "余剰食品と需要をAIでリアルタイムマッチングし、フードロスを半減させるプラットフォームを開発",
    detail: `## 背景
日本のフードロスは年間523万トン。飲食店・小売の余剰と、フードバンク・子ども食堂の需要のマッチングが鍵です。

## やること
- 需給予測AIモデルの開発
- リアルタイムマッチングアルゴリズムの実装
- 配送ルート最適化機能の開発`,
    size: "large",
    status: "open",
    category: "environment",
    companyId: "earth-kitchen",
    rewards: ["AIプロダクト開発の実績", "フードテック業界ネットワーク"],
    skills: ["機械学習", "需要予測", "Webアプリ開発", "物流最適化"],
    participants: 6,
    comments: 8,
    createdAt: "2026-05-15",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-food-2",
    title: "都市農業コミュニティガーデン設立",
    description: "都市部の遊休地を活用したコミュニティガーデンを設立し、都市農業の実践モデルを作る",
    detail: `## 背景
都市住民の「食」への関心は高まっていますが、農業体験の機会は限られています。

## やること
- 遊休地オーナーとのマッチング・契約
- コミュニティガーデンの設計・整備
- 運営ルール策定と会員募集（50名規模）`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "earth-kitchen",
    rewards: ["都市農業の実践経験", "コミュニティ運営の実績"],
    skills: ["農業知識", "コミュニティ運営", "空間デザイン", "不動産知識"],
    participants: 4,
    comments: 3,
    createdAt: "2026-05-28",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-exp-1",
    title: "地方の秘境ツアー企画",
    description: "アクセスが難しいが魅力的な地方の秘境スポットを、持続可能な観光ツアーとして商品化する",
    detail: `## 背景
オーバーツーリズムが問題になる一方、知られざる地方の魅力は観光資源として活かされていません。

## やること
- 全国の秘境スポット30箇所の調査・選定
- 地域住民と協働したツアープログラム設計
- パイロットツアー3本の実施と検証`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["観光プランナーとしての実績", "地域ネットワーク"],
    skills: ["観光企画", "地域調査", "マーケティング", "サステナブルツーリズム"],
    participants: 3,
    comments: 2,
    createdAt: "2026-05-30",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-exp-2",
    title: "VR世界遺産バーチャル体験",
    description: "行くことが難しい世界遺産をVRで体験できるコンテンツを制作し、教育機関に無償提供する",
    detail: `## 背景
世界遺産への物理的なアクセスが難しい人々（障がい者、遠隔地の学生等）にも文化体験を届けたい。

## やること
- 世界遺産5箇所の360度撮影
- インタラクティブVRコンテンツの制作
- 全国の学校50校への機材・コンテンツ提供`,
    size: "large",
    status: "open",
    category: "education",
    companyId: "heritage-bridge",
    rewards: ["VRコンテンツ制作の実績", "文化教育分野のネットワーク"],
    skills: ["VR開発", "360度撮影", "3Dモデリング", "教育コンテンツ設計"],
    participants: 5,
    comments: 6,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-comm-1",
    title: "空き家リノベマッチング",
    description: "全国の空き家と、リノベーションしたい移住希望者をマッチングするプラットフォームを構築",
    detail: `## 背景
全国の空き家は約849万戸。一方で地方移住を希望する人は増加中。両者を繋ぐ仕組みが不足しています。

## やること
- 空き家データベースの構築（自治体空き家バンク連携）
- マッチングアルゴリズムの開発
- リノベ事例のビフォーアフターギャラリー制作`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["不動産テック分野の実績", "自治体ネットワーク", "メディア掲載"],
    skills: ["Webアプリ開発", "不動産知識", "データベース設計", "UI/UXデザイン"],
    participants: 7,
    comments: 9,
    createdAt: "2026-05-10",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-comm-2",
    title: "多世代交流型シェアハウス設計",
    description: "若者と高齢者が共に暮らす多世代交流型シェアハウスのモデル設計と実証実験",
    detail: `## 背景
単身高齢者の孤立と若者の住居費高騰、2つの課題を同時に解決するモデルです。

## やること
- 多世代シェアハウスの建築・運営ガイドライン作成
- パイロット物件1棟の設計・運営
- 入居者の満足度・交流度の定量測定`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["住居イノベーション分野の実績", "建築・福祉の連携ネットワーク"],
    skills: ["建築設計", "コミュニティデザイン", "福祉知識", "プロジェクト管理"],
    participants: 4,
    comments: 5,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-comm-3",
    title: "地域通貨アプリ開発",
    description: "地域内の経済循環を促進するデジタル地域通貨アプリを開発し、コミュニティ活性化に繋げる",
    detail: `## 背景
地方の経済が大手チェーンに流出する中、地域内でお金を循環させる仕組みが求められています。

## やること
- ブロックチェーンベースの地域通貨システム設計
- スマホアプリ（iOS/Android）の開発
- パイロット地域（商店街30店舗）での実証実験`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "mirai-tech",
    rewards: ["FinTech開発の実績", "地域経済の専門知識", "自治体連携機会"],
    skills: ["モバイルアプリ開発", "ブロックチェーン", "UI/UXデザイン", "地域経済"],
    participants: 5,
    comments: 7,
    createdAt: "2026-05-18",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-comm-4",
    title: "施工管理リスキリングアカデミー運営",
    description: "不足する施工管理人材を異業種から育成するリスキリングアカデミーを運営し、建設業界の人材課題を解決する",
    detail: `## 背景
建設業界では2024年問題（時間外労働規制）により施工管理人材の不足が深刻化。一方、異業種には「手に職をつけたい」「社会に残る仕事がしたい」という志を持つ人材が多数います。

## やること
- 異業種人材向けの施工管理リスキリングカリキュラム設計・運営
- 建設会社・ゼネコンとの受入先マッチング
- 受講生のキャリア支援（資格取得サポート・現場OJT設計）
- アカデミー受講生の公募・選考プロセス構築
- 卒業生コミュニティの形成と継続的なフォローアップ

## 目指す姿
「建設業は未経験だから無理」という壁を壊し、志のある人なら誰でも街づくりに参加できる世界を作る。
3年で500名の施工管理技士を異業種から輩出する。`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["教育事業の立上げ経験", "建設業界のネットワーク", "人材育成のノウハウ", "国家資格取得支援"],
    skills: ["教育カリキュラム設計", "プロジェクトマネジメント", "採用・人材開発", "建設業界知識"],
    participants: 8,
    comments: 12,
    createdAt: "2026-06-01",
    updatedAt: "2026-06-03",
  },
  {
    id: "q-comm-5",
    title: "施工管理リスキリングアカデミー受講生公募",
    description: "異業種から施工管理のプロを目指す受講生を全国から募集。未経験OK、6ヶ月で現場デビューを目指す",
    detail: `## こんな人を求めています
- 「街をつくる仕事」に興味がある異業種の方（営業、IT、飲食、製造など経歴不問）
- 手に職をつけたい、社会に形が残る仕事がしたい方
- 建設・施工管理は未経験だけどチャレンジしたい方

## プログラム内容
- 6ヶ月の集中プログラム（座学3ヶ月＋現場OJT3ヶ月）
- 2級施工管理技士の資格取得サポート
- 現役施工管理のメンターがマンツーマンで伴走
- 修了後の就職先マッチング（提携ゼネコン・建設会社20社以上）

## 待遇
- 受講料無料（提携企業が負担）
- OJT期間中は日当支給
- 修了後の就職率95%以上（過去実績）`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "machi-lab",
    rewards: ["施工管理技士資格", "建設現場の実務経験", "就職先マッチング", "同期の仲間ネットワーク"],
    skills: ["やる気と体力", "コミュニケーション力", "基本的なPC操作"],
    participants: 23,
    comments: 31,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-03",
  },
  {
    id: "q-jp-1",
    title: "和食文化の海外発信プラットフォーム",
    description: "和食の歴史・技法・食材を多言語で発信するWebプラットフォームを構築し、世界にファンを作る",
    detail: `## 背景
和食はユネスコ無形文化遺産ですが、海外での理解は「寿司・ラーメン」に偏っています。

## やること
- 和食の地域別・季節別コンテンツ制作（英語・中国語・仏語）
- 料理人インタビュー動画シリーズの制作
- インタラクティブな食文化マップの開発`,
    size: "large",
    status: "open",
    category: "community",
    companyId: "heritage-bridge",
    rewards: ["食文化発信の実績", "料理人ネットワーク", "海外メディア露出"],
    skills: ["コンテンツ制作", "多言語翻訳", "映像制作", "Web開発", "食文化知識"],
    participants: 4,
    comments: 5,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-jp-2",
    title: "日本の職人技をNFTで世界へ",
    description: "伝統工芸の職人技を記録したデジタルアートをNFTとして発行し、新たな収益源を開拓する",
    detail: `## 背景
伝統工芸の職人は高齢化し、収入も減少。デジタル技術で新たな価値と収益を生み出します。

## やること
- 職人の制作過程を高品質映像で記録
- デジタルアート化とNFTマーケットプレイスへの出品
- 収益の50%を職人に還元するスキーム構築`,
    size: "medium",
    status: "open",
    category: "community",
    companyId: "heritage-bridge",
    rewards: ["NFTプロジェクトの実績", "伝統工芸コミュニティへのアクセス"],
    skills: ["NFT/Web3", "デジタルアート", "映像制作", "マーケティング"],
    participants: 3,
    comments: 4,
    createdAt: "2026-05-25",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-econ-1",
    title: "インパクト投資入門プログラム",
    description: "社会的インパクトと経済的リターンを両立する投資について、一般向けの学習プログラムを開発する",
    detail: `## 背景
インパクト投資の市場は急成長していますが、一般投資家向けの教育コンテンツが不足しています。

## やること
- オンライン学習コース（全8回）の教材開発
- 実践的なインパクト測定ワークショップの設計
- 受講者100名のパイロット実施`,
    size: "medium",
    status: "open",
    category: "education",
    companyId: "global-compass",
    rewards: ["金融教育分野の実績", "インパクト投資家ネットワーク"],
    skills: ["金融知識", "教材設計", "インパクト測定", "ファシリテーション"],
    participants: 6,
    comments: 5,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-econ-2",
    title: "地方中小企業のDX支援隊",
    description: "デジタル化が遅れている地方中小企業に、ボランティアITチームを派遣してDXを支援する",
    detail: `## 背景
地方の中小企業の約7割がDXに未着手。人材もノウハウも不足しています。

## やること
- IT人材ボランティアチームの組成（50名規模）
- 企業診断→DXプラン策定→伴走支援の標準プロセス構築
- 年間30社の支援を目標に実施`,
    size: "epic",
    status: "in-progress",
    category: "employment",
    companyId: "mirai-tech",
    rewards: ["DXコンサルティング実績", "地方企業ネットワーク", "メンター資格"],
    skills: ["DX戦略", "業務改善", "クラウド導入", "プロジェクト管理"],
    participants: 8,
    comments: 11,
    createdAt: "2026-04-10",
    updatedAt: "2026-06-03",
  },
  {
    id: "q-global-1",
    title: "アフリカ水インフラ技術移転",
    description: "日本の水処理技術をアフリカの農村部に適用するための技術移転プロジェクト",
    detail: `## 背景
アフリカでは約4億人が安全な飲料水にアクセスできません。日本の浄水技術を現地に適合させます。

## やること
- 現地の水質調査と課題分析
- 低コスト浄水システムの設計・製作
- 現地スタッフへの技術トレーニング実施`,
    size: "epic",
    status: "open",
    category: "healthcare",
    companyId: "global-compass",
    rewards: ["国際開発プロジェクトの実績", "JICA連携機会", "現地視察"],
    skills: ["水処理技術", "国際協力", "プロジェクト管理", "技術移転"],
    participants: 5,
    comments: 6,
    createdAt: "2026-05-15",
    updatedAt: "2026-06-01",
  },
  {
    id: "q-global-2",
    title: "難民のスキル可視化プロジェクト",
    description: "難民が持つ職業スキルをデジタルポートフォリオとして可視化し、就労マッチングに繋げる",
    detail: `## 背景
難民の多くは母国で高度な職業スキルを持っていますが、受入国では証明手段がなく活かせません。

## やること
- スキル評価フレームワークの開発
- デジタルポートフォリオプラットフォームの構築
- 企業向けマッチング機能の実装`,
    size: "large",
    status: "open",
    category: "diversity",
    companyId: "global-compass",
    rewards: ["国際人権分野の実績", "UNHCR連携機会", "多文化チームでの経験"],
    skills: ["Webアプリ開発", "UXリサーチ", "多言語対応", "国際協力"],
    participants: 7,
    comments: 8,
    createdAt: "2026-05-18",
    updatedAt: "2026-06-02",
  },
  {
    id: "q-global-3",
    title: "途上国向け遠隔医療システム",
    description: "通信インフラが限られた途上国でも動作する軽量な遠隔医療システムを開発する",
    detail: `## 背景
途上国の農村部では医師1人あたりの患者数が数万人。遠隔医療が命を救う手段です。

## やること
- 低帯域でも動作するビデオ通話システムの開発
- 多言語対応の症状チェックリストアプリ
- 3カ国でのパイロット導入と効果測定`,
    size: "large",
    status: "open",
    category: "healthcare",
    companyId: "global-compass",
    rewards: ["グローバルヘルス分野の実績", "WHO連携機会", "現地視察"],
    skills: ["モバイルアプリ開発", "低帯域最適化", "医療知識", "多言語対応"],
    participants: 4,
    comments: 5,
    createdAt: "2026-05-22",
    updatedAt: "2026-06-01",
  },
];

export const comments: Comment[] = [
  {
    id: "c-001",
    questId: "quest-001",
    author: "tanaka_dev",
    avatar: "👨‍💻",
    body: "React/Next.jsエンジニアです。CO2可視化のダッシュボード、ぜひ参加したいです！D3.jsでのデータビジュアライゼーション経験あります。",
    createdAt: "2026-05-21",
  },
  {
    id: "c-002",
    questId: "quest-001",
    author: "factory_suzuki",
    avatar: "🏭",
    body: "金属加工業の現場管理者です。データの入力が複雑だと現場は使いません。シンプルさが命です。テンプレートの監修なら協力できます。",
    createdAt: "2026-05-23",
  },
  {
    id: "c-003",
    questId: "quest-001",
    author: "ux_mika",
    avatar: "🎨",
    body: "UXデザイナーとして手を挙げます。製造現場のタブレットUIの経験があるので、非エンジニア向けの設計は得意分野です。",
    createdAt: "2026-05-25",
  },
  {
    id: "c-004",
    questId: "quest-003",
    author: "care_researcher",
    avatar: "📊",
    body: "介護福祉士として10年、その後リサーチャーに転身しました。インタビュー設計から分析まで一貫して担当できます。",
    createdAt: "2026-04-12",
  },
  {
    id: "c-005",
    questId: "quest-003",
    author: "helper_yamada",
    avatar: "💪",
    body: "現役ヘルパーです。インタビューを受ける側としても、調査設計への意見出しとしても参加したいです。現場の本音を伝えたい。",
    createdAt: "2026-04-15",
  },
];

export type EngagementType = "fulltime" | "contract" | "intern" | "probono" | "project" | "oneday";

export interface Story {
  id: string;
  companyId: string;
  title: string;
  summary: string;
  personName: string;
  personRole: string;
  personAvatar: string;
  quote: string;
  tags: string[];
}

export interface SocialTheme {
  id: string;
  label: string;
  subtitle: string;
  color: string;
  description: string;
  whyItMatters: string;
  stats: { label: string; value: string }[];
  stories: Story[];
  engagements: { type: EngagementType; questIds: string[] }[];
  questIds: string[];
}

export const engagementLabels: Record<EngagementType, { label: string; icon: string; description: string }> = {
  fulltime: { label: "正社員", icon: "🏢", description: "志を本業にする" },
  contract: { label: "業務委託", icon: "💼", description: "スキルで貢献する" },
  intern: { label: "インターン", icon: "🎓", description: "学びながら関わる" },
  probono: { label: "プロボノ", icon: "🤲", description: "専門性を無償で活かす" },
  project: { label: "プロジェクト参加", icon: "🚀", description: "期間限定で挑戦する" },
  oneday: { label: "1Day体験", icon: "👀", description: "まずは見てみる" },
};

export const socialThemes: SocialTheme[] = [
  {
    id: "nature",
    label: "自然との共生",
    subtitle: "循環型社会の創造",
    color: "#4A9E5C",
    description: "気候変動、生物多様性の喪失、資源の枯渇。地球環境の課題は待ったなしです。テクノロジーとビジネスの力で、自然と人間が共存する循環型社会を作る。それが「自然との共生」のテーマです。",
    whyItMatters: "日本の製造業におけるCO2排出量の約6割は中小企業が占めています。しかし、可視化・削減のためのリソースが圧倒的に不足。技術を持つ人と、現場を知る人が繋がることで、初めて本当の変化が生まれます。",
    stats: [
      { label: "参加企業", value: "12社" },
      { label: "CO2削減目標", value: "年間1,200t" },
      { label: "参加者", value: "47人" },
    ],
    stories: [
      {
        id: "s-nature-1",
        companyId: "greentech-jp",
        title: "町工場のおっちゃんがデータサイエンティストになった日",
        summary: "「うちみたいな小さい工場には関係ない」と思っていた金属加工の鈴木さん。CO2可視化ダッシュボード導入をきっかけに、自らデータを読み解き、エネルギーコストを23%削減した。",
        personName: "鈴木 健一",
        personRole: "金属加工業 工場長",
        personAvatar: "🏭",
        quote: "数字が見えたら、現場の人間は勝手に工夫し始めるんだよ。CO2とかよくわからんかったけど、電気代が下がるなら最高じゃないか。",
        tags: ["製造業", "データ可視化", "中小企業"],
      },
      {
        id: "s-nature-2",
        companyId: "greentech-jp",
        title: "エンジニアが脱炭素の最前線に立つということ",
        summary: "大手SIerを辞めてグリーンテックに入社した田中さん。「技術で社会を変えたい」という漠然とした想いが、製造現場と向き合う中で具体的な使命に変わった。",
        personName: "田中 悠太",
        personRole: "グリーンテック・ジャパン エンジニア",
        personAvatar: "👨‍💻",
        quote: "コードを書く先に、煙突から出る煙が減る。こんなにフィードバックがダイレクトな仕事は初めてだった。",
        tags: ["エンジニア", "転職", "インパクト"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["quest-001"] },
      { type: "contract", questIds: ["quest-004"] },
      { type: "project", questIds: ["quest-008", "q-nature-4"] },
      { type: "intern", questIds: ["quest-001"] },
      { type: "oneday", questIds: ["quest-008"] },
    ],
    questIds: ["quest-001", "quest-004", "quest-008", "q-nature-4"],
  },
  {
    id: "life",
    label: "人生に寄り添い",
    subtitle: "「生きる」に貢献",
    color: "#E0736E",
    description: "介護、医療、メンタルヘルス。人の「生きる」を支える領域は、最も人手が足りず、最もやりがいのある分野です。テクノロジーの力で、支える人も支えられる人も笑顔になれる仕組みを作る。",
    whyItMatters: "2025年には介護人材が約32万人不足すると言われています。現場は疲弊し、離職率は高い。でも「辞めたくない」という声も多い。課題は「仕事そのもの」ではなく「仕事の仕組み」にあります。",
    stats: [
      { label: "参加企業", value: "8社" },
      { label: "インタビュー収集数", value: "67/100人" },
      { label: "参加者", value: "21人" },
    ],
    stories: [
      {
        id: "s-life-1",
        companyId: "komorebi-care",
        title: "介護の現場から聞こえてきた、予想外の『声』",
        summary: "100人インタビュープロジェクトで見えてきたのは、「給料が安い」ではなく「自分の工夫が認められない」という声。ヘルパーたちの本当の課題は、想像とは違うところにあった。",
        personName: "佐々木 美咲",
        personRole: "UXリサーチャー（プロボノ参加）",
        personAvatar: "🎨",
        quote: "リサーチャーとして参加したはずが、介護の奥深さに完全にハマりました。今は本業の傍ら、毎週インタビューを続けています。",
        tags: ["介護", "UXリサーチ", "プロボノ"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["quest-007"] },
      { type: "probono", questIds: ["quest-003"] },
      { type: "project", questIds: ["q-life-3"] },
      { type: "intern", questIds: ["quest-007"] },
      { type: "oneday", questIds: ["quest-003"] },
    ],
    questIds: ["quest-003", "quest-007", "q-life-3"],
  },
  {
    id: "culture",
    label: "文化をつくる",
    subtitle: "伝える",
    color: "#8B7355",
    description: "伝統工芸、祭り、芸術。日本の文化は、担い手の高齢化と後継者不足で静かに消えつつあります。デジタル技術で記録し、新しい届け方で価値を繋ぐ。文化の未来は、テクノロジーと感性の掛け合わせの中にあります。",
    whyItMatters: "経済産業省の調査では、伝統工芸品の生産額はピーク時の1/5以下に。職人の平均年齢は65歳を超え、70%の工房が後継者不在。「残す」だけでなく「活かす」アプローチが求められています。",
    stats: [
      { label: "アーカイブ済み工芸", value: "23件" },
      { label: "連携職人数", value: "80名" },
      { label: "参加者", value: "9人" },
    ],
    stories: [
      {
        id: "s-culture-1",
        companyId: "heritage-bridge",
        title: "3Dスキャンが、72歳の職人の手を未来に残した",
        summary: "京都の漆職人・中村さんの技法を3Dスキャンで記録。指の動き、力の入れ方、道具の角度。デジタルが捉えたのは、言葉では伝えられない「身体知」だった。",
        personName: "中村 清",
        personRole: "漆芸職人・人間国宝候補",
        personAvatar: "🎨",
        quote: "若い子が機械を持ってきて、わしの手をぐるぐる撮るんや。不思議やったけど、弟子にも伝えきれなかったことが形になった。",
        tags: ["伝統工芸", "3Dスキャン", "技術伝承"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-culture-1"] },
      { type: "contract", questIds: ["q-culture-2"] },
      { type: "project", questIds: ["q-culture-1", "q-culture-2"] },
      { type: "oneday", questIds: ["q-culture-2"] },
    ],
    questIds: ["q-culture-1", "q-culture-2"],
  },
  {
    id: "work",
    label: "はたらくことを",
    subtitle: "もっと豊かに",
    color: "#3D3D3D",
    description: "障がい者雇用、就労支援、多様な働き方。「はたらく」は人間の尊厳に関わる問題です。誰もが自分の『得意』を活かせる労働市場を作る。それは福祉ではなく、社会全体の生産性向上でもあります。",
    whyItMatters: "法定雇用率の引き上げにより企業の障がい者雇用ニーズは急増していますが、「何をしてもらえばいいかわからない」企業が7割。マッチングの仕組みと成功事例の共有が鍵です。",
    stats: [
      { label: "就労支援実績", value: "年間200名" },
      { label: "連携企業", value: "150社" },
      { label: "参加者", value: "22人" },
    ],
    stories: [
      {
        id: "s-work-1",
        companyId: "tsunagu-works",
        title: "「できない」を「できる」に変えた、業務切り出しの魔法",
        summary: "「障がい者に任せる仕事がない」と言っていた製造業の人事担当者。ツナグワークスのコンサルを受けて業務を分解したら、20以上の「実は人手が足りなかった」タスクが見つかった。",
        personName: "山田 真理子",
        personRole: "ツナグワークス コンサルタント",
        personAvatar: "🤝",
        quote: "障がい者雇用は福祉じゃない。人材戦略です。その視点を持てた瞬間に、企業の姿勢がガラッと変わる。",
        tags: ["障がい者雇用", "業務設計", "D&I"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["quest-005", "quest-009"] },
      { type: "contract", questIds: ["quest-005"] },
      { type: "probono", questIds: ["quest-009"] },
      { type: "project", questIds: ["q-work-3"] },
      { type: "intern", questIds: ["quest-009"] },
    ],
    questIds: ["quest-005", "quest-009", "q-work-3"],
  },
  {
    id: "challenge",
    label: "人の挑戦",
    subtitle: "自己実現を応援",
    color: "#D4729A",
    description: "起業、新規事業、キャリアチェンジ。挑戦する人を孤独にしない。メンタリング、コミュニティ、実践の場を通じて、「やりたい」を「やっている」に変える伴走を。",
    whyItMatters: "社会起業家の3年生存率は約40%。失敗の最大原因は資金でもアイデアでもなく「孤立」。経験者のメンタリングがあるだけで生存率は2倍になるという調査結果があります。",
    stats: [
      { label: "メンター登録数", value: "38名" },
      { label: "支援した起業家", value: "120名" },
      { label: "参加者", value: "16人" },
    ],
    stories: [
      {
        id: "s-challenge-1",
        companyId: "machi-lab",
        title: "高校生が地域の課題をビジネスに変えた夏",
        summary: "ソーシャルビジネスコンテストに参加した高校2年の木村さん。地元の空き家問題を題材にしたプランが優秀賞を受賞。現在は実際にNPOを設立準備中。",
        personName: "木村 凛",
        personRole: "高校2年生・NPO設立準備中",
        personAvatar: "🌟",
        quote: "大人たちが『それ、いいじゃん』って本気で言ってくれたのが嬉しかった。自分のアイデアが誰かの役に立つかもって、初めて思えた。",
        tags: ["高校生", "起業", "地域課題"],
      },
    ],
    engagements: [
      { type: "probono", questIds: ["q-challenge-1"] },
      { type: "project", questIds: ["q-challenge-2"] },
      { type: "intern", questIds: ["q-challenge-2"] },
      { type: "oneday", questIds: ["q-challenge-2"] },
    ],
    questIds: ["q-challenge-1", "q-challenge-2"],
  },
  {
    id: "technology",
    label: "技術の明日を拓き",
    subtitle: "常識を変える",
    color: "#6B8CC7",
    description: "AI、IoT、ドローン、ブロックチェーン。先端技術は、社会課題のある「現場」に届いて初めて価値になります。研究室から飛び出して、本当に困っている人のためにコードを書く。",
    whyItMatters: "日本のAI導入率は大企業で約30%、中小企業では5%未満。技術そのものは揃っているのに、現場とのブリッジが圧倒的に足りていません。",
    stats: [
      { label: "技術プロジェクト", value: "15件" },
      { label: "連携大学", value: "8校" },
      { label: "参加者", value: "17人" },
    ],
    stories: [
      {
        id: "s-tech-1",
        companyId: "mirai-tech",
        title: "農家のおばあちゃんがIoTセンサーの虜になった理由",
        summary: "「機械はよくわからん」と言っていた農家の田中さん。土壌センサーを設置してスマホに通知が来る仕組みを導入したら、毎朝データをチェックするのが日課に。収穫量は15%向上。",
        personName: "田中 ハナ",
        personRole: "農家・72歳",
        personAvatar: "👩‍🌾",
        quote: "スマホが『水あげて〜』って教えてくれるの。孫に教えてもらったんだけど、もう手放せないわ。",
        tags: ["農業IoT", "シニア", "スマート農業"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-tech-1"] },
      { type: "contract", questIds: ["q-tech-1", "q-tech-3"] },
      { type: "project", questIds: ["q-tech-2", "q-tech-3"] },
      { type: "intern", questIds: ["q-tech-2"] },
      { type: "oneday", questIds: ["q-tech-2"] },
    ],
    questIds: ["q-tech-1", "q-tech-2", "q-tech-3"],
  },
  {
    id: "lifestyle",
    label: "暮らしに",
    subtitle: "新しい感性や楽しさを",
    color: "#7AB648",
    description: "サステナブルファッション、地域の図書館、コミュニティスペース。日常の暮らしの中に、新しい選択肢と豊かさの定義を提案する。大きなイノベーションではなく、小さな「いいね」の積み重ね。",
    whyItMatters: "ファッション業界は世界第2位の環境汚染産業。でも消費者の85%が「サステナブルな選択をしたい」と回答。暮らしの中の小さな選択が、大きな変化を生み出します。",
    stats: [
      { label: "連携ブランド", value: "15社" },
      { label: "コミュニティスペース", value: "8箇所" },
      { label: "参加者", value: "8人" },
    ],
    stories: [
      {
        id: "s-lifestyle-1",
        companyId: "earth-kitchen",
        title: "捨てられるはずだった服が、新しい素材に生まれ変わる",
        summary: "廃棄衣料のリサイクル研究に参加した大学院生の吉田さん。化学の知識を活かして開発した新素材が、アパレルブランド3社に採用された。",
        personName: "吉田 彩",
        personRole: "大学院生・素材研究者",
        personAvatar: "🧪",
        quote: "自分の研究が実際にプロダクトになるなんて思わなかった。基礎研究と社会実装の間に、こういう場があるのは本当にありがたい。",
        tags: ["サステナブル", "素材研究", "産学連携"],
      },
    ],
    engagements: [
      { type: "project", questIds: ["q-life-s1"] },
      { type: "probono", questIds: ["q-life-s2"] },
      { type: "oneday", questIds: ["q-life-s2"] },
    ],
    questIds: ["q-life-s1", "q-life-s2"],
  },
  {
    id: "infrastructure",
    label: "インフラ・社会基盤を",
    subtitle: "進化させる",
    color: "#8B8B6B",
    description: "水道、道路、交通、通信。当たり前に使っているインフラが、人口減少で維持できなくなる時代。テクノロジーと新しい運営モデルで、インフラの未来を設計し直す。",
    whyItMatters: "2040年には全国の自治体の半数がインフラ維持困難に陥ると推計されています。IoTによる遠隔監視やオープンデータ活用が、限られた資源で社会を維持する鍵です。",
    stats: [
      { label: "調査対象自治体", value: "25市町村" },
      { label: "オープンデータ化路線", value: "180路線" },
      { label: "参加者", value: "10人" },
    ],
    stories: [
      {
        id: "s-infra-1",
        companyId: "mirai-tech",
        title: "バスの時刻表をデジタル化したら、お年寄りの外出が増えた",
        summary: "地方のバス会社と協力して運行データをGTFS形式で公開。Google Maps対応になった途端、高齢者の「バスの乗り方がわからない」問題が解消し、乗客数が12%増加。",
        personName: "高橋 翔",
        personRole: "データエンジニア（プロボノ参加）",
        personAvatar: "🚌",
        quote: "たかがデータ変換。でもそれだけで、おばあちゃんがバスに乗れるようになった。技術の力を一番実感した瞬間でした。",
        tags: ["交通", "オープンデータ", "高齢化"],
      },
    ],
    engagements: [
      { type: "contract", questIds: ["q-infra-2"] },
      { type: "project", questIds: ["q-infra-1", "q-infra-2"] },
      { type: "probono", questIds: ["q-infra-2"] },
    ],
    questIds: ["q-infra-1", "q-infra-2"],
  },
  {
    id: "education",
    label: "子どもたちや学びの",
    subtitle: "未来をひらく",
    color: "#E8A63A",
    description: "離島の教育格差、不登校、STEAM教育。すべての子どもが「学びたい」と思ったときに、最高の学びにアクセスできる社会を作る。場所も、環境も、経済状況も、関係なく。",
    whyItMatters: "不登校の児童生徒は過去最多の約30万人。離島・過疎地ではIT教育の人材が圧倒的に不足。一方でオンライン技術は成熟し、解決の手段は揃っています。足りないのは、繋ぐ人です。",
    stats: [
      { label: "オンライン授業実施校", value: "18校" },
      { label: "バーチャル教室利用者", value: "120名" },
      { label: "参加者", value: "20人" },
    ],
    stories: [
      {
        id: "s-edu-1",
        companyId: "manabiya",
        title: "離島の中学生がPythonで作った『漁獲量予測アプリ』",
        summary: "オンラインプログラミング授業を受けた奄美大島の中学生が、地元の漁師のために漁獲量予測アプリを開発。「自分の島の役に立てた」と涙した姿が、講師チーム全員の原動力に。",
        personName: "太田 海斗",
        personRole: "中学3年生・奄美大島",
        personAvatar: "🐟",
        quote: "Pythonって呪文みたいだったけど、先生が毎週画面の向こうで教えてくれた。じいちゃんの船に使えるアプリ作れて、最高。",
        tags: ["離島教育", "プログラミング", "地域課題"],
      },
    ],
    engagements: [
      { type: "probono", questIds: ["quest-002"] },
      { type: "project", questIds: ["quest-006", "q-edu-3", "q-edu-4"] },
      { type: "intern", questIds: ["q-edu-3"] },
      { type: "oneday", questIds: ["quest-002"] },
    ],
    questIds: ["quest-002", "quest-006", "q-edu-3", "q-edu-4"],
  },
  {
    id: "food",
    label: "食・農の",
    subtitle: "これからを追求する",
    color: "#5B8C3E",
    description: "フードロス、都市農業、食の安全。「食べる」は生きることの根幹。余っているのに届かない矛盾、農家の高齢化、食の多様性の喪失。テクノロジーと人の繋がりで、食の未来を作り直す。",
    whyItMatters: "日本のフードロスは年間523万トン。一方で7人に1人の子どもが貧困状態。余剰食品と需要のミスマッチを解消するだけで、社会が大きく変わります。",
    stats: [
      { label: "フードロス削減量", value: "月間8.5t" },
      { label: "連携飲食店", value: "1,200店" },
      { label: "参加者", value: "10人" },
    ],
    stories: [
      {
        id: "s-food-1",
        companyId: "earth-kitchen",
        title: "閉店1時間前の『もったいない』がつなぐ、店と人",
        summary: "フードロスマッチングアプリで余剰食品を提供し始めたカフェオーナーの西田さん。毎日捨てていたパンが、子ども食堂の子どもたちの笑顔に変わった。",
        personName: "西田 あかり",
        personRole: "カフェオーナー",
        personAvatar: "🍞",
        quote: "前は閉店後にパンを捨てるのが一番辛かった。今は『明日も多めに焼こう』って思える。アプリひとつで、こんなに気持ちが変わるなんて。",
        tags: ["フードロス", "飲食", "子ども食堂"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-food-1"] },
      { type: "project", questIds: ["q-food-1", "q-food-2"] },
      { type: "probono", questIds: ["q-food-2"] },
      { type: "oneday", questIds: ["q-food-2"] },
    ],
    questIds: ["q-food-1", "q-food-2"],
  },
  {
    id: "experience",
    label: "非日常の",
    subtitle: "感動体験を提供する",
    color: "#C75BA3",
    description: "秘境ツアー、VR体験、文化ツーリズム。日常を離れた感動体験は、人の価値観を変え、新しい行動を生み出す。体験の力で地域と人を繋ぎ、持続可能な観光モデルを作る。",
    whyItMatters: "オーバーツーリズムが問題になる観光地がある一方、知られざる地方の魅力は観光資源として活かされていません。体験価値を軸にした新しい観光が、地域を救います。",
    stats: [
      { label: "ツアー開発地域", value: "8地域" },
      { label: "VRコンテンツ", value: "5作品" },
      { label: "参加者", value: "8人" },
    ],
    stories: [
      {
        id: "s-exp-1",
        companyId: "machi-lab",
        title: "『何もない』が最高の観光資源だった",
        summary: "過疎の村でツアーを企画した時、地元の人は「うちには何もない」と言った。でも満天の星空、手作り豆腐、囲炉裏の火。参加者の満足度は5段階中4.9。『何もない贅沢』がブランドになった。",
        personName: "渡辺 麻衣",
        personRole: "観光プランナー",
        personAvatar: "✨",
        quote: "観光って『映える場所に行く』ことじゃなかった。『自分が変わる体験をする』こと。それに気づいた時、仕事の意味が変わった。",
        tags: ["サステナブル観光", "地方創生", "体験設計"],
      },
    ],
    engagements: [
      { type: "project", questIds: ["q-exp-1", "q-exp-2"] },
      { type: "contract", questIds: ["q-exp-2"] },
      { type: "oneday", questIds: ["q-exp-1"] },
    ],
    questIds: ["q-exp-1", "q-exp-2"],
  },
  {
    id: "community",
    label: "街をつくる",
    subtitle: "地域に貢献する",
    color: "#6B9E7A",
    description: "空き家、シェアハウス、地域通貨。人口が減る時代の「まちづくり」は、箱モノではなく関係性のデザイン。住む人も訪れる人も、一緒に街を育てていく仕組みを作る。",
    whyItMatters: "全国の空き家は約849万戸で過去最多。一方で地方移住希望者は年々増加中。問題は「空き家がある」ことではなく「つなぐ仕組みがない」こと。テクノロジーとコミュニティデザインで解決できます。",
    stats: [
      { label: "運営拠点", value: "12箇所" },
      { label: "移住マッチング", value: "年間150組" },
      { label: "参加者", value: "16人" },
    ],
    stories: [
      {
        id: "s-comm-1",
        companyId: "machi-lab",
        title: "空き家をリノベしたら、街に『おかえり』が生まれた",
        summary: "廃墟同然の空き家をコミュニティスペースにリノベ。最初は怪訝な顔だった地元のおじいちゃんたちが、今では毎日お茶を持って遊びに来る常連に。",
        personName: "小林 裕介",
        personRole: "まちラボ 拠点マネージャー",
        personAvatar: "🏠",
        quote: "建物を直すのは手段でしかなかった。本当に作りたかったのは、人と人の間に流れる空気。それは図面には描けない。",
        tags: ["空き家活用", "リノベーション", "コミュニティ"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-comm-1", "q-comm-4"] },
      { type: "contract", questIds: ["q-comm-3", "q-comm-4"] },
      { type: "project", questIds: ["q-comm-1", "q-comm-2", "q-comm-3", "q-comm-4"] },
      { type: "intern", questIds: ["q-comm-1", "q-comm-5"] },
      { type: "oneday", questIds: ["q-comm-2", "q-comm-5"] },
    ],
    questIds: ["q-comm-1", "q-comm-2", "q-comm-3", "q-comm-4", "q-comm-5"],
  },
  {
    id: "japan",
    label: "日本らしい価値を",
    subtitle: "世界中へ",
    color: "#C44E4E",
    description: "和食、職人技、おもてなし。日本が世界に誇る価値を、新しい形で世界に届ける。伝統を守るだけでなく、テクノロジーとクリエイティビティで進化させ、次の100年の日本ブランドを作る。",
    whyItMatters: "和食はユネスコ無形文化遺産ですが、海外での理解は「寿司・ラーメン」に偏っています。NFTやデジタルアートという新しい手段が、職人に新たな収益源と世界への扉を開きます。",
    stats: [
      { label: "連携職人", value: "80名" },
      { label: "海外売上成長率", value: "前年比200%" },
      { label: "参加者", value: "7人" },
    ],
    stories: [
      {
        id: "s-japan-1",
        companyId: "heritage-bridge",
        title: "和包丁のNFTが、NYのシェフに届いた日",
        summary: "堺の和包丁職人が作る工程を撮影・NFT化。購入者には実際の包丁も届く仕組みに。NYの星付きシェフがSNSで紹介し、職人の元に世界中から注文が殺到。",
        personName: "岩田 鉄太郎",
        personRole: "和包丁職人・4代目",
        personAvatar: "🔨",
        quote: "ニューヨークの料理人が『あなたの包丁が欲しい』って。親父に言ったら泣いとったわ。こんな時代が来るとはな。",
        tags: ["NFT", "和包丁", "職人", "海外展開"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-jp-1"] },
      { type: "contract", questIds: ["q-jp-2"] },
      { type: "project", questIds: ["q-jp-1", "q-jp-2"] },
      { type: "oneday", questIds: ["q-jp-1"] },
    ],
    questIds: ["q-jp-1", "q-jp-2"],
  },
  {
    id: "economy",
    label: "経営・経済から",
    subtitle: "社会を元気に",
    color: "#3B7DD4",
    description: "インパクト投資、地方DX、ソーシャルファイナンス。お金の流れを変えれば、社会は変わる。経営と経済の専門知識を、社会課題の解決に直結させる。ビジネスの力で社会を元気にする。",
    whyItMatters: "地方の中小企業の約7割がDXに未着手。インパクト投資の市場は10年で10倍に成長。経営・金融のプロが社会課題に関わるチャネルが圧倒的に足りていません。",
    stats: [
      { label: "DX支援企業", value: "年間30社" },
      { label: "インパクト投資学習者", value: "250名" },
      { label: "参加者", value: "14人" },
    ],
    stories: [
      {
        id: "s-econ-1",
        companyId: "mirai-tech",
        title: "元・外資コンサルが地方の町工場に通い続ける理由",
        summary: "マッキンゼーを辞めてDX支援隊に参加した佐藤さん。最初は「3ヶ月だけ」のつもりが、町工場のおっちゃんたちの変化に魅せられて2年目に突入。",
        personName: "佐藤 健太",
        personRole: "DX支援隊リーダー（元外資コンサル）",
        personAvatar: "📊",
        quote: "コンサルの時は偉そうに提案書を書いてた。今は毎朝5時に工場に行って、一緒にExcelの使い方から教えてる。こっちの方が100倍手応えがある。",
        tags: ["DX支援", "地方創生", "キャリアチェンジ"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-econ-2"] },
      { type: "contract", questIds: ["q-econ-2"] },
      { type: "probono", questIds: ["q-econ-1", "q-econ-2"] },
      { type: "project", questIds: ["q-econ-1"] },
      { type: "intern", questIds: ["q-econ-2"] },
    ],
    questIds: ["q-econ-1", "q-econ-2"],
  },
  {
    id: "global",
    label: "世界各地の",
    subtitle: "発展と幸せに貢献",
    color: "#4BA89C",
    description: "水インフラ、難民支援、遠隔医療。国境を越えて、すべての人が自分の可能性を発揮できる世界を作る。日本の技術と経験を、世界の最も困難な現場に届ける。",
    whyItMatters: "世界で4億人が安全な飲料水にアクセスできず、約1億人が難民・避難民。日本には世界トップクラスの水処理技術と医療技術がある。足りないのは、現場に届ける仕組みと人です。",
    stats: [
      { label: "展開国", value: "8カ国" },
      { label: "スキル研修修了者", value: "年間500名" },
      { label: "参加者", value: "16人" },
    ],
    stories: [
      {
        id: "s-global-1",
        companyId: "global-compass",
        title: "ケニアの村に水が届いた日、エンジニアは泣いた",
        summary: "日本の浄水技術を現地仕様にカスタマイズして導入。蛇口から水が出た瞬間、村中の子どもたちが踊り出した。プロジェクトリーダーの松本さんは、その場で泣き崩れた。",
        personName: "松本 拓也",
        personRole: "グローバルコンパス プロジェクトリーダー",
        personAvatar: "🌍",
        quote: "技術は世界を変えるって教科書に書いてあった。でも目の前で本当に変わるのを見たとき、自分の人生の意味がわかった気がした。",
        tags: ["水インフラ", "ケニア", "技術移転"],
      },
    ],
    engagements: [
      { type: "fulltime", questIds: ["q-global-1", "q-global-2"] },
      { type: "contract", questIds: ["q-global-3"] },
      { type: "project", questIds: ["q-global-1", "q-global-2", "q-global-3"] },
      { type: "intern", questIds: ["q-global-2"] },
      { type: "oneday", questIds: ["q-global-2"] },
    ],
    questIds: ["q-global-1", "q-global-2", "q-global-3"],
  },
];

export function getQuestsByCompany(companyId: string): Quest[] {
  return quests.filter((q) => q.companyId === companyId);
}

export function getCommentsByQuest(questId: string): Comment[] {
  return comments.filter((c) => c.questId === questId);
}

export function getQuestsByTheme(themeId: string): Quest[] {
  const theme = socialThemes.find((t) => t.id === themeId);
  if (!theme) return [];
  return theme.questIds.map((id) => quests.find((q) => q.id === id)).filter((q): q is Quest => !!q);
}

export function getThemeById(themeId: string): SocialTheme | undefined {
  return socialThemes.find((t) => t.id === themeId);
}
