import React from 'react';
import { Github, Mail, Twitter, ExternalLink } from 'lucide-react';
import avatarImg from '@/assets/avatar.jpg';

const projects = [
  {
    id: 1,
    title: "AI+ 医疗辅助决策平台",
    subtitle: "Intelligent Healthcare",
    description:
      "给医生配一位不会偷懒的 AI 小搭档，帮忙读片、整理信息和给出决策参考，让一线医生少一点机械体力活，多一点专注和安心。外观看起来很严肃，细节里藏着一点点可爱。",
    date: "08/Apr/2026",
    time: "20:00-21:29",
    category: "AI / Healthcare / B2B",
    price: "ENTERPRISE",
    seat: "06-10",
    hall: "MED",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "企业级智能知识引擎",
    subtitle: "Enterprise AI Agent",
    description:
      "让企业内的文档从“考古现场”变成“点开就懂”的知识小宇宙。像一支会飞的知识小队，在群聊、文档和工单之间穿梭，把散落的信息捞出来，整理成一句能读懂的答案。对外是严谨知识库，对内是有点会吐槽的 AI 同事。",
    date: "12/Nov/2026",
    time: "14:30-16:00",
    category: "AI / SaaS / Productivity",
    price: "B-END",
    seat: "A-01",
    hall: "TECH",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "AIGC 创意营销中台",
    subtitle: "Creative AI Platform",
    description:
      "给市场同学一台“变身器”：一边是严肃的品牌规范，一边是可以放心开脑洞的创意工厂。支持从文案、图像到短视频的全链路生成，让 campaign 同时踩中 KPI 和少女心。颜色可以很大胆，预算必须很清醒。",
    date: "05/Jan/2026",
    time: "09:00-11:45",
    category: "AIGC / Marketing",
    price: "PRO",
    seat: "B-12",
    hall: "MKT",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-serif selection:bg-black selection:text-[#f4f1ea] flex flex-col bg-[#f4f1ea]">
      
      {/* Top Black Bar */}
      <nav className="bg-[#1a1a1a] text-[#f4f1ea] py-2 px-4 border-b-4 border-black w-full relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
          <div className="hidden md:block font-bold text-gray-400">Est. 2026</div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-400">Search</span>
            <div className="w-24 h-4 border border-gray-600 bg-black"></div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Header / Hero Section */}
        <header className="border-4 border-black p-6 md:p-10 mb-12 relative bg-[#f4f1ea]">
          {/* Decorative Corner Elements */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-black"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-black"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-black"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-black"></div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 pb-2">
            {/* Avatar */}
            <div className="shrink-0 relative mb-2">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black overflow-hidden relative z-10 bg-black mx-auto">
                {/* 请将此处的 src 替换为你上传的图片的实际 URL 或本地路径 */}
                <img 
                  src={avatarImg} 
                  alt="vinkybb" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // 如果图片加载失败，回退到占位图
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&grayscale=true";
                  }}
                />
              </div>
              {/* Decorative circle behind avatar */}
              <div className="absolute -inset-2 border-2 border-dashed border-black rounded-full animate-[spin_60s_linear_infinite]"></div>
            </div>

            {/* Intro Text */}
            <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
              
              {/* Vintage SVG Logo */}
              <div className="w-full max-w-[320px] md:max-w-[460px] mb-4">
                <svg viewBox="0 0 500 190" className="w-full h-auto">
                  <defs>
                    <style>
                      {`
                        @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
                        .vintage-title {
                          font-family: 'Playball', cursive;
                          font-size: 125px;
                          fill: #111;
                        }
                        .vintage-subtitle {
                          font-family: 'Courier New', Courier, monospace;
                          font-size: 15px;
                          letter-spacing: 0.35em;
                          fill: #333;
                          font-weight: bold;
                        }
                      `}
                    </style>
                    {/* SVG Filter to create a slight ink-bleed/printed edge effect */}
                    <filter id="ink-bleed">
                      <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                  
                  <g filter="url(#ink-bleed)">
                    {/* Top Decorative Swoosh */}
                    <path d="M 160 50 C 230 5, 330 5, 390 45 C 340 15, 230 15, 150 60 Z" fill="#111" />
                    
                    {/* Main Script Text */}
                    <text x="250" y="130" textAnchor="middle" className="vintage-title">vinkybb</text>
                    
                    {/* Bottom Decorative Swoosh */}
                    <path d="M 80 145 C 200 185, 360 175, 460 130 C 380 170, 210 170, 70 135 Z" fill="#111" />
                  </g>
                  
                  {/* Subtitle */}
                  <text x="250" y="180" textAnchor="middle" className="vintage-subtitle">VINKYBB EST. 2026</text>
                </svg>
              </div>

              <p className="text-lg leading-relaxed max-w-2xl text-gray-800">
                上班的时候研究 AI & 产品，下班的时候就在吃烤肉。
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mt-8 font-mono text-sm">
                <a href="#" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2">
                  <Github className="w-4 h-4" /> GITHUB
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2">
                  <Twitter className="w-4 h-4" /> TWITTER
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2">
                  <Mail className="w-4 h-4" /> EMAIL
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 flex-1 bg-black"></div>
          <h2 className="text-3xl font-bold uppercase tracking-widest px-4" style={{ fontFamily: 'Rye, serif' }}>
            Featured Applications
          </h2>
          <div className="h-1 flex-1 bg-black"></div>
        </div>
        </div>

        {/* Portfolio Panels (Tickets) - Full Width Bleed */}
        <div className="w-full bg-[#0a0a0a] border-y-[12px] border-black py-16 md:py-24 flex flex-col gap-16 md:gap-24">
          {projects.map((project) => (
            <article key={project.id} className="group w-full">
              <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="relative">
                  {/* Shadow effect behind the inner frame */}
                  <div className="absolute inset-0 border-2 border-gray-800 translate-y-3 -translate-x-3 pointer-events-none"></div>
                  
                  {/* Inner Framed Container */}
                  <div className="border-2 border-[#f4f1ea] p-4 md:p-8 flex flex-col md:flex-row gap-8 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 bg-[#0a0a0a]">
                    
                    {/* Left Side: Image area */}
                    <div className="w-full md:w-2/5">
                      <div className="w-full h-64 md:h-full min-h-[300px] border-2 border-[#f4f1ea] p-1 relative overflow-hidden flex items-center justify-center group-hover:border-dashed transition-all">
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Overlay to enhance the dark feel */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Ticket Details */}
                    <div className="w-full md:w-3/5 flex flex-col justify-between text-[#f4f1ea] py-2">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                              {project.title}
                            </h3>
                            <p className="font-mono text-sm tracking-widest text-gray-400">
                              {project.subtitle}
                            </p>
                          </div>
                          <a href="#" className="p-2 border-2 border-gray-600 rounded-full text-gray-400 hover:border-[#f4f1ea] hover:text-[#f4f1ea] transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-8 text-gray-400 mt-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Ticket Meta Data (Bottom Section) */}
                      <div className="border-t border-gray-800 pt-6 mt-auto">
                        <p className="font-mono text-xs mb-6 uppercase tracking-widest text-gray-500">
                          [{project.category}]
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
                          <div>
                            <p className="text-gray-500 mb-1">HALL :</p>
                            <p className="font-bold text-lg text-gray-300">{project.hall}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">SEAT :</p>
                            <p className="font-bold text-lg text-gray-300">{project.seat}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">DATE :</p>
                            <p className="font-bold text-lg text-gray-300">{project.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">PRICE :</p>
                            <p className="font-bold text-lg text-gray-300">{project.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner blocks for the inner frame */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#f4f1ea]"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f4f1ea]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#f4f1ea]"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f4f1ea]"></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Bottom Black Bar (Footer) */}
      <footer className="bg-[#1a1a1a] text-[#f4f1ea] pt-12 pb-8 px-4 border-t-[8px] border-double border-black w-full relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Footer Links Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-12 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Github</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs tracking-widest uppercase text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-4">
              <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 font-serif italic text-lg">VB</div>
              <div className="w-12 h-12 border-2 border-gray-600 flex items-center justify-center text-gray-400 font-serif font-bold text-xl">©</div>
            </div>
            
            <div className="text-gray-400 space-y-2 flex flex-col justify-center">
              <p className="text-white font-bold mb-2">Questions or Comments</p>
              <p>Email: <a href="mailto:hello@example.com" className="hover:text-white underline decoration-gray-600 underline-offset-4">hello@example.com</a></p>
              <p>Or call: 1-800-VINTAGE</p>
            </div>

            <div className="text-gray-400 space-y-2 flex flex-col justify-center md:text-right">
              <p>Monday - Friday 9AM - 6PM</p>
              <p>© 2026 VINKYBB. ALL RIGHTS RESERVED.</p>
              <p>DESIGNED WITH VINTAGE AESTHETICS.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
