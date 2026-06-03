import Link from "next/link";
import { companies, getQuestsByCompany } from "@/lib/data";

export default function CompaniesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">参加企業・団体</h1>
        <p className="text-gray-500 text-lg">
          ビジョンと現在地を公開し、社会課題の解決に取り組む企業たち
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companies.map((company) => {
          const companyQuests = getQuestsByCompany(company.id);
          const openQuests = companyQuests.filter((q) => q.status === "open").length;

          return (
            <Link
              key={company.id}
              href={`/companies/${company.id}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{company.logo}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{company.name}</h2>
                    <span className="text-xs text-gray-400">{company.size}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{company.industry}</p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {company.vision}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      {openQuests} クエスト公開中
                    </span>
                    <span>{companyQuests.length} クエスト合計</span>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-gray-400 mb-1">困りごと:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {company.challenges.slice(0, 2).map((c, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded-full"
                        >
                          {c}
                        </span>
                      ))}
                      {company.challenges.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{company.challenges.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
