"use client";
import { useState, useRef } from "react";

const U = "https://raw.githubusercontent.com/Textak-AI/trw-assets/main/";
const IMG = {
  logo: U+"brand/rail-way-logo.png",
  logoWhite: U+"brand/rail-way-logo-white.png",
  paulineHeadshot: U+"team/pauline-headshot.jpg",
  paulineAlt: U+"team/pauline-alt.jpg",
  paulineSpeaking: U+"team/pauline-speaking.jpg",
  brenda: U+"team/brenda-huizinga.jpg",
  michael: U+"team/michael-powell.jpg",
  safetyCulture: U+"operations/safety-culture.jpg",
  railwayTraining: U+"operations/railway-training.jpg",
  freightTrain: U+"articles/freight-train.jpg",
  teamTraining: U+"operations/team-training.jpg",
  railwayAge: U+"homepage/railway-age-sidebar.jpg",
  yardTraining: U+"operations/yard-training.jpg",
  fieldLeadership: U+"articles/field-leadership.jpg",
  roadAhead: U+"articles/road-ahead.jpg",
  leaderTalking: U+"articles/leader-talking.jpg",
};

const C={rust:"#C4622D",brown:"#3D2B1F",black:"#2C2C2C",blackDeep:"#1A1A1A",gray:"#666",grayLt:"#999",grayRule:"#E0E0E0",cream:"#FAF7F4",white:"#FFF",navy:"#2C3E50",tint:"rgba(196,98,45,0.08)"};
const F={h:"Georgia,'Palatino Linotype',serif",b:"'Segoe UI',Arial,sans-serif",m:"'SF Mono',Consolas,monospace"};

const PAGES={
  home:{title:"Railroad Safety Culture Transformation | The Rail Way™",desc:"The Rail Way™ transforms railroad safety culture from the boardroom to the ballast line. Speak Up Culture programs for Class II & III railroads.",h1:"Railroad Safety Culture Transformation for the Rail Industry",bc:[{l:"Home"}],schema:"Organization, ProfessionalService"},
  speakup:{title:"Speak Up Culture for Railroads | The Rail Way™",desc:"Build a Speak Up Culture where safety concerns don't wait for an accident. Proven approach for railroad crews.",h1:"What Is Speak Up Culture — and Why Railroads Need It Now",bc:[{l:"Home",to:"home"},{l:"Speak Up Culture"}],schema:"Service, FAQPage"},
  process:{title:"Our Proven Process — Safety Culture Transformation | The Rail Way™",desc:"Four-stage leadership cycle: Heighten Awareness → Increase Clarity → Build Alignment → Drive Momentum.",h1:"How Safety Culture Transformation Works",bc:[{l:"Home",to:"home"},{l:"Our Process"}],schema:"Service, HowTo"},
  about:{title:"About Pauline Lipkewich — Railroad Safety Expert | The Rail Way™",desc:"14+ years in North American rail, 7x revenue growth at Rocky Mountaineer, Contributing Editor at Railway Age.",h1:"About Pauline Lipkewich — Founder, The Rail Way™",bc:[{l:"Home",to:"home"},{l:"About"}],schema:"Person, ProfilePage"},
  insights:{title:"Rail Industry Insights | The Rail Way™",desc:"Expert perspectives on rail leadership, safety culture, and operational excellence.",h1:"Industry Insights — Rail Safety Culture & Leadership",bc:[{l:"Home",to:"home"},{l:"Insights"}],schema:"CollectionPage"},
  classii:{title:"Class II & III Railroad Safety Consulting | The Rail Way™",desc:"Right-sized safety culture transformation for regional and short-line railroads.",h1:"Safety Culture Consulting for Class II & III Railroads",bc:[{l:"Home",to:"home"},{l:"Class II & III"}],schema:"Service"},
  contact:{title:"Schedule a Consultation | The Rail Way™",desc:"Confidential consultation about your railroad's safety culture transformation.",h1:"Start a Conversation About Your Safety Culture",bc:[{l:"Home",to:"home"},{l:"Contact"}],schema:"ContactPage"},
};
const NAV=[{id:"home",l:"Home"},{id:"speakup",l:"Speak Up Culture"},{id:"process",l:"Our Process"},{id:"classii",l:"Class II & III"},{id:"insights",l:"Insights"},{id:"about",l:"About"},{id:"contact",l:"Contact"}];

