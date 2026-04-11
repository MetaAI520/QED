import { motion } from "motion/react";
import { Target, Lightbulb, Award, Users, Globe, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  { year: "2015", event: "质能达微电子在深圳成立，专注模拟与混合信号芯片研发" },
  { year: "2017", event: "推出首款 QED-LDO 系列产品，进入消费电子市场，获天使轮融资" },
  { year: "2019", event: "DC-DC 转换器系列量产，完成 A 轮融资，研发团队扩张至 30 人" },
  { year: "2021", event: "PMIC 旗舰产品进入头部手机品牌供应链，营收突破 1 亿元" },
  { year: "2022", event: "完成 B 轮融资，开始布局车规级产品线" },
  { year: "2023", event: "车规 BMS 通过 AEC-Q100 认证，获评国家高新技术企业" },
  { year: "2024", event: "完成 B+ 轮战略融资，估值突破 100 亿元，启动科创板上市筹备" },
  { year: "2026", event: "正式启动 IPO 进程，迈向资本市场新征程" },
];

const values = [
  {
    icon: Target,
    title: "专注创新",
    description: "每年将超过 22% 营收投入研发，保持技术领先，永不止步",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: "以人为本",
    description: "打造开放包容的创新文化，让每位工程师都能充分发挥才华",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Award,
    title: "追求卓越",
    description: "以最高标准要求产品质量，每一款芯片都要做到极致",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Globe,
    title: "全球视野",
    description: "立足中国、服务全球，以国际一流标准参与竞争",
    color: "from-emerald-500 to-teal-600",
  },
];

const leadership = [
  {
    name: "张国华 博士",
    nameEn: "Dr. Zhang Guohua",
    position: "创始人 & CEO",
    bio: "电子工程博士，模拟电路领域资深专家。曾任职于德州仪器（TI）亚太区首席模拟设计工程师，拥有 20 年模拟芯片设计经验，主导研发多款行业标杆产品，持有 60 余项发明专利。",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "李文博 博士",
    nameEn: "Dr. Li Wenbo",
    position: "首席技术官 CTO",
    bio: "清华大学微电子学博士，前 Maxim 半导体中国 CTO。深耕 BCD 工艺和高精度模拟设计领域 18 年，主持建立质能达核心技术平台，是公司最重要的技术领军人物。",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "王晓明",
    nameEn: "Wang Xiaoming",
    position: "首席财务官 CFO",
    bio: "北京大学光华管理学院 MBA，注册会计师（CPA）。曾任职于多家 A 股上市半导体公司 CFO，深厚的资本市场运营经验，主导推进质能达科创板 IPO 工作。",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "陈丽华",
    nameEn: "Chen Lihua",
    position: "首席营销官 CMO",
    bio: "复旦大学电子工程硕士，拥有 15 年半导体销售与市场经验。深度布局消费电子、IoT 及汽车电子渠道，带领质能达产品快速进入主流品牌供应链。",
    color: "from-orange-500 to-amber-600",
  },
];

const honors = [
  { title: "国家高新技术企业", org: "科学技术部", year: "2020" },
  { title: "国家级专精特新", org: "工业和信息化部", year: "2023" },
  { title: "深圳市高新技术企业", org: "深圳市科技创新委员会", year: "2019" },
  { title: "中国创新创业大奖赛深圳总决赛亚军", org: "深圳市人民政府", year: "2018" },
  { title: "龙华区中小微企业100强", org: "龙华区政府", year: "2021" },
  { title: "2020年中国国家专利发明奖", org: "国家知识产权局", year: "2020" },
  { title: "知识产权贯标证书", org: "国家知识产权局", year: "2021" },
  { title: "集成电路布图专利4项", org: "国家知识产权局", year: "2022" },
];

export function About() {
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
              ABOUT QED MICRO
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              关于质能达
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              深圳市质能达微电子科技有限公司成立于 2015 年，
              是一家专注于模拟与混合信号集成电路设计的国家高新技术企业，
              以卓越的电源管理芯片技术赋能万物互联。            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">企业使命</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                以卓越的模拟芯片技术创新，赋能千行百业的数字化转型。
                为构建高效、智能、可持续的互联世界贡献核心力量。              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-sm rounded-2xl border border-slate-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={28} />
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">企业愿景</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                成为全球领先的模拟与混合信号芯片解决方案提供商，
                以技术创新引领行业发展，打造受全球客户信赖的世界一流模拟芯片品牌。              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-[420px]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBtYW51ZmFjdHVyaW5nJTIwY2xlYW4lMjByb29tfGVufDF8fHx8MTc3NTY1MTgzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="公司"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
                COMPANY OVERVIEW
              </div>
              <h2 className="text-4xl font-black mb-6 text-slate-900">
                十年专注，
                <br />
                模拟芯片领导者              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                质能达成立于 2015 年，总部位于深圳龙华区。公司专注于模拟与混合信号集成电路的研发、设计与销售，
                产品涵盖 PMIC、DC-DC 转换器、LDO、电池管理及电机驱动等六大系列。              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                凭借拥有博士、多位硕士为骨干的研发团队、130 多项芯片专利、
                50+ 款产品型号及 100+ 合作客户，质能达已跻身中国模拟芯片设计领域领先梯队，
                并积极推进科创板上市进程，致力于进一步扩大规模、提升全球竞争力。              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2015", label: "成立年份" },
                  { value: "30+", label: "研发工程师" },
                  { value: "50+", label: "产品型号" },
                  { value: "100+", label: "合作客户" },
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-white shadow-sm rounded-xl border border-slate-200">
                    <div className="text-2xl font-black text-cyan-600 mb-1">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              CORE VALUES
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">核心价值观</h2>
            <p className="text-slate-500">引领质能达前进的信念与坚守</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 text-center hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              DEVELOPMENT HISTORY
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">发展历程</h2>
            <p className="text-slate-500">从创业初心到行业领军，每一步都是积淀</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-10 pb-10 border-l-2 border-slate-200 last:pb-0 last:border-transparent"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-4 border-white" />
                <div className="text-cyan-600 font-black text-xl mb-1">{item.year}</div>
                <div className="text-slate-600 leading-relaxed">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              LEADERSHIP TEAM
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">领导团队</h2>
            <p className="text-slate-500">汇聚顶尖行业专家，构建卓越管理体系</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${leader.color} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <Users size={28} />
                </div>
                <h3 className="text-lg font-bold mb-0.5 text-slate-900">{leader.name}</h3>
                <div className="text-xs text-slate-400 font-mono mb-2">{leader.nameEn}</div>
                <p className="text-cyan-600 text-sm font-semibold mb-3">{leader.position}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Certifications */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                className="p-5 bg-white shadow-sm rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-yellow-500 hover:bg-slate-50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-0.5 text-slate-900">{honor.title}</div>
                  <div className="text-xs text-slate-400">
                    {honor.org} · {honor.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Zap size={36} className="text-cyan-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4 text-slate-900">与质能达携手共进</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              无论是产品合作、投资咨询还是人才加盟，我们都期待与您的交流
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
              >
                联系我们 <ArrowRight size={18} />
              </a>
              <a
                href="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-900 hover:bg-slate-200 transition-all"
              >
                投资者关系 <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}