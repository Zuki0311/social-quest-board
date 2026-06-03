import Link from "next/link";
import {
  quests,
  companies,
  categories,
  sizeLabels,
  statusLabels,
  type Quest,
} from "@/lib/data";

function QuestCard({ quest }: { quest: Quest }) {
  const company = companies.find((c) => c.id === quest.companyId);
  const cat = categories[quest.category];
  const size = sizeLabels[quest.size];
  const status = statusLabels[quest.status];

  return (
    <Link
      href={`/quests/${quest.id}`}
      className="block bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center gap-1 ${status.color} text-xs`}>
                <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                {status.label}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${size.color}`}
              >
                {size.label}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${cat.color}`}
              >
                {cat.emoji} {cat.label}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
              {quest.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">
              {quest.description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {company && (
              <span className="flex items-center gap-1">
                <span>{company.logo}</span>
                <span>{company.name}</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {quest.participants}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {quest.comments}
            </span>
            <span>更新 {quest.updatedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function StatsBar() {
  const openCount = quests.filter((q) => q.status === "open").length;
  const inProgressCount = quests.filter((q) => q.status === "in-progress").length;
  const totalParticipants = quests.reduce((sum, q) => sum + q.participants, 0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {[
        { label: "公開中クエスト", value: openCount, color: "text-green-600" },
        { label: "進行中", value: inProgressCount, color: "text-yellow-600" },
        { label: "参加企業", value: companies.length, color: "text-blue-600" },
        { label: "参加者", value: totalParticipants, color: "text-purple-600" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-gray-200 rounded-lg p-4 text-center"
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button className="text-xs px-3 py-1.5 rounded-full bg-gray-900 text-white cursor-pointer">
        すべて
      </button>
      {Object.entries(categories).map(([key, cat]) => (
        <button
          key={key}
          className={`text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-400 transition-colors cursor-pointer ${cat.color}`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          社会課題を、みんなのクエストに。
        </h1>
        <p className="text-gray-500 text-lg">
          企業のビジョンと困りごとが「クエスト」として公開される。
          あなたのスキルで、社会を変える冒険に出よう。
        </p>
      </div>

      <StatsBar />
      <CategoryFilter />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          クエスト一覧
          <span className="text-sm font-normal text-gray-500 ml-2">
            {quests.length} quests
          </span>
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>並び替え:</span>
          <select className="border border-gray-200 rounded px-2 py-1 text-sm bg-white">
            <option>最新更新</option>
            <option>参加者数</option>
            <option>コメント数</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
