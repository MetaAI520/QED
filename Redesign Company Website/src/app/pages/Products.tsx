import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Cpu, Gauge, Battery, PlugZap, Radio, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  { id: "pmic", label: "PMIC", labelFull: "电源管理芯片" },
  { id: "dcdc", label: "DC-DC", labelFull: "DC-DC 转换器" },
  { id: "ldo", label: "LDO", labelFull: "LDO 稳压器" },
  { id: "bms", label: "BMS", labelFull: "电池管理" },
  { id: "charger", label: "充电管理", labelFull: "充电管理芯片" },
  { id: "motor", label: "电机驱动", labelFull: "电机驱动芯片" },
];

const productLines = [
  {
    id: "pmic",
    icon: Zap,
    name: "电源管理芯片",
    nameEn: "Power Management IC (PMIC)",
    color: "from-cyan-500 to-blue-600",
    description:
      "质能达 PMIC 系列高度集成多路电压轨，广泛应用于智能手机、平板电脑、可穿戴设备等消费电子产品。凭借先进的 BCD 工艺与低静态电流设计，为终端产品提供稳定、高效的电源管理方案。",
    features: [
      "单芯片最多 12 路独立电压轨",
      "静态电流低至 5μA，超长续航",
      "集成过压/欠压/过温多重保护",
      "支持 MIPI I3C / I2C 动态调压",
      "通过 AEC-Q100 Grade B 车规认证",
      "支持 -40℃~ 125℃ 工作温度",
    ],
    specs: [
      { label: "输入电压范围", value: "2.5V ~ 6.5V" },
      { label: "输出电流", value: "最高 8A/路" },
      { label: "转换效率", value: "最高 96%" },
      { label: "待机功耗", value: "< 5μA" },
    ],
    products: [
      { model: "QED-PMU9000", desc: "12 路输出，适用旗舰手机" },
      { model: "QED-PMU7200", desc: "8 路输出，IoT 低功耗平台" },
      { model: "QED-PMU5100", desc: "5 路输出，通用消费类" },
    ],
    image:
      "https://images.unsplash.com/photo-1759159347934-1cdc38dd1f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwY2hpcCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzc1NjUxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "dcdc",
    icon: Cpu,
    name: "DC-DC 转换器",
    nameEn: "DC-DC Converter",
    color: "from-blue-500 to-indigo-600",
    description:
      "质能达 DC-DC 系列包含 Buck、Boost、Buck-Boost 和 SEPIC 等多种拓扑结构，宽输入电压范围覆盖从便携式设备到工业级应用，以业界领先的转换效率和集成度赢得市场认可。",
    features: [
      "Buck/Boost/Buck-Boost 全拓扑覆盖",
      "工作频率高达 4MHz，缩小外围尺寸",
      "轻载效率优化，最高效率 97%",
      "内置软启动，防止浪涌电流",
      "可编程频率与输出电压",
      "WLCSP/QFN 超小封装选项",
    ],
    specs: [
      { label: "输入电压", value: "2.7V ~ 40V" },
      { label: "输出电流", value: "最高 20A" },
      { label: "开关频率", value: "200kHz ~ 4MHz" },
      { label: "最高效率", value: "97%" },
    ],
    products: [
      { model: "QED-BC4200", desc: "4A 同步 Buck，高集成度" },
      { model: "QED-BST3600", desc: "3A 升压，适用于 LED 背光" },
      { model: "QED-BB2800", desc: "双向 Buck-Boost，电池系统" },
    ],
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ldo",
    icon: Gauge,
    name: "LDO 线性稳压器",
    nameEn: "LDO Linear Regulator",
    color: "from-violet-500 to-purple-600",
    description:
      "质能达 LDO 系列以超低噪声和超高 PSRR 著称，广泛应用于 RF 收发器、ADC/DAC、时钟电路等对电源噪声极为敏感的精密模拟电路场景，提供超清洁的供电环境。",
    features: [
      "噪声低至 4μVrms (10Hz-100kHz)",
      "PSRR > 80dB @1kHz，优秀抑制能力",
      "压差低至 80mV，最大化输出电压",
      "支持输出电容小至 1μF",
      "快速瞬态响应，稳定负载切换",
      "集成使能控制和软启动功能",
    ],
    specs: [
      { label: "输入电压范围", value: "1.5V ~ 20V" },
      { label: "输出电流", value: "50mA ~ 2A" },
      { label: "输出噪声", value: "< 4μVrms" },
      { label: "PSRR", value: "> 80dB" },
    ],
    products: [
      { model: "QED-LDO200", desc: "200mA 超低噪声，RF 专用" },
      { model: "QED-LDO1000", desc: "1A 高精度，通用型" },
      { model: "QED-LDO2000", desc: "2A 大电流，数字供电" },
    ],
    image:
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1hbmFnZW1lbnQlMjBlbmVyZ3klMjBlZmZpY2llbmN5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "bms",
    icon: Battery,
    name: "电池管理芯片",
    nameEn: "Battery Management System (BMS)",
    color: "from-emerald-500 to-teal-600",
    description:
      "质能达 BMS 系列覆盖单节至多节锂电池/磷酸铁锂系统，集成精准电量计量、过充/过放/短路保护及均衡功能，广泛应用于消费类电子、电动工具及新能源汽车电池管理系统。",
    features: [
      "支持 1~24 节串联电池组管理",
      "电量计量精度优于 ±1%",
      "过充/过放/过流/短路全保护",
      "主被动均衡双模，延长电池寿命",
      "支持 SOC/SOH/SOP 实时估算",
      "通过 ISO 26262 ASIL-B 功能安全",
    ],
    specs: [
      { label: "支持电池串数", value: "1 ~ 24 节" },
      { label: "电量计量精度", value: "±1%" },
      { label: "均衡电流", value: "最高 500mA" },
      { label: "通信接口", value: "I2C / SMBus / CAN" },
    ],
    products: [
      { model: "QED-BMS101", desc: "单节锂电池保护 IC" },
      { model: "QED-BMS416", desc: "4 节电池组，电动工具专用" },
      { model: "QED-BMS224", desc: "24 节高压 BMS，车规级" },
    ],
    image:
      "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBFViUyMGJhdHRlcnklMjBjaGFyZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1NjUxODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "charger",
    icon: PlugZap,
    name: "充电管理芯片",
    nameEn: "Charger IC",
    color: "from-orange-500 to-amber-600",
    description:
      "质能达充电管理芯片全面支持 USB-C PD 3.1、QC 5.0 及无线充电（Qi 2.0），具备高集成度与安全充电算法，广泛应用于智能手机、真无线耳机、智能穿戴等快充产品。",
    features: [
      "USB-C PD 3.1 & QC 5.0 双协议支持",
      "无线充电 Qi 2.0 标准兼容",
      "集成 OVP/OCP/NTC 三重安全保护",
      "智能温控充电算法，延长电池寿命",
      "支持正向/反向充电（OTG）",
      "效率高达 95%，发热量极低",
    ],
    specs: [
      { label: "最高充电功率", value: "240W (PD 3.1)" },
      { label: "无线充电功率", value: "最高 15W Qi" },
      { label: "充电效率", value: "最高 95%" },
      { label: "支持协议", value: "PD / QC / AFC / FCP" },
    ],
    products: [
      { model: "QED-CHG650", desc: "65W PD 单口快充方案" },
      { model: "QED-WLC15", desc: "15W 无线充电发射 IC" },
      { model: "QED-CHG240", desc: "240W 超高功率充电" },
    ],
    image:
      "https://images.unsplash.com/photo-1674269161229-165040284030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "motor",
    icon: Radio,
    name: "电机驱动芯片",
    nameEn: "Motor Driver IC",
    color: "from-pink-500 to-rose-600",
    description:
      "质能达电机驱动芯片覆盖 BLDC、步进电机和有刷电机全类型，集成全 H 桥驱动与保护电路，广泛应用于工业机器人、无人机、智能家居电机及工业自动化设备。",
    features: [
      "支持 BLDC / 步进 / 有刷电机全类型",
      "集成全 H 桥驱动，无需外部 MOSFET",
      "FOC 无感矢量控制，转矩波动 <1%",
      "低 EMI 设计，符合 CISPR 22 B 级",
      "内置过流/过温/欠压全保护",
      "SPI/PWM/I2C 多接口可选",
    ],
    specs: [
      { label: "驱动电压", value: "8V ~ 60V" },
      { label: "最大相电流", value: "最高 15A" },
      { label: "支持电机类型", value: "BLDC / 步进 / 有刷" },
      { label: "控制接口", value: "SPI / PWM / I2C" },
    ],
    products: [
      { model: "QED-MDR330", desc: "3A 步进电机驱动" },
      { model: "QED-MDR815", desc: "15A BLDC 三相全驱动" },
      { model: "QED-MDR460", desc: "60V 工业级大功率驱动" },
    ],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzc1NjUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Products() {
  const [activeId, setActiveId] = useState("pmic");
  const activeProduct = productLines.find((p) => p.id === activeId)!;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
              PRODUCT CENTER
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              产品中心
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              六大产品线、1000+ 型号覆盖电源管理全场景，
              以卓越的模拟设计功底和持续创新的产品矩阵，为客户提供最优方案。            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/98 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeId === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="block">{cat.label}</span>
                <span className="block text-xs opacity-70 mt-0.5">{cat.labelFull}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left: Info */}
            <div>
              <div
                className={`w-16 h-16 bg-gradient-to-br ${activeProduct.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <activeProduct.icon size={32} />
              </div>
              <div className="text-xs text-slate-400 font-mono mb-2">{activeProduct.nameEn}</div>
              <h2 className="text-4xl font-black mb-4 text-slate-900">{activeProduct.name}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {activeProduct.description}
              </p>

              {/* Features */}
              <h3 className="text-lg font-bold mb-4 text-slate-900">核心特性</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeProduct.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              {/* Spec Table */}
              <h3 className="text-lg font-bold mb-4 text-slate-900">主要规格</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeProduct.specs.map((s, i) => (
                  <div key={i} className="p-4 bg-white shadow-sm rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-400 mb-1">{s.label}</div>
                    <div className={`font-bold bg-gradient-to-r ${activeProduct.color} bg-clip-text text-transparent`}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Product Models */}
              <h3 className="text-lg font-bold mb-4 text-slate-900">主要型号</h3>
              <div className="space-y-3">
                {activeProduct.products.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-all group cursor-pointer"
                  >
                    <div>
                      <div className="font-mono font-bold text-cyan-600">{p.model}</div>
                      <div className="text-sm text-slate-500 mt-0.5">{p.desc}</div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-400 group-hover:text-cyan-600 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image + CTA */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square">
                <ImageWithFallback
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-xs text-cyan-400 font-mono mb-1">{activeProduct.nameEn}</div>
                  <div className="text-xl font-bold text-white">{activeProduct.name}</div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
                <h3 className="font-bold text-lg mb-2 text-slate-900">寻求定制方案？</h3>
                <p className="text-slate-500 text-sm mb-4">
                  我们的应用工程师团队可为您提供专业选型建议和完整参考设计。                </p>
                <a
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${activeProduct.color} rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all`}
                >
                  联系技术专家 <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Product Lines Overview */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-slate-900">完整产品矩阵</h2>
            <p className="text-slate-500">覆盖电源管理全链路，一站式芯片采购</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productLines.map((pl, index) => (
              <motion.button
                key={pl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActiveId(pl.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  activeId === pl.id
                    ? "border-cyan-500 bg-cyan-50"
                    : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${pl.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <pl.icon size={20} />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">{pl.nameEn.split(" ")[0]}</div>
                <div className="text-sm font-bold text-slate-900">{pl.name}</div>
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
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">申请样品 / 获取数据手册</h2>
            <p className="text-slate-500 mb-8">
              注册成为质能达合作客户，即可申请免费样品并下载完整技术文档。            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
              >
                申请样品
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-all"
              >
                下载数据手册
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