function Img({src,alt,style={}}){return <img src={src} alt={alt} loading="lazy" style={{display:"block",width:"100%",height:"100%",objectFit:"cover",borderRadius:8,...style}}/>;}
function Bc({items,nav}){return <nav style={{padding:"12px 0",fontFamily:F.b,fontSize:12,color:C.grayLt}}>{items.map((i,n)=><span key={n}>{n>0&&<span style={{margin:"0 6px",opacity:.5}}>/</span>}{i.to?<span onClick={()=>nav(i.to)} style={{color:C.rust,cursor:"pointer"}}>{i.l}</span>:<span style={{color:C.gray}}>{i.l}</span>}</span>)}</nav>;}
function Sec({children,bg=C.white,pad="64px 0",id}){return <section id={id} style={{background:bg,padding:pad}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 28px"}}>{children}</div></section>;}
function Eye({children}){return <p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:C.rust,textTransform:"uppercase",letterSpacing:"1.8px",margin:"0 0 10px"}}>{children}</p>;}
function H1({children}){return <h1 style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.black,margin:"0 0 20px",lineHeight:1.18}}>{children}</h1>;}
function H2({children,id}){return <h2 id={id} style={{fontFamily:F.h,fontSize:28,fontWeight:700,color:C.black,margin:"0 0 16px",lineHeight:1.25}}>{children}</h2>;}
function H3({children}){return <h3 style={{fontFamily:F.h,fontSize:20,fontWeight:700,color:C.black,margin:"0 0 10px",lineHeight:1.3}}>{children}</h3>;}
function P({children,s={}}){return <p style={{fontFamily:F.b,fontSize:15,color:C.gray,lineHeight:1.7,margin:"0 0 16px",...s}}>{children}</p>;}
function Btn({children,primary,onClick}){return <button onClick={onClick} style={{padding:"12px 28px",borderRadius:5,border:"none",cursor:"pointer",fontFamily:F.b,fontSize:14,fontWeight:600,...(primary?{background:C.rust,color:C.white}:{background:"transparent",color:C.rust,border:`1.5px solid ${C.rust}`})}}>{children}</button>;}
function FAQ({q,a}){const[o,setO]=useState(false);return <div style={{borderBottom:`1px solid ${C.grayRule}`,padding:"16px 0"}}><div onClick={()=>setO(!o)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}><h3 style={{fontFamily:F.h,fontSize:17,fontWeight:700,color:C.black,margin:0,flex:1,lineHeight:1.35}}>{q}</h3><span style={{fontFamily:F.b,fontSize:18,color:C.rust,marginLeft:16,transition:"transform 0.2s",transform:o?"rotate(45deg)":"none"}}>+</span></div>{o&&<div style={{marginTop:12}}><P>{a}</P></div>}</div>;}
function Stat({v,l,src}){return <div style={{background:C.white,borderRadius:8,padding:24,borderLeft:`4px solid ${C.rust}`,flex:1}}><div style={{fontFamily:F.h,fontSize:32,fontWeight:700,color:C.rust,marginBottom:6}}>{v}</div><div style={{fontFamily:F.b,fontSize:14,color:C.black,marginBottom:8,lineHeight:1.4}}>{l}</div><div style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>Source: {src}</div></div>;}

function DevBar({page}){const[o,setO]=useState(false);const p=PAGES[page];return <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:1000,background:C.blackDeep,borderTop:`2px solid ${C.rust}`,fontFamily:F.m,fontSize:11,color:"rgba(255,255,255,0.7)"}}><div onClick={()=>setO(!o)} style={{padding:"6px 16px",cursor:"pointer",display:"flex",justifyContent:"space-between"}}><span style={{color:C.rust,fontWeight:700}}>SEO DEV</span><span style={{display:"flex",gap:12}}><span style={{color:"#5a5"}}>H1✓</span><span style={{color:"#5a5"}}>Meta✓</span><span style={{color:"#5a5"}}>Schema:{p.schema}</span><span>{o?"▼":"▲"}</span></span></div>{o&&<div style={{padding:"8px 16px 12px",borderTop:"1px solid rgba(255,255,255,0.1)",lineHeight:1.8}}><div><span style={{color:C.rust}}>title:</span> {p.title}</div><div><span style={{color:C.rust}}>desc:</span> {p.desc}</div><div><span style={{color:C.rust}}>h1:</span> {p.h1}</div></div>}</div>;}

