import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Cpu,
  Battery,
  Lightbulb,
  Monitor,
  Radio,
  Shield,
  TrendingUp,
  FlaskConical,
  ChevronDown,
  CheckCircle2,
  Globe,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { value: "10+", label: "年专注模拟芯片" },
  { value: "130+", label: "芯片专利" },
  { value: "50+", label: "产品型号" },
  { value: "100+", label: "合作客户" },
];

const products = [
  {
    icon: Lightbulb,
    name: "LED芯片",
    nameEn: "LED Chip IC",
    desc: "电源线载波LED景观照明芯片，支持点控全彩RGB，广泛应用于景观照明、透明屏等",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Battery,
    name: "BMS芯片",
    nameEn: "BMS Chip",
    desc: "新能源锂电池管理芯片，独创单颗高集成度BMS，支持2-20节电池级联管理",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Monitor,
    name: "LCD芯片",
    nameEn: "LCD Driver IC",
    desc: "LCD显示驱动芯片，适用于各类液晶显示面板驱动与控制应用",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Zap,
    name: "Power芯片",
    nameEn: "Power IC",
    desc: "电源管理与控制系列芯片，覆盖稳压、转换、保护等电源管理全链路",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Cpu,
    name: "传感器芯片",
    nameEn: "Sensor IC",
    desc: "高精度传感器芯片，对标德州仪器、英飞凌等国际品牌，实现国产替代",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Radio,
    name: "超声波MEMS+CMOS",
    nameEn: "Ultrasonic MEMS+CMOS",
    desc: "超声波MEMS+CMOS芯片AI一体化方案，传感器芯片及AI算法国内首创",
    color: "from-pink-500 to-rose-600",
  },
];

