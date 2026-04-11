import { motion } from "motion/react";
import { TrendingUp, FileText, Users, Calendar, Download, ExternalLink, BarChart3, Shield } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "营收增长",
    value: "+85%",
    description: "2025年同比增长",
  },
  {
    icon: BarChart3,
    title: "毛利率",
    value: "52%",
    description: "保持行业领先",
  },
  {
    icon: Users,
    title: "客户数量",
    value: "1000+",
    description: "全球合作伙伴",
  },
  {
    icon: Shield,
    title: "研发投入",
    value: "22%",
    description: "占营收比重",
  },
];

const financialData = [
  {
    year: "2025",
    revenue: "18.5亿元",
    growth: "+85%",
    profit: "4.2亿元",
  },
  {
    year: "2024",
    revenue: "10.0亿元",
    growth: "+65%",
    profit: "2.1亿元",
  },
  {
    year: "2023",
    revenue: "6.1亿元",
    growth: "+45%",
    profit: "1.0亿元",
  },
];

const reports = [
  {
    type: "年度报告",
    title: "2025年度报告",
    date: "2026-03-31",
    size: "5.2 MB",
  },
  {
    type: "季度报告",
    title: "2025年第四季度报告",
    date: "2026-01-28",
    size: "2.8 MB",
  },
  {
    type: "季度报告",
    title: "2025年第三季度报告",
    date: "2025-10-30",
    size: "2.6 MB",
  },
];

const announcements = [
  {
    date: "2026-04-05",
    title: "关于完成新一轮战略融资的公告",
    category: "重大事项",
  },
  {
    date: "2026-03-28",
    title: "关于新产品通过车规级认证的公告",
    category: "业务进展",
  },
  {
    date: "2026-03-15",
    title: "关于与国际科研机构合作的公告",
    category: "战略合作",
  },
  {
    date: "2026-02-20",
    title: "关于董事会成员变更的公告",
    category: "公司治理",
  },
];

const governance = [
  {
    title: "董事会",
    description: "由 7 名董事组成，其中独立董事3名",
  },
  {
    title: "监事会",
    description: "由 3 名监事组成，监督公司财务和运营",
  },
  {
    title: "管理层",
    description: "专业化管理团队，拥有丰富的行业经验",
  },
];

const milestones = [
  {
    date: "2026年4月",
    event: "完成上市辅导备案",
    status: "已完成",
  },
  {
    date: "2026年6月",
    event: "提交IPO申请材料",
    status: "进行中",
  },
  {
    date: "2026年Q3",
    event: "接受监管机构审核",
    status: "待进行",
  },
  {
    date: "2026年Q4",
    event: "正式挂牌上市",
    status: "待进行",
  },
];

export function Investors() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              INVESTOR RELATIONS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              投资者关系
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              致力于为投资者创造长期可持续价值，保持透明、及时的信息披露。
              与投资者建立长期互信的沟通关系。            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">财务亮点</h2>
            <p className="text-slate-500 text-lg">持续强劲的业绩增长</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-xl border border-slate-200 text-center hover:bg-slate-50 hover:border-cyan-500 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <item.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">{item.value}</div>
                <div className="font-semibold mb-1 text-slate-900">{item.title}</div>
                <div className="text-sm text-slate-500">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">财务业绩</h2>
            <p className="text-slate-500 text-lg">近三年财务数据概览</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 text-slate-500">年度</th>
                    <th className="text-right py-4 px-6 text-slate-500">营业收入</th>
                    <th className="text-right py-4 px-6 text-slate-500">同比增长</th>
                    <th className="text-right py-4 px-6 text-slate-500">净利润</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((data, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-4 px-6 font-semibold text-slate-900">{data.year}</td>
                      <td className="text-right py-4 px-6 text-cyan-600 font-semibold">
                        {data.revenue}
                      </td>
                      <td className="text-right py-4 px-6 text-green-600">
                        {data.growth}
                      </td>
                      <td className="text-right py-4 px-6 text-slate-900">{data.profit}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <p className="text-sm text-slate-600 text-center">
                * 以上数据为经审计的财务数据，仅供参考。              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IPO Progress */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">上市进程</h2>
            <p className="text-slate-500 text-lg">积极推进IPO工作</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-cyan-300 last:pb-0"
              >
                <div
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-slate-50 ${
                    milestone.status === "已完成"
                      ? "bg-green-500"
                      : milestone.status === "进行中"
                      ? "bg-cyan-500"
                      : "bg-gray-500"
                  }`}
                />
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-lg text-slate-900">{milestone.date}</div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      milestone.status === "已完成"
                        ? "bg-green-50 text-green-600 border border-green-200"
                        : milestone.status === "进行中"
                        ? "bg-cyan-50 text-cyan-600 border border-cyan-200"
                        : "bg-slate-100 text-slate-500 border border-slate-300"
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
                <div className="text-slate-600">{milestone.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Filings */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">财务报告</h2>
            <p className="text-slate-500 text-lg">定期披露财务信息</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-cyan-500 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded border border-cyan-200">
                        {report.type}
                      </span>
                      <span className="text-sm text-slate-500">{report.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">{report.title}</h3>
                    <p className="text-sm text-slate-500">{report.size}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-100 rounded-lg border border-slate-300 hover:bg-slate-200 transition-all flex items-center gap-2 text-slate-900">
                  <Download size={18} />
                  <span>下载</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">公司公告</h2>
            <p className="text-slate-500 text-lg">及时发布重要信息</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-cyan-500 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full border border-cyan-200">
                        {announcement.category}
                      </span>
                      <span className="text-sm text-slate-500">{announcement.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-cyan-600 transition-colors text-slate-900">
                      {announcement.title}
                    </h3>
                  </div>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-cyan-600 transition-colors flex-shrink-0 ml-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">公司治理</h2>
            <p className="text-slate-500 text-lg">规范的治理结构</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {governance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-xl border border-slate-200 text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-14 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              投资者联系方式
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              如有投资相关问题，欢迎随时与我们的投资者关系团队联系。            </p>
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-slate-500">电话：</span>
                <span className="text-cyan-600">+86 (0)21 XXXX XXXX</span>
              </p>
              <p>
                <span className="text-slate-500">邮箱：</span>
                <span className="text-cyan-600">ir@qedmicro.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}