/* ══════ HOME ══════ */
function Home({nav}){return <>
  {/* HERO with real background image */}
  <section style={{position:"relative",minHeight:480,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.fieldLeadership} alt="Railroad tracks stretching to the horizon" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div>
    <div style={{position:"absolute",left:0,top:0,bottom:0,width:6,background:`linear-gradient(180deg,${C.rust},transparent)`,zIndex:2}}/>
    <div style={{position:"relative",zIndex:2,maxWidth:960,margin:"0 auto",padding:"80px 28px 72px"}}>
      <Eye>The Rail Way™ — From the Boardroom to the Ballast Line</Eye>
      <h1 style={{fontFamily:F.h,fontSize:42,fontWeight:700,color:C.white,margin:"0 0 20px",lineHeight:1.15,maxWidth:640}}>Railroad Safety Culture <span style={{color:C.rust}}>Transformation</span></h1>
      <p style={{fontFamily:F.b,fontSize:17,color:"rgba(255,255,255,0.7)",margin:"0 0 12px",lineHeight:1.65,maxWidth:520}}>70–90% of organizational transformations fail. Yours doesn't have to.</p>
      <p style={{fontFamily:F.b,fontSize:15,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",lineHeight:1.65,maxWidth:520}}>Build a Speak Up Culture where safety concerns don't wait for an accident. Not just training. Not just consulting. A cultural residency that creates lasting change.</p>
      <div style={{display:"flex",gap:14}}><Btn primary onClick={()=>nav("contact")}>Take the Free Pulse Check</Btn><Btn onClick={()=>nav("speakup")}>What Is Speak Up Culture?</Btn></div>
    </div>
  </section>

  <Sec bg={C.cream} pad="40px 0"><div style={{display:"flex",gap:20}}><Stat v="214%" l="ROI from safety culture programs" src="BCG Research, 2023"/><Stat v="4x" l="Higher employee retention with psychological safety" src="BCG Study"/><Stat v="565/yr" l="Average roadway worker injuries (2018–2023)" src="FRA Safety Reports"/></div></Sec>

  {/* INDUSTRY RECOGNITION */}
  <Sec pad="48px 0">
    <div style={{textAlign:"center",marginBottom:28}}>
      <Eye>Industry Recognition</Eye>
      <H2>Building Generational Railroaders — and Industry Leaders</H2>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:28}}>
      <div style={{background:C.cream,borderRadius:10,padding:28,borderTop:`3px solid ${C.rust}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>Railway Age — 2026</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 8px",lineHeight:1.25}}>John Orr</h3>
          <p style={{fontFamily:F.h,fontSize:16,color:C.rust,margin:"0 0 12px",fontStyle:"italic"}}>2026 Railroader of the Year</p>
          <P s={{fontSize:13}}>Railway Age's highest individual honor, recognizing John Orr of Norfolk Southern for exceptional leadership in rail operations and safety performance.</P>
        </div>
        <p style={{fontFamily:F.m,fontSize:10,color:C.grayLt,margin:0}}>Railway Age Magazine</p>
      </div>
      <div style={{background:C.cream,borderRadius:10,padding:28,borderTop:`3px solid ${C.rust}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>League of Railway Women — 2025</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 8px",lineHeight:1.25}}>Diane Barnett</h3>
          <p style={{fontFamily:F.h,fontSize:16,color:C.rust,margin:"0 0 12px",fontStyle:"italic"}}>2025 Railway Woman of the Year</p>
          <P s={{fontSize:13}}>Recognized by the League of Railway Women as a people-first solutionist focused on nudging the progress needle — a generational railroader from Norfolk Southern.</P>
        </div>
        <p style={{fontFamily:F.m,fontSize:10,color:C.grayLt,margin:0}}>Progressive Railroading</p>
      </div>
    </div>
    <div style={{background:C.brown,borderRadius:10,padding:"24px 32px",textAlign:"center"}}>
      <p style={{fontFamily:F.h,fontSize:16,color:"rgba(255,255,255,0.9)",margin:"0 0 6px",lineHeight:1.5}}>We're proud of the work we've done with Norfolk Southern, helping elevate leadership capabilities and enhance safety performance.</p>
      <p style={{fontFamily:F.b,fontSize:14,color:"rgba(255,255,255,0.55)",margin:"0 0 16px"}}>Two industry award winners. One client. Generational railroaders.</p>
      <Btn primary onClick={()=>nav("contact")}>Discuss How We Can Help Your Organization</Btn>
    </div>
  </Sec>

  {/* WHAT WE DO — with training image */}
  <Sec>
    <div style={{display:"grid",gridTemplateColumns:"5fr 4fr",gap:40}}>
      <div>
        <Eye>What We Do</Eye>
        <H2>Safety Culture Transformation — Not Training</H2>
        <P>Railroad executives have seen too many generic safety consultants with polished slide decks and no operational empathy. The Rail Way is different — we've been on the ground at CN, KCS, and other Class I operators, transforming how crews communicate and how leaders behave.</P>
        <P>Our approach is a cultural residency: we embed with your team, transfer capability to internal faculty, and build systems that sustain transformation after we leave.</P>
        <div style={{display:"flex",gap:12,marginTop:8}}><Btn primary onClick={()=>nav("process")}>See Our Process</Btn><Btn onClick={()=>nav("classii")}>For Class II & III</Btn></div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{borderRadius:8,overflow:"hidden",height:220}}><Img src={IMG.teamTraining} alt="Rail safety culture transformation workshop in progress"/></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.safetyCulture} alt="Railway safety culture training session"/></div>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.yardTraining} alt="Rail yard safety training exercise"/></div>
        </div>
      </div>
    </div>
  </Sec>

  {/* PAULINE + RAILWAY AGE */}
  <Sec bg={C.cream}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:40,alignItems:"center"}}>
      <div style={{borderRadius:10,overflow:"hidden"}}><Img src={IMG.paulineHeadshot} alt="Pauline Lipkewich, founder of The Rail Way and Contributing Editor at Railway Age" style={{borderRadius:10}}/></div>
      <div>
        <Eye>Featured in Railway Age</Eye>
        <H2>Pauline Lipkewich — Contributing Editor</H2>
        <P s={{fontSize:17,fontStyle:"italic",color:C.black}}>"I was blessed to live in a region where heavy industry thrived. I had the gift of seeing firsthand the fruits of labor that came from calloused hands and dusty work boots."</P>
        <P>14+ years in North American rail operations. Grew Rocky Mountaineer revenue 7x. Worked alongside CN, KCS, and other Class I operators on safety performance and operational effectiveness. Today, she's the rail industry's voice on leadership behavior and culture transformation.</P>
        <div style={{display:"flex",gap:12}}><Btn primary onClick={()=>nav("about")}>Full Bio</Btn><Btn onClick={()=>nav("insights")}>Read Her Column</Btn></div>
      </div>
    </div>
  </Sec>

  {/* LATEST ARTICLES — with article images */}
  <Sec>
    <Eye>Latest Insights</Eye>
    <H2>Leading Through Uncertainty — 4-Part Series</H2>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginTop:16}}>
      {[
        {img:IMG.roadAhead,title:"The Road Ahead: Putting It All Together",p:"Part 4 of 4",d:"Feb 2026"},
        {img:IMG.fieldLeadership,title:"Lead Yourself First: The Trinity of Excellence",p:"Part 3 of 4",d:"Jan 2026"},
        {img:IMG.leaderTalking,title:"Leading Through Uncertainty: What's Your Style?",p:"Part 2 of 4",d:"Oct 2025"},
        {img:IMG.freightTrain,title:"How Leaders Navigate Uncertainty and Come Out Stronger",p:"Part 1 of 4",d:"Aug 2025"},
      ].map((a,i)=><article key={i} style={{background:C.cream,borderRadius:8,overflow:"hidden",cursor:"pointer"}}>
        <div style={{height:160,overflow:"hidden"}}><Img src={a.img} alt={a.title}/></div>
        <div style={{padding:"16px 18px"}}>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px",margin:"0 0 6px"}}>{a.p} • {a.d}</p>
          <h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.title}</h3>
        </div>
      </article>)}
    </div>
    <div style={{marginTop:20}}><Btn onClick={()=>nav("insights")}>View All Insights</Btn></div>
  </Sec>

  {/* TEAM */}
  <Sec bg={C.cream}>
    <Eye>The KBL Team</Eye>
    <H2>Meet the Team Behind The Rail Way™</H2>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24,marginTop:16}}>
      {[
        {img:IMG.paulineAlt,name:"Pauline Lipkewich",role:"Founder & CEO",desc:"14+ years transforming cultures in heavy industry. Contributing Editor, Railway Age."},
        {img:IMG.brenda,name:"Brenda Huizinga",role:"Performance Coaching",desc:"Enhancing mindsets, behaviors and competencies that drive organizational culture and results."},
        {img:IMG.michael,name:"Michael Powell",role:"Business Optimization",desc:"Proven models driving profitable growth, operational effectiveness, and safety improvements."},
      ].map((t,i)=><div key={i} style={{background:C.white,borderRadius:8,overflow:"hidden"}}>
        <div style={{height:200,overflow:"hidden"}}><Img src={t.img} alt={t.name}/></div>
        <div style={{padding:"16px 18px"}}>
          <h3 style={{fontFamily:F.h,fontSize:17,fontWeight:700,color:C.black,margin:"0 0 2px"}}>{t.name}</h3>
          <p style={{fontFamily:F.b,fontSize:11,color:C.rust,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px"}}>{t.role}</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:0,lineHeight:1.5}}>{t.desc}</p>
        </div>
      </div>)}
    </div>
  </Sec>

  {/* FAQ */}
  <Sec>
    <Eye>Frequently Asked Questions</Eye>
    <H2 id="faq">Railroad Safety Culture — Common Questions</H2>
    <FAQ q="What is railroad safety culture transformation?" a="Railroad safety culture transformation is the process of fundamentally changing how an organization's leaders and workers approach safety — moving from compliance-driven rule-following to a culture where every person feels empowered and responsible for safety outcomes. Unlike training, transformation changes the underlying behaviors and leadership habits that determine whether safety is lived or merely checked off."/>
    <FAQ q="What is Speak Up Culture in the rail industry?" a="Speak Up Culture is an organizational environment where railroad workers at every level feel safe raising safety concerns, reporting near-misses, and challenging unsafe conditions without fear of retaliation. Organizations with strong Speak Up Cultures see significantly fewer preventable incidents because hazards are identified before they become accidents."/>
    <FAQ q="How does safety culture transformation differ from safety training?" a="Safety training teaches what the rules are. Safety culture transformation changes whether people follow them — and whether they speak up when they see something wrong. Training fills a binder; transformation fills a culture. The Rail Way's approach is a cultural residency — we embed with your team, build internal capability, and transfer ownership so the transformation sustains itself."/>
    <FAQ q="What is the ROI of railroad safety culture programs?" a="Research from BCG shows organizations investing in safety culture transformation see up to 214% ROI through reduced incidents, lower turnover (4x higher retention with psychological safety), improved efficiency, and reduced compliance costs. For Class II and III railroads, the financial impact is proportionally even larger."/>
  </Sec>

  {/* CTA */}
  <section style={{position:"relative",overflow:"hidden",minHeight:280}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt="Railroad leadership workshop" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"64px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:28,color:C.white,margin:"0 0 12px"}}>Ready to Transform Your Safety Culture?</h2>
      <p style={{fontFamily:F.b,fontSize:15,color:"rgba(255,255,255,0.6)",margin:"0 0 24px"}}>Every transformation begins with a conversation.</p>
      <Btn primary onClick={()=>nav("contact")}>Start a Conversation</Btn>
    </div>
  </section>
</>;}

/* ══════ SPEAK UP ══════ */
function SpeakUp({nav}){return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.speakup.bc} nav={nav}/><Eye>Speak Up Culture for Railroads</Eye><H1>{PAGES.speakup.h1}</H1>
    <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:32}}>
      <div><P s={{fontSize:17}}>Speak Up Culture is an organizational environment where every railroader — from track crews to the C-suite — feels safe raising safety concerns, reporting near-misses, and challenging unsafe conditions without fear of retaliation.</P><P>It is the single most reliable predictor of whether a railroad prevents incidents or merely investigates them after the fact. 65% of rail accidents are attributed to human factors — and the majority involve failures of communication, not knowledge.</P></div>
      <div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt="Pauline Lipkewich discussing Speak Up Culture at a railway industry event"/></div>
    </div>
  </Sec>
  <Sec bg={C.cream}><H2>Why Speak Up Culture Matters</H2>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
      <div><H3>The Cost of Silence</H3><P>When a roadway worker sees an unsafe condition but doesn't report it — because they fear discipline, think it won't matter, or accept "that's how we've always done it" — the risk stays invisible until it becomes an incident. 96 roadway workers have been killed since 1997. Many fatalities were preceded by unreported concerns.</P></div>
      <div><H3>The Alternative</H3><P>Organizations with strong Speak Up Cultures catch hazards upstream. One FRA C3RS pilot site reported nearly a 70% reduction in certain accident types after implementing confidential close-call reporting. The difference isn't technology — it's whether people feel safe using it.</P></div>
    </div>
  </Sec>
  <Sec><H2>How We Build It</H2><P>Our approach isn't a training module. It's a cultural residency — we embed with your leadership team and frontline supervisors to transform the daily behaviors that determine whether people speak up or stay silent.</P>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,marginTop:24}}>
      {[{n:"1",t:"Assess the Real Culture",d:"Not the culture in your policy handbook — the one your crews experience every shift."},{n:"2",t:"Transform Leader Behaviors",d:"We work directly with supervisors to model communication patterns that make speaking up feel safe."},{n:"3",t:"Build Internal Faculty",d:"We train your people to sustain the transformation using our white-labeled materials."}].map(s=><div key={s.n} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><div style={{fontFamily:F.h,fontSize:28,color:C.rust,fontWeight:700,marginBottom:8,opacity:.3}}>{s.n}</div><H3>{s.t}</H3><P s={{fontSize:13}}>{s.d}</P></div>)}
    </div>
    <div style={{marginTop:28,display:"flex",gap:12}}><Btn primary onClick={()=>nav("contact")}>Discuss Speak Up Culture</Btn><Btn onClick={()=>nav("process")}>See Full Process</Btn></div>
  </Sec>
  <Sec bg={C.cream}><H2>Speak Up Culture FAQ</H2>
    <FAQ q="How is Speak Up Culture different from FRA's C3RS program?" a="C3RS is a specific confidential close-call reporting system. Speak Up Culture is the broader organizational environment that determines whether workers actually use reporting systems. You can implement C3RS and still have silence if leaders don't model openness."/>
    <FAQ q="How long does it take to build a Speak Up Culture?" a="Meaningful behavior change is typically visible within 90–180 days. Sustainable culture transformation generally requires 12–18 months of cultural residency, including transition to internal faculty."/>
    <FAQ q="Can smaller railroads afford this?" a="The Rail Way was built for Class II and III operators. Smaller railroads often see faster culture change because leadership is closer to the front lines."/>
  </Sec>
