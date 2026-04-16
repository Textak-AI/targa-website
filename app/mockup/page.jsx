"use client";
import { useState, useRef, useEffect } from "react";

var C = { navy: "#1f476a", teal: "#0eb2af", gold: "#fbbf24", gray: "#6b7a8a", light: "#f4f7fa", white: "#fff", border: "#d6dee6", subtle: "#e6ecf2", bg2: "#f4f6f8", tealBg: "#e6f7f7", tealBd: "#b8e8e7", tealDk: "#076c69", green: "#059669", greenBg: "#ecfdf5", amber: "#d97706", amberBg: "#fef3c7", red: "#dc2626", redBg: "#fef2f2", navyLt: "#dde6ef", pinkDk: "#8a3560" };

function TML(p){var s=p.s||18;return(<svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/></svg>);}
function TM(p){var v=p.v||"i",s=p.s||16;return(<svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={v==="a"?C.gold:C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg>);}
function SI(p){var s=p.s||11;return(<svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 2 L22 20 L2 20 Z" fill={C.teal}/><path d="M12 9 L18 18 L6 18 Z" fill="#054846"/></svg>);}
function PI(){return(<svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2 L22 10 L2 10 Z" fill="#db2777"/><path d="M3 11 L21 11 L18 17 L6 17 Z" fill={C.pinkDk}/></svg>);}
function Av(p){var i=p.i,bg=p.bg||C.gold,fg=p.fg||C.navy,s=p.s||22;return(<div style={{width:s,height:s,borderRadius:"50%",background:bg,fontSize:s*0.43,color:fg,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600,flexShrink:0}}>{i}</div>);}
function Pl(p){var c=p.c||"green",hide=p.hide||false;var m={green:{color:C.green,background:C.greenBg},amber:{color:C.amber,background:C.amberBg},red:{color:C.red,background:C.redBg},navy:{color:C.navy,background:C.navyLt},teal:{color:C.tealDk,background:C.tealBg}};var s=m[c]||m.green;return(<span style={{fontSize:10,fontWeight:500,padding:"3px 8px",borderRadius:4,letterSpacing:0.3,whiteSpace:"nowrap",opacity:hide?0:1,transform:hide?"scale(0.8)":"scale(1)",transition:"opacity 0.8s, transform 0.8s",color:s.color,background:s.background}}>{p.children}</span>);}
function Eye(p){return(<div style={{fontSize:10,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:8,display:"flex",alignItems:"center",gap:6}}>{p.children}</div>);}
function Chk(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);}
function OdoDigit(p){var d=p.d,dur=p.dur||1.4;return(<span style={{display:"inline-block",height:"1.15em",width:"0.62em",overflow:"hidden",position:"relative",verticalAlign:"bottom"}}><span style={{display:"block",transition:"transform "+dur+"s cubic-bezier(0.23,1,0.32,1)",transform:"translateY("+(-d*1.15)+"em)"}}>{"0123456789".split("").map(function(n,j){return(<span key={j} style={{display:"block",height:"1.15em",textAlign:"center",lineHeight:"1.15em"}}>{n}</span>);})}</span></span>);}
function Odo(p){var value=p.value,suffix=p.suffix||"",dur=p.dur||1.4;var str=String(value).padStart(2,"\u2007");return(<span style={{display:"inline-flex",alignItems:"baseline"}}>{str.split("").map(function(ch,i){if(ch.match(/\d/))return(<OdoDigit key={"p"+i} d={parseInt(ch)} dur={dur+i*0.12}/>);if(ch==="\u2007")return(<span key={"p"+i} style={{display:"inline-block",width:"0.62em"}}/>);return(<span key={"p"+i}>{ch}</span>);})}{suffix?<span style={{marginLeft:1}}>{suffix}</span>:null}</span>);}
function StatCard(p){return(<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px"}}><div style={{fontSize:10,color:C.gray,marginBottom:4}}>{p.label}</div><div style={{fontSize:22,fontWeight:500,color:p.color||C.navy,letterSpacing:"-0.02em"}}>{p.value}</div>{p.sub&&<div style={{fontSize:11,color:p.subColor||C.green,fontWeight:500,marginTop:4}}>{p.sub}</div>}</div>);}
function PB(p){return(<div style={{height:p.h||4,background:"#e6ecf2",borderRadius:2,overflow:"hidden"}}><div style={{width:p.pct+"%",height:"100%",background:p.color||C.teal,transition:"width 1.4s cubic-bezier(0.4,0,0.2,1)"}}/></div>);}

var strategies=[
{id:"sp1",t:"Expand gross margin by 300bps",status:"ON TRACK",sc:"green",risk:true,progress:54,owner:"JT",impact:"$24M EBITDA",actions:4,blocker:true},
{id:"sp2",t:"Accelerate revenue growth",status:"ON TRACK",sc:"green",risk:false,progress:68,owner:"BA",impact:"$18M ARR",actions:3,blocker:false},
{id:"sp3",t:"Drive operational efficiency",status:"BEHIND",sc:"amber",risk:true,progress:31,owner:"MS",impact:"$6M OpEx",actions:5,blocker:true},
{id:"sp4",t:"Strengthen talent pipeline",status:"ON TRACK",sc:"green",risk:false,progress:72,owner:"SD",impact:"Key hires",actions:2,blocker:false}
];

var boardItems=[
{t:"Gross margin expansion",conf:72,prev:68,status:"green",owner:"JT",note:"COGS blocker being resolved. Price realization on track."},
{t:"Revenue acceleration",conf:81,prev:79,status:"green",owner:"BA",note:"Pipeline ahead of target. EMEA launch on schedule."},
{t:"Operational efficiency",conf:45,prev:52,status:"red",owner:"MS",note:"Two blockers active. Vendor delays impacting timeline."},
{t:"Talent pipeline",conf:78,prev:75,status:"green",owner:"SD",note:"3 of 5 key hires completed. Remaining positions in final round."}
];

export default function TargaApp(){
var pageS=useState("home");var page=pageS[0];var setPage=pageS[1];
var phaseS=useState(0);var phase=phaseS[0];var setPhase=phaseS[1];
var pulseS=useState(false);var pulse=pulseS[0];var setPulse=pulseS[1];
var msgsS=useState([]);var msgs=msgsS[0];var setMsgs=msgsS[1];
var ciS=useState("");var chatIn=ciS[0];var setChatIn=ciS[1];
var clS=useState(false);var chatLoading=clS[0];var setChatLoading=clS[1];
var chatRef=useRef(null);
var emS=useState(null);var expMetric=emS[0];var setExpMetric=emS[1];
var saS=useState(null);var selAction=saS[0];var setSelAction=saS[1];
var esS=useState(null);var expSug=esS[0];var setExpSug=esS[1];
var scS=useState(null);var selChild=scS[0];var setSelChild=scS[1];
var aaS=useState(false);var showAddAction=aaS[0];var setShowAddAction=aaS[1];
var btS=useState("History");var bTab=btS[0];var setBTab=btS[1];

useEffect(function(){var s=document.createElement("style");s.textContent="@keyframes fu{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes pu{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}";document.head.appendChild(s);return function(){s.remove();};},[]);
useEffect(function(){if(chatRef.current)chatRef.current.scrollTop=chatRef.current.scrollHeight;},[msgs,chatLoading]);

function fire(){if(phase>0)return;setPhase(1);setTimeout(function(){setPhase(2);},600);setTimeout(function(){setPhase(3);},900);setTimeout(function(){setPhase(4);},1000);setTimeout(function(){setPhase(5);setPulse(true);},1100);setTimeout(function(){setPulse(false);},2500);}
function reset(){setPhase(0);setPulse(false);}
var progress=phase>=3?62:54;
var actionCount=phase>=3?3:4;
var showRisk=phase<4;
var showBlocker=phase<2;
var completed=phase>=1;

function sendChat(){
if(!chatIn.trim()||chatLoading)return;var q=chatIn.trim();setChatIn("");setMsgs(function(p){return p.concat([{role:"user",text:q}]);});setChatLoading(true);
fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:300,system:"You are TARGA AI. Context: 4 strategic plans FY26. Gross margin 39.8% vs 42.3%. Revenue on track. OpEx behind. Talent ahead. Keep responses 2-3 sentences, executive-level. No em-dashes or markdown.",messages:[{role:"user",content:q}]})}).then(function(r){return r.json();}).then(function(d){var txt=d.content?d.content.map(function(b){return b.text||"";}).join(""):"Could not process.";setMsgs(function(p){return p.concat([{role:"assistant",text:txt}]);});setChatLoading(false);}).catch(function(){setMsgs(function(p){return p.concat([{role:"assistant",text:"Gross margin and operational efficiency need focus. Resolve the COGS blocker and escalate vendor delays this week."}]);});setChatLoading(false);});
}

function NI(p){return(<div onClick={function(){setPage(p.pg);}} style={{width:40,height:40,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:page===p.pg?C.tealBg:"transparent",cursor:"pointer",transition:"background 0.2s"}} title={p.title}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={p.d} stroke={page===p.pg?C.teal:C.gray} strokeWidth="1.8" strokeLinecap="square"/></svg></div>);}

function PH(p){return(<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:14,borderBottom:"1px solid "+C.border,marginBottom:18}}><div><div style={{fontSize:10,fontWeight:500,letterSpacing:1.5,color:C.teal,textTransform:"uppercase",marginBottom:2}}>{p.eyebrow}</div><div style={{fontSize:20,fontWeight:500,color:C.navy,fontFamily:"Space Grotesk, sans-serif",letterSpacing:"-0.02em"}}>{p.title}</div></div>{p.right&&<div>{p.right}</div>}</div>);}

return(
<div style={{fontFamily:"Inter, -apple-system, sans-serif",color:C.navy,display:"flex",minHeight:"100vh",background:C.bg2}}>

<div style={{width:56,flexShrink:0,background:C.white,borderRight:"1px solid "+C.border,padding:"16px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,position:"sticky",top:0,height:"100vh"}}>
<div style={{marginBottom:16,cursor:"pointer"}} onClick={function(){setPage("home");}}><svg width="24" height="24" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg></div>
<NI pg="home" d="M3 9 L12 3 L21 9 L21 21 L3 21 Z" title="Home"/>
<NI pg="cascade" d="M4 5 L20 5 M4 12 L20 12 M4 19 L16 19" title="Cascade"/>
<NI pg="detail" d="M9 3 L9 21 M3 9 L15 9 M3 15 L15 15" title="Item Detail"/>
<NI pg="dashboard" d="M3 3 L10 3 L10 13 L3 13 Z M14 3 L21 3 L21 8 L14 8 Z M14 11 L21 11 L21 21 L14 21 Z M3 16 L10 16 L10 21 L3 21 Z" title="Dashboard"/>
<NI pg="pulse" d="M2 12 L6 12 L9 4 L12 20 L15 8 L18 12 L22 12" title="Board Pulse"/>
<div style={{flex:1}}/>
<Av i="JT" s={28}/>
</div>

<div style={{flex:1,padding:"24px 32px",maxWidth:1100,minWidth:0}}>

{page==="home"&&<div>
<PH eyebrow="Good morning, Joe" title="My world" right={<div style={{fontSize:11,color:C.gray}}>Wednesday, April 16, 2026</div>}/>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:24}}>
<StatCard label="Items owned" value="6" sub="2 behind schedule" subColor={C.amber}/>
<StatCard label="Actions due" value="7" sub="1 overdue" subColor={C.red}/>
<StatCard label="Avg confidence" value="69%" sub={"\u2197 +3% vs last week"} subColor={C.green}/>
<StatCard label="Board review" value="11 days" color={C.amber} sub="Q1 materials due"/>
</div>
<div style={{display:"flex",gap:16}}>
<div style={{flex:1}}>
<Eye><SI s={12}/> My strategic plans <span style={{color:C.gray,fontWeight:400}}>. 4</span></Eye>
{strategies.map(function(s){return(<div key={s.id} onClick={function(){setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(s.sc==="green"?C.teal:C.amber),borderRadius:10,padding:"12px 16px",marginBottom:8,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><SI s={12}/><div style={{flex:1,fontSize:14,fontWeight:500,color:C.navy}}>{s.t}</div><Av i={s.owner} s={22} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><Pl c={s.sc}>{s.status}</Pl>{s.risk&&<Pl c="amber">{"\u25B3"} RISK</Pl>}{s.blocker&&<Pl c="red">BLOCKER</Pl>}<span style={{fontSize:10,color:C.gray,marginLeft:"auto"}}>{s.actions} actions</span></div>
<PB pct={s.progress}/><div style={{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10}}><span style={{color:C.gray}}>{s.progress}%</span><span style={{color:C.navy,fontWeight:500}}>{s.impact}</span></div>
</div>);})}
</div>
<div style={{width:300,flexShrink:0}}>
<Eye><TM s={14}/> TARGA Intelligence</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:10,marginBottom:12}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:0.5,color:C.tealDk,textTransform:"uppercase",marginBottom:8}}>This week</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:10,marginBottom:6,fontSize:12,color:C.navy,lineHeight:1.5}}>Your team resolved 2 actions and moved 1 item from At Risk to On Track. The COGS blocker on gross margin expansion remains your top priority.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:10,marginBottom:6}}><div style={{fontSize:11,fontWeight:500,color:C.navy,marginBottom:2}}>Pricing approval is overdue</div><div style={{fontSize:10,color:C.gray}}>Blocking price realization. 3 days past due.</div></div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:10}}><div style={{fontSize:11,fontWeight:500,color:C.navy,marginBottom:2}}>OpEx efficiency dropping</div><div style={{fontSize:10,color:C.gray}}>Confidence fell 7 points. Two vendor blockers.</div></div>
</div>
<Eye><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7 L12 12 L15.5 14" stroke="currentColor" strokeWidth="1.8"/></svg> Recent activity</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"4px 12px"}}>
{[{i:"MS",bg:C.red,fg:"#fff",n:"Mark S.",a:"flagged blocker on COGS",t:"2h ago"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"updated margin target",t:"Yesterday"},{i:"SD",bg:C.navy,fg:"#fff",n:"Sarah D.",a:"completed 2 interviews",t:"2d ago"}].map(function(e,idx){return(<div key={idx} style={{display:"flex",gap:8,padding:"8px 0",borderBottom:idx<2?"1px solid #f0f3f6":"none"}}><Av i={e.i} bg={e.bg} fg={e.fg} s={20}/><div style={{fontSize:11,lineHeight:1.4}}>{e.n&&<span style={{fontWeight:500}}>{e.n} </span>}<span style={{color:C.gray}}>{e.a}</span><div style={{fontSize:10,color:"#8b99a8",marginTop:1}}>{e.t}</div></div></div>);})}
</div>
</div>
</div>
</div>}

