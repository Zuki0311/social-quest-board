"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface QuestBubble {
  id: string;
  questId: string;
  title: string;
  shortTitle: string;
  participants: number;
  status: "open" | "in-progress" | "completed";
  angle: number;
  targetDistance: number;
  currentDistance: number;
  radius: number;
  pulsePhase: number;
}

interface ThemeNode {
  id: string;
  label: string;
  subtitle: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  currentRadius: number;
  targetRadius: number;
  quests: QuestBubble[];
  expanded: boolean;
}

interface QuestData {
  questId: string;
  title: string;
  shortTitle: string;
  participants: number;
  status: "open" | "in-progress" | "completed";
}

const THEME_QUESTS: Record<string, QuestData[]> = {
  nature: [
    { questId: "quest-001", title: "中小製造業100社のCO2排出量を可視化するダッシュボード構築", shortTitle: "CO2可視化", participants: 8, status: "open" },
    { questId: "quest-004", title: "工場のエネルギーデータAPI標準仕様の策定", shortTitle: "API標準化", participants: 5, status: "open" },
    { questId: "quest-008", title: "AI×製造業 カーボンニュートラル・ハッカソン開催", shortTitle: "ハッカソン", participants: 7, status: "open" },
    { questId: "q-nature-4", title: "脱炭素サプライチェーン設計ワークショップ", shortTitle: "脱炭素SC", participants: 3, status: "open" },
  ],
  life: [
    { questId: "quest-003", title: "訪問介護ヘルパーの『声』を集めるインタビュー調査", shortTitle: "ヘルパー調査", participants: 15, status: "in-progress" },
    { questId: "quest-007", title: "介護記録のAI音声入力アプリのUXリサーチ", shortTitle: "音声入力UX", participants: 2, status: "open" },
    { questId: "q-life-3", title: "在宅医療の情報格差を埋めるポータルサイト構築", shortTitle: "医療情報格差", participants: 4, status: "open" },
  ],
  culture: [
    { questId: "q-culture-1", title: "伝統工芸×デジタルアーカイブプロジェクト", shortTitle: "工芸アーカイブ", participants: 6, status: "open" },
    { questId: "q-culture-2", title: "地方の祭りをオンラインで世界に発信", shortTitle: "祭り発信", participants: 3, status: "open" },
  ],
  work: [
    { questId: "quest-009", title: "就労移行支援プログラムのオープンソース教材開発", shortTitle: "教材開発", participants: 12, status: "in-progress" },
    { questId: "quest-005", title: "障がい者雇用の成功事例マップを作る", shortTitle: "成功事例マップ", participants: 6, status: "open" },
    { questId: "q-work-3", title: "リモートワーク孤独解消プログラムの設計", shortTitle: "孤独解消", participants: 4, status: "open" },
  ],
  challenge: [
    { questId: "q-challenge-1", title: "社会起業家メンタリングネットワーク構築", shortTitle: "起業メンタリング", participants: 9, status: "open" },
    { questId: "q-challenge-2", title: "高校生ソーシャルビジネスコンテスト運営", shortTitle: "高校生ビジコン", participants: 7, status: "open" },
  ],
  technology: [
    { questId: "q-tech-1", title: "AIで町工場の品質検査を自動化するプロジェクト", shortTitle: "AI品質検査", participants: 5, status: "open" },
    { questId: "q-tech-2", title: "オープンソース農業IoTキット開発", shortTitle: "農業IoT", participants: 8, status: "in-progress" },
    { questId: "q-tech-3", title: "ドローン×災害救助シミュレーション開発", shortTitle: "災害ドローン", participants: 4, status: "open" },
  ],
  lifestyle: [
    { questId: "q-life-s1", title: "サステナブルファッション新素材の共同研究", shortTitle: "サステナ素材", participants: 3, status: "open" },
    { questId: "q-life-s2", title: "まちの小さな図書館ネットワーク", shortTitle: "小さな図書館", participants: 5, status: "open" },
  ],
  infrastructure: [
    { questId: "q-infra-1", title: "限界集落のインフラ維持モデル策定", shortTitle: "インフラ維持", participants: 4, status: "open" },
    { questId: "q-infra-2", title: "公共交通オープンデータ整備プロジェクト", shortTitle: "交通データ", participants: 6, status: "open" },
  ],
  education: [
    { questId: "quest-002", title: "離島の中学生にプログラミング授業を届けるボランティア講師募集", shortTitle: "離島プログラミング", participants: 3, status: "open" },
    { questId: "quest-006", title: "過疎地域の空き教室をコワーキングスペースに変えるプロジェクト", shortTitle: "廃校コワーク", participants: 4, status: "open" },
    { questId: "q-edu-3", title: "不登校児童のためのオンライン居場所づくり", shortTitle: "オンライン居場所", participants: 8, status: "in-progress" },
    { questId: "q-edu-4", title: "STEAM教育キット無償配布プロジェクト", shortTitle: "STEAMキット", participants: 5, status: "open" },
  ],
  food: [
    { questId: "q-food-1", title: "フードロス削減AIマッチングプラットフォーム", shortTitle: "フードロスAI", participants: 6, status: "open" },
    { questId: "q-food-2", title: "都市農業コミュニティガーデン設立", shortTitle: "都市農業", participants: 4, status: "open" },
  ],
  experience: [
    { questId: "q-exp-1", title: "地方の秘境ツアー企画", shortTitle: "秘境ツアー", participants: 3, status: "open" },
    { questId: "q-exp-2", title: "VR世界遺産バーチャル体験", shortTitle: "VR世界遺産", participants: 5, status: "open" },
  ],
  community: [
    { questId: "q-comm-1", title: "空き家リノベマッチング", shortTitle: "空き家リノベ", participants: 7, status: "open" },
    { questId: "q-comm-2", title: "多世代交流型シェアハウス設計", shortTitle: "多世代シェアハウス", participants: 4, status: "open" },
    { questId: "q-comm-3", title: "地域通貨アプリ開発", shortTitle: "地域通貨", participants: 5, status: "open" },
  ],
  japan: [
    { questId: "q-jp-1", title: "和食文化の海外発信プラットフォーム", shortTitle: "和食発信", participants: 4, status: "open" },
    { questId: "q-jp-2", title: "日本の職人技をNFTで世界へ", shortTitle: "職人NFT", participants: 3, status: "open" },
  ],
  economy: [
    { questId: "q-econ-1", title: "インパクト投資入門プログラム", shortTitle: "インパクト投資", participants: 6, status: "open" },
    { questId: "q-econ-2", title: "地方中小企業のDX支援隊", shortTitle: "地方DX支援", participants: 8, status: "in-progress" },
  ],
  global: [
    { questId: "q-global-1", title: "アフリカ水インフラ技術移転", shortTitle: "水インフラ", participants: 5, status: "open" },
    { questId: "q-global-2", title: "難民のスキル可視化プロジェクト", shortTitle: "難民スキル", participants: 7, status: "open" },
    { questId: "q-global-3", title: "途上国向け遠隔医療システム", shortTitle: "遠隔医療", participants: 4, status: "open" },
  ],
};