</>;}

/* ══════ PROCESS ══════ */
function Process({nav}){
  const stages=[{n:"Heighten Awareness",t:"Days 1–30",d:"Surface the real issues hiding behind compliance metrics. We uncover the gap between stated safety culture and lived reality."},{n:"Increase Clarity",t:"Days 30–90",d:"Define what 'good' looks like at every level. Actionable roadmaps tailored to your railroad's size and context."},{n:"Build Alignment",t:"Days 90–270",d:"Get leaders modeling the behaviors they expect. Internal faculty-in-training begin delivering content."},{n:"Drive Momentum",t:"Day 270+",d:"Internal academy operational. Faculty delivering independently. We transition to periodic auditing."}];
  return <>
  <section style={{position:"relative",minHeight:280,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.leaderTalking} alt="Railroad leadership discussion" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.process.bc} nav={nav}/><Eye>Our Proven Process</Eye><h1 style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.process.h1}</h1><p style={{fontFamily:F.b,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0,lineHeight:1.6}}>Not training. Not consulting. A cultural residency that creates lasting change.</p></div>
  </section>
  <Sec bg={C.cream}><div style={{display:"flex",flexDirection:"column",gap:24}}>{stages.map((s,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"160px 1fr",gap:24}}><div style={{textAlign:"right",paddingTop:4}}><div style={{fontFamily:F.h,fontSize:14,color:C.rust,fontWeight:700}}>Stage {i+1}</div><div style={{fontFamily:F.m,fontSize:11,color:C.grayLt}}>{s.t}</div></div><div style={{background:C.white,borderRadius:8,padding:24,borderLeft:`4px solid ${C.rust}`}}><H3>{s.n}</H3><P>{s.d}</P></div></div>)}</div></Sec>
  <Sec><H2>Training vs. Transformation</H2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}><div style={{background:"#FFF5F5",borderRadius:8,padding:24,borderTop:"3px solid #CC4444"}}><h3 style={{fontFamily:F.h,fontSize:18,color:"#CC4444",margin:"0 0 12px"}}>Traditional Safety Training</h3><P s={{fontSize:13}}>External consultant delivers a program. Binders filled. Consultant leaves. Behaviors revert within 90 days.</P></div><div style={{background:C.tint,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><h3 style={{fontFamily:F.h,fontSize:18,color:C.rust,margin:"0 0 12px"}}>The Rail Way Cultural Residency</h3><P s={{fontSize:13}}>We embed with your team. Internal faculty developed. Materials white-labeled. Transformation happens with you, not to you.</P></div></div><div style={{marginTop:28,textAlign:"center"}}><Btn primary onClick={()=>nav("contact")}>Discuss Your Transformation</Btn></div></Sec>
</>;}

/* ══════ ABOUT ══════ */
function About({nav}){return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.about.bc} nav={nav}/><Eye>About</Eye><H1>{PAGES.about.h1}</H1>
    <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:40}}>
      <div><P s={{fontSize:17}}>Pauline has been railroading since 2011. She led the global group sales team for Rocky Mountaineer, growing revenues more than 7x in less than four years. She has worked alongside Class I operators at CN, KCS, and NS — targeting safety performance and operational effectiveness.</P><P>She holds a Bachelor of Commerce and a Master of Arts in Leadership from the University of Guelph. As Contributing Editor at Railway Age, her column reaches rail decision-makers across North America.</P><P>She founded KingdomBuilding Leadership with a core belief: when a leader gets better, everybody wins.</P></div>
      <div><div style={{borderRadius:10,overflow:"hidden",marginBottom:16}}><Img src={IMG.paulineHeadshot} alt="Pauline Lipkewich"/></div><div style={{background:C.cream,borderRadius:8,padding:18,borderTop:`3px solid ${C.rust}`}}><h3 style={{fontFamily:F.h,fontSize:15,fontWeight:700,margin:"0 0 8px"}}>Credentials</h3><div style={{fontFamily:F.b,fontSize:13,color:C.gray,lineHeight:2}}>
        <div>MA (Leadership), U of Guelph</div><div>B.Comm, U of Guelph</div><div>Contributing Editor, Railway Age</div><div>14+ years North American rail</div><div>Rocky Mountaineer: 7x revenue growth</div>
      </div></div></div>
    </div>
  </Sec>
  <Sec bg={C.cream}><div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,alignItems:"center"}}><div><H2>Pauline's Approach</H2><blockquote style={{fontFamily:F.h,fontSize:22,fontStyle:"italic",color:C.black,borderLeft:`4px solid ${C.rust}`,padding:"12px 0 12px 24px",margin:"0 0 20px"}}>"This isn't happening to you. It's happening with you."</blockquote><P>Transformation happens with the organization, not to it. Her approach is built on respect for the people doing the work — their expertise, challenges, and pride in the industry.</P></div><div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt="Pauline at a railway event"/></div></div></Sec>