{page==="cascade"&&<div>
<PH eyebrow="Strategy map" title="Enterprise Value Creation - FY26" right={<div style={{display:"flex",gap:4}}>{["Cascade","Kanban","Timeline","People"].map(function(v,i){return(<div key={v} style={{padding:"5px 10px",background:i===0?C.white:"transparent",border:i===0?"1px solid "+C.border:"none",borderRadius:6,fontSize:11,color:i===0?C.navy:C.gray,fontWeight:i===0?500:400,cursor:"pointer"}}>{v}</div>);})}</div>}/>
<div style={{position:"relative",background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,minHeight:480}}>
<svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}} viewBox="0 0 1000 480" preserveAspectRatio="none"><defs><marker id="at2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={C.teal}/></marker></defs>
<path d="M 500 85 C 500 115 250 130 250 160" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 500 85 C 500 115 500 130 500 160" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 500 85 C 500 115 750 130 750 160" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 250 260 C 250 290 180 310 180 340" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 250 260 C 250 290 320 310 320 340" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 500 260 L 500 340" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
<path d="M 750 260 C 750 290 680 310 680 340" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#at2)"/>
</svg>
<div onClick={function(){setPage("detail");}} style={{position:"absolute",top:16,left:370,width:260,background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:"12px 14px",cursor:"pointer",zIndex:1}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><SI s={12}/><span style={{fontSize:9,fontWeight:500,color:C.tealDk}}>BUSINESS PLAN</span></div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:6}}>Enterprise Value Creation - FY26</div><div style={{display:"flex",gap:4}}><Pl c="green">{"\u2197"} ON TRACK</Pl><span style={{fontSize:10,color:C.gray,marginLeft:"auto"}}>4 strategies</span></div></div>
{[[120,160,"sp1"],[370,160,"sp2"],[620,160,"sp3"]].map(function(pos){var s=strategies.find(function(x){return x.id===pos[2];});if(!s)s=strategies[0];return(<div key={pos[2]} onClick={function(){setPage("detail");}} style={{position:"absolute",top:pos[1],left:pos[0],width:230,background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(s.sc==="green"?C.teal:C.amber),borderRadius:10,padding:"10px 12px",cursor:"pointer",zIndex:1}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><SI s={10}/><span style={{fontSize:9,fontWeight:500,color:C.tealDk}}>STRATEGIC PLAN</span><div style={{marginLeft:"auto"}}><Av i={s.owner} s={16} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div></div><div style={{fontSize:12,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:6}}>{s.t}</div><div style={{display:"flex",gap:4,marginBottom:6}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div><PB pct={s.progress}/></div>);})}
{[[100,340,"Reduce COGS tier-1","red","BLOCKER"],[260,340,"Price realization","green","ON TRACK"],[420,340,"EMEA market launch","green","ON TRACK"],[600,340,"Vendor consolidation","amber","BEHIND"]].map(function(c){return(<div key={c[2]} style={{position:"absolute",top:c[1],left:c[0],width:160,background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(c[3]==="red"?"#db2777":c[3]==="amber"?C.gold:"#db2777"),borderRadius:8,padding:"8px 10px",zIndex:1}}><div style={{display:"flex",alignItems:"center",gap:4,marginBottom:3}}><PI/><span style={{fontSize:8,fontWeight:500,color:C.pinkDk}}>PROJECT</span></div><div style={{fontSize:10,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:4}}>{c[2]}</div><Pl c={c[3]}>{c[4]}</Pl></div>);})}
</div>
</div>}


{page==="detail"&&<div>
<div style={{display:"flex",alignItems:"center",gap:8,fontSize:12,color:C.gray,paddingBottom:14,borderBottom:"1px solid "+C.border,marginBottom:14}}><span style={{cursor:"pointer",color:C.teal}} onClick={function(){setPage("cascade");}}>Strategy Map</span><span style={{color:"#b0bcc9"}}>/</span><span style={{color:C.navy,fontWeight:500}}>Expand gross margin by 300bps</span>{phase>=5&&<span onClick={reset} style={{marginLeft:"auto",color:C.teal,cursor:"pointer",fontSize:11,fontWeight:500}}>Replay demo</span>}</div>

<div onClick={function(){setPage("cascade");}} style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderLeft:"3px solid "+C.teal,borderRadius:8,padding:"8px 12px",marginBottom:14,display:"flex",alignItems:"center",gap:8,cursor:"pointer"}}><SI s={12}/><span style={{fontSize:11,fontWeight:500,color:C.tealDk}}>PARENT</span><span style={{fontSize:12,fontWeight:500,color:C.navy}}>Drive enterprise value creation - FY26</span><Pl c="green">{"\u2197"} ON TRACK</Pl></div>

