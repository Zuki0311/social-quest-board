import Link from "next/link";
import { notFound } from "next/navigation";
import {
  socialThemes,
  getThemeById,
  getQuestsByTheme,
  companies,
  engagementLabels,
  sizeLabels,
  statusLabels,
  categories,
} from "@/lib/data";
import type { EngagementType, Quest } from "@/lib/data";

export function generateStaticParams() {
  return socialThemes.map((t) => ({ id: t.id }));
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const theme = getThemeById(id);
  if (!theme) notFound();

  const themeQuests = getQuestsByTheme(id);

  const engagementGroups = theme.engagements.map((eng) => {
    const meta = engagementLabels[eng.type];
    const quests = eng.questIds
      .map((qid) => themeQuests.find((q) => q.id === qid))
      .filter((q): q is Quest => !!q);
    return { ...eng, ...meta, quests };
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.color}18 0%, ${theme.color}08 50%, #f8faf5 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/map"
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              クエストマップ
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm" style={{ color: theme.color }}>
              {theme.label}
            </span>
          </div>

          <div className="flex items-start gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-lg"
              style={{ backgroundColor: theme.color }}
            >
              {theme.label.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {theme.label}
                <span className="text-lg font-normal text-gray-500 ml-3">{theme.subtitle}</span>
              </h1>
              <p className="text-gray-600 mt-3 max-w-3xl leading-relaxed">
                {theme.description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {theme.stats.map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50">
                <div className="text-2xl font-bold" style={{ color: theme.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why it matters */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: theme.color }} />
              なぜこのテーマが重要なのか
            </h2>
            <p className="text-gray-600 leading-relaxed">{theme.whyItMatters}</p>
          </div>
        </section>

        {/* Stories — 志の一次情報 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            志の一次情報
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            このテーマの最前線で実践する人たちの、生の声とストーリー
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {theme.stories.map((story) => {
              const company = companies.find((c) => c.id === story.companyId);
              return (
                <div
                  key={story.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: theme.color + "15",
                            color: theme.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {story.summary}
                    </p>

                    {/* Quote */}
                    <div
                      className="rounded-lg p-4 mb-4"
                      style={{ backgroundColor: theme.color + "08" }}
                    >
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    {/* Person */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{story.personAvatar}</span>
                      <div>
                        <div className="font-medium text-sm text-gray-900">
                          {story.personName}
                        </div>
                        <div className="text-xs text-gray-500">
                          {story.personRole}
                        </div>
                      </div>
                      {company && (
                        <Link
                          href={`/companies/${company.id}`}
                          className="ml-auto text-xs px-2 py-1 rounded-md bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          {company.logo} {company.name}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Engagement Types — 関わり方 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            関わり方を選ぶ
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            正社員から1日体験まで、自分に合った関わり方でこのテーマに参加できます
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagementGroups.map((eng) => (
              <div
                key={eng.type}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{eng.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900">{eng.label}</div>
                    <div className="text-xs text-gray-500">{eng.description}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {eng.quests.map((q) => {
                    const status = statusLabels[q.status];
                    return (
                      <Link
                        key={q.id}
                        href={`/quests/${q.id}`}
                        className="block px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                          <span className="text-gray-800 font-medium truncate flex-1">
                            {q.title.length > 30 ? q.title.slice(0, 30) + "..." : q.title}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                  {eng.quests.length === 0 && (
                    <p className="text-xs text-gray-400 px-3 py-2">
                      現在募集中のクエストはありません
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Quests */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            このテーマのクエスト
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {themeQuests.length}件のクエストが公開中
          </p>

          <div className="space-y-4">
            {themeQuests.map((quest) => {
              const company = companies.find((c) => c.id === quest.companyId);
              const status = statusLabels[quest.status];
              const size = sizeLabels[quest.size];
              const cat = categories[quest.category];
              return (
                <Link
                  key={quest.id}
                  href={`/quests/${quest.id}`}
                  className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 ${status.color} text-sm`}>
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
                  <h3 className="font-bold text-gray-900 mb-1">{quest.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{quest.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      {company && (
                        <span>
                          {company.logo} {company.name}
                        </span>
                      )}
                      <span>{quest.participants}人参加</span>
                    </div>
                    <span>更新 {quest.updatedAt}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div
            className="inline-block rounded-2xl px-12 py-8"
            style={{ backgroundColor: theme.color + "0a" }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              「{theme.label}」に関わりたい？
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              まずはクエストに参加して、志の最前線を体験しよう
            </p>
            <Link
              href="/map"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-colors"
              style={{ backgroundColor: theme.color }}
            >
              クエストマップで探す
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