</>;}

/* ══════ INSIGHTS ══════ */
function Insights({nav}){const articles=[{img:IMG.roadAhead,t:"The Road Ahead: Putting It All Together",c:"Leadership Series",d:"Feb 2026",s:"Part 4/4"},{img:IMG.fieldLeadership,t:"Lead Yourself First: Trinity of Excellence",c:"Leadership Series",d:"Jan 2026",s:"Part 3/4"},{img:IMG.leaderTalking,t:"Leading Through Uncertainty: What's Your Style?",c:"Leadership Series",d:"Oct 2025",s:"Part 2/4"},{img:IMG.freightTrain,t:"How Leaders Navigate Uncertainty",c:"Leadership Series",d:"Aug 2025",s:"Part 1/4"},{img:IMG.safetyCulture,t:"Rail Safety by the Numbers",c:"Data & Analysis",d:"2025",s:""},{img:IMG.teamTraining,t:"Why Transformation Beats Training",c:"Culture Change",d:"2025",s:""},{img:IMG.yardTraining,t:"What Is Speak Up Culture",c:"Speak Up Culture",d:"2025",s:""},{img:IMG.railwayTraining,t:"The ROI of Safety Culture",c:"ROI & Data",d:"2025",s:""}];
return <><Sec pad="48px 0 56px"><Bc items={PAGES.insights.bc} nav={nav}/><Eye>The Rail Way™ Column & Pillar Articles</Eye><H1>{PAGES.insights.h1}</H1></Sec><Sec bg={C.cream}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>{articles.map((a,i)=><article key={i} style={{background:C.white,borderRadius:8,overflow:"hidden",cursor:"pointer"}}><div style={{height:140,overflow:"hidden"}}><Img src={a.img} alt={a.t}/></div><div style={{padding:"14px 18px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px"}}>{a.c}</span><span style={{fontFamily:F.b,fontSize:10,color:C.grayLt}}>{a.d}</span></div><h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.t}</h3>{a.s&&<span style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>{a.s}</span>}</div></article>)}</div></Sec></>;}

