"use client";
import { useState, useRef, useEffect } from "react";

var C = { navy: "#1f476a", teal: "#0eb2af", gold: "#fbbf24", gray: "#6b7a8a", light: "#f4f7fa", white: "#fff", border: "#d6dee6", subtle: "#e6ecf2", bg2: "#f4f6f8", tealBg: "#e6f7f7", tealBd: "#b8e8e7", tealDk: "#076c69", green: "#059669", greenBg: "#ecfdf5", amber: "#d97706", amberBg: "#fef3c7", red: "#dc2626", redBg: "#fef2f2", navyLt: "#dde6ef", pinkDk: "#8a3560" };

function TML(p){var s=p.s||18;return(<svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/></svg>);}
function TM(p){var v=p.v||"i",s=p.s||16;return(<svg width={s} height={s} viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={v==="a"?C.gold:C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg>);}
function SI(p){var s=p.s||11;return(<svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 3 L21 20 L3 20 Z" fill={C.teal} fillOpacity="0.2"/><path d="M12 8 L18 18 L6 18 Z" fill={C.teal}/><circle cx="12" cy="3" r="1.5" fill={C.gold}/></svg>);}
function PI(p){var s=p&&p.s?p.s:10;return(<svg width={s} height={s} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" fill="#db2777" fillOpacity="0.2"/><rect x="3" y="8" width="18" height="4" rx="2" fill="#db2777"/><rect x="7" y="4" width="10" height="5" rx="1.5" fill="#db2777"/></svg>);}
function AI(p){var s=p&&p.s?p.s:11;return(<svg width={s} height={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill={C.gold} fillOpacity="0.22"/><path d="M10 7 L16 12 L10 17 Z" fill={C.navy}/></svg>);}
function MI(p){var s=p&&p.s?p.s:11;return(<svg width={s} height={s} viewBox="0 0 24 24"><rect x="3" y="14" width="4" height="7" rx="1" fill={C.navy} fillOpacity="0.4"/><rect x="10" y="9" width="4" height="12" rx="1" fill={C.navy} fillOpacity="0.7"/><rect x="17" y="3" width="4" height="18" rx="1" fill={C.navy}/><circle cx="19" cy="4" r="1.5" fill={C.teal}/></svg>);}
function TI(p){var s=p&&p.s?p.s:11;return(<svg width={s} height={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill={C.navy} fillOpacity="0.12"/><circle cx="12" cy="12" r="9" fill="none" stroke={C.navy} strokeWidth="1.6"/><path d="M12 7 L12 12 L15 14" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="12" cy="12" r="1" fill={C.gold}/></svg>);}
function XI(p){var s=p&&p.s?p.s:11;return(<svg width={s} height={s} viewBox="0 0 24 24"><rect x="3" y="7" width="13" height="13" rx="2" fill={C.teal} fillOpacity="0.18"/><rect x="3" y="7" width="13" height="13" rx="2" fill="none" stroke={C.teal} strokeWidth="1.6"/><path d="M13 3 L21 3 L21 11" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M13 11 L21 3" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>);}
function Av(p){var i=p.i,bg=p.bg||C.gold,fg=p.fg||C.navy,s=p.s||22;return(<div style={{width:s,height:s,borderRadius:"50%",background:bg,fontSize:s*0.43,color:fg,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600,flexShrink:0}}>{i}</div>);}
function Pl(p){var c=p.c||"green",hide=p.hide||false;var m={green:{color:C.green,background:C.greenBg},amber:{color:C.amber,background:C.amberBg},red:{color:C.red,background:C.redBg},navy:{color:C.navy,background:C.navyLt},teal:{color:C.tealDk,background:C.tealBg}};var s=m[c]||m.green;return(<span style={{fontSize:12,fontWeight:500,padding:"3px 8px",borderRadius:4,letterSpacing:0.3,whiteSpace:"nowrap",opacity:hide?0:1,transform:hide?"scale(0.8)":"scale(1)",transition:"opacity 0.8s, transform 0.8s",color:s.color,background:s.background}}>{p.children}</span>);}
function Eye(p){return(<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:8,display:"flex",alignItems:"center",gap:6}}>{p.children}</div>);}
function Chk(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);}
function OdoDigit(p){var d=p.d,dur=p.dur||1.4;return(<span style={{display:"inline-block",height:"1.15em",width:"0.62em",overflow:"hidden",position:"relative",verticalAlign:"bottom"}}><span style={{display:"block",transition:"transform "+dur+"s cubic-bezier(0.23,1,0.32,1)",transform:"translateY("+(-d*1.15)+"em)"}}>{"0123456789".split("").map(function(n,j){return(<span key={j} style={{display:"block",height:"1.15em",textAlign:"center",lineHeight:"1.15em"}}>{n}</span>);})}</span></span>);}
function Odo(p){var value=p.value,suffix=p.suffix||"",dur=p.dur||1.4;var str=String(value).padStart(2,"\u2007");return(<span style={{display:"inline-flex",alignItems:"baseline"}}>{str.split("").map(function(ch,i){if(ch.match(/\d/))return(<OdoDigit key={"p"+i} d={parseInt(ch)} dur={dur+i*0.12}/>);if(ch==="\u2007")return(<span key={"p"+i} style={{display:"inline-block",width:"0.62em"}}/>);return(<span key={"p"+i}>{ch}</span>);})}{suffix?<span style={{marginLeft:1}}>{suffix}</span>:null}</span>);}
function StatCard(p){return(<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"16px 18px"}}><div style={{fontSize:12,color:C.gray,marginBottom:4}}>{p.label}</div><div style={{fontSize:26,fontWeight:500,color:p.color||C.navy,letterSpacing:"-0.02em"}}>{p.value}</div>{p.sub&&<div style={{fontSize:13,color:p.subColor||C.green,fontWeight:500,marginTop:4}}>{p.sub}</div>}</div>);}
function Logo(p){var s=p.s||18;var k=p.k;var maps={netsuite:{bg:"#125ca4",fg:"#fff",t:"N"},sap:{bg:"#0070c0",fg:"#fff",t:"SAP"},sf:{bg:"#00a1e0",fg:"#fff",t:"sf"},gs:{bg:"#0f9d58",fg:"#fff",t:"G"},conf:{bg:"#0052cc",fg:"#fff",t:"C"}};var m=maps[k]||maps.netsuite;return(<div style={{width:s,height:s,borderRadius:4,background:m.bg,color:m.fg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*(m.t.length>1?0.4:0.55),fontWeight:700,flexShrink:0,letterSpacing:m.t.length>1?"-0.03em":"0"}}>{m.t}</div>);}
function PB(p){return(<div style={{height:p.h||5,background:"#e6ecf2",borderRadius:2,overflow:"hidden"}}><div style={{width:p.pct+"%",height:"100%",background:p.color||C.teal,transition:"width 1.4s cubic-bezier(0.4,0,0.2,1)"}}/></div>);}

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

useEffect(function(){var s=document.createElement("style");s.textContent=[
"@keyframes fu{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}",
"@keyframes pu{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}",
"@keyframes trg-tri{0%,100%{opacity:0.25;transform:translateY(2px) scale(0.9)}50%{opacity:1;transform:translateY(0) scale(1)}}",
".trg-shell{display:flex;min-height:100vh}",
".trg-rail{width:56px;flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 8px}",
".trg-main{flex:1;padding:32px 48px;min-width:0}",
".trg-hero{display:flex;align-items:center;gap:28px;padding:24px 28px}",
".trg-hero-metrics{display:flex;flex-direction:column;gap:16px;min-width:150px}",
".trg-hero-divider{width:1px;align-self:stretch}",
".trg-orbit{display:flex;gap:18px;margin-bottom:20px}",
".trg-orbit-left{width:260px;flex-shrink:0}",
".trg-orbit-center{flex:1 1 0;min-width:0}",
".trg-orbit-right{width:250px;flex-shrink:0}",
".trg-home-grid{display:flex;gap:32px}",
".trg-home-main{flex:1;min-width:0}",
".trg-home-side{width:320px;flex-shrink:0}",
".trg-stat4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}",
".trg-stat-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;padding:14px 16px}",
".trg-owner-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px}",
".trg-init-row{display:flex;gap:16px;margin-bottom:24px}",
".trg-init-row > div{flex:1;min-width:0}",
".trg-cascade-col{display:flex;justify-content:center;gap:40px;margin-bottom:56px;flex-wrap:wrap}",
".trg-cascade-children{display:flex;justify-content:center;gap:32px;flex-wrap:wrap}",
".trg-tier-grid{display:flex;gap:16px}",
".trg-tier-grid > div{flex:1;min-width:0}",
".trg-color-grid{display:flex;gap:12px;flex-wrap:wrap}",
".trg-icon-row{display:flex;gap:24px;align-items:flex-end;flex-wrap:wrap}",
".trg-mark-row{display:flex;gap:32px;align-items:center;flex-wrap:wrap}",
".trg-pulse-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}",
".trg-pulse-patterns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}",
".trg-comments-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}",
".trg-ph-title{font-size:24px}",
".trg-hero-headline{font-size:22px}",
".trg-focal-title{font-size:26px}",
".trg-focal-num{font-size:22px}",
".trg-hero-num{font-size:28px}",
"@media (max-width: 1023px){",
".trg-main{padding:24px 28px}",
".trg-home-grid{flex-direction:column}",
".trg-home-side{width:100%}",
".trg-orbit{flex-direction:column}",
".trg-orbit-left,.trg-orbit-right{width:100%}",
".trg-stat4{grid-template-columns:repeat(2,minmax(0,1fr))}",
".trg-tier-grid{flex-wrap:wrap}",
".trg-tier-grid > div{flex:1 1 calc(50% - 8px);min-width:200px}",
".trg-init-row{flex-wrap:wrap}",
".trg-init-row > div{flex:1 1 calc(50% - 8px);min-width:200px}",
"}",
"@media (max-width: 639px){",
".trg-shell{flex-direction:column}",
".trg-rail{width:100%;height:auto;flex-direction:row;position:fixed;bottom:0;top:auto;left:0;right:0;padding:8px 12px;background:#fff;border-right:none;border-top:1px solid #d6dee6;z-index:50;gap:2px;justify-content:space-around}",
".trg-rail-brand{display:none}",
".trg-rail-avatar{display:none}",
".trg-rail > .trg-flex-spacer{display:none}",
".trg-main{padding:16px 14px 80px}",
".trg-main [style*=\"font-size: 11px\"]{font-size:13px !important}",
".trg-main [style*=\"font-size: 12px\"]{font-size:14px !important}",
".trg-main [style*=\"font-size: 13px\"]{font-size:15px !important}",
".trg-main [style*=\"font-size: 14px\"]{font-size:16px !important}",
".trg-main [style*=\"font-size: 15px\"]{font-size:17px !important}",
".trg-ph-title{font-size:22px}",
".trg-hero{flex-direction:column;align-items:stretch;gap:16px;padding:20px 20px}",
".trg-hero-divider{display:none}",
".trg-hero-metrics{flex-direction:row;min-width:0;gap:20px;padding-top:16px;border-top:1px solid #e6ecf2}",
".trg-hero-metrics > div{flex:1}",
".trg-hero-headline{font-size:20px}",
".trg-hero-num{font-size:26px}",
".trg-focal-title{font-size:22px}",
".trg-focal-num{font-size:19px}",
".trg-stat4{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}",
".trg-stat-strip{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;padding:14px}",
".trg-owner-row{grid-template-columns:minmax(0,1fr)}",
".trg-init-row{flex-direction:column}",
".trg-init-row > div{flex:1 1 auto;min-width:0;width:100%}",
".trg-cascade-col{flex-direction:column;align-items:stretch;gap:14px;margin-bottom:24px}",
".trg-cascade-col > div{width:100% !important}",
".trg-cascade-children{flex-direction:column;align-items:stretch;gap:10px}",
".trg-cascade-children > div{width:100% !important}",
".trg-cascade-svg{display:none}",
".trg-tier-grid{flex-direction:column}",
".trg-tier-grid > div{flex:1 1 auto;min-width:0;width:100%}",
".trg-color-grid > div{width:calc(50% - 6px) !important}",
".trg-icon-row{gap:14px}",
".trg-mark-row{gap:16px}",
".trg-pulse-stats{grid-template-columns:minmax(0,1fr)}",
".trg-pulse-patterns{grid-template-columns:minmax(0,1fr)}",
".trg-comments-grid{grid-template-columns:minmax(0,1fr)}",
".trg-view-tabs{display:none}",
".trg-breadcrumb-replay{display:none}",
".trg-tab-labels span{display:none}",
"}"
].join("");document.head.appendChild(s);return function(){s.remove();};},[]);
useEffect(function(){if(chatRef.current)chatRef.current.scrollTop=chatRef.current.scrollHeight;},[msgs,chatLoading]);
useEffect(function(){window.scrollTo(0,0);},[page]);

function fire(){if(phase>0)return;setPhase(1);setTimeout(function(){setPhase(2);},600);setTimeout(function(){setPhase(3);},900);setTimeout(function(){setPhase(4);},1000);setTimeout(function(){setPhase(5);setPulse(true);},1100);setTimeout(function(){setPulse(false);},2500);}
function reset(){setPhase(0);setPulse(false);}
var progress=phase>=3?62:54;
var actionCount=phase>=3?3:4;
var showRisk=phase<4;
var showBlocker=phase<2;
var completed=phase>=1;

function sendChat(){
if(!chatIn.trim()||chatLoading)return;var q=chatIn.trim();setChatIn("");setMsgs(function(p){return p.concat([{role:"user",text:q}]);});setChatLoading(true);
fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:300,system:"You are TARGA AI. Context: 4 goals FY26. Gross margin 39.8% vs 42.3%. Revenue on track. OpEx behind. Talent ahead. Keep responses 2-3 sentences, executive-level. No em-dashes or markdown.",messages:[{role:"user",content:q}]})}).then(function(r){return r.json();}).then(function(d){var txt=d.content?d.content.map(function(b){return b.text||"";}).join(""):"Could not process.";setMsgs(function(p){return p.concat([{role:"assistant",text:txt}]);});setChatLoading(false);}).catch(function(){setMsgs(function(p){return p.concat([{role:"assistant",text:"Gross margin and operational efficiency need focus. Resolve the COGS blocker and escalate vendor delays this week."}]);});setChatLoading(false);});
}

