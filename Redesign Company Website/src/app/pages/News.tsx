import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const categories = ["全部", "公司动态", "产品发布", "荣誉资质", "合作伙伴", "行业资讯"];

const allNews = [
  {
    id: 1,
    category: "公司动态",
    date: "2026-04-05",
    title: "质能达完成 B+ 轮战略融资，估值突破百亿，加速科创板 IPO 进程",
    excerpt:
      "质能达微电子宣布完成 B+ 轮战略融资，本轮融资由知名半导体产业基金领投，总融资规模超 5 亿元人民币，公司估值正式突破 100 亿元。本轮资金将主要用于先进工艺平台建设、车规级产品线扩充及科创板上市准备工作。",
    tag: "重大事项",
    featured: true,
  },
  {
    id: 2,
    category: "产品发布",
    date: "2026-03-20",
    title: "质能达发布 QED-PMU9000 系列多路电源管理芯片，单芯片集成 12 路电压轨",
    excerpt:
      "质能达推出旗舰级 QED-PMU9000 系列 PMIC，采用先进 0.13μm BCD 工艺，集成 12 路独立可编程电压轨，静态电流低至 5μA，转换效率高达 96%，专为旗舰智能手机和高端平板设计。",
    tag: "新品发布",
    featured: true,
  },
  {
    id: 3,
    category: "荣誉资质",
    date: "2026-03-08",
    title: "质能达荣获国家级专精特新「小巨人」企业认定，彰显核心竞争实力",
    excerpt:
      '工业和信息化部正式公布 2026年度国家级专精特新「小巨人」企业名单，质能达微电子凭借在模拟芯片领域的技术创新能力和市场竞争实力，成功入选。这是质能达继国家高新技术企业认定后获得的又一重要荣誉。',
    tag: "荣誉认定",
    featured: false,
  },
  {
    id: 4,
    category: "合作伙伴",
    date: "2026-02-28",
    title: "质能达与全球领先晶圆代工厂签署战略合作协议，确保先进产能供应",
    excerpt:
      "质能达与某全球领先晶圆代工厂正式签署长期战略合作协议，锁定 0.13μm BCD 和 40nm CMOS 工艺产能，为公司未来 3-5 年的产品放量增长提供可靠的供应链保障。",
    tag: "战略合作",
    featured: false,
  },
  {
    id: 5,
    category: "产品发布",
    date: "2026-02-15",
    title: "质能达发布 QED-BMS224 车规级 24 节电池管理芯片，进军高压 EV 市场",
    excerpt:
      "质能达发布全新 QED-BMS224 车规级电池管理芯片，支持最多 24 节串联锂电池管理，通过 AEC-Q100 Grade 0 和 ISO 26262 ASIL-B 认证，专为 800V 高压电动汽车平台设计。",
    tag: "新品发布",
    featured: false,
  },
  {
    id: 6,
    category: "行业资讯",
    date: "2026-01-30",
    title: "中国模拟芯片市场规模突破千亿，质能达把握国产替代战略机遇",
    excerpt:
      "据最新市场研究报告，2025年中国模拟芯片市场规模突破 1000 亿元人民币，国产化率逐步提升。质能达作为国内领先的模拟芯片企业，将持续加大研发和市场投入，把握国产替代历史机遇。",
    tag: "行业分析",
    featured: false,
  },
  {
    id: 7,
    category: "公司动态",
    date: "2026-01-15",
    title: "质能达研发团队再扩充，引进多名国际顶级模拟芯片专家",
    excerpt:
      "质能达宣布成功引进数名来自国际知名半导体企业的顶级技术专家，涵盖高精度 ADC、PMIC 架构设计及车规功能安全等核心领域，进一步加强公司研发团队的技术深度与广度。",
    tag: "人才动态",
    featured: false,
  },
  {
    id: 8,
    category: "荣誉资质",
    date: "2025-12-20",
    title: "质能达 QED-CHG650 荣获 2025 年度电子行业「最佳充电 IC」大奖",
    excerpt:
      "在中国电子报社主办的 2025 年度中国电子行业最具影响力产品评选中，质能达 QED-CHG650 65W 快充芯片以卓越的性能指标和市场表现，荣获「最佳充电管理 IC」大奖。",
    tag: "产品奖项",
    featured: false,
  },
  {
    id: 9,
    category: "合作伙伴",
    date: "2025-11-28",
    title: "质能达进入某头部手机品牌供应链，QED-PMU7200 开始量产交付",
    excerpt:
      "质能达宣布其 QED-PMU7200 低功耗 PMIC 已通过某头部国产智能手机品牌的严格认证，并开始规模化量产交付，这标志着质能达在消费电子旗舰市场取得重要突破。",
    tag: "供应链",
    featured: false,
  },
];

export function News() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered =
    activeCategory === "全部"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  const featuredNews = allNews.filter((n) => n.featured);
  const regularNews = filtered.filter((n) => !n.featured || activeCategory !== "全部");

  return (
    <div>
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              NEWS & MEDIA
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              新闻中心
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              第一时间了解质能达的公司动态、产品发布、荣誉认定及行业洞察
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-8">
            FEATURED NEWS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-white to-slate-50 shadow-sm rounded-2xl border border-slate-200 hover:border-cyan-500 hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full border border-cyan-200 font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 leading-snug text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-1 text-cyan-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  阅读全文 <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-white text-slate-500 border border-slate-200 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Items */}
          <div className="space-y-4">
            {(activeCategory === "全部" ? allNews : filtered).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white shadow-sm rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-cyan-500 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Tag size={11} />
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-100 rounded-full text-xs text-slate-500 border border-slate-200">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar size={11} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ArrowRight
                  size={18}
                  className="flex-shrink-0 text-slate-400 group-hover:text-cyan-600 transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 bg-white shadow-sm rounded-3xl border border-slate-200"
          >
            <h2 className="text-3xl font-black mb-4 text-slate-900">媒体联系</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              如需采访、转载或媒体合作，欢迎联系质能达公关团队。
              我们将在 24 小时内回复您的邮件。            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div>
                <div className="text-xs text-slate-400 mb-1">公关联系邮箱</div>
                <div className="text-cyan-600 font-semibold">pr@qedmicro.com</div>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div>
                <div className="text-xs text-slate-400 mb-1">媒体热线</div>
                <div className="text-cyan-600 font-semibold">0755-2893-8531</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}