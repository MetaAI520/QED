import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const categories = ["全部", "公司动态", "产品发布", "荣誉资质"];

const allNews = [
  {
    id: 1,
    category: "公司动态",
    date: "2025-09-02",
    title: "祝贺林丰成院士团队获得宜兴国际精英创新创业大赛冠军",
    excerpt:
      "由质能达公司林丰成博士领衔的研发团队于2025年八月九日参加宜兴太湖湾国际精英创新创业大赛科学家团队赛，并获得冠军。",
    tag: "重大喜讯",
    featured: true,
  },
  {
    id: 2,
    category: "公司动态",
    date: "2024-05-09",
    title: "林博士参访嘉兴大学，推动产学研合作",
    excerpt:
      "林丰成博士亲赴嘉兴大学，拜访党委书记卢新波，对于产学研合作事宜进行深度交流，推动校企合作。",
    tag: "合作交流",
    featured: true,
  },
  {
    id: 3,
    category: "荣誉资质",
    date: "2023-01-13",
    title: "祝贺质能达公司晋级中国深圳创新创业大赛决赛",
    excerpt:
      "质能达微电子凭借在芯片领域的技术创新能力和市场竞争实力，成功晋级中国深圳创新创业大赛决赛。",
    tag: "荣誉认定",
    featured: false,
  },
  {
    id: 4,
    category: "荣誉资质",
    date: "2023-01-13",
    title: "质能达BMS产品获得2022年第十四届中国深圳创新创业大赛优秀奖",
    excerpt:
      "质能达BMS电池管理芯片产品凭借卓越的技术创新和市场表现，荣获第十四届中国深圳创新创业大赛优秀奖。",
    tag: "产品奖项",
    featured: false,
  },
  {
    id: 5,
    category: "荣誉资质",
    date: "2023-01-13",
    title: "祝贺质能达公司入围第十一届中国创新创业全国赛",
    excerpt:
      "质能达微电子成功入围第十一届中国创新创业大赛全国赛，展现了公司在芯片设计领域的核心竞争力。",
    tag: "荣誉认定",
    featured: false,
  },
  {
    id: 6,
    category: "荣誉资质",
    date: "2023-01-13",
    title: "质能达锂电池BMS产品设计获得2022年龙华区创业创新奖",
    excerpt:
      "质能达锂电池BMS产品设计方案获得龙华区创业创新奖，彰显了公司在新能源电池管理领域的技术实力。",
    tag: "产品奖项",
    featured: false,
  },
  {
    id: 7,
    category: "荣誉资质",
    date: "2023-01-13",
    title: "质能达公司获得2022年中国创新创业大赛优秀企业",
    excerpt:
      "质能达微电子荣获2022年中国创新创业大赛优秀企业称号，进一步证明了公司的创新能力和发展潜力。",
    tag: "荣誉认定",
    featured: false,
  },
  {
    id: 8,
    category: "产品发布",
    date: "2023-01-13",
    title: "质能达微电子新授权发明专利：用于人体御寒产品上的加热装置",
    excerpt:
      "质能达微电子成功获得新的发明专利授权，该专利涉及用于人体御寒产品上的加热装置技术。",
    tag: "专利授权",
    featured: false,
  },
  {
    id: 9,
    category: "产品发布",
    date: "2023-01-13",
    title: "质能达微电子新授权发明专利：高精度ADC电路测试装置及测试方法",
    excerpt:
      "质能达微电子成功获得高精度ADC电路测试装置及测试方法的发明专利授权。",
    tag: "专利授权",
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