function NI(p){return(<div onClick={function(){setPage(p.pg);}} style={{width:40,height:40,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:page===p.pg?C.tealBg:"transparent",cursor:"pointer",transition:"background 0.2s"}} title={p.title}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={p.d} stroke={page===p.pg?C.teal:C.gray} strokeWidth="1.8" strokeLinecap="square"/></svg></div>);}

function PH(p){return(<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:18,borderBottom:"1px solid "+C.border,marginBottom:18,gap:12,flexWrap:"wrap"}}><div style={{minWidth:0}}><div style={{fontSize:12,fontWeight:500,letterSpacing:1.5,color:C.teal,textTransform:"uppercase",marginBottom:2}}>{p.eyebrow}</div><div className="trg-ph-title" style={{fontWeight:500,color:C.navy,fontFamily:"Space Grotesk, sans-serif",letterSpacing:"-0.02em"}}>{p.title}</div></div>{p.right&&<div>{p.right}</div>}</div>);}

return(
<div className="trg-shell" style={{fontFamily:"Inter, -apple-system, sans-serif",color:C.navy,background:C.bg2}}>

<div className="trg-rail" style={{background:C.white,borderRight:"1px solid "+C.border}}>
<div className="trg-rail-brand" style={{marginBottom:16,cursor:"pointer"}} onClick={function(){setPage("home");}}><svg width="24" height="24" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg></div>
<NI pg="home" d="M3 9 L12 3 L21 9 L21 21 L3 21 Z" title="Home"/>
<NI pg="cascade" d="M4 5 L20 5 M4 12 L20 12 M4 19 L16 19" title="Cascade"/>
<NI pg="detail" d="M9 3 L9 21 M3 9 L15 9 M3 15 L15 15" title="Item Detail"/>
<NI pg="dashboard" d="M3 3 L10 3 L10 13 L3 13 Z M14 3 L21 3 L21 8 L14 8 Z M14 11 L21 11 L21 21 L14 21 Z M3 16 L10 16 L10 21 L3 21 Z" title="Dashboard"/>
<NI pg="pulse" d="M2 12 L6 12 L9 4 L12 20 L15 8 L18 12 L22 12" title="Board Pulse"/>
<NI pg="system" d="M4 4 L10 4 L10 10 L4 10 Z M14 4 L20 4 L20 10 L14 10 Z M4 14 L10 14 L10 20 L4 20 Z M14 14 L20 14 L20 20 L14 20 Z" title="Design System"/>
<div className="trg-flex-spacer" style={{flex:1}}/>
<div className="trg-rail-avatar"><Av i="JT" s={28}/></div>
</div>

<div className="trg-main">

{page==="home"&&<div>
<PH eyebrow="Good morning, Joe" title="My world" right={<div style={{fontSize:13,color:C.gray}}>Wednesday, April 16, 2026</div>}/>

<div className="trg-hero" style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,marginBottom:28,boxShadow:"0 1px 3px rgba(31,71,106,0.04)"}}>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:8,display:"flex",alignItems:"center",gap:6}}><TM s={12}/> This week's focus</div>
<div className="trg-hero-headline" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,lineHeight:1.3,letterSpacing:"-0.02em",marginBottom:10}}>Resolve the COGS blocker before board review.</div>
<div style={{fontSize:15,color:"#4a5868",lineHeight:1.6}}>Three of four goals on track. The COGS initiative is 40% against an $8M target and Mark flagged a supplier blocker. Gross margin hits board review in 11 days.</div>
</div>
<div className="trg-hero-divider" style={{background:C.border}}/>
<div className="trg-hero-metrics">
<div><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,marginBottom:2}}>Confidence</div><div style={{display:"flex",alignItems:"baseline",gap:6}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1}}>69<span style={{fontSize:"0.65em"}}>%</span></span><span style={{fontSize:13,color:C.green,fontWeight:500}}>{"\u2197"} +3</span></div></div>
<div><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,marginBottom:2}}>Board review</div><div style={{display:"flex",alignItems:"baseline",gap:6}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.amber,letterSpacing:"-0.02em",lineHeight:1}}>11<span style={{fontSize:"0.6em"}}>d</span></span><span style={{fontSize:13,color:C.gray}}>Q1 materials</span></div></div>
</div>
</div>