<div style={{display:"flex",gap:12,marginBottom:14}}>
<div style={{width:200,flexShrink:0}}>
<Eye><svg width="12" height="12" viewBox="0 0 24 24"><path d="M2 22 L2 16 L7 16 L7 22 Z" fill={C.navy}/><path d="M9 22 L9 10 L14 10 L14 22 Z" fill={C.navy}/><path d="M16 22 L16 4 L21 4 L21 22 Z" fill="#0a1929"/></svg> Metrics</Eye>
{[{l:"Gross margin %",v:"39.8%",tg:"42.3%",p:62,tr:"\u2197 +80bps",tc:C.teal,src:"NetSuite",pts:[37.2,37.8,38.1,38.5,38.9,39.1,39.4,39.8]},{l:"COGS reduction",v:"-$3.2M",tg:"-$8M",p:40,tr:"\u2198 Behind",tc:C.amber,src:"SAP",pts:[0.5,0.9,1.2,1.8,2.1,2.5,2.9,3.2]},{l:"Price realization",v:"+1.4%",tg:"+2.1%",p:66,tr:"\u2197 On track",tc:C.teal,src:"Salesforce",pts:[0.3,0.5,0.7,0.8,1.0,1.1,1.3,1.4]}].map(function(m,idx){
var isExp=expMetric===idx;
var mx=Math.max.apply(null,m.pts);var mn=Math.min.apply(null,m.pts);
var sparkD=m.pts.map(function(pt,pi){return(pi===0?"M":"L")+" "+(pi/(m.pts.length-1)*110)+" "+(36-((pt-mn)/(mx-mn||1))*36);}).join(" ");
return(<div key={m.l} onClick={function(){setExpMetric(isExp?null:idx);}} style={{background:"#fff",border:"1px solid "+C.border,borderLeft:"3px solid "+C.navy,borderRadius:8,padding:9,marginBottom:5,cursor:"pointer",transition:"all 0.2s"}}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:10,color:C.gray}}>{m.l}</span><span style={{fontSize:8,color:C.tealDk,background:C.tealBg,padding:"1px 5px",borderRadius:3,fontWeight:500}}>External</span></div>
<div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:4}}><span style={{fontSize:16,fontWeight:500,color:C.navy}}>{m.v}</span><span style={{fontSize:9,color:C.gray}}>{"\u2192"} {m.tg}</span></div>
<PB pct={m.p} h={3} color={m.tc}/>
<div style={{display:"flex",justifyContent:"space-between",fontSize:9,marginTop:4}}><span style={{color:m.tc===C.amber?C.amber:C.green,fontWeight:500}}>{m.tr}</span><span style={{color:C.gray}}>{m.src}</span></div>
<div style={{overflow:"hidden",maxHeight:isExp?80:0,opacity:isExp?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{paddingTop:8,borderTop:"1px solid "+C.subtle,marginTop:6}}><div style={{fontSize:9,color:C.gray,marginBottom:4}}>8-week trend</div>
<svg width="110" height="40" style={{display:"block"}}><path d={sparkD} fill="none" stroke={m.tc===C.amber?C.amber:C.teal} strokeWidth="2" strokeLinecap="round"/><circle cx="110" cy={36-((m.pts[m.pts.length-1]-mn)/(mx-mn||1))*36} r="3" fill={m.tc===C.amber?C.amber:C.teal}/></svg>
</div></div>
</div>);})}

