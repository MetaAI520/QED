import { useState } from "react";
import { motion } from "motion/react";
import { Smartphone, Factory, Car, Radio, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const solutions = [
  {
    id: "consumer",
    icon: Smartphone,
    name: "消费电子",
    nameEn: "Consumer Electronics",
    color: "from-cyan-500 to-blue-600",
    tagline: "性能领先 · 超薄超轻 · 极致续航",
    description:
      "随着智能手机、平板电脑、真无线耳机、智能手表等消费电子产品快速迭代，对电源管理芯片的集成度、效率和体积提出了前所未有的要求。质能达为全球 TOP 10 消费电子品牌提供定制化电源管理方案，帮助客户实现产品的差异化竞争。",
    challenges: [
      "多功能高度集成，减少外围器件数量",
      "追求超高转换效率，延长电池使用时间",
      "超薄 SiP 封装方案，适配纤薄设计",
      "低噪声设计，避免干扰无线通信模组",
    ],
    products: ["QED-PMU9000 系列 PMIC", "QED-CHG650 快充芯片", "QED-LDO200 超低噪声 LDO"],
    metrics: [
      { value: "96%", label: "最高转换效率" },
      { value: "5μA", label: "静态功耗" },
      { value: "12路", label: "单芯片最大输出" },
    ],
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "iot",
    icon: Home,
    name: "工业物联网",
    nameEn: "Industrial IoT",
    color: "from-emerald-500 to-teal-600",
    tagline: "超低功耗 · 宽温工作 · 长期稳定",
    description:
      "物联网终端设备数量的爆炸式增长带动了对低功耗、高可靠性电源管理芯片的强劲需求。质能达深刻理解 IoT 设备从能量采集到协议通信的全链路需求，提供从 μA 级待机到秒级唤醒的完整能源管理方案。",
    challenges: [
      "电池供电设备需要数年的超长待机寿命",
      "支持能量采集（太阳能/热能/振动能）",
      "宽工作温度 -40℃~ 85℃ 工业标准",
      "高抗干扰，适应复杂工业环境",
    ],
    products: ["QED-PMU7200 低功耗 PMIC", "QED-BC4200 高效 Buck", "QED-LDO1000 通用 LDO"],
    metrics: [
      { value: "<1μA", label: "超低待机电流" },
      { value: "85℃", label: "最高工作温度" },
      { value: "10年", label: "设计工作寿命" },
    ],
    image:
      "https://images.unsplash.com/photo-1674269161229-165040284030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ev",
    icon: Car,
    name: "新能源汽车",
    nameEn: "New Energy Vehicle",
    color: "from-orange-500 to-amber-600",
    tagline: "车规可靠 · 功能安全 · 高压支持",
    description:
      "新能源汽车的快速渗透拉动了对车规级功率电子器件的旺盛需求。质能达的车规产品通过 AEC-Q100 Grade 0 认证和 ISO 26262 ASIL-B 功能安全认证，在严苛的车规环境下提供稳定可靠的性能表现。",
    challenges: [
      "车规 AEC-Q100 Grade 0 (-40℃~150℃)",
      "符合 ISO 26262 功能安全 ASIL-B 等级",
      "高压总线 48V/800V 系统兼容",
      "EMC/EMI 符合 CISPR 25 Class 5",
    ],
    products: ["QED-BMS224 车规 BMS", "QED-MDR815 BLDC 驱动", "QED-CHG240 大功率充电 IC"],
    metrics: [
      { value: "AEC-Q100", label: "车规认证等级" },
      { value: "ASIL-B", label: "功能安全等级" },
      { value: "800V", label: "最高支持电压" },
    ],
    image:
      "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBFViUyMGJhdHRlcnklMjBjaGFyZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1NjUxODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "industrial",
    icon: Factory,
    name: "工业控制",
    nameEn: "Industrial Automation",
    color: "from-violet-500 to-purple-600",
    tagline: "高可靠 · 宽输入 · 隔离防护",
    description:
      "工业自动化对电源管理器件的可靠性和稳定性要求极为严苛。质能达的工业级产品支持宽输入电压（9V~60V）和全隔离设计，广泛应用于 PLC、机器人、工业相机、伺服驱动器等核心工业设备。",
    challenges: [
      "宽输入电压范围 9V ~ 60V DC",
      "支持 2kV 隔离耐压，防电气干扰",
      "极端振动和冲击环境下稳定工作",
      "MTBF 超过 50 万小时工业级可靠性",
    ],
    products: ["QED-MDR460 工业电机驱动", "QED-BC4200 工业 Buck", "QED-LDO2000 大电流 LDO"],
    metrics: [
      { value: "60V", label: "最高输入电压" },
      { value: "50万h", label: "MTBF 可靠寿命" },
      { value: "2kV", label: "隔离耐压等级" },
    ],
    image:
      "https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBtYW51ZmFjdHVyaW5nJTIwY2xlYW4lMjByb29tfGVufDF8fHx8MTc3NTY1MTgzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5g",
    icon: Radio,
    name: "5G 通信基础设施",
    nameEn: "5G Communication Infrastructure",
    color: "from-blue-500 to-indigo-600",
    tagline: "高功率密度 · 超高效率 · 低延迟",
    description:
      "5G 基站的大规模部署对电源效率和功率密度提出了极高要求。质能达为 5G AAU、BBU 和 RRU 提供高效率的电源管理方案，帮助运营商降低 TCO（总拥有成本），同时满足严格的 EMC 合规要求。",
    challenges: [
      "功率密度要求超高（100W/cm³）",
      "宽负载范围效率要求 >95%",
      "满足 ETSI 300 132-2 电源规范",
      "低延迟快速瞬态响应 (<100ns)",
    ],
    products: ["QED-PMU9000 高集成 PMIC", "QED-BB2800 双向 Buck-Boost", "QED-BC4200 高频 Buck"],
    metrics: [
      { value: "97%", label: "峰值转换效率" },
      { value: "<100ns", label: "瞬态响应时间" },
      { value: "4MHz", label: "最高开关频率" },
    ],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzc1NjUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Solutions() {
  const [active, setActive] = useState("consumer");
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
              深耕五大核心赛道，以精准的行业理解与定制化产品，
              为客户提供从芯片选型到系统级参考设计的完整解决方案。            </p>
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
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {sol.metrics.map((m, i) => (
                    <div key={i} className="p-4 bg-white shadow-sm rounded-2xl border border-slate-200 text-center">
                      <div className={`text-2xl font-black bg-gradient-to-r ${sol.color} bg-clip-text text-transparent mb-1`}>
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-500">{m.label}</div>
                    </div>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-slate-900">五大应用领域</h2>
            <p className="text-slate-500">点击查看各行业详细解决方案</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
              质能达提供定制化 ASIC 设计服务，我们的专家团队将为您量身定制解决方案。            </p>
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