<div className="trg-home-grid">
<div className="trg-home-main">
<Eye><SI s={12}/> My goals <span style={{color:C.gray,fontWeight:400}}>. 4</span></Eye>
{strategies.map(function(s){return(<div key={s.id} onClick={function(){setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"18px 22px",marginBottom:12,cursor:"pointer",transition:"all 0.2s"}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><SI s={14}/><div style={{flex:1,fontSize:17,fontWeight:500,color:C.navy,lineHeight:1.35}}>{s.t}</div><Av i={s.owner} s={24} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
<div style={{display:"flex",alignItems:"center",gap:16,marginBottom:10,flexWrap:"wrap"}}>
<div style={{display:"flex",alignItems:"baseline",gap:4}}><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:18,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1}}>{s.progress}%</span><span style={{fontSize:12,color:C.gray}}>progress</span></div>
<div style={{width:1,height:14,background:C.border}}/>
<div style={{display:"flex",alignItems:"baseline",gap:4}}><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:17,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1}}>{s.impact}</span></div>
<div style={{marginLeft:"auto",display:"flex",gap:5}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div>
</div>
<PB pct={s.progress} h={4} color={s.sc==="green"?C.teal:C.amber}/>
</div>);})}
</div>
<div className="trg-home-side">
<Eye><TM s={14}/> TARGA Intelligence</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:16}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:0.5,color:C.tealDk,textTransform:"uppercase",marginBottom:10}}>This week</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px",marginBottom:6,fontSize:15,color:C.navy,lineHeight:1.55}}>Your team resolved 2 actions and moved 1 item from At Risk to On Track. The COGS blocker on gross margin expansion remains your top priority.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px",marginBottom:6}}><div style={{fontSize:14,fontWeight:500,color:C.navy,marginBottom:2}}>Pricing approval is overdue</div><div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>Blocking price realization. 3 days past due.</div></div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px"}}><div style={{fontSize:14,fontWeight:500,color:C.navy,marginBottom:2}}>OpEx efficiency dropping</div><div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>Confidence fell 7 points. Two vendor blockers.</div></div>
</div>
<Eye><TI s={12}/> Recent activity</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"4px 14px"}}>
{[{i:"MS",bg:C.red,fg:"#fff",n:"Mark S.",a:"flagged blocker on COGS",t:"2h ago"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"updated margin target",t:"Yesterday"},{i:"SD",bg:C.navy,fg:"#fff",n:"Sarah D.",a:"completed 2 interviews",t:"2d ago"}].map(function(e,idx){return(<div key={idx} style={{display:"flex",gap:10,padding:"10px 0",borderBottom:idx<2?"1px solid #f0f3f6":"none"}}><Av i={e.i} bg={e.bg} fg={e.fg} s={22}/><div style={{fontSize:14,lineHeight:1.45}}>{e.n&&<span style={{fontWeight:500}}>{e.n} </span>}<span style={{color:C.gray}}>{e.a}</span><div style={{fontSize:12,color:"#8b99a8",marginTop:2}}>{e.t}</div></div></div>);})}
</div>
</div>
</div>
</div>}


{page==="cascade"&&<div>
<PH eyebrow="Strategy map" title="Enterprise Value Creation - FY26" right={<div className="trg-view-tabs" style={{display:"flex",gap:4}}>{["Cascade","Kanban","Timeline","People"].map(function(v,i){return(<div key={v} style={{padding:"6px 14px",background:i===0?C.white:"transparent",border:i===0?"1px solid "+C.border:"none",borderRadius:6,fontSize:13,color:i===0?C.navy:C.gray,fontWeight:i===0?500:400,cursor:"pointer"}}>{v}</div>);})}</div>}/>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:"48px 40px",minHeight:620,position:"relative"}}>

<svg className="trg-cascade-svg" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}} viewBox="0 0 1060 620">
<defs>
<marker id="arw" viewBox="0 0 10 7" refX="5" refY="3.5" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke={C.teal} strokeWidth="1.2"/></marker>
</defs>
<path d="M 530 105 L 530 135 Q 530 150 515 150 L 260 150 Q 245 150 245 165 L 245 195" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arw)"/>
<path d="M 530 105 L 530 195" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arw)"/>
<path d="M 530 105 L 530 135 Q 530 150 545 150 L 800 150 Q 815 150 815 165 L 815 195" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arw)"/>
<path d="M 245 325 L 245 360 Q 245 375 230 375 L 165 375 Q 150 375 150 390 L 150 415" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arw)"/>
<path d="M 245 325 L 245 360 Q 245 375 260 375 L 375 375 Q 390 375 390 390 L 390 415" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arw)"/>
<path d="M 530 325 L 530 415" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arw)"/>
<path d="M 815 325 L 815 360 Q 815 375 800 375 L 680 375 Q 665 375 665 390 L 665 415" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arw)"/>
<path d="M 815 325 L 815 360 Q 815 375 830 375 L 910 375 Q 925 375 925 390 L 925 415" stroke={C.teal} strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arw)"/>
</svg>

<div style={{position:"relative",zIndex:1}}>

<div style={{display:"flex",justifyContent:"center",marginBottom:48}}>
<div onClick={function(){setPage("detail");}} style={{width:300,background:C.tealBg,border:"2px solid "+C.tealBd,borderRadius:12,padding:"18px 22px",cursor:"pointer",boxShadow:"0 2px 12px rgba(14,178,175,0.1)"}}>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}><SI s={13}/><span style={{fontSize:12,fontWeight:500,color:C.tealDk,letterSpacing:0.5}}>BUSINESS PLAN</span></div>
<div style={{fontSize:19,fontWeight:500,color:C.navy,marginBottom:8,lineHeight:1.3}}>Enterprise Value Creation - FY26</div>
<div style={{display:"flex",alignItems:"center",gap:6}}><Pl c="green">{"\u2197"} ON TRACK</Pl><span style={{fontSize:12,color:C.gray,marginLeft:"auto"}}>4 strategies</span></div>
</div>
</div>

<div className="trg-cascade-col">
{strategies.slice(0,3).map(function(s){return(
<div key={s.id} onClick={function(){setPage("detail");}} style={{width:280,background:C.white,border:"1px solid "+C.border,borderLeft:"4px solid "+(s.sc==="green"?C.teal:C.amber),borderRadius:12,padding:"18px 22px",cursor:"pointer",boxShadow:"0 1px 4px rgba(31,71,106,0.06)",transition:"box-shadow 0.2s"}}>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
<SI s={11}/><span style={{fontSize:11,fontWeight:500,color:C.tealDk,letterSpacing:0.5}}>GOAL</span>
<div style={{marginLeft:"auto"}}><Av i={s.owner} s={20} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
</div>
<div style={{fontSize:16,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:8}}>{s.t}</div>
<div style={{display:"flex",gap:5,marginBottom:8}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div>
<PB pct={s.progress}/>
<div style={{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:12}}><span style={{color:C.gray}}>{s.progress}%</span><span style={{color:C.navy,fontWeight:500}}>{s.impact}</span></div>
</div>
);})}
</div>

<div className="trg-cascade-children">
{[{t:"Reduce COGS tier-1",s:"BLOCKER",sc:"red",type:"project"},{t:"Price realization",s:"ON TRACK",sc:"green",type:"project"},{t:"EMEA market launch",s:"ON TRACK",sc:"green",type:"project"},{t:"Vendor consolidation",s:"BEHIND",sc:"amber",type:"initiative"}].map(function(c){return(
<div key={c.t} style={{width:210,background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"14px 18px",boxShadow:"0 1px 4px rgba(31,71,106,0.06)"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
{c.type==="project"?<PI s={11}/>:<AI s={11}/>}
<span style={{fontSize:11,fontWeight:500,color:c.type==="project"?C.pinkDk:"#a07509",letterSpacing:0.5}}>{c.type==="project"?"INITIATIVE":"ACTION"}</span>
</div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:6}}>{c.t}</div>
<Pl c={c.sc}>{c.s}</Pl>
</div>
);})}
</div>

</div>
</div>
</div>}


