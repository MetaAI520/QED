import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Cpu, Lightbulb, Battery, Monitor, Radio, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  { id: "led", label: "LED", labelFull: "LED芯片" },
  { id: "bms", label: "BMS", labelFull: "BMS芯片" },
  { id: "lcd", label: "LCD", labelFull: "LCD芯片" },
  { id: "power", label: "Power", labelFull: "Power芯片" },
  { id: "sensor", label: "传感器", labelFull: "传感器芯片" },
  { id: "mems", label: "MEMS", labelFull: "超声波MEMS+CMOS" },
];

const productLines = [
  {
    id: "led",
    icon: Lightbulb,
    name: "LED芯片",
    nameEn: "LED Chip IC",
    color: "from-cyan-500 to-blue-600",
    description:
      "质能达 LED 芯片系列采用电源线载波技术，支持点控全彩 RGB，广泛应用于景观照明、建筑亮化、透明屏、装饰灯带等场景。产品具备单线传输协议、低功耗设计和多种封装形式。",
    features: [
      "电源线载波单线传输协议",
      "点控全彩 RGB 256 级灰度",
      "宽工作电压 3.3V~5V",
      "低功耗待机设计",
      "支持 COB/DIP/SMD 多种封装",
      "10 万小时超长使用寿命",
    ],
    specs: [
      { label: "工作电压", value: "3.3V~5V" },
      { label: "通信速率", value: "800Kbps" },
      { label: "灰度等级", value: "256级" },
      { label: "封装形式", value: "COB/DIP/SMD" },
    ],
    products: [
      { model: "QED3110", desc: "点控 RGB 全彩 IC，铜线系列" },
      { model: "QED512", desc: "DMX512 协议 LED 驱动芯片" },
      { model: "QED7210", desc: "高集成度景观照明 IC" },
    ],
    image:

      "https://images.unsplash.com/photo-1759159347934-1cdc38dd1f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwY2hpcCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzc1NjUxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "bms",
    icon: Battery,
    name: "BMS芯片",
    nameEn: "BMS Chip",
    color: "from-emerald-500 to-teal-600",
    description:
      "质能达 BMS 芯片系列为新能源锂电池管理提供核心半导体方案。独创单颗高集成度 BMS 控制芯片，支持 2-20 节电池级联管理，实现多级保护及电荷平衡，极少外围元器件。",
    features: [
      "支持 2~20 节电池级联管理",
      "过压/过流/过热多重保护",
      "自动电荷平衡功能",
      "单芯片高集成度设计",
      "极少外围元器件",
      "支持多种锂电池类型",
    ],
    specs: [
      { label: "支持电池节数", value: "2~20节" },
      { label: "均衡电流", value: "最高 200mA" },
      { label: "保护精度", value: "±25mV" },
      { label: "通信接口", value: "I2C/SMBus" },
    ],
    products: [
      { model: "QED1100", desc: "多节 BMS 管理芯片" },
      { model: "QED1200", desc: "高集成度 BMS 方案" },
    ],
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "lcd",
    icon: Monitor,
    name: "LCD芯片",
    nameEn: "LCD Driver IC",
    color: "from-violet-500 to-purple-600",
    description:
      "质能达 LCD 芯片系列提供高性能液晶显示驱动方案，适用于段码屏、点阵屏、TFT 面板等多种显示应用场景，具备低功耗、高对比度和灵活接口配置。",
    features: [
      "支持段码/点阵/TFT 多种面板",
      "低功耗休眠模式",
      "高对比度显示输出",
      "SPI/I2C 灵活接口",
      "内置升压电路",
      "宽工作温度范围",
    ],
    specs: [
      { label: "驱动类型", value: "段码/点阵/TFT" },
      { label: "工作电压", value: "2.5V~5.5V" },
      { label: "接口类型", value: "SPI/I2C" },
      { label: "工作温度", value: "-40℃~85℃" },
    ],
    products: [
      { model: "QED8001", desc: "段码 LCD 驱动 IC" },
      { model: "QED8201", desc: "点阵 LCD 驱动 IC" },
      { model: "QED8301", desc: "TFT 面板驱动 IC" },
    ],
    image:
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1hbmFnZW1lbnQlMjBlbmVyZ3klMjBlZmZpY2llbmN5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "power",
    icon: Zap,
    name: "Power芯片",
    nameEn: "Power IC",
    color: "from-orange-500 to-amber-600",
    description:
      "质能达 Power 芯片系列覆盖稳压、转换、保护等电源管理全链路，为各类电子设备提供稳定高效的供电方案，产品具备高转换效率和完善的保护机制。",
    features: [
      "高转换效率 >95%",
      "完善的过压/过流保护",
      "宽输入电压范围",
      "低静态电流设计",
      "内置软启动功能",
      "多种封装选项",
    ],
    specs: [
      { label: "输入电压", value: "3V~40V" },
      { label: "输出电流", value: "最高 3A" },
      { label: "转换效率", value: ">95%" },
      { label: "静态电流", value: "<10μA" },
    ],
    products: [
      { model: "QED431", desc: "精密可调并联稳压器" },
      { model: "QED7100", desc: "高效同步降压转换器" },
      { model: "QED7200", desc: "宽输入升压转换器" },
    ],
    image:
      "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBFViUyMGJhdHRlcnklMjBjaGFyZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1NjUxODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "sensor",
    icon: Cpu,
    name: "传感器芯片",
    nameEn: "Sensor IC",
    color: "from-blue-500 to-indigo-600",
    description:
      "质能达传感器芯片系列对标德州仪器、英飞凌等国际品牌，实现国产替代。产品覆盖温度、湿度、压力、光照等多种传感应用，具备高精度和高可靠性。",
    features: [
      "16-bit 高精度 ADC",
      "对标 TI/英飞凌国际品牌",
      "多种传感类型覆盖",
      "低功耗设计",
      "数字接口输出",
      "工业级可靠性",
    ],
    specs: [
      { label: "ADC 精度", value: "16-bit" },
      { label: "功耗", value: "<100μA" },
      { label: "接口", value: "I2C/SPI" },
      { label: "工作温度", value: "-40℃~125℃" },
    ],
    products: [
      { model: "QED6100", desc: "高精度温度传感器 IC" },
      { model: "QED6200", desc: "数字湿度传感器 IC" },
      { model: "QED6300", desc: "压力传感器 IC" },
      { model: "QED6400", desc: "环境光传感器 IC" },
    ],
    image:
      "https://images.unsplash.com/photo-1674269161229-165040284030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "mems",
    icon: Radio,
    name: "超声波MEMS+CMOS",
    nameEn: "Ultrasonic MEMS+CMOS",
    color: "from-pink-500 to-rose-600",
    description:
      "质能达在国内率先实现超声波 MEMS 与 CMOS 工艺的单芯片集成，融合自主研发的 AI 信号处理算法，打造新一代智能超声波传感芯片。产品可应用于距离测量、障碍物检测、手势识别等领域。",
    features: [
      "MEMS+CMOS 单芯片集成",
      "自主 AI 信号处理算法",
      "国内首创技术方案",
      "超低功耗设计",
      "高精度距离测量",
      "完全自主知识产权",
    ],
    specs: [
      { label: "测量范围", value: "2cm~5m" },
      { label: "精度", value: "±1mm" },
      { label: "功耗", value: "<5mW" },
      { label: "接口", value: "I2C/UART" },
    ],
    products: [
      { model: "QED-MEMS100", desc: "超声波测距传感器芯片" },
      { model: "QED-MEMS200", desc: "AI 手势识别传感器芯片" },
    ],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzc1NjUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Products() {
  const [activeId, setActiveId] = useState("led");
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
              六大产品线覆盖 LED、BMS、LCD、Power、传感器及 MEMS 全场景，以自主芯片技术为客户提供最优方案。
            </p>
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
