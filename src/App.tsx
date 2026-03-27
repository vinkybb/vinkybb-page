import React from 'react';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';
import avatarImg from '@/assets/avatar.jpg';

const projects = [
  {
    id: 1,
    title: "TravelNeko",
    subtitle: "Multi-Agent Narrative Game",
    description: "简介：这是一个将多 Agent 叙事能力转化为可玩体验的旅行猫咪小游戏原型。它超越了简单的聊天界面，构建了一个小镇 RPG 结合 AI 剧情的系统：玩家扮演的主角猫可以在地图中自由探索、与其他猫咪互动、触发多 Agent 对话，并将这些经历自动沉淀为独特的旅行手账。",
    date: "2026",
    category: "Game / Multi-Agent / Storytelling",
    type: "Open Source",
    stack: "Next.js / Step API",
    repo: "vinkybb/travelNeko",
    repoUrl: "https://github.com/vinkybb/travelNeko",
    image:
      "https://raw.githubusercontent.com/vinkybb/travelNeko/main/docs/screenshots/homepage-start-screen.png"
  },
  {
    id: 2,
    title: "Marketing Skills",
    subtitle: "OpenClaw Marketing Skill Library",
    description: "简介：专为营销与增长团队打造的开源 AI skill 库。它不仅限于生成文案，而是全面覆盖市场研究、用户定位、SEO 优化、预算分配、增长实验和活动复盘等完整的营销工作流。核心目标是赋予本地 Agent 真正接管和执行复杂营销任务的能力。",
    date: "2026",
    category: "AI / Marketing / Agent Skills",
    type: "Open Source",
    stack: "Python / Skill System",
    repo: "vinkybb/marketing-skills",
    repoUrl: "https://github.com/vinkybb/marketing-skills",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Enterprise Invoice Agent",
    subtitle: "Invoice Ops Copilot",
    description: "简介：一款企业级票据管理平台原型。它将 PDF 和图片上传、OCR 智能字段提取、审批流转、风险审计以及智能客服自动操作集成在一个类似腾讯文档的协同工作台中。其创新之处在于：将自然语言指令解析为白名单动作，安全、精准地驱动页面交互和业务流程。",
    date: "2026",
    category: "AI / OCR / Enterprise SaaS",
    type: "Open Source",
    stack: "Next.js / TDesign",
    repo: "vinkybb/enterprise-invoice-agent",
    repoUrl: "https://github.com/vinkybb/enterprise-invoice-agent",
    image:
      "https://raw.githubusercontent.com/vinkybb/enterprise-invoice-agent/main/public/screenshots/homepage.png"
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

              <div className="flex flex-col items-center gap-6 text-gray-800 w-full mt-4">
                
                {/* Greeting & Name */}
                <div className="space-y-2 text-center">
                  <h1 className="font-bold text-3xl md:text-4xl tracking-wide text-gray-900" style={{ fontFamily: 'Rye, serif' }}>
                    你好，我是 Vinky
                  </h1>
                  <p className="text-xl text-gray-600 font-serif italic">
                    Hi, I'm Vinky (Wenjing Shi)
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-xs md:text-sm tracking-widest text-gray-600 uppercase">
                  <span className="px-3 py-1 border border-gray-300 rounded-full">AI Fiend</span>
                  <span className="text-gray-300">•</span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full">ESTP</span>
                  <span className="text-gray-300">•</span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full">Cat Person</span>
                  <span className="text-gray-300">•</span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full">BBQ Pro</span>
                </div>

                {/* Title / Company */}
                <div className="py-4 border-y-2 border-dotted border-gray-300 w-full max-w-md text-center my-2">
                  <p className="text-lg md:text-xl font-bold tracking-widest mb-2 text-gray-800">大模型运营经理 @ 百度</p>
                  <p className="font-mono text-xs md:text-sm tracking-widest text-gray-500 uppercase">LLM Operation Manager, Baidu</p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-2 font-mono text-sm">
                  <a href="mailto:vinkyshi555@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="border-b border-transparent group-hover:border-black pb-0.5">vinkyshi555@gmail.com</span>
                  </a>
                  <span className="hidden md:block text-gray-300">|</span>
                  <a href="https://www.linkedin.com/in/vinkyshek1201" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="border-b border-transparent group-hover:border-black pb-0.5">LinkedIn</span>
                  </a>
                  <span className="hidden md:block text-gray-300">|</span>
                  <a href="https://github.com/vinkybb" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="border-b border-transparent group-hover:border-black pb-0.5">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 flex-1 bg-black"></div>
          <h2 className="text-3xl font-bold uppercase tracking-widest px-4" style={{ fontFamily: 'Rye, serif' }}>
            我的项目 My Projects
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
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group/title inline-block hover:opacity-90 transition-opacity"
                            >
                              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white underline-offset-8 group-hover/title:underline">
                                {project.title}
                              </h3>
                              <p className="font-mono text-sm tracking-widest text-gray-400">
                                {project.subtitle}
                              </p>
                            </a>
                          </div>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 border-2 border-gray-600 rounded-full text-gray-400 hover:border-[#f4f1ea] hover:text-[#f4f1ea] transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-6 text-gray-400 mt-6">
                          {project.description}
                        </p>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[#f4f1ea] hover:text-white hover:underline underline-offset-4 font-mono text-sm uppercase mb-4"
                        >
                          View more -&gt; 跳转 GitHub
                        </a>
                      </div>

                      {/* Ticket Meta Data (Bottom Section) */}
                      <div className="border-t border-gray-800 pt-6 mt-auto">
                        <p className="font-mono text-xs mb-6 uppercase tracking-widest text-gray-500">
                          [{project.category}]
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
                          <div>
                            <p className="text-gray-500 mb-1">REPO :</p>
                            <p className="font-bold text-lg text-gray-300 break-all">{project.repoUrl}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">STACK :</p>
                            <p className="font-bold text-lg text-gray-300">{project.stack}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">YEAR :</p>
                            <p className="font-bold text-lg text-gray-300">{project.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">TYPE :</p>
                            <p className="font-bold text-lg text-gray-300">{project.type}</p>
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