{page==="detail"&&<div>
<div style={{display:"flex",alignItems:"center",gap:8,fontSize:14,color:C.gray,paddingBottom:18,borderBottom:"1px solid "+C.border,marginBottom:18}}><span style={{cursor:"pointer",color:C.teal}} onClick={function(){setPage("cascade");}}>Strategy Map</span><span style={{color:"#b0bcc9"}}>/</span><span style={{color:C.navy,fontWeight:500}}>Expand gross margin by 300bps</span>{phase>=5&&<span className="trg-breadcrumb-replay" onClick={reset} style={{marginLeft:"auto",color:C.teal,cursor:"pointer",fontSize:13,fontWeight:500}}>Replay demo</span>}</div>

<div onClick={function(){setPage("cascade");}} style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderLeft:"3px solid "+C.teal,borderRadius:8,padding:"8px 12px",marginBottom:18,display:"flex",alignItems:"center",gap:8,cursor:"pointer"}}><SI s={12}/><span style={{fontSize:13,fontWeight:500,color:C.tealDk}}>PARENT</span><span style={{fontSize:15,fontWeight:500,color:C.navy}}>Drive enterprise value creation - FY26</span><Pl c="green">{"\u2197"} ON TRACK</Pl></div>

<div className="trg-orbit">
<div className="trg-orbit-left">
<Eye><MI s={12}/> Metrics</Eye>
{[{l:"Gross margin",v:"39.8%",tg:"42.3%",p:62,tr:"+80bps",tc:C.teal,src:"netsuite",srcN:"NetSuite",pts:[37.2,37.8,38.1,38.5,38.9,39.1,39.4,39.8],ok:true},{l:"COGS reduction",v:"-$3.2M",tg:"-$8M",p:40,tr:"Behind",tc:C.amber,src:"sap",srcN:"SAP",pts:[0.5,0.9,1.2,1.8,2.1,2.5,2.9,3.2],ok:false},{l:"Price realization",v:"+1.4%",tg:"+2.1%",p:66,tr:"On track",tc:C.teal,src:"sf",srcN:"Salesforce",pts:[0.3,0.5,0.7,0.8,1.0,1.1,1.3,1.4],ok:true}].map(function(m,idx){
var isExp=expMetric===idx;
var mx=Math.max.apply(null,m.pts);var mn=Math.min.apply(null,m.pts);
var sparkD=m.pts.map(function(pt,pi){return(pi===0?"M":"L")+" "+(pi/(m.pts.length-1)*130)+" "+(36-((pt-mn)/(mx-mn||1))*36);}).join(" ");
return(<div key={m.l} onClick={function(){setExpMetric(isExp?null:idx);}} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px",marginBottom:10,cursor:"pointer",transition:"all 0.2s"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:13,color:C.gray,fontWeight:500}}>{m.l}</span><div style={{display:"flex",alignItems:"center",gap:5}}><Logo k={m.src} s={14}/><span style={{fontSize:12,color:C.gray}}>{m.srcN}</span></div></div>
<div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:8}}><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:26,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1}}>{m.v}</span><span style={{fontSize:12,color:C.gray}}>{"\u2192"} {m.tg}</span></div>
<PB pct={m.p} h={4} color={m.tc}/>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}><Pl c={m.ok?"green":"amber"}>{m.ok?"\u2197":"\u2198"} {m.tr}</Pl><span style={{fontSize:12,color:C.gray}}>{m.p}%</span></div>
<div style={{overflow:"hidden",maxHeight:isExp?80:0,opacity:isExp?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{paddingTop:10,borderTop:"1px solid "+C.subtle,marginTop:10}}><div style={{fontSize:11,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500}}>8-week trend</div>
<svg width="130" height="40" style={{display:"block"}}><path d={sparkD} fill="none" stroke={m.tc===C.amber?C.amber:C.teal} strokeWidth="2" strokeLinecap="round"/><circle cx="130" cy={36-((m.pts[m.pts.length-1]-mn)/(mx-mn||1))*36} r="3" fill={m.tc===C.amber?C.amber:C.teal}/></svg>
</div></div>
</div>);})}

<div style={{marginTop:16}}>
<Eye><XI s={12}/> External links</Eye>
{[["Q1 Margin Analysis","gs","Google Sheets","2d ago"],["Pricing Model v3","conf","Confluence","5d ago"]].map(function(el){return(<div key={el[0]} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",marginBottom:6,cursor:"pointer",display:"flex",alignItems:"center",gap:10}}><Logo k={el[1]} s={20}/><div style={{flex:1,minWidth:0}}><div style={{fontSize:14,color:C.navy,fontWeight:500}}>{el[0]}</div><div style={{fontSize:12,color:C.gray}}>{el[2]} . {el[3]}</div></div></div>);})}
<div style={{padding:"6px 0",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer"}}>+ Add link</div>
</div>
</div>

<div className="trg-orbit-center">
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,overflow:"hidden",boxShadow:pulse?"0 0 0 3px rgba(14,178,175,0.3)":"0 2px 8px rgba(31,71,106,0.08)",transition:"box-shadow 1s"}}>
<div style={{background:C.navy,backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><polygon points='20,8 32,30 8,30' fill='none' stroke='%230eb2af' stroke-width='1' opacity='0.15'/></svg>\")",backgroundSize:"40px 40px",padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}><TML s={16}/><span style={{fontSize:13,fontWeight:500,letterSpacing:1,color:"#fff",textTransform:"uppercase"}}>Goal</span></div>
<div style={{padding:"22px 22px 20px"}}>
<div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}><Pl c="navy">OPERATIONAL</Pl><Pl c="teal">Q1 2026</Pl><Pl c="amber" hide={!showRisk}>{"\u25B3"} RISK</Pl><Pl c="green">{"\u2197"} ON TRACK</Pl></div>
<div className="trg-focal-title" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,lineHeight:1.2,letterSpacing:"-0.02em",marginBottom:12}}>Expand gross margin by 300bps</div>
<div style={{fontSize:16,color:"#4a5868",lineHeight:1.65,marginBottom:18}}>Drive 300 basis points of gross margin expansion across tier-1 product lines through COGS reduction, price realization, and channel mix optimization.</div>
<div className="trg-owner-row" style={{marginBottom:16}}>
<div style={{background:C.bg2,borderRadius:8,padding:"10px 12px",display:"flex",alignItems:"center",gap:10,minWidth:0}}><Av i="JT" s={30}/><div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Owner</div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginTop:1,whiteSpace:"nowrap"}}>Joe Thompson</div></div></div>
<div style={{background:C.bg2,borderRadius:8,padding:"10px 12px",minWidth:0}}><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Dates</div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginTop:1,whiteSpace:"nowrap"}}>Jan 6 {"\u2192"} Mar 31, 2026</div></div>
</div>
<div className="trg-stat-strip" style={{background:C.bg2,borderRadius:10,marginBottom:16}}>
<div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Impact</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,whiteSpace:"nowrap"}}>$24M</div></div>
<div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Progress</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,whiteSpace:"nowrap"}}><Odo value={progress} suffix="%" dur={1.6}/></div></div>
<div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Actions</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,whiteSpace:"nowrap"}}><Odo value={actionCount} dur={1.4}/></div></div>
<div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Review</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:phase>=4?C.green:C.amber,letterSpacing:"-0.02em",lineHeight:1,transition:"color 1s",whiteSpace:"nowrap"}}><Odo value={phase>=4?9:11} suffix="d" dur={1.4}/></div></div>
</div>
<PB pct={progress} h={6}/>
</div></div>

</div>

<div className="trg-orbit-right">
<Eye><AI s={12}/> Actions <span style={{color:C.gray,fontWeight:400}}>. <Odo value={actionCount} dur={1.4}/></span></Eye>

<div style={{overflow:"hidden",maxHeight:showBlocker?300:0,opacity:showBlocker?1:0,marginBottom:showBlocker?5:0,transition:"max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s, margin 0.9s"}}>
<div style={{background:completed?C.teal:C.white,border:"1px solid "+(completed?C.teal:C.border),borderLeft:"3px solid "+(completed?C.teal:C.red),borderRadius:8,padding:9,transition:"all 0.3s"}}><div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:6,marginBottom:5}}><span style={{fontSize:13,fontWeight:500,color:completed?"#fff":C.navy,lineHeight:1.3,transition:"color 0.3s"}}>Approve pricing model</span>{!completed&&<Pl c="red">BLOCKER</Pl>}{completed&&<div style={{width:20,height:20,borderRadius:"50%",background:"rgba(255,255,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}><Chk/></div>}</div><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:completed?0:8}}><Av i="JT" bg={C.gold} fg={C.navy} s={16}/><span style={{fontSize:11,color:completed?"rgba(255,255,255,0.8)":C.red,fontWeight:500}}>{completed?"Done":"Overdue"}</span></div>{!completed&&<div onClick={fire} style={{padding:"8px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:13,fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><Chk/> Mark complete</div>}</div>
</div>

{[{t:"Review Q1 margin variance",i:"KM",bg:C.teal,fg:"#fff",d:"Apr 22",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Quarterly margin variance review with finance. Compare actual performance against 300bps target.",subs:["Pull NetSuite actuals","Prepare variance bridge","Schedule finance sync"]},
{t:"Interview channel partners",i:"SD",bg:C.navy,fg:"#fff",d:"May 1",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Conduct interviews with three key channel partners to assess mix optimization opportunities.",subs:["Schedule partner A","Schedule partner B","Schedule partner C"]},
{t:"Validate supplier scope",i:"MS",bg:C.navy,fg:"#fff",d:"May 8",s:"AT RISK",sc:"amber",bc:"#d49a0f",desc:"Define scope for supplier contract renegotiations targeting tier-1 COGS reduction.",subs:["Identify top 5 suppliers","Set target reduction %","Draft negotiation brief"]}
].map(function(a){var isSel=selAction&&selAction.t===a.t;return(<div key={a.t}>
<div onClick={function(){setSelAction(isSel?null:a);}} style={{background:"#fff",border:"1px solid "+C.border,borderLeft:"3px solid "+a.bc,borderRadius:8,padding:13,marginBottom:8,cursor:"pointer",transition:"transform 0.15s"}}>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{a.t}</div>
<div style={{display:"flex",alignItems:"center",gap:5}}><Av i={a.i} bg={a.bg} fg={a.fg} s={16}/><span style={{fontSize:11,color:C.gray}}>{a.d}</span><span style={{marginLeft:"auto"}}><Pl c={a.sc}>{a.s}</Pl></span></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSel?300:0,opacity:isSel?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginBottom:5,marginTop:-3}}>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:8}}>{a.desc}</div>
<div style={{fontSize:11,fontWeight:500,letterSpacing:1,color:C.gray,textTransform:"uppercase",marginBottom:6}}>Subtasks</div>
{a.subs.map(function(sub,si){return(<div key={si} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:si<a.subs.length-1?"1px solid "+C.subtle:"none"}}><div style={{width:14,height:14,border:"1.5px solid "+C.border,borderRadius:3}}/><span style={{fontSize:13,color:C.navy}}>{sub}</span></div>);})}
<div style={{display:"flex",gap:6,marginTop:8}}><div style={{flex:1,padding:"6px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:12,fontWeight:500}}>Mark complete</div><div onClick={function(e){e.stopPropagation();setSelAction(null);}} style={{padding:"6px 10px",border:"1px solid "+C.border,borderRadius:6,fontSize:12,color:C.gray}}>Close</div></div>
</div></div>
</div>);})}

