import Link from "next/link";
import { notFound } from "next/navigation";
import {
  quests,
  companies,
  categories,
  sizeLabels,
  statusLabels,
  getCommentsByQuest,
} from "@/lib/data";

export function generateStaticParams() {
  return quests.map((q) => ({ id: q.id }));
}

export default async function QuestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quest = quests.find((q) => q.id === id);
  if (!quest) notFound();

  const company = companies.find((c) => c.id === quest.companyId);
  const questComments = getCommentsByQuest(quest.id);
  const cat = categories[quest.category];
  const size = sizeLabels[quest.size];
  const status = statusLabels[quest.status];

  const detailElements: React.ReactNode[] = [];
  const lines = quest.detail.split("\n");
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      detailElements.push(
        <ul key={`list-${detailElements.length}`} className="list-disc list-inside space-y-1 text-gray-700">
          {listBuffer.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      detailElements.push(
        <h3 key={`h-${detailElements.length}`} className="text-lg font-semibold mt-6 mb-2">
          {trimmed.replace("## ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      listBuffer.push(trimmed.replace("- ", ""));
    } else {
      flushList();
      detailElements.push(
        <p key={`p-${detailElements.length}`} className="text-gray-700 leading-relaxed">
          {trimmed}
        </p>
      );
    }
  }
  flushList();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          クエスト一覧に戻る
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center gap-1 ${status.color} text-sm`}>
                <span className={`w-2.5 h-2.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${size.color}`}>
                {size.label}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${cat.color}`}>
                {cat.emoji} {cat.label}
              </span>
            </div>

            <h1 className="text-2xl font-bold mb-4">{quest.title}</h1>
            <p className="text-gray-600 mb-6 text-lg">{quest.description}</p>

            <div className="border-t border-gray-100 pt-6">{detailElements}</div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">
              コメント
              <span className="text-sm font-normal text-gray-500 ml-2">
                {questComments.length}件
              </span>
            </h2>

            <div className="space-y-4">
              {questComments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{comment.avatar}</span>
                    <span className="font-medium text-sm">{comment.author}</span>
                    <span className="text-xs text-gray-400">
                      {comment.createdAt}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.body}</p>
                </div>
              ))}

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <textarea
                  placeholder="コメントを書く..."
                  className="w-full border border-gray-200 rounded-md p-3 text-sm resize-none h-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex justify-end mt-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors cursor-pointer">
                    コメントする
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors mb-3 cursor-pointer">
              このクエストに参加する
            </button>
            <button className="w-full border border-gray-200 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-md transition-colors cursor-pointer">
              ギルドとして依頼する
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">参加状況</h3>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">
                <span className="font-semibold">{quest.participants}人</span>が参加中
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm">
                <span className="font-semibold">{quest.comments}件</span>のコメント
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">求めるスキル</h3>
            <div className="flex flex-wrap gap-2">
              {quest.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">リワード</h3>
            <ul className="space-y-2">
              {quest.rewards.map((reward, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-yellow-500 mt-0.5">★</span>
                  {reward}
                </li>
              ))}
            </ul>
          </div>

          {company && (
            <Link
              href={`/companies/${company.id}`}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors"
            >
              <h3 className="font-semibold mb-3">クエスト提供企業</h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{company.logo}</span>
                <div>
                  <div className="font-medium">{company.name}</div>
                  <div className="text-xs text-gray-500">{company.industry}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 line-clamp-2">
                {company.vision}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
