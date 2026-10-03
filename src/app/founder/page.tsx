"use client";

import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { 
  MonitorSmartphone, 
  Smartphone, 
  Box, 
  Wand2, 
  Lightbulb, 
  Cpu,
  Trophy,
  Medal
} from "lucide-react";

const whatIBuild = [
  { icon: <MonitorSmartphone size={24} />, title: "Web Applications", desc: "Responsive, high-performance web platforms." },
  { icon: <Smartphone size={24} />, title: "Mobile Applications", desc: "Native-feeling apps for iOS and Android." },
  { icon: <Box size={24} />, title: "Digital Products", desc: "End-to-end product development." },
  { icon: <Wand2 size={24} />, title: "Creative UI Experiences", desc: "Cinematic, engaging user interfaces." },
  { icon: <Lightbulb size={24} />, title: "Business & Brand Ideas", desc: "Transforming concepts into viable platforms." },
  { icon: <Cpu size={24} />, title: "AI / Technology Projects", desc: "Exploring next-gen tech integration." },
];

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Mobile", items: ["React Native"] },
  { category: "Programming", items: ["Java", "C", "C++", "Python (Basic)"] },
  { category: "Database", items: ["SQL"] }
];

export default function FounderPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white overflow-hidden pb-32">
      
      {/* FOUNDER HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-accent/10 via-obsidian to-obsidian pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-blue-accent text-[11px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
                Founder • Developer • Creator • Builder
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Ambuj Shyampat Yadav
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-medium text-ash mb-8">
                Founder of <span className="text-white font-bold">ABZY Industry</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-ash/80 max-w-xl leading-relaxed">
                Building ideas into digital experiences, products, and brands through technology and creativity.
              </p>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ScaleReveal delay={0.3} className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] perspective-[1000px]">
              <div className="absolute inset-0 bg-blue-accent/20 rounded-[2.5rem] blur-[80px] -z-10" />
              <div className="w-full h-full rounded-[2.5rem] border border-white/20 bg-carbon overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform rotate-y-[-5deg] rotate-z-[2deg] hover:rotate-y-0 hover:rotate-z-0 transition-transform duration-[1000ms] ease-out">
                <div className="absolute inset-0 bg-white" />
                <img 
                  src="/ambuj-portrait.jpg" 
                  alt="Ambuj Shyampat Yadav" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-opacity duration-1000"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>
            </ScaleReveal>
          </div>

        </div>
      </section>

      {/* ABOUT AMBUJ */}
      <section className="py-32 px-6 relative border-t border-white/5 bg-gradient-to-b from-obsidian to-graphite">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h3 className="text-sm font-bold text-ash tracking-[0.3em] uppercase mb-8">About the Founder</h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light mb-12">
              &quot;Ambuj Shyampat Yadav is a Computer Engineering student, developer, and creator focused on building practical digital products and creative technology experiences.&quot;
            </p>
            <p className="text-lg md:text-xl text-ash max-w-2xl mx-auto leading-relaxed">
              His work combines software development, UI/UX thinking, product ideas, and entrepreneurship under the ABZY vision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ABZY INDUSTRY */}
      <section className="py-40 px-6 relative bg-obsidian overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white/5 tracking-tighter mb-8 transform -rotate-2">
              ABZY INDUSTRY
            </h2>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">ABZY INDUSTRY</h3>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-ash max-w-3xl mx-auto leading-relaxed mt-12 backdrop-blur-sm bg-obsidian/30 p-8 rounded-3xl border border-white/5">
              ABZY Industry is the broader vision behind the ABZY brand — a platform for building creative, technology-driven products, digital experiences, and future business ideas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="py-32 px-6 bg-graphite">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h3 className="text-sm font-bold text-blue-accent tracking-[0.3em] uppercase mb-4 text-center">Focus Areas</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">What I Build</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIBuild.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group h-full p-8 rounded-[2rem] bg-carbon border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-default perspective-[1000px]">
                  <div className="w-14 h-14 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-8 group-hover:scale-110 transition-transform duration-500 transform group-hover:rotate-y-[10deg]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">0{i + 1} — {item.title}</h3>
                  <p className="text-ash leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="py-32 px-6 bg-obsidian">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">Technical Skills</h2>
          </FadeIn>
          
          <div className="flex flex-col gap-16">
            {skills.map((skillGroup, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="w-48 flex-shrink-0">
                  <h3 className="text-sm font-bold text-ash uppercase tracking-[0.2em]">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {skillGroup.items.map((skill, j) => (
                    <div key={j} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors text-white font-medium text-sm shadow-md">
                      {skill}
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6 bg-graphite relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">Selected Projects</h2>
          </FadeIn>
          
          <div className="flex flex-col gap-16">
            
            {/* ABZY Invitation (Featured) */}
            <FadeIn delay={0.1}>
              <div className="group rounded-[3rem] bg-obsidian border border-blue-accent/30 overflow-hidden shadow-[0_20px_50px_rgba(0,113,227,0.15)] hover:shadow-[0_20px_60px_rgba(0,113,227,0.25)] transition-all duration-700 flex flex-col md:flex-col lg:flex-row">
                
                <div className="p-10 md:p-16 lg:w-5/12 flex flex-col justify-center relative z-10">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-accent/15 text-blue-accent text-[11px] font-bold uppercase tracking-[0.2em] w-max mb-8 border border-blue-accent/20">Featured Product</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">ABZY Invitation</h3>
                  <h4 className="text-lg text-white/90 font-medium mb-6">Premium Digital Invitation Platform</h4>
                  <p className="text-ash mb-10 text-lg leading-relaxed">
                    A premium digital invitation platform designed to create, personalize, and share memorable invitation experiences.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {["Next.js", "React", "Tailwind CSS", "3D Motion"].map(tag => (
                      <span key={tag} className="text-[11px] font-bold tracking-widest uppercase text-ash/80 px-3 py-1.5 bg-white/5 rounded-md border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-7/12 bg-carbon relative overflow-hidden flex items-center justify-center p-8 lg:p-12 min-h-[400px] border-l border-white/5 group-hover:bg-carbon/80 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-accent/10 via-transparent to-transparent opacity-50" />
                  
                  {/* Premium Image Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.8)] perspective-[1200px]">
                    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden transform rotate-y-[-5deg] rotate-z-[2deg] scale-[1.02] group-hover:rotate-y-0 group-hover:rotate-z-0 group-hover:scale-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
                      <img 
                        src="/project-abzy-invitation.png" 
                        alt="ABZY Invitation Preview" 
                        className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity duration-700" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Safe Sphere */}
              <FadeIn delay={0.2} className="h-full">
                <div className="group rounded-[2.5rem] bg-carbon border border-white/10 overflow-hidden hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  <div className="h-56 md:h-64 relative bg-obsidian overflow-hidden border-b border-white/5">
                    <img 
                      src="/project-safe-sphere.png" 
                      alt="Safe Sphere with ABZY Preview" 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="p-10 flex-1 flex flex-col relative z-10 bg-carbon">
                    <h3 className="text-2xl font-bold text-white mb-3">Safe Sphere with ABZY</h3>
                    <p className="text-ash mb-8 flex-1 text-lg leading-relaxed">
                      A specialized digital product focused on technology safety and unified user environments.
                    </p>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ash/70 px-3 py-1.5 bg-white/5 border border-white/5 rounded-md">Safety Platform</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* ABZY Mess */}
              <FadeIn delay={0.3} className="h-full">
                <div className="group rounded-[2.5rem] bg-carbon border border-white/10 overflow-hidden hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  <div className="h-56 md:h-64 relative bg-obsidian overflow-hidden border-b border-white/5">
                    <img 
                      src="/project-abzy-mess.png" 
                      alt="ABZY Mess Preview" 
                      className="absolute inset-0 w-full h-full object-cover object-[left_top] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="p-10 flex-1 flex flex-col relative z-10 bg-carbon">
                    <h3 className="text-2xl font-bold text-white mb-3">ABZY Mess</h3>
                    <p className="text-ash mb-8 flex-1 text-lg leading-relaxed">
                      A management platform streamlined for operational efficiency and food service structuring.
                    </p>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ash/70 px-3 py-1.5 bg-white/5 border border-white/5 rounded-md">Management System</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SPORTS & ACHIEVEMENTS AND LANGUAGES */}
      <section className="py-32 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Beyond Technology</h2>
            </FadeIn>
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Medal size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">DSO Boxing</h4>
                    <p className="text-ash text-sm">3rd Prize Achievement</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Wrestling</h4>
                    <p className="text-ash text-sm">2nd Prize Achievement</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-2xl border border-transparent flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-ash">
                    <span className="font-bold text-xs">SPORTS</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Outdoor Games</h4>
                    <p className="text-ash text-sm">Active interest and participation</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Languages</h2>
            </FadeIn>
            <div className="flex gap-4 flex-wrap">
              {["English", "Hindi", "Marathi"].map((lang, i) => (
                <FadeIn key={lang} delay={i * 0.1}>
                  <div className="px-8 py-4 rounded-2xl border border-white/10 bg-carbon text-white font-medium hover:border-white/30 transition-colors shadow-md">
                    {lang}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* THE VISION */}
      <section className="py-40 px-6 relative bg-graphite overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h3 className="text-sm font-bold text-ash tracking-[0.4em] uppercase mb-12">The Vision</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-[1.1] text-balance uppercase tracking-tight">
              Build ideas.<br />
              Create experiences.<br />
              Grow brands.
            </h2>
            <p className="text-xl md:text-2xl text-ash max-w-2xl mx-auto leading-relaxed font-light">
              The vision behind ABZY is to continuously explore technology, creativity, and business to build meaningful products and experiences.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
