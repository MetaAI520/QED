import { motion } from "motion/react";
import {
  FlaskConical,
  Cpu,
  Globe,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Layers,
  Zap,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const techPillars = [
  {
    icon: Cpu,
    title: "先进 BCD 工艺",
    titleEn: "Advanced BCD Process",
    color: "from-cyan-500 to-blue-600",
    desc: "质能达基于 0.18μm / 0.13μm BCD（Bipolar-CMOS-DMOS）工艺平台，实现模拟、数字和功率器件的高度单片集成。自研工艺加速套件（PDK+）大幅缩短产品开发周期，支持快速原型验证与量产迭代。",
    points: [
      "0.18μm / 0.13μm BCD 主工艺",
      "兼容 40nm CMOS 数字工艺",
      "自研 LDMOS 器件，击穿电压超 700V",
      "SiP 系统级封装技术，面积缩减 40%",
    ],
  },
  {
    icon: Layers,
    title: "高精度模拟设计",
    titleEn: "High-Precision Analog Design",
    color: "from-violet-500 to-purple-600",
    desc: "质能达拥有深厚的高精度模拟电路设计积累，核心团队来自业界顶尖半导体公司，在带隙基准、运算放大器、比较器等核心模块拥有数十项自主专利，确保产品在全温度范围内的稳定性和一致性。",
    points: [
      "带隙基准温飘 < ±10ppm/℃",
      "运放 GBW 最高 200MHz",
      "ADC 精度达 16-bit 无噪",
      "PVT 自动校准，量产一致性 ±0.5%",
    ],
  },
  {
    icon: Shield,
    title: "功能安全设计",
    titleEn: "Functional Safety",
    color: "from-emerald-500 to-teal-600",
    desc: "面对新能源汽车、工业自动化等高可靠性应用的快速增长，质能达系统性地引入 ISO 26262 功能安全设计流程，建立了从需求分析到芯片验证的完整 ASIL 认证能力，推动产品快速进入车规市场。",
    points: [
      "ISO 26262 ASIL-B 认证能力",
      "AEC-Q100 Grade 0 车规验证",
      "FMEDA 故障模式分析覆盖率 >99%",
      "EMC 符合 CISPR 25 Class 5",
    ],
  },
  {
    icon: Zap,
    title: "系统级封装 SiP",
    titleEn: "System-in-Package",
    color: "from-orange-500 to-amber-600",
    desc: "质能达自主开发 SiP 封装平台，将多颗裸片、无源器件整合在单一封装内，实现芯片面积缩减 40%、BOM 减少 60%，有效帮助客户加快上市速度，降低系统成本，提升产品竞争力。",
    points: [
      "集成最多 8 颗裸片 + 无源器件",
      "芯片面积节省 40%",
      "BOM 数量减少 60%",
      "支持 WLCSP/LGA/QFN 多封装形式",
    ],
  },
];

const rdStats = [
  { value: "130+", label: "芯片专利", sub: "含发明专利20余项" },
  { value: "22%", label: "研发投入占比", sub: "持续高强度投入" },
  { value: "30+", label: "研发工程师", sub: "博士硕士为骨干" },
  { value: "1", label: "研发中心", sub: "深圳总部" },
];

const roadmap = [
  {
    year: "2023",
    title: "车规级 BMS 量产",
    desc: "通过 AEC-Q100 Grade 0 认证，首款车规电池管理芯片正式量产交付",
    status: "completed",
  },
  {
    year: "2024",
    title: "240W 超级快充芯片发布",
    desc: "支持 USB-C PD 3.1 的 240W 超高功率充电管理芯片全球首发",
    status: "completed",
  },
  {
    year: "2025",
    title: "GaN 功率器件 IP 平台",
    desc: "开发完成 650V GaN HEMT 工艺 IP，进入车规驱动器市场",
    status: "completed",
  },
  {
    year: "2026 Q2",
    title: "AI 辅助设计平台上线",
    desc: "推出自研 AI 模拟设计辅助平台，将芯片开发周期缩短 30%",
    status: "ongoing",
  },
  {
    year: "2026 Q4",
    title: "40nm 数模混合工艺平台",
    desc: "基于 40nm CMOS 工艺的高度集成 PMIC 平台完成流片验证",
    status: "planned",
  },
  {
    year: "2027",
    title: "SiC 电源器件量产",
    desc: "碳化硅 MOSFET 配套驱动方案完成验证，进入高压储能市场",
    status: "planned",
  },
];

const centers = [
  {
    city: "深圳",
    role: "总部 & 研发中心",
    focus: "PMIC / DC-DC / LDO 核心研发，芯片设计与系统研发",
    employees: "30+",
  },
];

export function RnD() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-400/20 blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              R&D INNOVATION
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              研发创新
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              以技术驱动为核心战略，每年营收的 22% 投入研发，
              构建持续领先的技术护城河，引领模拟芯片行业创新。
            </p>
          </motion.div>
        </div>
      </section>

      {/* R&D Stats */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {rdStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-bold mb-1 text-slate-900">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technology Pillars */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              CORE TECHNOLOGY PILLARS
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">四大技术支柱</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              质能达的技术壁垒建立在四大核心能力之上，构筑难以复制的竞争优势
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <pillar.icon size={28} />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">{pillar.titleEn}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm">{pillar.desc}</p>
                <div className="space-y-2.5">
                  {pillar.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${pillar.color} mt-1.5 flex-shrink-0`}
                      />
                      <span className="text-sm text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              TECHNOLOGY ROADMAP
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">技术路线图</h2>
            <p className="text-slate-500">持续投入研发，引领行业技术方向</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-10 pb-10 border-l-2 border-slate-200 last:pb-0 last:border-transparent"
              >
                <div
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 ${
                    item.status === "completed"
                      ? "bg-cyan-500 border-white"
                      : item.status === "ongoing"
                      ? "bg-amber-500 border-white"
                      : "bg-gray-600 border-white"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`text-sm font-mono font-bold ${
                      item.status === "completed"
                        ? "text-cyan-600"
                        : item.status === "ongoing"
                        ? "text-amber-600"
                        : "text-slate-400"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full border ${
                      item.status === "completed"
                        ? "text-cyan-600 border-cyan-200 bg-cyan-50"
                        : item.status === "ongoing"
                        ? "text-amber-600 border-amber-200 bg-amber-50"
                        : "text-slate-500 border-slate-300 bg-slate-100"
                    }`}
                  >
                    {item.status === "completed" ? "已完成" : item.status === "ongoing" ? "进行中" : "规划中"}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Centers */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              GLOBAL R&D CENTERS
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">研发中心</h2>
            <p className="text-slate-500">深圳总部，聚焦芯片设计与系统研发</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {centers.map((center, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe size={28} />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{center.city}</div>
                <div className="text-cyan-600 font-semibold text-sm mb-3">{center.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{center.focus}</p>
                <div className="flex items-center gap-2">
                  <Users size={15} className="text-slate-400" />
                  <span className="text-sm text-slate-500">{center.employees} 名工程师</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent Showcase */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
                INTELLECTUAL PROPERTY
              </div>
              <h2 className="text-4xl font-black mb-6 text-slate-900">
                130+ 芯片专利
                <br />
                构建技术壁垒
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                质能达高度重视知识产权的战略布局，在 PMIC 架构、BCD 工艺优化、SiP 封装及充电算法等核心领域，
                形成了以发明专利为主体的专利保护体系，有效保障公司的技术领先优势。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "130+", label: "芯片专利总数" },
                  { value: "85%", label: "发明专利占比" },
                  { value: "20+", label: "PCT 国际专利" },
                  { value: "50+", label: "年新增专利量" },
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-white shadow-sm rounded-xl border border-slate-200">
                    <div className="text-2xl font-black text-cyan-600 mb-1">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {["PMIC 架构", "BCD 工艺", "充电算法", "SiP 封装", "功能安全"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-500 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-[420px]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1hbmFnZW1lbnQlMjBlbmVyZ3klMjBlZmZpY2llbmN5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="研发实验室"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-xs text-cyan-400 font-mono mb-1">QED INNOVATION LAB</div>
                <div className="text-white font-bold text-lg">前沿技术研究中心</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-black mb-3 text-slate-900">荣誉认可</h2>
            <p className="text-slate-500">行业权威机构对质能达技术实力的高度认可</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                award: "国家级专精特新「小巨人」",
                org: "工业和信息化部",
                year: "2024",
              },
              {
                award: "中国芯片设计年度创新奖",
                org: "中国半导体行业协会",
                year: "2023",
              },
              {
                award: "广东省科学技术进步奖",
                org: "广东省人民政府",
                year: "2022",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 text-center hover:border-yellow-500 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.award}</h3>
                <div className="text-sm text-slate-500 mb-1">{item.org}</div>
                <div className="text-xs text-slate-400">{item.year} 年</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <FlaskConical size={40} className="text-cyan-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4 text-slate-900">加入质能达研发团队</h2>
            <p className="text-slate-500 mb-8">
              我们正在寻找充满热情的模拟电路工程师，与我们共同突破技术边界
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
            >
              查看研发岗位 <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
