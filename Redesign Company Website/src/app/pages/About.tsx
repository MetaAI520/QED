import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Target, Lightbulb, Award, Users, Globe, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  { year: "2015", event: "质能达微电子在深圳成立，专注模拟与混合信号芯片研发" },
  { year: "2017", event: "推出首款 QED-LDO 系列产品，进入消费电子市场，获天使轮融资" },
  { year: "2019", event: "DC-DC 转换器系列量产，研发团队扩张至 30 人" },
  { year: "2021", event: "PMIC 旗舰产品进入头部手机品牌供应链，营收突破 1 亿元" },
  { year: "2022", event: "开始布局车规级产品线，获评国家高新技术企业" },
  { year: "2023", event: "车规 BMS 产品研发取得突破，获评国家级专精特新企业" },
  { year: "2024", event: "完成A轮融资，启动A+轮融资进程" },
  { year: "2026", event: "推进A+轮融资，加速产品市场化" },
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
    name: "林丰成 博士",
    nameEn: "Dr. Lin Fengcheng",
    position: "Chairman",
    bio: "俄罗斯自然科学院外籍院士，国家特聘专家。清华大学毕业，美国加州大学电子工程与计算机系硕士、物理系博士。具有30年半导体芯片设计经验，拥有国内外130多项专利。",
    fullBio: "林丰成博士是俄罗斯自然科学院外籍院士，国家特聘专家。毕业于清华大学无线电系，获得美国加州大学电子工程与计算机系硕士，物理系博士学位。林博士兼任清华大学、北京大学客座教授，具有30年半导体芯片设计经验，曾在美国硅谷多家知名企业担任芯片设计工程师、研发项目主管，是美国硅谷著名的数模混合电路设计专家，拥有国内外130多项专利。",
    photo: "http://cdn053.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420121317_79814.png",
  },
  {
    name: "常菲亚 博士",
    nameEn: "Dr. Chang Feiya",
    position: "董事总经理",
    bio: "人工智能商业化与全球化运营领域资深专家，拥有超过十一年顶尖科技企业实战经验。",
    fullBio: "常菲亚女士是人工智能商业化与全球化运营领域的资深专家。拥有超过十一年的顶尖科技企业实战经验，曾深度参与并主导华为、腾讯等企业在全球市场的关键业务拓展，现于香港理工大学攻读商业人工智能博士学位，专注于超声波芯片AI前沿技术与商业场景的融合创新。",
    photo: "/images/changfeiya.jpg",
  },
  {
    name: "邓小群 女士",
    nameEn: "Deng Xiaoqun",
    position: "COO / 执行董事",
    bio: "深圳市国家领军高层次人才A类。中国人民大学EMBA研究生，澳大利亚阳光海岸大学硕士。",
    fullBio: "邓小群女士：深圳市质能达微电子科技有限公司COO，深圳市国家领军高层次人才A类。中国人民大学EMBA研究生，澳大利亚阳光海岸大学硕士。市场销售专家，具有近20年国内外电子产品的销售经验，曾经创立过多家线上线下公司并取得丰富的营销利润。",
    photo: "http://cdn065.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420140418_99727.png",
  },
  {
    name: "张国庆",
    nameEn: "Zhang Guoqing",
    position: "研发副总经理",
    bio: "资深高管，拥有20年以上成功战略和战术领导记录。苹果电脑公司前研发经理。",
    fullBio: "资深高管，拥有20年以上成功战略和战术领导记录。曾任苹果电脑公司研发经理、Cadgenics Inc高级副总裁、西安万思微电子有限公司创始人/总裁兼首席执行官。美国路易斯安那州大学计算机工程硕士，中国西安电子科技大学计算机科学硕士，哈尔滨工业大学电子工程学士。",
    photo: "https://cdn035.yun-img.com/static/upload/qedmicro/visualtoolkit/20240509105848_81093.jpg",
  },
  {
    name: "冉承新 博士",
    nameEn: "Dr. Ran Chengxin",
    position: "副总经理",
    bio: "国防科学技术大学军事运筹学博士。深圳中航国际实业控股有限公司投资总监。",
    fullBio: "国防科学技术大学信息系统与管理学院军事运筹学博士。曾任深圳中航国际实业控股有限公司/中天泽控股集团投资总监，武汉导航院院长助理，国防科学技术大学科研部科研主管参谋（上校、高工）、CEMEE国家重点实验室副主任。湖南省人工智能学会理事，中国兵器集团采购评审专家。",
    photo: "https://cdn037.yun-img.com/static/upload/qedmicro/visualtoolkit/20250716125206_43476.jpg",
  },
  {
    name: "张弘 先生",
    nameEn: "Zhang Hong",
    position: "宁波分公司总经理",
    bio: "主管中国长三角客户业务。浙江绍兴人，中共党员，高级工程师。",
    fullBio: "深圳市质能达微电子科技有限公司销售副总经理，浙江芯能微电子科技有限公司（质能达全资子公司）总经理。主管中国长三角客户的业务。曾任浙江嵊州路桥公司董事长兼总经理，浙江海滨建设集团副总裁，马来西亚美加利化纤工业有限公司董事CEO。",
    photo: "http://cdn053.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420135010_48552.png",
  },
  {
    name: "林浩 先生",
    nameEn: "Lin Hao",
    position: "研发副总经理",
    bio: "深圳市国家领军人才B类。西北工业大学电子信息工程系毕业，曾在华为中研硬件设计部从事芯片研发。",
    fullBio: "深圳市质能达微电子科技有限公司研发副总经理，深圳市国家领军人才B类。西北工业大学电子信息工程系毕业，曾在西安万思微电子、深圳市国微电子以及华为中研硬件设计部从事芯片研发工作。从事过超大规模集成电路芯片的设计与FPGA的验证工作，拥有几十篇发明专利，参与了几十款芯片的研发及流片。",
    photo: "http://cdn057.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420140756_64052.png",
  },
  {
    name: "王志红",
    nameEn: "Wang Zhihong",
    position: "市场副总经理",
    bio: "清华大学无线电系本科及硕士毕业。具有多年微电子行业市场及销售经验。",
    fullBio: "清华大学无线电系本科及硕士毕业。具有多年微电子行业市场及销售经验。曾在新加坡从事多年芯片销售及工程管理。2010年至今担任宁德时代市场部动力电池负责人，专注于新能源汽车以及动力锂电池产品的开发与应用。目前推动公司BMS芯片应用于电动汽车、储能、工业电池管理系统以及3C产品的广泛领域。",
    photo: "http://cdn065.yun-img.com/static/upload/qedmicro/visualtoolkit/20180629171447_63903.jpg",
  },
];