const SOCIAL_THEMES = [
  { id: "nature", label: "自然との共生", subtitle: "循環型社会の創造", color: "#4A9E5C", baseRadius: 48 },
  { id: "life", label: "人生に寄り添い", subtitle: "「生きる」に貢献", color: "#E0736E", baseRadius: 44 },
  { id: "culture", label: "文化をつくる", subtitle: "伝える", color: "#8B7355", baseRadius: 40 },
  { id: "work", label: "はたらくことを", subtitle: "もっと豊かに", color: "#3D3D3D", baseRadius: 46 },
  { id: "challenge", label: "人の挑戦", subtitle: "自己実現を応援", color: "#D4729A", baseRadius: 42 },
  { id: "technology", label: "技術の明日を拓き", subtitle: "常識を変える", color: "#6B8CC7", baseRadius: 44 },
  { id: "lifestyle", label: "暮らしに", subtitle: "新しい感性や楽しさを", color: "#7AB648", baseRadius: 40 },
  { id: "infrastructure", label: "インフラ・社会基盤を", subtitle: "進化させる", color: "#8B8B6B", baseRadius: 42 },
  { id: "education", label: "子どもたちや学びの", subtitle: "未来をひらく", color: "#E8A63A", baseRadius: 48 },
  { id: "food", label: "食・農の", subtitle: "これからを追求する", color: "#5B8C3E", baseRadius: 40 },
  { id: "experience", label: "非日常の", subtitle: "感動体験を提供する", color: "#C75BA3", baseRadius: 38 },
  { id: "community", label: "街をつくる", subtitle: "地域に貢献する", color: "#6B9E7A", baseRadius: 44 },
  { id: "japan", label: "日本らしい価値を", subtitle: "世界中へ", color: "#C44E4E", baseRadius: 40 },
  { id: "economy", label: "経営・経済から", subtitle: "社会を元気に", color: "#3B7DD4", baseRadius: 42 },
  { id: "global", label: "世界各地の", subtitle: "発展と幸せに貢献", color: "#4BA89C", baseRadius: 44 },
];

