import { useState } from "react";
import { Link } from "react-router";
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
    title: "LED电源线载波技术",
    titleEn: "LED Power Line Communication",
    color: "from-cyan-500 to-blue-600",
    desc: "质能达自主研发的电源线载波通信技术，实现信号与供电一体化传输，无需额外信号线即可实现千级LED节点的全彩点控。广泛应用于城市景观照明、建筑亮化、透明LED屏等场景，大幅降低布线成本与施工复杂度。",
    points: [
      "电源线载波单线传输协议，无需额外信号线",
      "支持 1000+ 节点全彩 RGB 点控",
      "256 级灰度，10 万小时超长寿命",
      "QED3110/512/7210 系列芯片全覆盖",
    ],
  },
  {
    icon: Layers,
    title: "BMS高集成度方案",
    titleEn: "High-Integration BMS Solution",
    color: "from-emerald-500 to-teal-600",
    desc: "质能达独创单颗高集成度BMS电池管理芯片，支持2-20节锂电池级联管理，集成电压采样、温度监控、均衡管理及多重安全保护功能于一体，极少外围元器件，为新能源汽车、储能系统、电动工具等提供高可靠性方案。",
    points: [
      "单芯片高集成度，极少外围元器件",
      "支持 2~20 节电池级联管理",
      "过压/过流/过热多重保护，±25mV 精度",
      "QED1100/1200 系列量产交付",
    ],
  },
  {
    icon: Shield,
    title: "超声波MEMS+CMOS芯片",
    titleEn: "Ultrasonic MEMS+CMOS",
    color: "from-violet-500 to-purple-600",
    desc: "质能达在国内率先实现超声波MEMS与CMOS工艺的单芯片集成，融合自主研发的AI信号处理算法，打造新一代智能超声波传感芯片。拥有完全自主知识产权，可应用于距离测量、障碍物检测、手势识别、医疗超声成像等领域。",
    points: [
      "MEMS+CMOS 单芯片集成，国内首创",
      "自主 AI 信号处理算法",
      "传感器芯片及 AI 算法完全自主知识产权",
      "应用覆盖测距、检测、手势识别、医疗超声",
    ],
  },
  {
    icon: Zap,
    title: "传感器国产替代",
    titleEn: "Sensor Domestic Substitution",
    color: "from-orange-500 to-amber-600",
    desc: "质能达传感器系列芯片对标德州仪器（TI）、英飞凌等国际大厂，实现高精度信号采集与处理的国产替代。产品覆盖温度、压力、电流、磁场等多种传感应用，具备16-bit高精度ADC、工业级可靠性，助力客户降低供应链风险。",
    points: [
      "对标 TI/英飞凌，Pin-to-Pin 替代",
      "16-bit 高精度 ADC，低功耗设计",
      "QED6100/6200/6300/6400 四大系列",
      "覆盖工业控制、汽车电子、消费类电子",
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
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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

      {/* 技术路线图 - 暂时隐藏，以后可能会用 */}
      {/*
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
      */}

      {/* 研发中心 - 暂时隐藏，以后可能会用 */}
      {/*
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
      */}

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

      {/* Awards & Honors - 整合荣誉资质 */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              HONORS & CERTIFICATIONS
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">荣誉资质</h2>
            <p className="text-slate-500">权威认证彰显质能达的技术实力与行业地位</p>
          </motion.div>

          {/* 荣誉列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {[
              { title: "国家高新技术企业", org: "科学技术部", year: "2020" },
              { title: "国家级专精特新", org: "工业和信息化部", year: "2023" },
              { title: "深圳市高新技术企业", org: "深圳市科技创新委员会", year: "2019" },
              { title: "中国创新创业大奖赛深圳总决赛亚军", org: "深圳市人民政府", year: "2018" },
              { title: "龙华区中小微企业100强", org: "龙华区政府", year: "2021" },
              { title: "2020年中国国家专利发明奖", org: "国家知识产权局", year: "2020" },
              { title: "知识产权贯标证书", org: "国家知识产权局", year: "2021" },
              { title: "留学生创业补贴一等奖", org: "深圳市人力资源和社会保障局", year: "2022" },
              { title: "集成电路布图专利4项", org: "国家知识产权局", year: "2022" },
            ].map((honor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="p-5 bg-white shadow-sm rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-yellow-500 hover:bg-slate-50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-0.5 text-slate-900">{honor.title}</div>
                  <div className="text-xs text-slate-400">{honor.org} · {honor.year}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 荣誉证书图片展示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">荣誉证书</h3>
            <p className="text-slate-500 text-sm">部分荣誉证书展示</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              "http://cdn057.yun-img.com/static/upload/qedmicro/album/20180424112554_96912.jpg",
              "http://cdn043.yun-img.com/static/upload/qedmicro/album/20180424120639_90668.jpg",
              "http://cdn035.yun-img.com/static/upload/qedmicro/album/20180424120531_76459.jpg",
              "http://cdn047.yun-img.com/static/upload/qedmicro/album/20180424120446_75959.jpg",
              "http://cdn057.yun-img.com/static/upload/qedmicro/album/20180424120303_38743.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180424120201_10528.jpg",
              "http://cdn055.yun-img.com/static/upload/qedmicro/album/20180424120026_45495.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180424115816_94225.jpg",
              "http://cdn053.yun-img.com/static/upload/qedmicro/album/20180424114142_94905.jpg",
              "http://cdn035.yun-img.com/static/upload/qedmicro/album/20180424113710_97783.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180424113542_42592.jpg",
              "http://cdn053.yun-img.com/static/upload/qedmicro/album/20180324153732_33850.jpg",
              "http://cdn043.yun-img.com/static/upload/qedmicro/album/20180324153718_39363.jpg",
              "http://cdn053.yun-img.com/static/upload/qedmicro/album/20180324153652_65735.jpg",
              "http://cdn055.yun-img.com/static/upload/qedmicro/album/20180324153631_73728.jpg",
              "http://cdn057.yun-img.com/static/upload/qedmicro/album/20180324153602_82644.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180324153516_26355.jpg",
              "http://cdn055.yun-img.com/static/upload/qedmicro/album/20180324153425_12937.jpg",
              "http://cdn045.yun-img.com/static/upload/qedmicro/album/20180324153339_39612.jpg",
              "http://cdn055.yun-img.com/static/upload/qedmicro/album/20180324153129_10557.jpg",
              "http://cdn047.yun-img.com/static/upload/qedmicro/album/20180324153043_10103.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180324153017_67444.jpg",
              "http://cdn043.yun-img.com/static/upload/qedmicro/album/20180324152957_36882.jpg",
              "http://cdn053.yun-img.com/static/upload/qedmicro/album/20180324151232_35298.jpg",
              "http://cdn053.yun-img.com/static/upload/qedmicro/album/20180324151213_71872.jpg",
              "http://cdn065.yun-img.com/static/upload/qedmicro/album/20180324151146_57139.jpg",
              "http://cdn035.yun-img.com/static/upload/qedmicro/album/20180324151122_37987.jpg",
              "http://cdn065.yun-img.com/static/upload/qedmicro/album/20180324151020_31715.jpg",
              "http://cdn047.yun-img.com/static/upload/qedmicro/album/20180324151004_59686.jpg",
              "http://cdn063.yun-img.com/static/upload/qedmicro/album/20180324150913_81909.jpg",
            ].map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all bg-white cursor-pointer"
                onClick={() => setSelectedCert(url)}
              >
                <ImageWithFallback
                  src={url}
                  alt={`荣誉证书 ${i + 1}`}
                  className="w-full h-36 object-cover"
                />
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
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
            >
              查看研发岗位 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Lightbox Overlay */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="荣誉证书大图"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