<div onClick={function(){setShowAddAction(!showAddAction);}} style={{padding:"6px 0",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer",marginTop:4}}>+ Add action</div>
<div style={{overflow:"hidden",maxHeight:showAddAction?200:0,opacity:showAddAction?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginTop:4}}>
<input placeholder="Action title..." style={{width:"100%",padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:13,color:C.navy,outline:"none",marginBottom:6,fontFamily:"inherit",boxSizing:"border-box"}}/>
<div style={{display:"flex",gap:6}}><input placeholder="Owner" style={{flex:1,padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:13,outline:"none",fontFamily:"inherit"}}/><input placeholder="Due date" style={{flex:1,padding:"6px 8px",border:"1px solid "+C.border,borderRadius:6,fontSize:13,outline:"none",fontFamily:"inherit"}}/></div>
<div onClick={function(){setShowAddAction(false);}} style={{marginTop:6,padding:"6px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:12,fontWeight:500,cursor:"pointer"}}>Add</div>
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
<div style={{opacity:phase>=5?0:1,maxHeight:phase>=5?0:200,transition:"opacity 0.8s, max-height 0.8s",overflow:"hidden"}}><div onClick={function(){setExpSug(isExpS?null:si);}} style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:12,fontWeight:500,color:C.navy,marginBottom:2}}>{sg.t}</div><div style={{fontSize:11,color:C.gray}}>{sg.d}</div>
<div style={{overflow:"hidden",maxHeight:isExpS&&phase<5?120:0,opacity:isExpS&&phase<5?1:0,transition:"max-height 0.3s, opacity 0.25s"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:11,fontWeight:500}}>{sg.act}</div></div>
</div></div>
<div style={{opacity:phase>=5?1:0,maxHeight:phase>=5?200:0,transition:"opacity 0.8s 0.2s, max-height 0.8s",overflow:"hidden"}}><div style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4}}><div style={{fontSize:12,fontWeight:500,color:C.green,marginBottom:2}}>{"\u2713"} Blocker resolved</div><div style={{fontSize:11,color:C.gray}}>Progress 54% {"\u2192"} 62%.</div></div></div>
</div>);}
return(<div key={si} onClick={function(){setExpSug(isExpS?null:si);}} style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:12,fontWeight:500,color:C.navy,marginBottom:2}}>{sg.t}</div><div style={{fontSize:11,color:C.gray}}>{sg.d}</div>
<div style={{overflow:"hidden",maxHeight:isExpS?120:0,opacity:isExpS?1:0,transition:"max-height 0.3s, opacity 0.25s"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{display:"flex",gap:4}}><div style={{flex:1,padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:11,fontWeight:500}}>{sg.act}</div><div onClick={function(e){e.stopPropagation();setExpSug(null);}} style={{padding:"5px 8px",border:"1px solid "+C.border,borderRadius:4,fontSize:11,color:C.gray}}>Dismiss</div></div></div>
</div>);})}
</div></div>
{phase>=5&&<div style={{marginTop:8,background:C.greenBg,border:"1px solid #a7f3d0",borderRadius:8,padding:10,animation:"fu 0.4s ease"}}><div style={{fontSize:11,fontWeight:500,color:C.green,textTransform:"uppercase",marginBottom:4,display:"flex",alignItems:"center",gap:5}}><TM s={11}/> Cascade impact</div><div style={{fontSize:12,color:"#065f46",lineHeight:1.5}}>Unblocked price realization. Removed 1 risk. Progress 54% {"\u2192"} 62%.</div></div>}
</div>
</div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,overflow:"hidden",marginBottom:24,boxShadow:"0 1px 3px rgba(31,71,106,0.04)"}}>
<div style={{padding:"14px 20px",borderBottom:"1px solid "+C.subtle,display:"flex",alignItems:"center",gap:10}}><TM v="a" s={18}/><span style={{fontSize:15,fontWeight:500,color:C.navy}}>Ask TARGA</span><span style={{fontSize:13,color:C.gray,marginLeft:4}}>AI assistant for this goal</span></div>
<div ref={chatRef} style={{minHeight:140,maxHeight:320,overflow:"auto",padding:"18px 24px"}}>
{msgs.length===0&&<div style={{textAlign:"center",padding:"24px 8px",color:"#8b99a8",fontSize:15}}>Ask anything about this goal. Try "What's blocking progress?" or "Who should I talk to about COGS?"</div>}
{msgs.map(function(m,i){return(<div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",marginBottom:10}}><div style={{maxWidth:"78%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?C.navy:C.tealBg,color:m.role==="user"?"#fff":C.navy,fontSize:16,lineHeight:1.55}}>{m.text}</div></div>);})}
{chatLoading&&<div style={{display:"flex",gap:8,padding:"8px 0",alignItems:"center"}}>{[0,1,2].map(function(i){return(<svg key={i} width="14" height="14" viewBox="0 0 24 24" style={{animation:"trg-tri 1.2s ease "+(i*0.18)+"s infinite"}}><polygon points="12,4 21,20 3,20" fill={C.teal}/></svg>);})}</div>}
</div>
<div style={{padding:"12px 20px 16px",borderTop:"1px solid "+C.subtle,display:"flex",gap:10}}><input value={chatIn} onChange={function(e){setChatIn(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter")sendChat();}} placeholder="Ask about this goal..." style={{flex:1,padding:"10px 14px",border:"1px solid "+C.border,borderRadius:8,fontSize:16,color:C.navy,outline:"none",background:C.bg2,fontFamily:"inherit"}}/><div onClick={sendChat} style={{width:42,height:42,background:C.teal,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M12 5 L19 12 L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
</div>

<Eye><PI s={12}/> Initiatives <span style={{color:C.gray,fontWeight:400}}>. 3</span></Eye>
<div className="trg-init-row">
{[{t:"Reduce COGS tier-1",s:phase>=4?"AT RISK":"BLOCKER",sc:phase>=4?"amber":"red",av:"KM",desc:"Renegotiate tier-1 supplier contracts to reduce COGS by $8M.",prog:40},
{t:"Price realization",s:phase>=4?"ON TRACK":"BLOCKED",sc:phase>=4?"green":"amber",av:"SD",desc:"Implement pricing adjustments across product lines for +2.1% realization.",prog:66},
{t:"Channel mix optimization",s:"BEHIND",sc:"amber",av:"MS",desc:"Optimize channel partner mix to improve margin contribution.",prog:28}
].map(function(ch,ci){var isSC=selChild===ci;return(<div key={ch.t} style={{flex:1}}>
<div onClick={function(){setSelChild(isSC?null:ci);}} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"9px 11px",cursor:"pointer",transition:"all 0.2s"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}><PI s={11}/><span style={{fontSize:11,fontWeight:500,color:C.pinkDk}}>INITIATIVE</span></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{ch.t}</div>
<div style={{display:"flex",alignItems:"center",transition:"color 0.8s, opacity 0.8s"}}><Pl c={ch.sc}>{ch.s}</Pl><div style={{marginLeft:"auto"}}><Av i={ch.av} bg={C.navy} fg="#fff" s={16}/></div></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSC?150:0,opacity:isSC?1:0,transition:"max-height 0.3s, opacity 0.25s"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginTop:4}}>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{ch.desc}</div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:C.gray}}>Progress</span><span style={{fontWeight:500,color:C.navy}}>{ch.prog}%</span></div>
<PB pct={ch.prog}/>
<div onClick={function(){setSelChild(null);setPage("detail");}} style={{marginTop:6,padding:"5px 0",border:"1px solid "+C.border,borderRadius:6,textAlign:"center",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer"}}>Open item</div>
</div></div>
</div>);})}
</div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden"}}>
<div style={{display:"flex",borderBottom:"1px solid "+C.border,overflowX:"auto"}}>
{["Comments","Attachments","History","Hierarchy","Relationships"].map(function(t){return(<div key={t} onClick={function(){setBTab(t);}} style={{flex:"1 0 auto",padding:"10px 16px",textAlign:"center",fontSize:13,fontWeight:bTab===t?500:400,color:bTab===t?C.teal:C.gray,borderBottom:bTab===t?"2px solid "+C.teal:"2px solid transparent",cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap"}}>{t}</div>);})}
</div>
<div style={{padding:16,minHeight:160}}>
{bTab==="Comments"&&<div>
{[{i:"JT",bg:C.gold,n:"Joe Thompson",t:"2d ago",m:"Make sure pricing is approved before board review. Critical path."},{i:"KM",bg:C.teal,n:"Kyle Moyer",t:"2d ago",m:"Agreed. Finance sync scheduled Thursday."},{i:"MS",bg:C.red,n:"Mark Sternberger",t:"5h ago",m:"Supplier negotiations taking longer. May need to escalate."}].map(function(c,idx){return(<div key={idx} style={{display:"flex",gap:10,marginBottom:18}}><Av i={c.i} bg={c.bg} fg={c.bg===C.gold?C.navy:"#fff"} s={28}/><div style={{flex:1}}><div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}}><span style={{fontSize:15,fontWeight:500,color:C.navy}}>{c.n}</span><span style={{fontSize:12,color:"#8b99a8"}}>{c.t}</span></div><div style={{fontSize:16,color:"#4a5868",lineHeight:1.6}}>{c.m}</div></div></div>);})}
<div style={{display:"flex",gap:8,marginTop:12,paddingTop:12,borderTop:"1px solid "+C.subtle}}><div style={{flex:1,background:C.bg2,borderRadius:8,padding:"10px 12px",fontSize:14,color:"#8b99a8"}}>Add a comment...</div><div style={{padding:"10px 16px",background:C.teal,color:"#fff",borderRadius:8,fontSize:15,fontWeight:500,cursor:"pointer"}}>Send</div></div>
</div>}

{bTab==="Attachments"&&<div>
<div className="trg-comments-grid">
{[["Q1 Margin Analysis.xlsx","12 KB . Kyle Moyer . Apr 10"],["Pricing Model v3.pdf","2.4 MB . Joe Thompson . Apr 5"],["Supplier Terms Draft.docx","340 KB . Mark Sternberger . Apr 2"]].map(function(arr){return(<div key={arr[0]} style={{background:C.bg2,borderRadius:8,padding:12,cursor:"pointer"}}><div style={{width:32,height:32,background:C.navyLt,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" stroke={C.navy} strokeWidth="1.5"/><path d="M14 3 L14 8 L19 8" stroke={C.navy} strokeWidth="1.5"/></svg></div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:3}}>{arr[0]}</div><div style={{fontSize:12,color:C.gray}}>{arr[1]}</div></div>);})}
</div>
<div style={{marginTop:12,padding:"10px 0",border:"1px dashed "+C.border,borderRadius:8,textAlign:"center",fontSize:13,color:C.gray,cursor:"pointer"}}>+ Attach file</div>
</div>}

{bTab==="History"&&<div>
{[{i:"MS",bg:C.red,fg:"#fff",n:"Mark S.",a:"flagged blocker on COGS",t:"2h ago"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"updated margin target",t:"Yesterday"},{i:"KM",bg:C.teal,fg:"#fff",n:"Kyle M.",a:"added action Review Q1 margin",t:"2d ago"},{i:"",bg:"#eaf0f6",fg:C.navy,n:"",a:"Gross margin synced from NetSuite",t:"Today"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"changed status to At Risk",t:"Apr 10"},{i:"KM",bg:C.teal,fg:"#fff",n:"Kyle M.",a:"created this goal",t:"Mar 28"}].map(function(e,idx){return(<div key={idx} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:idx<5?"1px solid #f0f3f6":"none"}}><Av i={e.i} bg={e.bg} fg={e.fg} s={22}/><div style={{fontSize:15,lineHeight:1.5}}>{e.n&&<span style={{fontWeight:500}}>{e.n} </span>}<span style={{color:C.gray}}>{e.a}</span><span style={{fontSize:12,color:"#8b99a8",marginLeft:8}}>{e.t}</span></div></div>);})}
</div>}

{bTab==="Hierarchy"&&<div style={{position:"relative",paddingLeft:20}}>
<div style={{position:"absolute",left:8,top:10,bottom:10,width:1.5,background:C.teal,opacity:0.4}}/>
{[{t:"Drive enterprise value - FY26",label:"BUSINESS PLAN",lc:C.tealDk,s:"ON TRACK",sc:"green",hl:false},{t:"Expand gross margin by 300bps",label:"CURRENT GOAL",lc:C.tealDk,hl:true},{t:"Reduce COGS tier-1",label:"INITIATIVE",lc:C.pinkDk,s:phase>=4?"AT RISK":"BLOCKER",sc:phase>=4?"amber":"red",hl:false},{t:"Price realization",label:"INITIATIVE",lc:C.pinkDk,s:phase>=4?"ON TRACK":"BLOCKED",sc:phase>=4?"green":"amber",hl:false},{t:"Channel mix optimization",label:"INITIATIVE",lc:C.pinkDk,s:"BEHIND",sc:"amber",hl:false}].map(function(n,idx){return(<div key={idx} style={{marginBottom:6,position:"relative"}}><div style={{position:"absolute",left:-16,top:10,width:7,height:7,borderRadius:"50%",background:C.teal,opacity:n.hl?1:0.5}}/><div style={{background:n.hl?"#fff":n.label==="BUSINESS PLAN"?C.tealBg:"#fff",border:(n.hl?"2px":"1px")+" solid "+(n.hl?C.teal:n.label==="BUSINESS PLAN"?C.tealBd:C.border),borderRadius:8,padding:"7px 12px",display:"flex",alignItems:"center",gap:8,transition:"color 0.8s, opacity 0.8s",cursor:"pointer"}}>{n.label==="BUSINESS PLAN"||n.label==="CURRENT GOAL"?<SI s={11}/>:<PI s={11}/>}<div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:500,color:C.navy,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{n.t}</div><div style={{fontSize:11,color:n.lc}}>{n.label}</div></div>{n.s&&<Pl c={n.sc}>{n.s}</Pl>}</div></div>);})}
</div>}

{bTab==="Relationships"&&<div>
<div style={{fontSize:14,color:"#4a5868",marginBottom:14}}>Cross-dependencies and linked items.</div>
<div style={{background:C.bg2,borderRadius:8,padding:12,marginBottom:8,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}><div style={{width:32,height:32,background:C.tealBg,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}><SI s={14}/></div><div style={{flex:1}}><div style={{fontSize:15,fontWeight:500,color:C.navy}}>Accelerate revenue growth</div><div style={{fontSize:12,color:C.gray}}>EMEA pricing impacts price realization</div></div><div style={{fontSize:11,color:C.tealDk,background:C.tealBg,border:"1px solid "+C.tealBd,padding:"3px 8px",borderRadius:12,fontWeight:500}}>DEPENDS ON</div></div>
<div style={{background:C.bg2,borderRadius:8,padding:12,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}><div style={{width:32,height:32,background:C.amberBg,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}><AI s={14}/></div><div style={{flex:1}}><div style={{fontSize:15,fontWeight:500,color:C.navy}}>FY26 Board Review - Q1</div><div style={{fontSize:12,color:C.gray}}>Requires gross margin update</div></div><div style={{fontSize:11,color:C.amber,background:C.amberBg,border:"1px solid rgba(217,119,6,0.2)",padding:"3px 8px",borderRadius:12,fontWeight:500}}>MILESTONE</div></div>
</div>}
</div>
</div>
</div>}

{page==="dashboard"&&<div>
<PH eyebrow="Executive view" title="Goal Health Dashboard" right={<div style={{fontSize:13,color:C.gray}}>FY26 Q1 . Updated today</div>}/>
<div className="trg-stat4" style={{marginBottom:32}}>
<StatCard label="Overall confidence" value="69%" sub={"\u2197 +2% this month"} subColor={C.green}/>
<StatCard label="Goals" value="4" sub="3 on track, 1 behind"/>
<StatCard label="Active blockers" value="3" color={C.red} sub="2 overdue" subColor={C.red}/>
<StatCard label="Value at stake" value="$48M" sub="EBITDA impact"/>
</div>
<div className="trg-home-grid">
<div className="trg-home-main">
<Eye>Goal health</Eye>
{strategies.map(function(s){return(<div key={s.id} onClick={function(){setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:14,marginBottom:16,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{width:8,height:8,borderRadius:"50%",background:s.sc==="green"?C.green:C.amber,flexShrink:0}}/><div style={{flex:1,fontSize:17,fontWeight:500,color:C.navy,minWidth:0}}>{s.t}</div><Av i={s.owner} s={20} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
<div style={{display:"flex",gap:24,marginBottom:8,flexWrap:"wrap"}}><div><div style={{fontSize:11,color:C.gray}}>Progress</div><div style={{fontSize:18,fontWeight:500,color:C.navy}}>{s.progress}%</div></div><div><div style={{fontSize:11,color:C.gray}}>Impact</div><div style={{fontSize:18,fontWeight:500,color:C.navy}}>{s.impact}</div></div><div style={{marginLeft:"auto",display:"flex",gap:4}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div></div>
<PB pct={s.progress}/>
</div>);})}
</div>
<div className="trg-home-side">
<Eye><TM s={14}/> AI executive summary</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:14}}>
<div style={{fontSize:15,color:C.navy,lineHeight:1.6,marginBottom:10}}>Three of four plans on track. OpEx dropped 7 confidence points due to vendor blockers. Gross margin has an overdue pricing approval. Recommend escalating both before board review.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:6,padding:8,fontSize:13}}><span style={{fontWeight:500,color:C.red}}>Priority:</span> <span style={{color:C.navy}}>Resolve pricing approval and vendor blockers in 11 days.</span></div>
</div>
<Eye>Confidence trend</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:12}}>
{boardItems.map(function(b){return(<div key={b.t} style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:500,color:C.navy}}>{b.t}</span><span style={{fontSize:17,fontWeight:500,color:b.status==="green"?C.green:C.red}}>{b.conf}%</span></div><PB pct={b.conf} color={b.status==="green"?C.green:C.red}/><div style={{fontSize:12,color:b.conf>b.prev?C.green:C.red,marginTop:3}}>{b.conf>b.prev?"\u2197":"\u2198"} {Math.abs(b.conf-b.prev)} pts vs last week</div></div>);})}
</div>
</div>
</div>
</div>}

{page==="pulse"&&<div>
<PH eyebrow="Board pulse" title="Q1 FY26 Board Digest" right={<div style={{display:"flex",alignItems:"center",gap:8}}><TM s={16}/><span style={{fontSize:13,color:C.tealDk,fontWeight:500}}>AI-generated . Read-only</span></div>}/>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:20}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:8}}>Executive summary</div>
<div style={{fontSize:16,color:"#4a5868",lineHeight:1.8,marginBottom:16}}>Enterprise value creation is progressing with three of four goals on track. Combined EBITDA impact across all plans is $48M. Overall confidence sits at 69%, up 2 points month-over-month. The primary risk area is operational efficiency, which has declined 7 confidence points due to vendor delivery delays. Gross margin expansion is tracking to target but has an overdue pricing approval that requires board awareness.</div>
<div className="trg-pulse-stats">
<StatCard label="Overall confidence" value="69%" sub={"\u2197 +2% MoM"} subColor={C.green}/>
<StatCard label="Plans on track" value="3 of 4" sub="1 behind"/>
<StatCard label="Value at stake" value="$48M" sub="Combined EBITDA"/>
</div>
</div>
<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Confidence by initiative</div>
{boardItems.map(function(b){return(<div key={b.t} style={{background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(b.status==="green"?C.green:C.red),borderRadius:10,padding:20,marginBottom:16}}>
<div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10,flexWrap:"wrap"}}><div style={{fontSize:17,fontWeight:500,color:C.navy,flex:1,minWidth:0}}>{b.t}</div><Av i={b.owner} s={22} bg={b.owner==="JT"?C.gold:b.owner==="MS"?C.red:C.navy} fg={b.owner==="JT"?C.navy:"#fff"}/><div style={{textAlign:"right"}}><div style={{fontSize:24,fontWeight:500,color:b.status==="green"?C.green:C.red}}>{b.conf}%</div><div style={{fontSize:12,color:b.conf>b.prev?C.green:C.red}}>{b.conf>b.prev?"\u2197 +":"\u2198 "}{Math.abs(b.conf-b.prev)} pts</div></div></div>
<PB pct={b.conf} color={b.status==="green"?C.green:C.red} h={6}/>
<div style={{fontSize:14,color:"#4a5868",lineHeight:1.6,marginTop:10}}>{b.note}</div>
</div>);})}
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:20,marginTop:16}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:6}}><TM s={12}/> AI pattern detection</div>
<div className="trg-pulse-patterns">
<div style={{background:C.amberBg,borderRadius:8,padding:12}}><div style={{fontSize:13,fontWeight:500,color:C.amber,marginBottom:4}}>Vendor dependency risk</div><div style={{fontSize:13,color:"#92400e",lineHeight:1.5}}>Two plans have vendor blockers. Cross-plan consolidation may reduce exposure.</div></div>
<div style={{background:C.greenBg,borderRadius:8,padding:12}}><div style={{fontSize:13,fontWeight:500,color:C.green,marginBottom:4}}>Revenue momentum building</div><div style={{fontSize:13,color:"#065f46",lineHeight:1.5}}>Revenue confidence up 3 consecutive weeks. Pipeline is 1.4x target.</div></div>
<div style={{background:C.redBg,borderRadius:8,padding:12}}><div style={{fontSize:13,fontWeight:500,color:C.red,marginBottom:4}}>Approval bottleneck detected</div><div style={{fontSize:13,color:"#7f1d1d",lineHeight:1.5}}>3 actions pending executive approval. Average delay 4 days.</div></div>
<div style={{background:C.tealBg,borderRadius:8,padding:12}}><div style={{fontSize:13,fontWeight:500,color:C.tealDk,marginBottom:4}}>Talent plan ahead of pace</div><div style={{fontSize:13,color:C.tealDk,lineHeight:1.5}}>Hiring 20% ahead of forecast. Front-load onboarding support.</div></div>
</div>
</div>
</div>}