/* ══════ CLASS II & III ══════ */
function ClassII({nav}){return <>
  <section style={{position:"relative",minHeight:260,overflow:"hidden"}}><div style={{position:"absolute",inset:0}}><Img src={IMG.roadAhead} alt="Freight train on open track" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div><div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.classii.bc} nav={nav}/><Eye>For Regional & Short-Line Operators</Eye><h1 style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.classii.h1}</h1><p style={{fontFamily:F.b,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0}}>Same safety challenges as Class I — with a fraction of the resources. Right-sized programs that deliver results.</p></div></section>
  <Sec><H2>Why Smaller Railroads See Faster Results</H2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>{[{t:"Leadership Proximity",d:"Executives closer to frontline. Behavioral modeling has direct impact."},{t:"Operational Agility",d:"Decisions in days, not quarters. No enterprise bureaucracy."},{t:"Community Identity",d:"'Railroad family' isn't a metaphor — it's the operational reality."}].map((c,i)=><div key={i} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><H3>{c.t}</H3><P s={{fontSize:13}}>{c.d}</P></div>)}</div><div style={{marginTop:28,textAlign:"center"}}><Btn primary onClick={()=>nav("contact")}>Discuss Your Railroad's Needs</Btn></div></Sec>
</>;}

/* ══════ CONTACT ══════ */
function Contact({nav}){return <><Sec pad="48px 0 56px"><Bc items={PAGES.contact.bc} nav={nav}/><Eye>Let's Talk</Eye><H1>{PAGES.contact.h1}</H1></Sec><Sec bg={C.cream}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}><div><H2>Schedule a Consultation</H2><div style={{display:"flex",flexDirection:"column",gap:12}}>{["First Name","Last Name","Email","Phone","Company","Job Title"].map(f=><div key={f}><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>{f}</label><input style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>)}<select style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,background:C.white}}><option>Railroad Type...</option><option>Class I</option><option>Regional (II)</option><option>Short Line (III)</option><option>Industrial</option><option>Passenger</option></select><textarea rows={3} placeholder="What would you like to discuss?" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,resize:"vertical",boxSizing:"border-box"}}/><Btn primary>Submit Request</Btn></div></div>
  <div><H2>Who This Is For</H2>{[{r:"C-Suite Executives",d:"Strategic culture transformation aligned with business objectives"},{r:"VPs of Safety",d:"Building sustainable safety cultures that deliver results"},{r:"VPs of Operations",d:"Creating conditions for operational excellence"},{r:"HR Leaders",d:"Engaging and retaining workforce through culture"}].map((r,i)=><div key={i} style={{background:C.white,borderRadius:8,padding:16,borderLeft:`3px solid ${C.rust}`,marginBottom:10}}><h3 style={{fontFamily:F.h,fontSize:15,fontWeight:700,color:C.black,margin:"0 0 3px"}}>{r.r}</h3><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:0}}>{r.d}</p></div>)}<div style={{marginTop:20,padding:18,background:C.white,borderRadius:8}}><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:"0 0 4px"}}>Reach out directly:</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:"0 0 2px",fontWeight:600}}>pauline@therailway.us</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:0}}>+1.780.991.9993</p></div></div></div></Sec></>;}