function buildQuests(themeId: string): QuestBubble[] {
  const quests = THEME_QUESTS[themeId] || [];
  return quests.map((q, i) => ({
    id: `${themeId}-q-${i}`,
    questId: q.questId,
    title: q.title,
    shortTitle: q.shortTitle,
    participants: q.participants,
    status: q.status,
    angle: (Math.PI * 2 * i) / quests.length + (Math.random() - 0.5) * 0.3,
    targetDistance: 45 + i * 8,
    currentDistance: 15,
    radius: 16 + Math.min(q.participants, 15) * 0.5,
    pulsePhase: Math.random() * Math.PI * 2,
  }));
}

export default function MapPage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<ThemeNode[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const hoveredRef = useRef<string | null>(null);
  const hoveredQuestRef = useRef<string | null>(null);
  const selectedRef = useRef<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeNode | null>(null);
  const [hoveredQuest, setHoveredQuest] = useState<QuestBubble | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });

  const initNodes = useCallback(() => {
    const cx = dimensions.w / 2;
    const cy = dimensions.h / 2;
    nodesRef.current = SOCIAL_THEMES.map((theme, i) => {
      const angle = (Math.PI * 2 * i) / SOCIAL_THEMES.length;
      const maxR = Math.min(dimensions.w, dimensions.h) * 0.28;
      const dist = maxR * 0.55 + Math.random() * maxR * 0.45;
      return {
        ...theme,
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        currentRadius: theme.baseRadius,
        targetRadius: theme.baseRadius,
        quests: buildQuests(theme.id),
        expanded: false,
      };
    });
  }, [dimensions]);

  useEffect(() => {
    const updateSize = () => {
      setDimensions({ w: window.innerWidth, h: window.innerHeight - 64 });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => { initNodes(); }, [initNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.w * dpr;
    canvas.height = dimensions.h * dpr;
    ctx.scale(dpr, dpr);

    const drawAmoebaPath = (cx: number, cy: number, r: number, t: number, wobbleAmt: number) => {
      ctx.beginPath();
      const pts = 60;
      for (let i = 0; i <= pts; i++) {
        const a = (Math.PI * 2 * i) / pts;
        const w = Math.sin(a * 3 + t * 1.5) * 3 * wobbleAmt +
                  Math.sin(a * 5 - t * 0.8) * 1.5 * wobbleAmt +
                  Math.cos(a * 2 + t * 1.2) * 2.5 * wobbleAmt;
        const pr = r + w;
        const px = cx + Math.cos(a) * pr;
        const py = cy + Math.sin(a) * pr;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = () => {
      timeRef.current += 0.008;
      const t = timeRef.current;
      const nodes = nodesRef.current;
      const cx = dimensions.w / 2;
      const cy = dimensions.h / 2;
      const selected = selectedRef.current;

      for (const node of nodes) {
        // Expand/collapse animation
        node.targetRadius = node.expanded ? node.baseRadius * 1.25 : node.baseRadius;
        node.currentRadius += (node.targetRadius - node.currentRadius) * 0.08;

        // Quest distance animation
        for (const q of node.quests) {
          const target = node.expanded ? q.targetDistance + node.currentRadius : 15;
          q.currentDistance += (target - q.currentDistance) * 0.06;
        }

        // Physics — weaker when something is selected
        const dx = cx - node.x;
        const dy = cy - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          const pull = dist > 220 ? 0.04 : 0.015;
          node.vx += (dx / dist) * pull;
          node.vy += (dy / dist) * pull;
        }

        node.vx += Math.sin(t * 0.5 + node.x * 0.008) * 0.005;
        node.vy += Math.cos(t * 0.4 + node.y * 0.008) * 0.005;

        for (const other of nodes) {
          if (other.id === node.id) continue;
          const ddx = node.x - other.x;
          const ddy = node.y - other.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          const expandedExtra = (node.expanded ? 60 : 0) + (other.expanded ? 60 : 0);
          const minDist = node.currentRadius + other.currentRadius + 30 + expandedExtra;
          if (d < minDist && d > 0) {
            const force = (minDist - d) / d * 0.06;
            node.vx += ddx * force;
            node.vy += ddy * force;
          }
        }

        if (!selected) {
          const mx = node.x - mouseRef.current.x;
          const my = node.y - mouseRef.current.y;
          const md = Math.sqrt(mx * mx + my * my);
          if (md < 100 && md > 0) {
            node.vx += (mx / md) * 0.15;
            node.vy += (my / md) * 0.15;
          }
        }

        node.vx *= 0.95;
        node.vy *= 0.95;
        node.x += node.vx;
        node.y += node.vy;

        const margin = 80;
        if (node.x < margin) { node.x = margin; node.vx *= -0.5; }
        if (node.x > dimensions.w - margin) { node.x = dimensions.w - margin; node.vx *= -0.5; }
        if (node.y < margin) { node.y = margin; node.vy *= -0.5; }
        if (node.y > dimensions.h - margin) { node.y = dimensions.h - margin; node.vy *= -0.5; }
      }

      // -- Draw --
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);

      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(dimensions.w, dimensions.h) * 0.7);
      bgGrad.addColorStop(0, "#f8faf5");
      bgGrad.addColorStop(1, "#eef2e8");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, dimensions.w, dimensions.h);

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (d < 320) {
            const dimFactor = selected ? 0.06 : 0.15;
            const alpha = Math.max(0, (320 - d) / 320) * dimFactor;
            ctx.strokeStyle = `rgba(90, 140, 90, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            const mx = (a.x + b.x) / 2 + Math.sin(t + i) * 12;
            const my = (a.y + b.y) / 2 + Math.cos(t + j) * 12;
            ctx.moveTo(a.x, a.y);
            ctx.quadraticCurveTo(mx, my, b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        const isSelected = selected === node.id;
        const isHovered = hoveredRef.current === node.id;
        const dimmed = selected && !isSelected;
        const r = node.currentRadius * (isHovered && !isSelected ? 1.08 : 1);

        ctx.globalAlpha = dimmed ? 0.35 : 1;

        // Amoeba body
        drawAmoebaPath(node.x, node.y, r, t, isSelected ? 1.5 : 1);
        const grad = ctx.createRadialGradient(node.x - r * 0.2, node.y - r * 0.2, 0, node.x, node.y, r * 1.3);
        grad.addColorStop(0, node.color + "ee");
        grad.addColorStop(0.6, node.color + "cc");
        grad.addColorStop(1, node.color + "88");
        ctx.fillStyle = grad;
        ctx.fill();

        if (isSelected || isHovered) {
          ctx.save();
          ctx.shadowColor = node.color;
          ctx.shadowBlur = isSelected ? 30 : 15;
          ctx.fill();
          ctx.restore();
        }

        // Quest bubbles
        for (const q of node.quests) {
          const qAngle = q.angle + (node.expanded ? 0 : t * 0.3);
          const pulse = 1 + Math.sin(t * 1.5 + q.pulsePhase) * 0.08;
          const qDist = q.currentDistance * pulse;
          const qx = node.x + Math.cos(qAngle) * qDist;
          const qy = node.y + Math.sin(qAngle) * qDist;
          const qr = node.expanded ? q.radius : q.radius * 0.35;
          const isQHovered = hoveredQuestRef.current === q.id;

          // Connection tendril
          ctx.beginPath();
          const startX = node.x + Math.cos(qAngle) * r;
          const startY = node.y + Math.sin(qAngle) * r;
          const ctrlDist = qDist * 0.6;
          const ctrlAngle = qAngle + Math.sin(t + q.pulsePhase) * 0.15;
          const ctrlX = node.x + Math.cos(ctrlAngle) * ctrlDist;
          const ctrlY = node.y + Math.sin(ctrlAngle) * ctrlDist;
          ctx.moveTo(startX, startY);
          ctx.quadraticCurveTo(ctrlX, ctrlY, qx, qy);
          ctx.strokeStyle = node.color + (node.expanded ? "44" : "18");
          ctx.lineWidth = node.expanded ? 2 : 1;
          ctx.stroke();

          // Quest amoeba
          if (node.expanded && qr > 8) {
            drawAmoebaPath(qx, qy, qr, t * 1.2 + q.pulsePhase, 0.6);
          } else {
            ctx.beginPath();
            ctx.arc(qx, qy, qr, 0, Math.PI * 2);
          }

          const qGrad = ctx.createRadialGradient(qx, qy, 0, qx, qy, qr * 1.2);
          if (isQHovered && node.expanded) {
            qGrad.addColorStop(0, node.color + "ff");
            qGrad.addColorStop(1, node.color + "cc");
          } else {
            qGrad.addColorStop(0, node.color + (node.expanded ? "bb" : "44"));
            qGrad.addColorStop(1, node.color + (node.expanded ? "77" : "22"));
          }
          ctx.fillStyle = qGrad;
          ctx.fill();

          if (isQHovered && node.expanded) {
            ctx.save();
            ctx.shadowColor = node.color;
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.restore();
          }

          // Quest label (when expanded)
          if (node.expanded && qr > 10) {
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `bold ${isQHovered ? 10 : 8}px sans-serif`;
            const label = q.shortTitle;
            ctx.fillText(label, qx, qy - 4);
            ctx.font = `${isQHovered ? 9 : 7}px sans-serif`;
            ctx.fillStyle = "#ffffffaa";
            const statusMark = q.status === "in-progress" ? "🔥" : "●";
            ctx.fillText(`${statusMark} ${q.participants}人`, qx, qy + 7);
          }
        }

        // Theme label
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const fontSize = isSelected ? 14 : 11;
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillText(node.label, node.x, node.y - 6);
        ctx.font = `${fontSize - 2}px sans-serif`;
        ctx.fillStyle = "#ffffffcc";
        ctx.fillText(node.subtitle, node.x, node.y + 9);

        if (isSelected) {
          ctx.font = "bold 9px sans-serif";
          ctx.fillStyle = "#ffffff88";
          ctx.fillText(`${node.quests.length} quests`, node.x, node.y + 22);
        }

        ctx.globalAlpha = 1;
      }

      // Center label (dimmed when something is selected)
      if (!selected) {
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 18px sans-serif";
        ctx.fillStyle = "#5B8C5A88";
        ctx.fillText("Social Quest", cx, cy - 12);
        ctx.font = "13px sans-serif";
        ctx.fillStyle = "#5B8C5A55";
        ctx.fillText("テーマをクリックしてクエストを探索", cx, cy + 12);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions]);

  const getNodeAndQuestAtPos = useCallback((x: number, y: number) => {
    const nodes = nodesRef.current;
    for (const node of nodes) {
      if (node.expanded) {
        for (const q of node.quests) {
          const qAngle = q.angle;
          const qDist = q.currentDistance;
          const qx = node.x + Math.cos(qAngle) * qDist;
          const qy = node.y + Math.sin(qAngle) * qDist;
          const d = Math.sqrt((qx - x) ** 2 + (qy - y) ** 2);
          if (d < q.radius + 5) {
            return { node, quest: q };
          }
        }
      }
      const d = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2);
      if (d < node.currentRadius + 8) {
        return { node, quest: null };
      }
    }
    return { node: null, quest: null };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      const { node, quest } = getNodeAndQuestAtPos(x, y);
      hoveredRef.current = node?.id ?? null;
      hoveredQuestRef.current = quest?.id ?? null;
      setHoveredQuest(quest);
      setTooltipPos({ x: e.clientX, y: e.clientY });
    },
    [getNodeAndQuestAtPos]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const { node, quest } = getNodeAndQuestAtPos(x, y);

      if (quest && node?.expanded) {
        router.push(`/quests/${quest.questId}`);
        return;
      }

      if (node) {
        const wasExpanded = node.expanded;
        // Collapse all
        for (const n of nodesRef.current) n.expanded = false;
        // Toggle clicked
        if (!wasExpanded) {
          node.expanded = true;
          selectedRef.current = node.id;
          setSelectedTheme(node);
        } else {
          selectedRef.current = null;
          setSelectedTheme(null);
        }
      } else {
        for (const n of nodesRef.current) n.expanded = false;
        selectedRef.current = null;
        setSelectedTheme(null);
      }
    },
    [getNodeAndQuestAtPos]
  );

  const hasCursor = hoveredRef.current || hoveredQuestRef.current;

  return (
    <div className="relative overflow-hidden -mb-32" style={{ height: dimensions.h }}>
      <canvas
        ref={canvasRef}
        style={{ width: dimensions.w, height: dimensions.h, cursor: hasCursor ? "pointer" : "default" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          hoveredRef.current = null;
          hoveredQuestRef.current = null;
          setHoveredQuest(null);
        }}
        onClick={handleClick}
      />

      {/* Legend */}
      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-gray-100 max-w-xs">
        <h2 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: "serif" }}>
          Social Quest Map
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          15のソーシャルテーマを軸に、社会課題が<br />
          アメーバのように有機的に広がる世界。<br />
          <strong>テーマをクリック</strong>するとクエストが現れます。
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            テーマ
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            クエスト
          </span>
          <span className="flex items-center gap-1">
            <span className="w-8 h-px bg-green-500/30" />
            つながり
          </span>
        </div>
      </div>

      {/* Quest tooltip */}
      {hoveredQuest && (
        <div
          className="pointer-events-none fixed z-50 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
          style={{ left: tooltipPos.x + 16, top: tooltipPos.y - 10, maxWidth: 280 }}
        >
          <p className="font-bold text-sm text-gray-800 mb-1">{hoveredQuest.title}</p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className={hoveredQuest.status === "in-progress" ? "text-yellow-600" : "text-green-600"}>
              {hoveredQuest.status === "in-progress" ? "🔥 進行中" : "● Open"}
            </span>
            <span>{hoveredQuest.participants}人参加</span>
          </div>
          <p className="text-xs text-blue-500 mt-1">クリックで詳細ページへ →</p>
        </div>
      )}

      {/* Selected theme panel */}
      {selectedTheme && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 max-w-lg w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedTheme.color }} />
            <span className="font-bold text-gray-800">{selectedTheme.label}</span>
            <span className="text-xs text-gray-400">{selectedTheme.subtitle}</span>
            <span className="ml-auto text-xs text-gray-400">{selectedTheme.quests.length} クエスト</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTheme.quests.map((q) => (
              <Link
                key={q.id}
                href={`/quests/${q.questId}`}
                className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:shadow-sm"
                style={{
                  borderColor: selectedTheme.color + "44",
                  color: selectedTheme.color,
                  backgroundColor: selectedTheme.color + "0d",
                }}
              >
                {q.status === "in-progress" && "🔥 "}{q.shortTitle}
                <span className="ml-1 opacity-60">{q.participants}人</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