<div style={{marginTop:10}}>
<Eye><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M10 2 L14 2 L14 6 L18 6 L18 10 L22 10 L22 14 L18 14 L18 18 L14 18 L14 22 L10 22 L10 18 L6 18 L6 14 L2 14 L2 10 L6 10 L6 6 L10 6 Z" stroke="currentColor" strokeWidth="1.5"/></svg> External links</Eye>
{[["Q1 Margin Analysis","Google Sheets","2d ago"],["Pricing Model v3","Confluence","5d ago"]].map(function(el){return(<div key={el[0]} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:9,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:11,color:C.navy,fontWeight:500}}>{el[0]}</div><div style={{fontSize:9,color:C.gray}}>{el[1]} . {el[2]}</div></div>);})}
<div style={{padding:"6px 0",fontSize:10,color:C.teal,fontWeight:500,cursor:"pointer"}}>+ Add link</div>
</div>
</div>

<div style={{flex:"1 1 0",minWidth:0}}>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden",boxShadow:pulse?"0 0 0 3px rgba(14,178,175,0.3)":"0 2px 6px rgba(31,71,106,0.08)",transition:"box-shadow 1s"}}>
<div style={{background:C.navy,padding:"10px 14px",display:"flex",alignItems:"center",gap:10}}><TML s={16}/><span style={{fontSize:11,fontWeight:500,letterSpacing:1,color:"#fff",textTransform:"uppercase"}}>Strategic Plan</span></div>
<div style={{padding:16}}>
<div style={{display:"flex",gap:5,marginBottom:10,flexWrap:"wrap"}}><Pl c="navy">OPERATIONAL</Pl><Pl c="teal">Q1 2026</Pl><Pl c="amber" hide={!showRisk}>{"\u25B3"} RISK</Pl><Pl c="green">{"\u2197"} ON TRACK</Pl></div>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:20,fontWeight:500,color:C.navy,lineHeight:1.2,letterSpacing:"-0.02em",marginBottom:10}}>Expand gross margin by 300bps</div>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.6,marginBottom:12}}>Drive 300 basis points of gross margin expansion across tier-1 product lines through COGS reduction, price realization, and channel mix optimization.</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
<div style={{background:C.bg2,borderRadius:6,padding:"8px 10px",display:"flex",alignItems:"center",gap:8}}><Av i="JT" s={28}/><div><div style={{fontSize:9,color:C.gray}}>Owner</div><div style={{fontSize:12,fontWeight:500,color:C.navy}}>Joe Thompson</div></div></div>
<div style={{background:C.bg2,borderRadius:6,padding:"8px 10px"}}><div style={{fontSize:9,color:C.gray}}>Dates</div><div style={{fontSize:12,fontWeight:500,color:C.navy}}>Jan 6 - Mar 31, 2026</div></div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,padding:10,background:C.bg2,borderRadius:8,marginBottom:12}}>
<div><div style={{fontSize:9,color:C.gray,marginBottom:1}}>Impact</div><div style={{fontSize:14,fontWeight:500,color:C.navy}}>$24M</div></div>
<div><div style={{fontSize:9,color:C.gray,marginBottom:1}}>Progress</div><div style={{fontSize:14,fontWeight:500,color:C.navy}}><Odo value={progress} suffix="%" dur={1.6}/></div></div>
<div><div style={{fontSize:9,color:C.gray,marginBottom:1}}>Actions</div><div style={{fontSize:14,fontWeight:500,color:C.navy}}><Odo value={actionCount} suffix=" open" dur={1.4}/></div></div>
<div><div style={{fontSize:9,color:C.gray,marginBottom:1}}>Review in</div><div style={{fontSize:14,fontWeight:500,color:phase>=4?C.green:C.amber,transition:"color 1s"}}><Odo value={phase>=4?9:11} suffix=" days" dur={1.4}/></div></div>
</div>
<PB pct={progress} h={6}/>
</div></div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden",marginTop:10}}>
<div style={{padding:"9px 14px",borderBottom:"1px solid "+C.subtle,display:"flex",alignItems:"center",gap:8}}><TM v="a" s={16}/><span style={{fontSize:11,fontWeight:500,color:C.navy}}>Ask TARGA</span></div>
<div ref={chatRef} style={{minHeight:80,maxHeight:180,overflow:"auto",padding:"10px 14px"}}>
{msgs.length===0&&<div style={{textAlign:"center",padding:"12px 8px",color:"#8b99a8",fontSize:11}}>Ask anything about this strategic plan.</div>}
{msgs.map(function(m,i){return(<div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",marginBottom:8}}><div style={{maxWidth:"82%",padding:"8px 12px",borderRadius:m.role==="user"?"12px 12px 4px 12px":"12px 12px 12px 4px",background:m.role==="user"?C.navy:C.tealBg,color:m.role==="user"?"#fff":C.navy,fontSize:12,lineHeight:1.5}}>{m.text}</div></div>);})}
{chatLoading&&<div style={{display:"flex",gap:4,padding:"6px 0"}}>{[0,1,2].map(function(i){return(<div key={i} style={{width:7,height:7,borderRadius:"50%",background:C.teal,opacity:0.4,animation:"pu 1s ease "+(i*0.15)+"s infinite"}}/>);})}</div>}
</div>
<div style={{padding:"8px 14px 10px",borderTop:"1px solid "+C.subtle,display:"flex",gap:8}}><input value={chatIn} onChange={function(e){setChatIn(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter")sendChat();}} placeholder="Ask about this strategy..." style={{flex:1,padding:"8px 12px",border:"1px solid "+C.border,borderRadius:8,fontSize:12,color:C.navy,outline:"none",background:C.bg2,fontFamily:"inherit"}}/><div onClick={sendChat} style={{width:36,height:36,background:C.teal,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M12 5 L19 12 L12 19" stroke="#fff" strokeWidth="2"/></svg></div></div>
</div>
</div>

<div style={{width:230,flexShrink:0}}>
<Eye><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 5 L12 5 L20 12 L12 19 L3 19 L11 12 Z" fill="#d49a0f"/><path d="M7 9 L12 9 L15 12 L12 15 L7 15 L10 12 Z" fill="#6c5006"/></svg> Actions <span style={{color:C.gray,fontWeight:400}}>. <Odo value={actionCount} dur={1.4}/></span></Eye>

<div style={{overflow:"hidden",maxHeight:showBlocker?300:0,opacity:showBlocker?1:0,marginBottom:showBlocker?5:0,transition:"max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s, margin 0.9s"}}>
<div style={{background:completed?C.teal:C.white,border:"1px solid "+(completed?C.teal:C.border),borderLeft:"3px solid "+(completed?C.teal:C.red),borderRadius:8,padding:9,transition:"all 0.3s"}}><div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:6,marginBottom:5}}><span style={{fontSize:11,fontWeight:500,color:completed?"#fff":C.navy,lineHeight:1.3,transition:"color 0.3s"}}>Approve pricing model</span>{!completed&&<Pl c="red">BLOCKER</Pl>}{completed&&<div style={{width:20,height:20,borderRadius:"50%",background:"rgba(255,255,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}><Chk/></div>}</div><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:completed?0:8}}><Av i="JT" bg={C.gold} fg={C.navy} s={16}/><span style={{fontSize:9,color:completed?"rgba(255,255,255,0.8)":C.red,fontWeight:500}}>{completed?"Done":"Overdue"}</span></div>{!completed&&<div onClick={fire} style={{padding:"8px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:11,fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><Chk/> Mark complete</div>}</div>
</div>

{[{t:"Review Q1 margin variance",i:"KM",bg:C.teal,fg:"#fff",d:"Apr 22",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Quarterly margin variance review with finance. Compare actual performance against 300bps target.",subs:["Pull NetSuite actuals","Prepare variance bridge","Schedule finance sync"]},
{t:"Interview channel partners",i:"SD",bg:C.navy,fg:"#fff",d:"May 1",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Conduct interviews with three key channel partners to assess mix optimization opportunities.",subs:["Schedule partner A","Schedule partner B","Schedule partner C"]},
{t:"Validate supplier scope",i:"MS",bg:C.navy,fg:"#fff",d:"May 8",s:"AT RISK",sc:"amber",bc:"#d49a0f",desc:"Define scope for supplier contract renegotiations targeting tier-1 COGS reduction.",subs:["Identify top 5 suppliers","Set target reduction %","Draft negotiation brief"]}
].map(function(a){var isSel=selAction&&selAction.t===a.t;return(<div key={a.t}>
<div onClick={function(){setSelAction(isSel?null:a);}} style={{background:"#fff",border:"1px solid "+C.border,borderLeft:"3px solid "+a.bc,borderRadius:8,padding:9,marginBottom:5,cursor:"pointer",transition:"transform 0.15s"}}>
<div style={{fontSize:11,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{a.t}</div>
<div style={{display:"flex",alignItems:"center",gap:5}}><Av i={a.i} bg={a.bg} fg={a.fg} s={16}/><span style={{fontSize:9,color:C.gray}}>{a.d}</span><span style={{marginLeft:"auto"}}><Pl c={a.sc}>{a.s}</Pl></span></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSel?300:0,opacity:isSel?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginBottom:5,marginTop:-3}}>
<div style={{fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:8}}>{a.desc}</div>
<div style={{fontSize:9,fontWeight:500,letterSpacing:1,color:C.gray,textTransform:"uppercase",marginBottom:6}}>Subtasks</div>
{a.subs.map(function(sub,si){return(<div key={si} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:si<a.subs.length-1?"1px solid "+C.subtle:"none"}}><div style={{width:14,height:14,border:"1.5px solid "+C.border,borderRadius:3}}/><span style={{fontSize:11,color:C.navy}}>{sub}</span></div>);})}
<div style={{display:"flex",gap:6,marginTop:8}}><div style={{flex:1,padding:"6px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:10,fontWeight:500}}>Mark complete</div><div onClick={function(e){e.stopPropagation();setSelAction(null);}} style={{padding:"6px 10px",border:"1px solid "+C.border,borderRadius:6,fontSize:10,color:C.gray}}>Close</div></div>
</div></div>
</div>);})}

<div onClick={function(){setShowAddAction(!showAddAction);}} style={{padding:"6px 0",fontSize:10,color:C.teal,fontWeight:500,cursor:"pointer",marginTop:4}}>+ Add action</div>
<div style={{overflow:"hidden",maxHeight:showAddAction?200:0,opacity:showAddAction?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginTop:4}}>
<input placeholder="Action title..." style={{width:"100%",padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:11,color:C.navy,outline:"none",marginBottom:6,fontFamily:"inherit",boxSizing:"border-box"}}/>
<div style={{display:"flex",gap:6}}><input placeholder="Owner" style={{flex:1,padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:11,outline:"none",fontFamily:"inherit"}}/><input placeholder="Due date" style={{flex:1,padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:11,outline:"none",fontFamily:"inherit"}}/></div>
<div onClick={function(){setShowAddAction(false);}} style={{marginTop:6,padding:"6px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:10,fontWeight:500,cursor:"pointer"}}>Add</div>
</div></div>

<div style={{marginTop:10}}><Eye><TM s={14}/> Intelligence</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:8,padding:8}}>
{[{t:"COGS reduction behind target",d:"Blocker on tier-1 lines. Review with Mark.",detail:"The COGS initiative is at $3.2M against $8M target (40%). Mark flagged a blocker on supplier renegotiation.",act:"Open COGS reduction"},
{t:"EMEA pricing dependency",d:"Cross-dependency detected.",detail:"The EMEA pricing initiative has a cross-dependency with your price realization metric. If EMEA changes, your +2.1% target may need revision.",act:"View dependency"},
{t:"2 external signals",d:"Supply chain headwind Q2.",detail:"TARGA detected 2 industry signals indicating potential raw material cost increases in Q2.",act:"View signals"}
].map(function(sg,si){
var isFirst=si===0;
var isExpS=expSug===si;
if(isFirst){return(<div key={si} style={{position:"relative"}}>
<div style={{opacity:phase>=5?0:1,maxHeight:phase>=5?0:200,transition:"opacity 0.8s, max-height 0.8s",overflow:"hidden"}}><div onClick={function(){setExpSug(isExpS?null:si);}} style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:10,fontWeight:500,color:C.navy,marginBottom:2}}>{sg.t}</div><div style={{fontSize:9,color:C.gray}}>{sg.d}</div>
<div style={{overflow:"hidden",maxHeight:isExpS&&phase<5?120:0,opacity:isExpS&&phase<5?1:0,transition:"max-height 0.3s, opacity 0.25s"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:9,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:9,fontWeight:500}}>{sg.act}</div></div>
</div></div>
<div style={{opacity:phase>=5?1:0,maxHeight:phase>=5?200:0,transition:"opacity 0.8s 0.2s, max-height 0.8s",overflow:"hidden"}}><div style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4}}><div style={{fontSize:10,fontWeight:500,color:C.green,marginBottom:2}}>{"\u2713"} Blocker resolved</div><div style={{fontSize:9,color:C.gray}}>Progress 54% {"\u2192"} 62%.</div></div></div>
</div>);}
return(<div key={si} onClick={function(){setExpSug(isExpS?null:si);}} style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:10,fontWeight:500,color:C.navy,marginBottom:2}}>{sg.t}</div><div style={{fontSize:9,color:C.gray}}>{sg.d}</div>
<div style={{overflow:"hidden",maxHeight:isExpS?120:0,opacity:isExpS?1:0,transition:"max-height 0.3s, opacity 0.25s"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:9,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{display:"flex",gap:4}}><div style={{flex:1,padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:9,fontWeight:500}}>{sg.act}</div><div onClick={function(e){e.stopPropagation();setExpSug(null);}} style={{padding:"5px 8px",border:"1px solid "+C.border,borderRadius:4,fontSize:9,color:C.gray}}>Dismiss</div></div></div>
</div>);})}
</div></div>
{phase>=5&&<div style={{marginTop:8,background:C.greenBg,border:"1px solid #a7f3d0",borderRadius:8,padding:10,animation:"fu 0.4s ease"}}><div style={{fontSize:9,fontWeight:500,color:C.green,textTransform:"uppercase",marginBottom:4}}>Cascade impact</div><div style={{fontSize:10,color:"#065f46",lineHeight:1.5}}>Unblocked price realization. Removed 1 risk. Progress 54% {"\u2192"} 62%.</div></div>}
</div>
</div>

<Eye><PI/> Child items <span style={{color:C.gray,fontWeight:400}}>. 3</span></Eye>
<div style={{display:"flex",gap:8,marginBottom:14}}>
{[{t:"Reduce COGS tier-1",s:phase>=4?"AT RISK":"BLOCKER",sc:phase>=4?"amber":"red",av:"KM",desc:"Renegotiate tier-1 supplier contracts to reduce COGS by $8M.",prog:40},
{t:"Price realization",s:phase>=4?"ON TRACK":"BLOCKED",sc:phase>=4?"green":"amber",av:"SD",desc:"Implement pricing adjustments across product lines for +2.1% realization.",prog:66},
{t:"Channel mix optimization",s:"BEHIND",sc:"amber",av:"MS",desc:"Optimize channel partner mix to improve margin contribution.",prog:28}
].map(function(ch,ci){var isSC=selChild===ci;return(<div key={ch.t} style={{flex:1}}>
<div onClick={function(){setSelChild(isSC?null:ci);}} style={{background:"#fff",border:"1px solid "+C.border,borderLeft:"3px solid #db2777",borderRadius:8,padding:9,cursor:"pointer",transition:"all 0.2s"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}><PI/><span style={{fontSize:9,fontWeight:500,color:C.pinkDk}}>PROJECT</span></div>
<div style={{fontSize:11,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{ch.t}</div>
<div style={{display:"flex",alignItems:"center",transition:"all 0.8s"}}><Pl c={ch.sc}>{ch.s}</Pl><div style={{marginLeft:"auto"}}><Av i={ch.av} bg={C.navy} fg="#fff" s={16}/></div></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSC?150:0,opacity:isSC?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginTop:4}}>
<div style={{fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{ch.desc}</div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:10,marginBottom:4}}><span style={{color:C.gray}}>Progress</span><span style={{fontWeight:500,color:C.navy}}>{ch.prog}%</span></div>
<PB pct={ch.prog}/>
<div onClick={function(){setSelChild(null);setPage("detail");}} style={{marginTop:6,padding:"5px 0",border:"1px solid "+C.border,borderRadius:6,textAlign:"center",fontSize:10,color:C.teal,fontWeight:500,cursor:"pointer"}}>Open item</div>
</div></div>
</div>);})}
</div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden"}}>
<div style={{display:"flex",borderBottom:"1px solid "+C.border}}>
{["Comments","Attachments","History","Hierarchy","Relationships"].map(function(t){return(<div key={t} onClick={function(){setBTab(t);}} style={{flex:1,padding:"10px 0",textAlign:"center",fontSize:11,fontWeight:bTab===t?500:400,color:bTab===t?C.teal:C.gray,borderBottom:bTab===t?"2px solid "+C.teal:"2px solid transparent",cursor:"pointer",transition:"all 0.2s"}}>{t}</div>);})}
</div>
<div style={{padding:16,minHeight:160}}>
{bTab==="Comments"&&<div>
{[{i:"JT",bg:C.gold,n:"Joe Thompson",t:"2d ago",m:"Make sure pricing is approved before board review. Critical path."},{i:"KM",bg:C.teal,n:"Kyle Moyer",t:"2d ago",m:"Agreed. Finance sync scheduled Thursday."},{i:"MS",bg:C.red,n:"Mark Sternberger",t:"5h ago",m:"Supplier negotiations taking longer. May need to escalate."}].map(function(c,idx){return(<div key={idx} style={{display:"flex",gap:10,marginBottom:14}}><Av i={c.i} bg={c.bg} fg={c.bg===C.gold?C.navy:"#fff"} s={28}/><div style={{flex:1}}><div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}}><span style={{fontSize:12,fontWeight:500,color:C.navy}}>{c.n}</span><span style={{fontSize:10,color:"#8b99a8"}}>{c.t}</span></div><div style={{fontSize:13,color:"#4a5868",lineHeight:1.6}}>{c.m}</div></div></div>);})}
<div style={{display:"flex",gap:8,marginTop:12,paddingTop:12,borderTop:"1px solid "+C.subtle}}><div style={{flex:1,background:C.bg2,borderRadius:8,padding:"10px 12px",fontSize:12,color:"#8b99a8"}}>Add a comment...</div><div style={{padding:"10px 16px",background:C.teal,color:"#fff",borderRadius:8,fontSize:12,fontWeight:500,cursor:"pointer"}}>Send</div></div>
</div>}

{bTab==="Attachments"&&<div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
{[["Q1 Margin Analysis.xlsx","12 KB . Kyle Moyer . Apr 10"],["Pricing Model v3.pdf","2.4 MB . Joe Thompson . Apr 5"],["Supplier Terms Draft.docx","340 KB . Mark Sternberger . Apr 2"]].map(function(arr){return(<div key={arr[0]} style={{background:C.bg2,borderRadius:8,padding:12,cursor:"pointer"}}><div style={{width:32,height:32,background:C.navyLt,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" stroke={C.navy} strokeWidth="1.5"/><path d="M14 3 L14 8 L19 8" stroke={C.navy} strokeWidth="1.5"/></svg></div><div style={{fontSize:12,fontWeight:500,color:C.navy,marginBottom:3}}>{arr[0]}</div><div style={{fontSize:10,color:C.gray}}>{arr[1]}</div></div>);})}
</div>
<div style={{marginTop:12,padding:"10px 0",border:"1px dashed "+C.border,borderRadius:8,textAlign:"center",fontSize:11,color:C.gray,cursor:"pointer"}}>+ Attach file</div>
</div>}

{bTab==="History"&&<div>
{[{i:"MS",bg:C.red,fg:"#fff",n:"Mark S.",a:"flagged blocker on COGS",t:"2h ago"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"updated margin target",t:"Yesterday"},{i:"KM",bg:C.teal,fg:"#fff",n:"Kyle M.",a:"added action Review Q1 margin",t:"2d ago"},{i:"",bg:"#eaf0f6",fg:C.navy,n:"",a:"Gross margin synced from NetSuite",t:"Today"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"changed status to At Risk",t:"Apr 10"},{i:"KM",bg:C.teal,fg:"#fff",n:"Kyle M.",a:"created this strategic plan",t:"Mar 28"}].map(function(e,idx){return(<div key={idx} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:idx<5?"1px solid #f0f3f6":"none"}}><Av i={e.i} bg={e.bg} fg={e.fg} s={22}/><div style={{fontSize:12,lineHeight:1.5}}>{e.n&&<span style={{fontWeight:500}}>{e.n} </span>}<span style={{color:C.gray}}>{e.a}</span><span style={{fontSize:10,color:"#8b99a8",marginLeft:8}}>{e.t}</span></div></div>);})}
</div>}

{bTab==="Hierarchy"&&<div style={{position:"relative",paddingLeft:20}}>
<div style={{position:"absolute",left:8,top:10,bottom:10,width:1.5,background:C.teal,opacity:0.4}}/>
{[{t:"Drive enterprise value - FY26",label:"PARENT",lc:C.tealDk,s:"ON TRACK",sc:"green",hl:false},{t:"Expand gross margin by 300bps",label:"CURRENT",lc:C.tealDk,hl:true},{t:"Reduce COGS tier-1",label:"CHILD",lc:C.pinkDk,s:phase>=4?"AT RISK":"BLOCKER",sc:phase>=4?"amber":"red",hl:false},{t:"Price realization",label:"CHILD",lc:C.pinkDk,s:phase>=4?"ON TRACK":"BLOCKED",sc:phase>=4?"green":"amber",hl:false},{t:"Channel mix optimization",label:"CHILD",lc:C.pinkDk,s:"BEHIND",sc:"amber",hl:false}].map(function(n,idx){return(<div key={idx} style={{marginBottom:6,position:"relative"}}><div style={{position:"absolute",left:-16,top:10,width:7,height:7,borderRadius:"50%",background:C.teal,opacity:n.hl?1:0.5}}/><div style={{background:n.hl?"#fff":n.label==="PARENT"?C.tealBg:"#fff",border:(n.hl?"2px":"1px")+" solid "+(n.hl?C.teal:n.label==="PARENT"?C.tealBd:C.border),borderRadius:8,padding:"7px 12px",display:"flex",alignItems:"center",gap:8,transition:"all 0.8s",cursor:"pointer"}}>{n.label==="PARENT"||n.label==="CURRENT"?<SI s={11}/>:<PI/>}<div style={{flex:1,minWidth:0}}><div style={{fontSize:11,fontWeight:500,color:C.navy,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{n.t}</div><div style={{fontSize:9,color:n.lc}}>{n.label}</div></div>{n.s&&<Pl c={n.sc}>{n.s}</Pl>}</div></div>);})}
</div>}

{bTab==="Relationships"&&<div>
<div style={{fontSize:12,color:"#4a5868",marginBottom:12}}>Cross-dependencies and linked items.</div>
<div style={{background:C.bg2,borderRadius:8,padding:12,marginBottom:8,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}><div style={{width:32,height:32,background:C.tealBg,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}><SI s={14}/></div><div style={{flex:1}}><div style={{fontSize:12,fontWeight:500,color:C.navy}}>Accelerate revenue growth</div><div style={{fontSize:10,color:C.gray}}>EMEA pricing impacts price realization</div></div><div style={{fontSize:9,color:C.tealDk,background:C.tealBg,border:"1px solid "+C.tealBd,padding:"3px 8px",borderRadius:12,fontWeight:500}}>DEPENDS ON</div></div>
<div style={{background:C.bg2,borderRadius:8,padding:12,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}><div style={{width:32,height:32,background:C.amberBg,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 5 L12 5 L20 12 L12 19 L3 19 L11 12 Z" fill="#d49a0f"/></svg></div><div style={{flex:1}}><div style={{fontSize:12,fontWeight:500,color:C.navy}}>FY26 Board Review - Q1</div><div style={{fontSize:10,color:C.gray}}>Requires gross margin update</div></div><div style={{fontSize:9,color:C.amber,background:C.amberBg,border:"1px solid rgba(217,119,6,0.2)",padding:"3px 8px",borderRadius:12,fontWeight:500}}>MILESTONE</div></div>
</div>}
</div>
</div>
</div>}

{page==="dashboard"&&<div>
<PH eyebrow="Executive view" title="Strategic Health Dashboard" right={<div style={{fontSize:11,color:C.gray}}>FY26 Q1 . Updated today</div>}/>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:24}}>
<StatCard label="Overall confidence" value="69%" sub={"\u2197 +2% this month"} subColor={C.green}/>
<StatCard label="Strategic plans" value="4" sub="3 on track, 1 behind"/>
<StatCard label="Active blockers" value="3" color={C.red} sub="2 overdue" subColor={C.red}/>
<StatCard label="Value at stake" value="$48M" sub="EBITDA impact"/>
</div>
<div style={{display:"flex",gap:16}}>
<div style={{flex:1}}>
<Eye>Strategy health matrix</Eye>
{strategies.map(function(s){return(<div key={s.id} onClick={function(){setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:14,marginBottom:10,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{width:8,height:8,borderRadius:"50%",background:s.sc==="green"?C.green:C.amber}}/><div style={{flex:1,fontSize:14,fontWeight:500,color:C.navy}}>{s.t}</div><Av i={s.owner} s={20} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
<div style={{display:"flex",gap:16,marginBottom:8}}><div><div style={{fontSize:9,color:C.gray}}>Progress</div><div style={{fontSize:16,fontWeight:500,color:C.navy}}>{s.progress}%</div></div><div><div style={{fontSize:9,color:C.gray}}>Impact</div><div style={{fontSize:16,fontWeight:500,color:C.navy}}>{s.impact}</div></div><div style={{marginLeft:"auto",display:"flex",gap:4}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div></div>
<PB pct={s.progress}/>
</div>);})}
</div>
<div style={{width:280,flexShrink:0}}>
<Eye><TM s={14}/> AI executive summary</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:12}}>
<div style={{fontSize:12,color:C.navy,lineHeight:1.6,marginBottom:10}}>Three of four plans on track. OpEx dropped 7 confidence points due to vendor blockers. Gross margin has an overdue pricing approval. Recommend escalating both before board review.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:6,padding:8,fontSize:11}}><span style={{fontWeight:500,color:C.red}}>Priority:</span> <span style={{color:C.navy}}>Resolve pricing approval and vendor blockers in 11 days.</span></div>
</div>
<Eye>Confidence trend</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:12}}>
{boardItems.map(function(b){return(<div key={b.t} style={{marginBottom:12}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:11,fontWeight:500,color:C.navy}}>{b.t}</span><span style={{fontSize:14,fontWeight:500,color:b.status==="green"?C.green:C.red}}>{b.conf}%</span></div><PB pct={b.conf} color={b.status==="green"?C.green:C.red}/><div style={{fontSize:10,color:b.conf>b.prev?C.green:C.red,marginTop:3}}>{b.conf>b.prev?"\u2197":"\u2198"} {Math.abs(b.conf-b.prev)} pts vs last week</div></div>);})}
</div>
</div>
</div>
</div>}

{page==="pulse"&&<div>
<PH eyebrow="Board pulse" title="Q1 FY26 Board Digest" right={<div style={{display:"flex",alignItems:"center",gap:8}}><TM s={16}/><span style={{fontSize:11,color:C.tealDk,fontWeight:500}}>AI-generated . Read-only</span></div>}/>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:20}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:8}}>Executive summary</div>
<div style={{fontSize:14,color:"#4a5868",lineHeight:1.8,marginBottom:16}}>Enterprise value creation is progressing with three of four strategic plans on track. Combined EBITDA impact across all plans is $48M. Overall confidence sits at 69%, up 2 points month-over-month. The primary risk area is operational efficiency, which has declined 7 confidence points due to vendor delivery delays. Gross margin expansion is tracking to target but has an overdue pricing approval that requires board awareness.</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
<StatCard label="Overall confidence" value="69%" sub={"\u2197 +2% MoM"} subColor={C.green}/>
<StatCard label="Plans on track" value="3 of 4" sub="1 behind"/>
<StatCard label="Value at stake" value="$48M" sub="Combined EBITDA"/>
</div>
</div>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:12}}>Confidence by initiative</div>
{boardItems.map(function(b){return(<div key={b.t} style={{background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(b.status==="green"?C.green:C.red),borderRadius:10,padding:16,marginBottom:10}}>
<div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}><div style={{fontSize:15,fontWeight:500,color:C.navy,flex:1}}>{b.t}</div><Av i={b.owner} s={22} bg={b.owner==="JT"?C.gold:b.owner==="MS"?C.red:C.navy} fg={b.owner==="JT"?C.navy:"#fff"}/><div style={{textAlign:"right"}}><div style={{fontSize:24,fontWeight:500,color:b.status==="green"?C.green:C.red}}>{b.conf}%</div><div style={{fontSize:10,color:b.conf>b.prev?C.green:C.red}}>{b.conf>b.prev?"\u2197 +":"\u2198 "}{Math.abs(b.conf-b.prev)} pts</div></div></div>
<PB pct={b.conf} color={b.status==="green"?C.green:C.red} h={6}/>
<div style={{fontSize:12,color:"#4a5868",lineHeight:1.6,marginTop:10}}>{b.note}</div>
</div>);})}
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:20,marginTop:16}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:10}}>AI pattern detection</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
<div style={{background:C.amberBg,borderRadius:8,padding:12}}><div style={{fontSize:11,fontWeight:500,color:C.amber,marginBottom:4}}>Vendor dependency risk</div><div style={{fontSize:11,color:"#92400e",lineHeight:1.5}}>Two plans have vendor blockers. Cross-plan consolidation may reduce exposure.</div></div>
<div style={{background:C.greenBg,borderRadius:8,padding:12}}><div style={{fontSize:11,fontWeight:500,color:C.green,marginBottom:4}}>Revenue momentum building</div><div style={{fontSize:11,color:"#065f46",lineHeight:1.5}}>Revenue confidence up 3 consecutive weeks. Pipeline is 1.4x target.</div></div>
<div style={{background:C.redBg,borderRadius:8,padding:12}}><div style={{fontSize:11,fontWeight:500,color:C.red,marginBottom:4}}>Approval bottleneck detected</div><div style={{fontSize:11,color:"#7f1d1d",lineHeight:1.5}}>3 actions pending executive approval. Average delay 4 days.</div></div>
<div style={{background:C.tealBg,borderRadius:8,padding:12}}><div style={{fontSize:11,fontWeight:500,color:C.tealDk,marginBottom:4}}>Talent plan ahead of pace</div><div style={{fontSize:11,color:C.tealDk,lineHeight:1.5}}>Hiring 20% ahead of forecast. Front-load onboarding support.</div></div>
</div>
</div>
</div>}

</div>
</div>
);
}