const solutions = [
  {
    name: "LED景观照明",
    nameEn: "LED Landscape Lighting",
    desc: "电源线载波LED景观照明芯片，智能点控全彩RGB方案",
    image:
      "https://images.unsplash.com/photo-1704026437278-77f1db74859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTY1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "新能源BMS管理",
    nameEn: "Battery Management",
    desc: "锂电池管理芯片方案，支持2-20节电池级联管理",
    image:
      "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBFViUyMGJhdHRlcnklMjBjaGFyZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1NjUxODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "超声波MEMS+AI",
    nameEn: "Ultrasonic MEMS+AI",
    desc: "MEMS+CMOS芯片AI一体化方案，国内首创自主知识产权",
    image:
      "https://images.unsplash.com/photo-1674269161229-165040284030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "医疗电子",
    nameEn: "Medical Electronics",
    desc: "传感器与MEMS芯片赋能便携式医疗设备与超声诊断",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzc1NjUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const advantages = [
  {
    icon: FlaskConical,
    title: "自主 IP 核心",
    desc: "130+ 芯片专利构成技术护城河，持续积累差异化竞争壁垒",
  },
  {
    icon: Shield,
    title: "车规品质认证",
    desc: "通过 AEC-Q100 车规级认证，满足 -40℃ ~ 125℃ 全温域要求",
  },
  {
    icon: TrendingUp,
    title: "高效研发迭代",
    desc: "研发投入超营收 22%，每年推出 100+ 新品，行业最快上市速度",
  },
  {
    icon: Globe,
    title: "全球化服务",
    desc: "深圳总部研发中心，服务 100+ 合作客户",
  },
];

const news = [
  {
    date: "2026-04-05",
    category: "公司动态",
    title: "质能达完成 B+ 轮战略融资，估值突破百亿，加速科创板 IPO 进程",
    tag: "重大事项",
  },
  {
    date: "2026-03-20",
    category: "产品发布",
    title: "质能达发布 QED-PMU9000 系列多路电源管理芯片，单芯片集成 12 路电压轨",
    tag: "新品发布",
  },
  {
    date: "2026-03-08",
    category: "荣誉认证",
    title: "质能达荣获国家级专精特新「小巨人」企业认定，彰显核心竞争实力",
    tag: "荣誉资质",
  },
];

const certifications = [
  "国家高新技术企业",
  "国家级专精特新",
  "深圳市高新技术企业",
  "中国创新创业大奖赛深圳总决赛亚军",
  "龙华区中小微企业100强",
  "2020年中国国家专利发明奖",
  "知识产权贯标证书",
];

export function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-14 md:py-20 flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759159347934-1cdc38dd1f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwY2hpcCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzc1NjUxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="chip background"
            className="w-full h-full object-cover opacity-[0.12]"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-400/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-400/15 blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20"
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm">高性能电源管理芯片领军企业 · 科创板上市筹备中</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white"
            >
              以质能芯
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                驱动未来世界
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-3 leading-relaxed"
            >
              质能达专注于模拟与混合信号集成电路设计，
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
            >
              以卓越电源管理技术，为消费电子、物联网、新能源汽车赋能。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/25"
              >
                探索产品
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl font-semibold text-lg text-white border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all"
              >
                投资者关系
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
              PRODUCT PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">六大产品线</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              从 LED 到 MEMS，质能达提供覆盖多场景的自主芯片解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${product.color} blur-3xl`}
                  style={{ opacity: 0 }}
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full bg-gradient-to-br from-white to-transparent" />

                <div
                  className={`relative w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon size={24} className="text-white" />
                </div>
                <div className="text-xs text-slate-400 mb-1 font-mono">{product.nameEn}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{product.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{product.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-cyan-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  了解详情 <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all"
            >
              查看全部产品 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
                APPLICATION SOLUTIONS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                赋能四大
                <br />
                核心场景
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-right">
              质能达的电源管理芯片广泛应用于消费电子、物联网、新能源汽车及 5G 基础设施等核心赛道
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map((sol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] md:aspect-video"
              >
                <ImageWithFallback
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-cyan-400 font-mono mb-1">{sol.nameEn}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{sol.name}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sol.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    了解解决方案 <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all"
            >
              查看全部解决方案 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
                CORE TECHNOLOGY
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
                技术核心
                <br />
                筑就护城河
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                质能达以先进 BCD 工艺为基础，结合高精度模拟设计与 SiP 封装技术，
                构建起难以复制的技术壁垒，持续引领行业创新。
              </p>
              <Link
                to="/rnd"
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors font-semibold"
              >
                探索研发创新 <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm shadow-slate-200/50 hover:bg-slate-50 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <adv.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{adv.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAFER / VISUAL SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[460px]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBtYW51ZmFjdHVyaW5nJTIwY2xlYW4lMjByb29tfGVufDF8fHx8MTc3NTY1MTgzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="芯片晶圆"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-xs text-cyan-600 font-mono mb-1">WAFER PRODUCTION</div>
                <div className="text-slate-900 font-bold text-lg">先进 BCD 工艺制程</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
                ABOUT QED MICRO
              </div>
              <h2 className="text-4xl font-black mb-6 text-slate-900">
                专注模拟芯片
                <br />
                十年磨一剑
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                质能达微电子成立于 2015 年，总部位于深圳，是国家高新技术企业、
                国家专精特新「小巨人」企业。公司专注于模拟与混合信号集成电路的研发与销售，
                产品广泛应用于消费电子、物联网、新能源汽车等多个高速增长市场。
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                凭借深厚的模拟设计功底与快速迭代能力，质能达已累计推出 50+ 款产品，
                服务 100+ 合作客户，并积极推进科创板上市进程，
                致力于成为全球领先的模拟芯片供应商。
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "模拟与混合信号芯片国家高新企业",
                  "自主核心 IP，130+ 芯片专利",
                  "AEC-Q100 车规级产品认证",
                  "研发投入占营收比超 22%",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all"
              >
                了解更多关于我们 <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
                LATEST NEWS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">最新动态</h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors text-sm font-semibold"
            >
              查看全部新闻 <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm shadow-slate-200/50 hover:bg-slate-50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full border border-cyan-200">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">{item.category}</div>
                <h3 className="text-base font-semibold leading-relaxed text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-cyan-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  阅读详情 <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INVESTOR TEASER ===== */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
                  INVESTOR RELATIONS
                </div>
                <h2 className="text-4xl font-black mb-5 text-slate-900">
                  共同见证
                  <br />
                  质能达的腾飞
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  质能达正积极推进科创板 IPO，以高速增长的业绩和扎实的技术壁垒，
                  致力于为投资者创造长期可持续的价值回报。
                </p>
                <Link
                  to="/investors"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-blue-500/25"
                >
                  查看投资者关系 <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "1.3亿", label: "近三年销售业绩", sub: "持续增长" },
                  { value: "130+", label: "芯片专利", sub: "含发明专利20余项" },
                  { value: "50+", label: "产品型号", sub: "六大产品线" },
                  { value: "100+", label: "合作客户", sub: "覆盖多个行业" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm shadow-slate-200/50 text-center"
                  >
                    <div className="text-3xl font-black text-cyan-600 mb-1">{item.value}</div>
                    <div className="text-sm font-semibold mb-0.5 text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block mb-3 text-xs tracking-widest uppercase text-cyan-500 font-semibold">
              CERTIFICATIONS & HONORS
            </div>
            <h2 className="text-3xl font-black text-slate-900">荣誉资质</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-slate-200 shadow-sm shadow-slate-200/50 hover:border-cyan-500/50 hover:bg-slate-50 transition-all"
              >
                <Award size={14} className="text-cyan-600" />
                <span className="text-sm text-slate-600">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-200/30 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-5 text-slate-900">
              携手质能达
              <br />
              共创数智未来
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              我们正在寻找志同道合的合作伙伴与优秀人才，一同推动电源管理芯片技术的边界
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all shadow-xl shadow-blue-500/25"
              >
                联系我们
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-slate-100 border border-slate-200 rounded-xl font-semibold text-lg text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                加入我们
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
