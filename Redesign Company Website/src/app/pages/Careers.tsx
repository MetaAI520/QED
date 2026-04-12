import { motion } from "motion/react";
import { Link } from "react-router";
import { Briefcase, MapPin, Clock, ArrowRight, Send, Users, Zap } from "lucide-react";

const jobs = [
  {
    title: "销售经理",
    department: "销售部",
    location: "深圳",
    type: "全职",
    description: "负责公司芯片产品的市场推广与客户开发，维护客户关系，完成销售目标。",
    requirements: [
      "3年以上半导体/电子元器件销售经验",
      "熟悉LED驱动、电源管理或BMS相关产品",
      "具备良好的客户开发与维护能力",
      "优秀的沟通协调能力和团队合作精神",
    ],
  },
  {
    title: "芯片模拟设计工程师",
    department: "研发部",
    location: "深圳",
    type: "全职",
    description: "负责模拟/混合信号集成电路的设计与仿真，参与芯片从架构到流片的全流程开发。",
    requirements: [
      "硕士及以上学历，微电子/集成电路相关专业",
      "熟练使用Cadence等EDA工具",
      "熟悉CMOS模拟电路设计，如运放、ADC、DAC、LDO等",
      "有流片经验者优先",
    ],
  },
  {
    title: "销售总监",
    department: "销售部",
    location: "深圳",
    type: "全职",
    description: "统筹公司整体销售战略，带领销售团队开拓市场，实现业绩增长目标。",
    requirements: [
      "5年以上半导体行业销售管理经验",
      "具备丰富的行业资源和客户网络",
      "优秀的团队管理和战略规划能力",
      "有LED/电源管理芯片行业经验者优先",
    ],
  },
  {
    title: "模拟/混合芯片设计经理",
    department: "研发部",
    location: "深圳",
    type: "全职",
    description: "负责模拟/混合信号芯片设计团队管理，主导核心芯片产品的架构设计与技术攻关。",
    requirements: [
      "硕士及以上学历，8年以上模拟IC设计经验",
      "精通电源管理、信号链等模拟电路设计",
      "有成功流片量产经验，熟悉BCD工艺",
      "具备团队管理经验，能带领团队攻克技术难题",
    ],
  },
  {
    title: "BMS电池保护板设计工程师",
    department: "研发部",
    location: "深圳",
    type: "全职",
    description: "负责BMS电池保护板的硬件设计与调试，配合芯片团队完成系统级方案验证。",
    requirements: [
      "本科及以上学历，电子工程相关专业",
      "2年以上BMS保护板或电池管理系统设计经验",
      "熟悉锂电池充放电管理、均衡电路设计",
      "熟练使用Altium Designer等PCB设计工具",
    ],
  },
];

export function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              JOIN QED MICRO
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              加入质能达
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              质能达正在快速成长，我们期待各领域优秀人才的加入。
              与顶尖团队一起，用芯片技术改变世界。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "技术驱动", desc: "22%营收投入研发，与顶尖专家共事" },
              { icon: Users, title: "开放文化", desc: "扁平化管理，鼓励创新与自主" },
              { icon: Briefcase, title: "丰厚回报", desc: "竞争力薪酬、股权激励、完善福利" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              OPEN POSITIONS
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">在招岗位</h2>
            <p className="text-slate-500">寻找属于你的舞台</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Briefcase size={12} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:hr@qedmicro.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all flex-shrink-0"
                  >
                    投递简历 <Send size={14} />
                  </a>
                </div>
                <p className="text-slate-600 text-sm mb-4">{job.description}</p>
                <div className="space-y-1.5">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-cyan-500 mt-0.5">•</span>
                      {req}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-black mb-4 text-slate-900">没有找到合适的岗位？</h2>
            <p className="text-slate-500 mb-8">
              欢迎发送简历至 hr@qedmicro.com，我们会为您匹配合适的机会。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hr@qedmicro.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
              >
                发送简历 <Send size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-all"
              >
                联系我们 <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
