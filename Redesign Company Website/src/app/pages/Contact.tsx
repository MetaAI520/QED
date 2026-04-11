import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "深圳总部",
    address: "广东省深圳市南山区科技园南区科技二路 A 栋 18 层",
    phone: "+86 (0755) 8888 8888",
    email: "sz@qedmicro.com",
    hours: "周一至周五 9:00 - 18:00",
  },
  {
    city: "上海研发中心",
    address: "上海市张江高科技园区碧波路 690 号张江集电港 3 号楼",
    phone: "+86 (021) 6888 8888",
    email: "sh@qedmicro.com",
    hours: "周一至周五 9:00 - 18:00",
  },
  {
    city: "北京 AI 设计中心",
    address: "北京市海淀区中关村科学城中关村集成电路设计园",
    phone: "+86 (010) 6888 8888",
    email: "bj@qedmicro.com",
    hours: "周一至周五 9:00 - 18:00",
  },
];

const inquiryTypes = [
  "产品选型咨询",
  "技术支持",
  "样品申请",
  "渠道合作",
  "投资者关系",
  "媒体合作",
  "招聘合作",
  "其他",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm";
  const labelClass = "block text-sm font-medium text-slate-500 mb-2";

  return (
    <div>
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-4">
              CONTACT US
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              联系我们
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              无论您是寻求产品咨询、技术支持、样品申请还是商务合作，
              我们的专业团队将在一个工作日内为您提供及时回复。            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-black mb-8 text-slate-900">发送咨询</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 bg-green-500/10 rounded-2xl border border-green-500/20 text-center"
                >
                  <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">提交成功！</h3>
                  <p className="text-slate-500">
                    感谢您的联系。我们已收到您的消息，将在一个工作日内通过邮件与您联系。                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        姓名 <span className="text-cyan-600">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="您的姓名"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        公司名称 <span className="text-cyan-600">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="您的公司名称"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        电子邮箱 <span className="text-cyan-600">*</span>
                      </label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="your@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>联系电话</label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="+86 138 XXXX XXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      咨询类型 <span className="text-cyan-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className={`${inputClass} appearance-none cursor-pointer`}
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        required
                      >
                        <option value="" disabled className="bg-white text-slate-400">
                          请选择咨询类型
                        </option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t} className="bg-white">
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      详细说明 <span className="text-cyan-600">*</span>
                    </label>
                    <textarea
                      className={`${inputClass} resize-none min-h-[140px]`}
                      placeholder="请描述您的需求，包括产品型号、数量、应用场景等信息..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-400">
                    <div className="w-4 h-4 border border-slate-300 rounded flex-shrink-0 mt-0.5 flex items-center justify-center bg-slate-50 cursor-pointer">
                      <CheckCircle2 size={10} className="text-cyan-600" />
                    </div>
                    <span>
                      我已阅读并同意质能达的{" "}
                      <a href="#" className="text-cyan-600 hover:underline">
                        隐私政策
                      </a>{" "}
                      及{" "}
                      <a href="#" className="text-cyan-600 hover:underline">
                        服务条款
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    <Send size={20} />
                    提交咨询
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-black mb-8 text-slate-900">联系方式</h2>

              <div className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-4 text-cyan-600">售前技术支持</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} className="text-slate-400 flex-shrink-0" />
                    +86 400-888-8888（免费热线）
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} className="text-slate-400 flex-shrink-0" />
                    sales@qedmicro.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock size={16} className="text-slate-400 flex-shrink-0" />
                    周一至周五 9:00 - 18:00
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-4 text-cyan-600">投资者关系</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} className="text-slate-400 flex-shrink-0" />
                    ir@qedmicro.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} className="text-slate-400 flex-shrink-0" />
                    +86 (0755) 8888 8899
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200">
                <h3 className="font-bold text-lg mb-4 text-cyan-600">HR 招聘</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} className="text-slate-400 flex-shrink-0" />
                    hr@qedmicro.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs tracking-widest uppercase text-cyan-500 font-semibold mb-3">
              OUR LOCATIONS
            </div>
            <h2 className="text-3xl font-black text-slate-900">办公地点</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-sm rounded-2xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-all"
              >
                <h3 className="text-xl font-bold mb-5 text-slate-900">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-500">
                    <MapPin size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Phone size={16} className="text-cyan-500 flex-shrink-0" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Mail size={16} className="text-cyan-500 flex-shrink-0" />
                    {office.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Clock size={16} className="text-cyan-500 flex-shrink-0" />
                    {office.hours}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl border border-cyan-200">
              <h2 className="text-3xl font-black mb-4 text-slate-900">加入质能达</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                质能达正在快速成长，我们期待各领域优秀人才的加入。
                我们提供极具竞争力的薪酬、股权激励、完善的技术成长体系，
                以及宽松开放的创新文化氛围。              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["模拟电路设计工程师", "数字后端工程师", "应用工程师", "产品市场经理", "软件开发工程师"].map(
                  (role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 border border-slate-200"
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
              <a
                href="mailto:hr@qedmicro.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
              >
                发送简历至 hr@qedmicro.com
                <Send size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