{page==="system"&&<div>
<PH eyebrow="Design system" title="TARGA AI Component Library" right={<div style={{fontSize:13,color:C.gray}}>v1.0 - April 2026</div>}/>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Color palette</div>
<div className="trg-color-grid" style={{marginBottom:32}}>
{[["Navy","#1f476a","Primary"],["Teal","#0eb2af","Secondary"],["Gold","#fbbf24","Accent"],["Green","#059669","Success"],["Amber","#d97706","Warning"],["Red","#dc2626","Danger"],["Gray","#6b7a8a","Neutral"],["Light","#f4f7fa","Background"]].map(function(c){return(
<div key={c[0]} style={{width:120}}>
<div style={{width:"100%",height:56,background:c[1],borderRadius:10,marginBottom:6,border:c[0]==="Light"?"1px solid #d6dee6":"none"}}/>
<div style={{fontSize:14,fontWeight:500,color:C.navy}}>{c[0]}</div>
<div style={{fontSize:12,color:C.gray}}>{c[1]} . {c[2]}</div>
</div>
);})}
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Category tier colors</div>
<div className="trg-tier-grid" style={{marginBottom:32}}>
{[["Strategic","#0eb2af","Plans, objectives"],["Execution","#db2777","Projects, workstreams"],["Action","#fbbf24","Tasks, decisions"],["Measurement","#1f476a","KPIs, metrics"]].map(function(t){return(
<div key={t[0]} style={{background:C.white,border:"1px solid "+C.border,borderLeft:"4px solid "+t[1],borderRadius:10,padding:"14px 18px"}}>
<div style={{fontSize:16,fontWeight:500,color:C.navy,marginBottom:4}}>{t[0]}</div>
<div style={{fontSize:13,color:C.gray}}>{t[2]}</div>
<div style={{fontSize:12,color:t[1],fontWeight:500,marginTop:6}}>{t[1]}</div>
</div>
);})}
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Typography</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:32}}>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:28,fontWeight:500,color:C.navy,marginBottom:8,letterSpacing:"-0.02em"}}>Space Grotesk - Display</div>
<div style={{fontSize:18,fontWeight:500,color:C.navy,marginBottom:4}}>Inter Semibold - Card titles</div>
<div style={{fontSize:16,color:"#4a5868",lineHeight:1.6,marginBottom:4}}>Inter Regular - Body text and descriptions</div>
<div style={{fontSize:13,color:C.gray,marginBottom:4}}>Inter - Small labels and metadata</div>
<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase"}}>Inter Medium - Section headers (uppercase, tracked)</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Status pills</div>
<div style={{display:"flex",gap:12,marginBottom:32,flexWrap:"wrap",alignItems:"center"}}>
<Pl c="green">ON TRACK</Pl>
<Pl c="amber">BEHIND</Pl>
<Pl c="red">BLOCKER</Pl>
<Pl c="amber">{"\u25B3"} RISK</Pl>
<Pl c="green">{"\u2197"} ON TRACK</Pl>
<Pl c="navy">OPERATIONAL</Pl>
<Pl c="teal">Q1 2026</Pl>
<Pl c="red">OVERDUE</Pl>
<Pl c="amber">AT RISK</Pl>
<Pl c="green">{"\u2713"} RESOLVED</Pl>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>TARGA brand marks</div>
<div className="trg-mark-row" style={{marginBottom:32}}>
<div style={{textAlign:"center"}}>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:20,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center"}}><TM s={40}/></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>Intelligence</div>
<div style={{fontSize:12,color:C.gray}}>Teal accent</div>
</div>
<div style={{textAlign:"center"}}>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:20,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center"}}><TM v="a" s={40}/></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>Ask TARGA</div>
<div style={{fontSize:12,color:C.gray}}>Gold accent</div>
</div>
<div style={{textAlign:"center"}}>
<div style={{background:C.navy,border:"1px solid "+C.navy,borderRadius:12,padding:20,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center"}}><TML s={40}/></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>On dark</div>
<div style={{fontSize:12,color:C.gray}}>White + teal</div>
</div>
<div style={{textAlign:"center"}}>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:20,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="40" height="40" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>Full mark</div>
<div style={{fontSize:12,color:C.gray}}>Navy + teal</div>
</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Object type icons</div>
<div className="trg-icon-row" style={{marginBottom:32}}>
{[["Goal",<SI s={24}/>],["Initiative",<PI s={24}/>],["Action",<AI s={24}/>],["Metric",<MI s={24}/>],["Timeline",<TI s={24}/>],["External",<XI s={24}/>]].map(function(ic,idx){return(
<div key={idx} style={{textAlign:"center"}}>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:16,marginBottom:6,display:"flex",alignItems:"center",justifyContent:"center",width:56,height:56}}>{ic[1]}</div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>{ic[0]}</div>
</div>
);})}
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Avatars</div>
<div className="trg-icon-row" style={{marginBottom:32,gap:16}}>
{[["JT",C.gold,C.navy,"Joe Thompson"],["KM",C.teal,"#fff","Kyle Moyer"],["MS",C.red,"#fff","Mark Sternberger"],["SD",C.navy,"#fff","Sarah Darlington"],["BA",C.navy,"#fff","Bill Adams"]].map(function(a){return(
<div key={a[0]} style={{textAlign:"center"}}>
<div style={{marginBottom:6,display:"flex",justifyContent:"center"}}><Av i={a[0]} bg={a[1]} fg={a[2]} s={36}/></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy}}>{a[3]}</div>
</div>
);})}
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Card treatments</div>
<div className="trg-init-row" style={{marginBottom:32,gap:20}}>
<div style={{flex:1}}>
<div style={{fontSize:13,fontWeight:500,color:C.gray,marginBottom:8}}>B treatment - Accent rail</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderLeft:"4px solid "+C.teal,borderRadius:10,padding:"14px 18px"}}>
<div style={{fontSize:16,fontWeight:500,color:C.navy,marginBottom:4}}>Workhorse card</div>
<div style={{fontSize:14,color:C.gray}}>Used for list items, metrics, actions, child items. Rail color encodes category tier.</div>
</div>
</div>
<div style={{flex:1}}>
<div style={{fontSize:13,fontWeight:500,color:C.gray,marginBottom:8}}>C treatment - Navy header</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden"}}>
<div style={{background:C.navy,padding:"8px 14px",display:"flex",alignItems:"center",gap:8}}><TML s={14}/><span style={{fontSize:12,fontWeight:500,letterSpacing:1,color:"#fff",textTransform:"uppercase"}}>Focal card</span></div>
<div style={{padding:"14px 18px"}}><div style={{fontSize:16,fontWeight:500,color:C.navy,marginBottom:4}}>Primary item</div><div style={{fontSize:14,color:C.gray}}>Reserved for the item being actively managed. One per screen.</div></div>
</div>
</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Progress bars</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:32}}>
<div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
<div style={{flex:"1 1 240px",minWidth:0}}>
<div style={{fontSize:13,color:C.gray,marginBottom:8}}>On track (teal)</div>
<PB pct={68} h={6} color={C.teal}/>
<div style={{marginTop:16,fontSize:13,color:C.gray,marginBottom:8}}>Behind (amber)</div>
<PB pct={31} h={6} color={C.amber}/>
<div style={{marginTop:16,fontSize:13,color:C.gray,marginBottom:8}}>Critical (red)</div>
<PB pct={15} h={6} color={C.red}/>
</div>
<div style={{flex:"1 1 240px",minWidth:0}}>
<div style={{fontSize:13,color:C.gray,marginBottom:8}}>Thin variant (3px)</div>
<PB pct={72} h={3}/>
<div style={{marginTop:16,fontSize:13,color:C.gray,marginBottom:8}}>Standard (5px)</div>
<PB pct={54} h={5}/>
<div style={{marginTop:16,fontSize:13,color:C.gray,marginBottom:8}}>Prominent (8px)</div>
<PB pct={45} h={8} color={C.amber}/>
</div>
</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Odometer numbers</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:32}}>
<div style={{display:"flex",gap:32,alignItems:"baseline",flexWrap:"wrap"}}>
<div><div style={{fontSize:12,color:C.gray,marginBottom:4}}>Progress</div><div style={{fontSize:32,fontWeight:500,color:C.navy}}><Odo value={62} suffix="%" dur={1.2}/></div></div>
<div><div style={{fontSize:12,color:C.gray,marginBottom:4}}>Actions</div><div style={{fontSize:32,fontWeight:500,color:C.navy}}><Odo value={3} suffix=" open" dur={1.0}/></div></div>
<div><div style={{fontSize:12,color:C.gray,marginBottom:4}}>Review in</div><div style={{fontSize:32,fontWeight:500,color:C.amber}}><Odo value={9} suffix=" days" dur={1.0}/></div></div>
<div><div style={{fontSize:12,color:C.gray,marginBottom:4}}>Confidence</div><div style={{fontSize:32,fontWeight:500,color:C.green}}><Odo value={72} suffix="%" dur={1.4}/></div></div>
</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>TARGA Intelligence panel</div>
<div className="trg-init-row" style={{marginBottom:32,gap:20}}>
<div style={{flex:"1 1 280px",minWidth:0,maxWidth:400}}>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:0.5,color:C.tealDk,textTransform:"uppercase",marginBottom:8}}>Suggestions</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:10,marginBottom:6}}><div style={{fontSize:14,fontWeight:500,color:C.navy,marginBottom:2}}>Suggestion title</div><div style={{fontSize:13,color:C.gray}}>Brief context and recommended action.</div></div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:10}}><div style={{fontSize:14,fontWeight:500,color:C.green,marginBottom:2}}>{"\u2713"} Resolved item</div><div style={{fontSize:13,color:C.gray}}>Confirmation after cascade completion.</div></div>
</div>
</div>
<div style={{flex:"1 1 280px",minWidth:0,maxWidth:400}}>
<div style={{background:C.greenBg,border:"1px solid #a7f3d0",borderRadius:10,padding:14}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:0.5,color:C.green,textTransform:"uppercase",marginBottom:6,display:"flex",alignItems:"center",gap:5}}><TM s={11}/> Cascade impact</div>
<div style={{fontSize:14,color:"#065f46",lineHeight:1.6}}>Appears after a cascade completion event. Shows upstream effects of the action taken.</div>
</div>
</div>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Stat cards</div>
<div className="trg-stat4" style={{marginBottom:32}}>
<StatCard label="Default" value="69%" sub={"\u2197 +2% this month"} subColor={C.green}/>
<StatCard label="Warning" value="11 days" color={C.amber} sub="Q1 materials due"/>
<StatCard label="Danger" value="3" color={C.red} sub="2 overdue" subColor={C.red}/>
<StatCard label="Neutral" value="$48M" sub="EBITDA impact"/>
</div>

