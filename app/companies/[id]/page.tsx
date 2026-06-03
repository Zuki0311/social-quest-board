import Link from "next/link";
import { notFound } from "next/navigation";
import {
  companies,
  quests,
  categories,
  sizeLabels,
  statusLabels,
} from "@/lib/data";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);
  if (!company) notFound();

  const companyQuests = quests.filter((q) => q.companyId === company.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4">
        <Link
          href="/companies"
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          企業一覧に戻る
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex items-start gap-6">
          <span className="text-6xl">{company.logo}</span>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold">{company.name}</h1>
              <span className="text-sm text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
                {company.size}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{company.industry}</p>

            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Vision
              </h2>
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                {company.vision}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                現在地
              </h2>
              <p className="text-gray-700">{company.currentState}</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                困りごと・課題
              </h2>
              <div className="flex flex-wrap gap-2">
                {company.challenges.map((challenge, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 bg-red-50 text-red-700 rounded-full border border-red-100"
                  >
                    {challenge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">
        この企業のクエスト
        <span className="text-sm font-normal text-gray-500 ml-2">
          {companyQuests.length}件
        </span>
      </h2>

      <div className="space-y-3">
        {companyQuests.map((quest) => {
          const cat = categories[quest.category];
          const size = sizeLabels[quest.size];
          const status = statusLabels[quest.status];

          return (
            <Link
              key={quest.id}
              href={`/quests/${quest.id}`}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1 ${status.color} text-xs`}>
                  <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                  {status.label}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${size.color}`}>
                  {size.label}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${cat.color}`}>
                  {cat.emoji} {cat.label}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-1">{quest.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {quest.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400 mt-3">
                <span>{quest.participants}人参加</span>
                <span>{quest.comments}件のコメント</span>
                <span>更新 {quest.updatedAt}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
