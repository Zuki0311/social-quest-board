import Link from "next/link";
import { socialThemes, quests } from "@/lib/data";

export default function ThemesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          ソーシャルテーマ
        </h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          visionsが掲げる15のソーシャルテーマ。それぞれのテーマで、
          企業がどんな実践をし、どんな課題を抱え、どんな仲間を求めているのか。
          志の一次情報がここにあります。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {socialThemes.map((theme) => {
          const questCount = theme.questIds.length;
          const totalParticipants = theme.questIds.reduce((sum, qid) => {
            const q = quests.find((quest) => quest.id === qid);
            return sum + (q?.participants ?? 0);
          }, 0);
          const storyCount = theme.stories.length;
          const engagementTypes = theme.engagements.map((e) => e.type);

          return (
            <Link
              key={theme.id}
              href={`/themes/${theme.id}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div
                className="h-2"
                style={{ backgroundColor: theme.color }}
              />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold shrink-0"
                    style={{ backgroundColor: theme.color }}
                  >
                    {theme.label.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {theme.label}
                    </h2>
                    <p className="text-xs text-gray-500">{theme.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {theme.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{questCount} クエスト</span>
                  <span>{totalParticipants}人参加</span>
                  <span>{storyCount} ストーリー</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {engagementTypes.includes("fulltime") && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      🏢 正社員
                    </span>
                  )}
                  {engagementTypes.includes("intern") && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      🎓 インターン
                    </span>
                  )}
                  {engagementTypes.includes("project") && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      🚀 プロジェクト
                    </span>
                  )}
                  {engagementTypes.includes("probono") && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      🤲 プロボノ
                    </span>
                  )}
                  {engagementTypes.includes("oneday") && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      👀 1Day
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