<div style={{fontSize:12,fontWeight:500,letterSpacing:1.2,color:C.tealDk,textTransform:"uppercase",marginBottom:14}}>Spacing and layout rules</div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:24,marginBottom:32}}>
<div className="trg-pulse-patterns" style={{gap:20}}>
<div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:8}}>Three-column orbital</div>
<div style={{fontSize:14,color:C.gray,lineHeight:1.6}}>Metrics (220px) | Focal card (flex) | Actions (250px). Center column holds the item being managed. Left and right columns provide supporting context.</div>
</div>
<div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:8}}>Progressive disclosure</div>
<div style={{fontSize:14,color:C.gray,lineHeight:1.6}}>Orbital = what you see. Bottom tabs = what you reach for. Every detail is one tap away, never cluttering the working view.</div>
</div>
<div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:8}}>Card gap system</div>
<div style={{fontSize:14,color:C.gray,lineHeight:1.6}}>8px within groups. 16px between cards. 24px between sections. 32px between major zones. Consistent rhythm throughout.</div>
</div>
<div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,marginBottom:8}}>Border radius scale</div>
<div style={{fontSize:14,color:C.gray,lineHeight:1.6}}>4px for pills. 6px for inputs. 8px for inner cards. 10px for standard cards. 12px for containers. Consistent rounding.</div>
</div>
</div>
</div>

<div style={{textAlign:"center",padding:"16px 0",fontSize:13,color:C.gray}}>TARGA AI Design System . HyperBrand Creative . April 2026</div>
</div>}

</div>
</div>
);
}