export function About() {
  const [hoveredLeaderRow, setHoveredLeaderRow] = useState<number | null>(null);
  const [hoveredAdvisorRow, setHoveredAdvisorRow] = useState<number | null>(null);

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
                致力于进一步扩大规模、提升全球竞争力。              </p>

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
            {leadership.map((leader, index) => {
              const row = Math.floor(index / 4);
              const isRowExpanded = hoveredLeaderRow === row;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 bg-white shadow-sm rounded-2xl border transition-all text-center ${isRowExpanded ? "border-cyan-500 shadow-md" : "border-slate-200 hover:border-cyan-500 hover:shadow-md"}`}
                onMouseEnter={() => setHoveredLeaderRow(row)}
                onMouseLeave={() => setHoveredLeaderRow(null)}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 mx-auto border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  {leader.photo ? (
                    <ImageWithFallback
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users size={32} className="text-slate-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1 text-slate-900">{leader.name}</h3>
                <p className="text-cyan-600 text-sm font-semibold mb-3">{leader.position}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{leader.bio}</p>
                {leader.fullBio && (
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isRowExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-3 mt-3 border-t border-slate-100">
                      <p className="text-slate-400 text-xs leading-relaxed">{leader.fullBio}</p>
                    </div>
                  </div>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              ADVISORY BOARD
            </div>
            <h2 className="text-4xl font-black mb-3 text-slate-900">行业顾问团队</h2>
            <p className="text-slate-500">汇聚国内外顶尖学者与行业专家，为质能达提供战略指导</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "严陆光 院士",
                title: "首席顾问",
                bio: "中国科学院院士",
                fullBio: "中国科学院院士，电工学家。为质能达提供最高层级的科学技术指导。",
                photo: "http://cdn057.yun-img.com/static/upload/qedmicro/visualtoolkit/20180725112127_97488.jpg",
              },
              {
                name: "高秉强 博士",
                title: "首席科学顾问",
                bio: "IEEE固体电路大奖获得者",
                fullBio: "美国柏克莱加州大学硕士和博士。曾任香港科技大学工学院院长。IEEE固体电路大奖获得者，拥有六项专利，200篇研究著作。",
                photo: "http://cdn063.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420142530_25057.png",
              },
              {
                name: "陈春章 博士",
                title: "技术顾问",
                bio: "集成电路设计与制造资深专家",
                fullBio: "半导体行业资深专家，在集成电路设计与制造领域拥有数十年经验，为质能达提供工艺与设计方向指导。",
                photo: "http://cdn047.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420141458_18315.png",
              },
              {
                name: "苏哲峰 先生",
                title: "产业顾问",
                bio: "芯片市场策略与供应链专家",
                fullBio: "深耕半导体产业多年，在芯片市场策略、供应链管理等方面拥有丰富经验，助力质能达市场拓展。",
                photo: "http://cdn053.yun-img.com/static/upload/qedmicro/visualtoolkit/20180420141243_92647.png",
              },
              {
                name: "TIMOTHY LEE",
                title: "国际顾问",
                bio: "国际半导体行业资深专家",
                fullBio: "具有丰富的国际半导体行业经验，为质能达的全球化战略与国际市场拓展提供专业建议。",
                photo: "http://cdn055.yun-img.com/static/upload/qedmicro/visualtoolkit/20180704164011_86139.png",
              },
              {
                name: "金鹏 博士",
                title: "技术顾问",
                bio: "模拟与混合信号芯片设计专家",
                fullBio: "在模拟与混合信号芯片设计领域拥有深厚学术背景与产业经验，为质能达核心技术研发提供指导。",
                photo: "https://cdn063.yun-img.com/static/upload/qedmicro/visualtoolkit/20250716124438_25466.jpg",
              },
            ].map((advisor, index) => {
              const row = Math.floor(index / 6);
              const isRowExpanded = hoveredAdvisorRow === row;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-5 bg-white shadow-sm rounded-2xl border transition-all text-center ${isRowExpanded ? "border-cyan-500 shadow-md" : "border-slate-200 hover:border-cyan-500 hover:shadow-md"}`}
                onMouseEnter={() => setHoveredAdvisorRow(row)}
                onMouseLeave={() => setHoveredAdvisorRow(null)}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 mx-auto border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  {advisor.photo ? (
                    <ImageWithFallback
                      src={advisor.photo}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users size={32} className="text-slate-400" />
                  )}
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-slate-900">{advisor.name}</h3>
                <p className="text-cyan-600 text-xs font-semibold mb-2">{advisor.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{advisor.bio}</p>
                {advisor.fullBio && (
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isRowExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-3 mt-3 border-t border-slate-100">
                      <p className="text-slate-400 text-xs leading-relaxed">{advisor.fullBio}</p>
                    </div>
                  </div>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 荣誉资质已移至研发创新页面 */}

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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
              >
                联系我们 <ArrowRight size={18} />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all"
              >
                加入质能达 <ArrowRight size={18} />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 border border-slate-300 rounded-xl font-semibold text-slate-900 hover:bg-slate-200 transition-all"
              >
                投资者关系 <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}