/* ══════ HEADER ══════ */
function Header({page,nav}){return <header style={{background:C.white,borderBottom:`1px solid ${C.grayRule}`,position:"sticky",top:0,zIndex:100}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}><div onClick={()=>nav("home")} style={{cursor:"pointer"}}><img src={IMG.logo} alt="The Rail Way™" style={{height:36}}/></div><nav style={{display:"flex",gap:16}}>{NAV.map(n=><span key={n.id} onClick={()=>nav(n.id)} style={{fontFamily:F.b,fontSize:12.5,fontWeight:600,color:page===n.id?C.rust:C.gray,cursor:"pointer",padding:"6px 0",borderBottom:page===n.id?`2px solid ${C.rust}`:"2px solid transparent"}}>{n.l}</span>)}</nav></div></header>;}

/* ══════ FOOTER ══════ */
function Footer({nav}){return <footer style={{background:C.blackDeep,padding:"48px 0 24px"}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 28px"}}><div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:28,marginBottom:28}}><div><img src={IMG.logoWhite} alt="The Rail Way™" style={{height:32,marginBottom:12,filter:"brightness(1.2)"}}/><p style={{fontFamily:F.b,fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.6,maxWidth:260}}>A division of KingdomBuilding Leadership, Inc. Transforming how the rail sector develops generational railroaders.</p></div><div><p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Services</p>{["speakup","process","classii"].map(id=><p key={id} style={{margin:"0 0 6px"}}><span onClick={()=>nav(id)} style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",cursor:"pointer"}}>{NAV.find(n=>n.id===id)?.l}</span></p>)}</div><div><p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Insights</p>{["The Road Ahead","Lead Yourself First","What's Your Style?","Navigate Uncertainty"].map(a=><p key={a} style={{margin:"0 0 6px"}}><span style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",cursor:"pointer"}}>{a}</span></p>)}</div><div><p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Connect</p><p style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",margin:"0 0 6px"}}>pauline@therailway.us</p><p style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",margin:"0 0 6px"}}>+1.780.991.9993</p><p style={{margin:"0 0 6px"}}><span onClick={()=>nav("contact")} style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",cursor:"pointer"}}>Book a Consultation</span></p></div></div><div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:16,display:"flex",justifyContent:"space-between"}}><p style={{fontFamily:F.b,fontSize:11,color:"rgba(255,255,255,0.3)",margin:0}}>© 2026 KingdomBuilding Leadership, Inc.</p><p style={{fontFamily:F.b,fontSize:11,color:"rgba(255,255,255,0.3)",margin:0}}>Privacy Policy • Terms</p></div></div></footer>;}

/* ══════ MAIN ══════ */
export default function Site(){
  const[page,setPage]=useState("home");
  const topRef=useRef(null);
  const nav=(p)=>{setPage(p);topRef.current?.scrollIntoView({behavior:"smooth"});};
  const pages={home:<Home nav={nav}/>,speakup:<SpeakUp nav={nav}/>,process:<Process nav={nav}/>,about:<About nav={nav}/>,insights:<Insights nav={nav}/>,classii:<ClassII nav={nav}/>,contact:<Contact nav={nav}/>};
  return <div ref={topRef} style={{fontFamily:F.b,background:C.white,minHeight:"100vh",paddingBottom:36}}><Header page={page} nav={nav}/><main>{pages[page]}</main><Footer nav={nav}/><DevBar page={page}/></div>;
}
