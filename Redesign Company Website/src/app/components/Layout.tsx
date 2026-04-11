import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { QedLogo } from "./QedLogo";

const navLinks = [
  { path: "/", label: "首页" },
  {
    label: "产品中心",
    path: "/products",
    children: [
      { path: "/products", label: "LED芯片" },
      { path: "/products", label: "BMS芯片" },
      { path: "/products", label: "LCD芯片" },
      { path: "/products", label: "Power芯片" },
      { path: "/products", label: "传感器芯片" },
      { path: "/products", label: "超声波MEMS+CMOS" },
    ],
  },
  {
    label: "解决方案",
    path: "/solutions",
    children: [
      { path: "/solutions", label: "LED景观照明" },
      { path: "/solutions", label: "新能源BMS管理" },
      { path: "/solutions", label: "传感器应用" },
      { path: "/solutions", label: "超声波MEMS+AI" },
      { path: "/solutions", label: "医疗电子" },
      { path: "/solutions", label: "智慧城市" },
    ],
  },
  { path: "/rnd", label: "研发创新" },
  { path: "/about", label: "关于我们" },
  { path: "/investors", label: "投资者关系" },
  { path: "/news", label: "新闻中心" },
];

const footerLinks = {
  产品中心: [
    { label: "LED芯片", path: "/products" },
    { label: "BMS芯片", path: "/products" },
    { label: "LCD芯片", path: "/products" },
    { label: "Power芯片", path: "/products" },
    { label: "传感器芯片", path: "/products" },
    { label: "超声波MEMS+CMOS", path: "/products" },
  ],
  解决方案: [
    { label: "LED景观照明", path: "/solutions" },
    { label: "新能源BMS管理", path: "/solutions" },
    { label: "传感器应用", path: "/solutions" },
    { label: "超声波MEMS+AI", path: "/solutions" },
    { label: "医疗电子", path: "/solutions" },
    { label: "智慧城市", path: "/solutions" },
  ],
  公司: [
    { label: "关于质能达", path: "/about" },
    { label: "研发创新", path: "/rnd" },
    { label: "新闻中心", path: "/news" },
    { label: "加入我们", path: "/contact" },
    { label: "联系我们", path: "/contact" },
  ],
  投资者: [
    { label: "投资者关系", path: "/investors" },
    { label: "财务报告", path: "/investors" },
    { label: "公司公告", path: "/investors" },
    { label: "公司治理", path: "/investors" },
    { label: "上市进程", path: "/investors" },
  ],
};

function NavDropdown({ item }: { item: (typeof navLinks)[number] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = "path" in item && location.pathname === item.path;

  if (!("children" in item) || !item.children) {
    return (
      <Link
        to={item.path}
        className={`text-sm font-medium transition-colors ${
          isActive ? "text-cyan-600" : "text-slate-600 hover:text-slate-900"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname === item.path ? "text-cyan-600" : "text-slate-600 hover:text-slate-900"
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Link>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 overflow-hidden z-50">
          {item.children.map((child, idx) => (
            <Link
              key={idx}
              to={child.path}
              className="block px-4 py-2.5 text-sm text-slate-500 hover:text-cyan-600 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg shadow-slate-200/40 border-b border-slate-200"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <QedLogo className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link, idx) => (
                <NavDropdown key={idx} item={link} />
              ))}
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
                >
                  联系我们
                </Link>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Phone size={11} />
                  15907559811 邓女士
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 space-y-1">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.path}
                          className="block py-2 px-2 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold text-white"
                >
                  联系我们
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-black text-sm text-white">QED</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-white">质能达微电子</div>
                  <div className="text-[10px] text-slate-400 tracking-widest uppercase">QED Micro Electronics</div>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                专注于模拟与混合信号集成电路设计，为全球客户提供高性能、高可靠性的电源管理芯片解决方案，赋能万物互联的智慧世界。
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone size={13} />
                  0755-2893-8531
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} />
                  info@qedmicro.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} />
                  深圳龙华区观湖街道鹭湖社区观盛五路科姆龙C栋12层
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/20 transition-all">
                  <Linkedin size={15} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/20 transition-all">
                  <Twitter size={15} />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 深圳市质能达微电子科技有限公司 · 版权所有 · 粤ICP备XXXXXXXX号
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-slate-300 transition-colors">法律声明</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Cookie设置</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
