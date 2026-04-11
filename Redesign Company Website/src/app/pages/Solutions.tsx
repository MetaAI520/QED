import { useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, Battery, Cpu, Radio, Heart, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const solutions = [
  {
    id: "led-landscape",
    icon: Lightbulb,
    name: "LED景观照明",
    nameEn: "LED Landscape Lighting",
    color: "from-cyan-500 to-blue-600",
    tagline: "电源线载波 · 点控全彩 · 智能联动",
    description:
      "质能达基于自主研发的电源线载波通信技术，为智慧城市景观照明提供全链路解决方案。产品广泛应用于城市楼宇亮化、桥梁装饰照明、透明LED屏、户外景观灯带等场景，通过电力线实现信号与供电一体化传输，大幅降低布线成本，支持千级节点的全彩点控与智能联动。",
    challenges: [
      "户外严苛环境下的长期耐久性与防护等级要求",
      "大规模LED节点的色彩一致性与同步控制",
      "千级以上节点的组网通信与集中管控",
      "景观照明系统的整体能效优化与节能降耗",
    ],
    products: ["QED3110 系列电源线载波控制芯片", "QED512 系列LED驱动芯片", "QED7210 智能照明网关芯片"],
    metrics: "256级灰度 / 10万小时寿命 / 1000+节点联控",
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "bms",
    icon: Battery,
    name: "新能源BMS管理",
    nameEn: "Battery Management System",
    color: "from-emerald-500 to-teal-600",
    tagline: "高集成 · 多节级联 · 安全可靠",
    description:
      "质能达BMS电池管理芯片专为锂电池组管理而设计，广泛应用于新能源汽车动力电池、储能系统、电动工具等领域。芯片支持多节电池级联监测，集成高精度电压采样、温度监控、均衡管理及多重安全保护功能，为电池系统提供全方位的安全管理方案。",
    challenges: [
      "多节电池串联的精确电压采样与状态监测",
      "过充过放过流等多重安全保护机制",
      "主动/被动均衡管理延长电池组寿命",
      "宽温度范围下的稳定可靠工作",
    ],
    products: ["QED1100 多节电池管理芯片", "QED1200 高精度BMS前端芯片"],
    metrics: "20节级联 / ±25mV精度 / 多重保护",
    image:
      "https://images.unsplash.com/photo-1674269161229-165040284030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "sensor",
    icon: Cpu,
    name: "传感器应用",
    nameEn: "Sensor Applications",
    color: "from-blue-500 to-indigo-600",
    tagline: "高精度 · 国产替代 · 多场景",
    description:
      "质能达传感器系列芯片对标TI、英飞凌等国际大厂，实现高精度信号采集与处理的国产替代。产品覆盖工业控制、汽车电子、消费类电子等多个应用场景，提供温度、压力、电流、磁场等多种传感信号的精密检测方案，助力客户降低供应链风险。",
    challenges: [
      "16位及以上高精度信号采集与转换",
      "工业级与车规级的长期可靠性保障",
      "相比进口芯片的成本优势与供货稳定性",
      "实现对TI/英飞凌等主流型号的Pin-to-Pin替代",
    ],
    products: ["QED6100 高精度温度传感芯片", "QED6200 压力传感信号调理芯片", "QED6300 电流传感芯片", "QED6400 磁场传感芯片"],
    metrics: "16-bit精度 / 对标TI/英飞凌 / 4大系列",
    image:
      "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBFViUyMGJhdHRlcnklMjBjaGFyZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1NjUxODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "mems-ai",
    icon: Radio,
    name: "超声波MEMS+AI",
    nameEn: "Ultrasonic MEMS+AI",
    color: "from-violet-500 to-purple-600",
    tagline: "MEMS+CMOS · AI算法 · 国内首创",
    description:
      "质能达在国内率先实现超声波MEMS与CMOS工艺的单芯片集成，并融合自主研发的AI信号处理算法，打造新一代智能超声波传感芯片。产品可应用于距离测量、障碍物检测、手势识别、医疗超声成像等领域，拥有完全自主知识产权。",
    challenges: [
      "MEMS微机电结构的高良率制造工艺",
      "AI算法与模拟前端的片上深度融合",
      "传感器模组的极致小型化设计",
      "超低功耗下的高灵敏度信号处理",
    ],
    products: ["MEMS超声波传感器系列芯片"],
    metrics: "国内首创 / AI一体化 / 自主知识产权",
    image:
      "https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBtYW51ZmFjdHVyaW5nJTIwY2xlYW4lMjByb29tfGVufDF8fHx8MTc3NTY1MTgzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "medical",
    icon: Heart,
    name: "医疗电子",
    nameEn: "Medical Electronics",
    color: "from-pink-500 to-rose-600",
    tagline: "高可靠 · 低功耗 · 精密检测",
    description:
      "质能达将传感器、MEMS超声波及电源管理芯片技术应用于医疗电子领域，为便携式医疗设备、超声诊断仪、患者监护仪等提供高可靠性的芯片解决方案。产品满足医疗级可靠性标准，具备超低噪声和低功耗特性，助力医疗设备的便携化与智能化发展。",
    challenges: [
      "医疗级产品的高可靠性与长寿命要求",
      "精密生理信号采集的超低噪声设计",
      "满足医疗器械法规与认证合规要求",
      "医疗设备的小型化与便携化趋势",
    ],
    products: ["传感器 + MEMS超声波 + 电源管理芯片医疗组合方案"],
    metrics: "医疗级可靠性 / 超低噪声 / 便携化方案",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzc1NjUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "smart-city",
    icon: Building2,
    name: "智慧城市",
    nameEn: "Smart City",
    color: "from-orange-500 to-amber-600",
    tagline: "万物互联 · 智能管控 · 绿色节能",
    description:
      "质能达整合LED景观照明控制、传感器网络和能源管理等核心芯片技术，为智慧城市建设提供一体化解决方案。通过电源线载波通信实现万级节点的互联互通，结合传感器数据采集与智能分析，助力城市照明、环境监测、能耗管理等场景的数字化升级与绿色节能。",
    challenges: [
      "城市级大规模节点的部署与运维管理",
      "多品类设备与异构网络的互联互通",
      "系统整体能效优化与节能减排目标",
      "远程故障诊断与智能化运维降本增效",
    ],
    products: ["LED照明控制 + 传感器网络 + 电源管理综合方案"],
    metrics: "节能40% / 万级节点 / 远程管控",
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Solutions() {
  const [active, setActive] = useState("led-landscape");
  const sol = solutions.find((s) => s.id === active)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              APPLICATION SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              解决方案
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              深耕六大核心应用领域，以自主研发的LED驱动、BMS管理、传感器、MEMS+AI等芯片技术，
              为客户提供从芯片选型到系统级参考设计的完整解决方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/98 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3 no-scrollbar">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === s.id
                    ? `bg-gradient-to-r ${s.color} text-white shadow-lg`
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <s.icon size={16} />
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Detail */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${sol.color} rounded-xl flex items-center justify-center`}>
                  <sol.icon size={20} />
                </div>
                <div className="text-xs text-slate-400 font-mono">{sol.nameEn}</div>
              </div>
              <h2 className="text-4xl font-black mb-2 text-slate-900">{sol.name}</h2>
              <div className={`text-sm bg-gradient-to-r ${sol.color} bg-clip-text text-transparent font-semibold`}>
                {sol.tagline}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column */}
              <div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">{sol.description}</p>

                {/* Key Metrics */}
                <div className="mb-8 p-4 bg-white shadow-sm rounded-2xl border border-slate-200 text-center">
                  <div className={`text-lg font-black bg-gradient-to-r ${sol.color} bg-clip-text text-transparent`}>
                    {sol.metrics}
                  </div>
                </div>

                {/* Challenges */}
                <h3 className="text-lg font-bold mb-4 text-slate-900">行业痛点与挑战</h3>
                <div className="space-y-3 mb-8">
                  {sol.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{c}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Products */}
                <h3 className="text-lg font-bold mb-4 text-slate-900">推荐产品</h3>
                <div className="space-y-2">
                  {sol.products.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-all group cursor-pointer"
                    >
                      <span className="text-sm text-slate-600 font-mono">{p}</span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-cyan-600 transition-colors" />
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r ${sol.color} rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all`}
                  >
                    获取完整解决方案 <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square">
                <ImageWithFallback
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-slate-900">六大应用领域</h2>
            <p className="text-slate-500">点击查看各行业详细解决方案</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActive(s.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`group relative rounded-2xl overflow-hidden aspect-square transition-all ${
                  active === s.id ? "ring-2 ring-cyan-500" : ""
                }`}
              >
                <ImageWithFallback
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                  <div className={`w-8 h-8 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center mb-2`}>
                    <s.icon size={16} />
                  </div>
                  <div className="text-sm font-bold text-white">{s.name}</div>
                </div>
              </motion.button>
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
            <h2 className="text-3xl font-black mb-4 text-slate-900">没有找到您需要的方案？</h2>
            <p className="text-slate-500 mb-8">
              质能达提供定制化 ASIC 设计服务，我们的专家团队将为您量身定制解决方案。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
            >
              联系应用工程师 <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
