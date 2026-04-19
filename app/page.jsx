"use client";
import { useState, useRef, useEffect } from "react";

var C = { navy: "#1f476a", teal: "#0eb2af", gold: "#fbbf24", gray: "#6b7a8a", light: "#f4f7fa", white: "#fff", border: "#d6dee6", subtle: "#e6ecf2", bg2: "#f4f6f8", tealBg: "#e6f7f7", tealBd: "#b8e8e7", tealDk: "#076c69", green: "#059669", greenBg: "#ecfdf5", amber: "#d97706", amberBg: "#fef3c7", red: "#dc2626", redBg: "#fef2f2", navyLt: "#dde6ef", pinkDk: "#8a3560" };

// Motion vocabulary - three tiers, two easings. Every transition uses one of these.
var M = {
  // Standard easing - decisive, confident. Use for most transitions.
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Expressive easing - eases out strongly. Use for moments of consequence (odometer, progress, cascades).
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Tier 1: Micro (hover, tabs, chips, focus, nav)
  micro: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
  // Tier 2: Reveal (expand/collapse, modal entrance)
  reveal: "all 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
  // Tier 3: Expressive (odometer, progress fills, state cascades)
  expressive: "all 1.4s cubic-bezier(0.23, 1, 0.32, 1)"
};

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
{id:"sp1",t:"Expand gross margin by 300bps",status:"ON TRACK",sc:"green",risk:true,progress:54,owner:"JT",name:"Joe Thompson",role:"CEO",impact:"$24M EBITDA",actions:4,blocker:true},
{id:"sp2",t:"Accelerate revenue growth",status:"ON TRACK",sc:"green",risk:false,progress:68,owner:"BA",name:"Bill Adams",role:"Chairman",impact:"$18M ARR",actions:3,blocker:false},
{id:"sp3",t:"Drive operational efficiency",status:"BEHIND",sc:"amber",risk:true,progress:31,owner:"MS",name:"Mark Sternberger",role:"COO",impact:"$6M OpEx",actions:5,blocker:true},
{id:"sp4",t:"Strengthen talent pipeline",status:"ON TRACK",sc:"green",risk:false,progress:72,owner:"SD",name:"Sarah Darlington",role:"CPO",impact:"Key hires",actions:2,blocker:false}
];

var goalContent={
sp1:{
t:"Expand gross margin by 300bps",
desc:"Drive 300 basis points of gross margin expansion across tier-1 product lines through COGS reduction, price realization, and channel mix optimization.",
ownerInit:"JT",ownerName:"Joe Thompson",ownerRole:"CEO",ownerBg:"gold",
dates:"Jan 6 \u2192 Mar 31, 2026",
impact:"$24M",progress:54,actionCount:4,reviewDays:11,
initiatives:[
{t:"Reduce COGS tier-1",s:"BLOCKER",sc:"red",av:"KM",ownerName:"Kyle Moyer",ownerRole:"VP Operations",desc:"Renegotiate tier-1 supplier contracts to reduce COGS by $8M. Apex Logistics is the primary exposure.",prog:40,impact:"$8M COGS",actions:4,reviewDays:11,blocker:true},
{t:"Price realization",s:"BLOCKED",sc:"amber",av:"SD",ownerName:"Sarah Darlington",ownerRole:"CPO",desc:"Implement pricing adjustments across product lines for +2.1% realization. Last three deals closed 1.8% below list.",prog:66,impact:"+2.1pp margin",actions:3,reviewDays:14,blocker:false},
{t:"Channel mix optimization",s:"BEHIND",sc:"amber",av:"MS",ownerName:"Mark Sternberger",ownerRole:"COO",desc:"Optimize channel partner mix to improve margin contribution. Three partner interviews scheduled this month.",prog:28,impact:"$4M margin lift",actions:5,reviewDays:21,blocker:true}
],
metrics:[
{l:"Gross margin %",v:"39.8%",tc:"amber",trend:"\u2197 +0.4pp QoQ",src:"netsuite",pts:[38.2,38.4,38.3,38.9,39.1,39.4,39.6,39.8]},
{l:"COGS tier-1",v:"$18.2M",tc:"amber",trend:"\u2198 $8M target",src:"sap",pts:[19.8,19.4,19.1,18.9,18.7,18.5,18.3,18.2]},
{l:"Price realization",v:"98.2%",tc:"green",trend:"\u2197 +0.6pp",src:"sf",pts:[97.1,97.3,97.2,97.4,97.6,97.8,98.0,98.2]}
],
metricTarget:"Target: 42.3% (300bps)",
actions:[
{t:"Review Q1 margin variance",i:"KM",bg:"teal",fg:"#fff",d:"Apr 22",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Quarterly margin variance review with finance. Compare actual performance against 300bps target.",subs:["Pull NetSuite actuals","Prepare variance bridge","Schedule finance sync"]},
{t:"Interview channel partners",i:"SD",bg:"navy",fg:"#fff",d:"May 1",s:"ON TRACK",sc:"green",bc:"#d49a0f",desc:"Conduct interviews with three key channel partners to assess mix optimization opportunities.",subs:["Schedule partner A","Schedule partner B","Schedule partner C"]},
{t:"Validate supplier scope",i:"MS",bg:"navy",fg:"#fff",d:"May 8",s:"AT RISK",sc:"amber",bc:"#d49a0f",desc:"Define scope for supplier contract renegotiations targeting tier-1 COGS reduction.",subs:["Identify top 5 suppliers","Set target reduction %","Draft negotiation brief"]}
],
blockerAction:"Approve pricing model",
hasBlocker:true,
hasCascadeDemo:true,
askContext:"Expand gross margin by 300bps is the focal goal, currently 54% progress, $24M EBITDA impact. Gross margin is 39.8% vs 42.3% target. Three initiatives: Reduce COGS tier-1 (40% progress, blocker with Apex Logistics supplier), Price realization (66% progress, last three deals closed 1.8% below list), Channel mix optimization (28% progress, behind). Mark Sternberger (COO) flagged the supplier issue Monday. Board review in 11 days."
},
sp2:{
t:"Accelerate revenue growth",
desc:"Drive $18M ARR growth through EMEA market expansion, enterprise pipeline acceleration, and upsell motion into installed base.",
ownerInit:"BA",ownerName:"Bill Adams",ownerRole:"Chairman",ownerBg:"navy",
dates:"Jan 1 \u2192 Dec 31, 2026",
impact:"$18M",progress:68,actionCount:3,reviewDays:14,
initiatives:[
{t:"EMEA market launch",s:"ON TRACK",sc:"green",av:"SD",ownerName:"Sarah Darlington",ownerRole:"CPO",desc:"Launch in UK, Germany, and Netherlands by Q2. Team hired. Marketing engine live.",prog:72,impact:"$7M ARR",actions:4,reviewDays:28,blocker:false},
{t:"Enterprise pipeline",s:"ON TRACK",sc:"green",av:"JT",ownerName:"Joe Thompson",ownerRole:"CEO",desc:"Expand enterprise segment. 34 opportunities in Q2 pipeline, $12M weighted value.",prog:61,impact:"$8M ARR",actions:3,reviewDays:14,blocker:false},
{t:"Upsell existing accounts",s:"BEHIND",sc:"amber",av:"KM",ownerName:"Kyle Moyer",ownerRole:"VP Operations",desc:"Drive expansion revenue from installed base. 22% of target achieved at month 4.",prog:38,impact:"$3M ARR",actions:5,reviewDays:30,blocker:false}
],
metrics:[
{l:"Quarterly ARR",v:"$72.4M",tc:"green",trend:"\u2197 +12% YoY",src:"netsuite",pts:[64.1,65.8,67.2,68.5,69.8,70.9,71.7,72.4]},
{l:"Pipeline coverage",v:"3.2x",tc:"green",trend:"\u2197 +0.4x QoQ",src:"sf",pts:[2.6,2.7,2.8,2.9,3.0,3.1,3.1,3.2]},
{l:"Win rate",v:"34.1%",tc:"green",trend:"\u2197 +2.8pp",src:"sf",pts:[30.2,30.9,31.4,32.1,32.8,33.2,33.7,34.1]}
],
metricTarget:"Target: $90M ARR by year end",
actions:[
{t:"EMEA hiring plan finalization",i:"SD",bg:"navy",fg:"#fff",d:"Apr 25",s:"ON TRACK",sc:"green",bc:"#14B8A6",desc:"Close on three key EMEA hires: RVP UK, RVP DACH, and Marketing Director.",subs:["Final round UK RVP","Offer out to DACH candidate","Marketing Director shortlist"]},
{t:"Q2 enterprise QBR prep",i:"JT",bg:"gold",fg:"navy",d:"May 5",s:"ON TRACK",sc:"green",bc:"#14B8A6",desc:"Prepare Q2 enterprise quarterly business review with top 10 accounts.",subs:["Pull account health","Draft exec briefings","Schedule review sessions"]},
{t:"Upsell playbook refresh",i:"KM",bg:"teal",fg:"#fff",d:"May 12",s:"AT RISK",sc:"amber",bc:"#14B8A6",desc:"Refresh upsell playbook to address installed base expansion gap. Current motion underperforming.",subs:["Audit current plays","Interview CSMs","Draft new playbook"]}
],
hasBlocker:false,
hasCascadeDemo:false,
askContext:"Accelerate revenue growth is the focal goal, currently 68% progress, $18M ARR impact. Pipeline coverage is 3.2x, win rate is 34.1%. Three initiatives: EMEA market launch (72% progress, on track), Enterprise pipeline (61% progress, on track), Upsell existing accounts (38% progress, behind). Owner is Bill Adams (Chairman). Reporting cycle covers full FY26."
},
sp3:{
t:"Drive operational efficiency",
desc:"Reduce operating expense by $6M through vendor consolidation, process automation, and functional realignment. OpEx ratio needs to drop below 28%.",
ownerInit:"MS",ownerName:"Mark Sternberger",ownerRole:"COO",ownerBg:"red",
dates:"Jan 15 \u2192 Sep 30, 2026",
impact:"$6M",progress:31,actionCount:5,reviewDays:18,
initiatives:[
{t:"Vendor consolidation",s:"BLOCKER",sc:"red",av:"MS",ownerName:"Mark Sternberger",ownerRole:"COO",desc:"Consolidate 47 vendors to target list of 18. Legal review blocking two key contracts.",prog:22,impact:"$2.8M savings",actions:6,reviewDays:18,blocker:true},
{t:"Process automation wave 1",s:"BEHIND",sc:"amber",av:"KM",ownerName:"Kyle Moyer",ownerRole:"VP Operations",desc:"Automate finance close, AP workflow, and procurement routing. Phase 1 covers 3 of 7 processes.",prog:34,impact:"$1.8M savings",actions:4,reviewDays:42,blocker:false},
{t:"Functional realignment",s:"AT RISK",sc:"amber",av:"SD",ownerName:"Sarah Darlington",ownerRole:"CPO",desc:"Restructure three functions to eliminate duplicative roles. HR review in progress.",prog:37,impact:"$1.4M savings",actions:3,reviewDays:21,blocker:false}
],
metrics:[
{l:"OpEx ratio",v:"31.4%",tc:"amber",trend:"\u2198 -0.6pp QoQ",src:"netsuite",pts:[33.1,32.8,32.4,32.1,31.9,31.7,31.5,31.4]},
{l:"Vendor count",v:"47",tc:"amber",trend:"\u2198 -8 from peak",src:"sap",pts:[55,54,52,51,50,49,48,47]},
{l:"Automation coverage",v:"43%",tc:"amber",trend:"\u2197 +8pp QoQ",src:"conf",pts:[28,32,35,37,39,41,42,43]}
],
metricTarget:"Target: OpEx ratio < 28%",
actions:[
{t:"Escalate vendor legal review",i:"MS",bg:"red",fg:"#fff",d:"Apr 20",s:"AT RISK",sc:"amber",bc:"#dc2626",desc:"Two vendor contracts stuck in legal review for three weeks. Escalate to GC for resolution.",subs:["Schedule GC meeting","Prep redline summary","Set 5-day turnaround"]},
{t:"Automation wave 2 scoping",i:"KM",bg:"teal",fg:"#fff",d:"May 5",s:"ON TRACK",sc:"green",bc:"#14B8A6",desc:"Scope wave 2 automation targeting procurement and expense management workflows.",subs:["Process inventory","Vendor selection","Business case"]},
{t:"HR realignment approvals",i:"SD",bg:"navy",fg:"#fff",d:"May 10",s:"AT RISK",sc:"amber",bc:"#d49a0f",desc:"Close on three functional realignment proposals pending HR and legal sign-off.",subs:["Finance realignment","Ops realignment","Marketing realignment"]}
],
hasBlocker:false,
hasCascadeDemo:false,
askContext:"Drive operational efficiency is the focal goal, currently 31% progress, $6M OpEx impact. OpEx ratio is 31.4%, target is below 28%. Three initiatives: Vendor consolidation (22% progress, blocker with legal review), Process automation wave 1 (34% progress, behind), Functional realignment (37% progress, at risk). Owner is Mark Sternberger (COO). Confidence dropped 7 points last week."
},
sp4:{
t:"Strengthen talent pipeline",
desc:"Build a differentiated talent engine through senior hiring, succession planning, and internal mobility programs. Five key hires anchor the roadmap.",
ownerInit:"SD",ownerName:"Sarah Darlington",ownerRole:"CPO",ownerBg:"navy",
dates:"Jan 1 \u2192 Jun 30, 2026",
impact:"5 key hires",progress:72,actionCount:2,reviewDays:24,
initiatives:[
{t:"Senior hires wave 1",s:"ON TRACK",sc:"green",av:"SD",ownerName:"Sarah Darlington",ownerRole:"CPO",desc:"Close VP Engineering, VP Product, and VP Finance roles. Three offers out, one verbal accept.",prog:80,impact:"3 of 5 hires",actions:3,reviewDays:24,blocker:false},
{t:"Succession planning",s:"ON TRACK",sc:"green",av:"JT",ownerName:"Joe Thompson",ownerRole:"CEO",desc:"Document succession plans for all executive roles. Board review scheduled Q2.",prog:68,impact:"Full exec coverage",actions:2,reviewDays:35,blocker:false},
{t:"Internal mobility program",s:"ON TRACK",sc:"green",av:"KM",ownerName:"Kyle Moyer",ownerRole:"VP Operations",desc:"Launch formal internal mobility program to retain and develop high-potential talent.",prog:55,impact:"20% internal fills",actions:2,reviewDays:60,blocker:false}
],
metrics:[
{l:"Key hires filled",v:"3 / 5",tc:"green",trend:"\u2197 2 closed Q1",src:"gs",pts:[0,0,1,1,2,2,3,3]},
{l:"Time to hire",v:"38d",tc:"green",trend:"\u2198 -12d QoQ",src:"gs",pts:[50,48,46,44,42,41,39,38]},
{l:"Offer accept rate",v:"82%",tc:"green",trend:"\u2197 +8pp QoQ",src:"gs",pts:[72,74,75,77,78,80,81,82]}
],
metricTarget:"Target: 5 key hires by June 30",
actions:[
{t:"Close VP Engineering offer",i:"SD",bg:"navy",fg:"#fff",d:"Apr 25",s:"ON TRACK",sc:"green",bc:"#14B8A6",desc:"Final compensation negotiation with preferred candidate. Verbal accept in place, formal offer pending.",subs:["Comp package finalization","Reference checks","Start date confirmation"]},
{t:"Q2 board succession review prep",i:"JT",bg:"gold",fg:"navy",d:"May 15",s:"ON TRACK",sc:"green",bc:"#14B8A6",desc:"Prepare succession planning document for Q2 board review. Coverage required for all exec roles.",subs:["Role-by-role drafts","Board pre-read","Discussion guide"]}
],
hasBlocker:false,
hasCascadeDemo:false,
askContext:"Strengthen talent pipeline is the focal goal, currently 72% progress. Three of five key hires closed. Time to hire down to 38 days from 50. Three initiatives: Senior hires wave 1 (80% progress, on track), Succession planning (68% progress, on track), Internal mobility (55% progress, on track). Owner is Sarah Darlington (CPO)."
}
};

var boardItems=[
{t:"Gross margin expansion",conf:72,prev:68,status:"green",owner:"JT",name:"Joe Thompson",role:"CEO",note:"COGS blocker being resolved. Price realization on track."},
{t:"Revenue acceleration",conf:81,prev:79,status:"green",owner:"BA",name:"Bill Adams",role:"Chairman",note:"Pipeline ahead of target. EMEA launch on schedule."},
{t:"Operational efficiency",conf:45,prev:52,status:"red",owner:"MS",name:"Mark Sternberger",role:"COO",note:"Two blockers active. Vendor delays impacting timeline."},
{t:"Talent pipeline",conf:78,prev:75,status:"green",owner:"SD",name:"Sarah Darlington",role:"CPO",note:"3 of 5 key hires completed. Remaining positions in final round."}
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
var sicS=useState(null);var selItemCtx=sicS[0];var setSelItemCtx=sicS[1];
var sgcS=useState("sp1");var selGoalCtx=sgcS[0];var setSelGoalCtx=sgcS[1];
var cvS=useState("hierarchy");var cascadeView=cvS[0];var setCascadeView=cvS[1];
var kmtS=useState("green");var kanbanMobileTab=kmtS[0];var setKanbanMobileTab=kmtS[1];
var qaS=useState(false);var quickAddOpen=qaS[0];var setQuickAddOpen=qaS[1];
var G=goalContent[selGoalCtx]||goalContent.sp1;

useEffect(function(){var s=document.createElement("style");s.textContent=[
"@keyframes fu{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}",
"@keyframes pu{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}",
"@keyframes trg-tri{0%,100%{opacity:0.25;transform:translateY(2px) scale(0.9)}50%{opacity:1;transform:translateY(0) scale(1)}}",
"@keyframes trg-page{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}",
"@keyframes qaslide{from{transform:translateX(100%)}to{transform:translateX(0)}}",
".trg-cube-stage{width:72px;height:72px;perspective:280px;flex-shrink:0}",
".trg-cube-mini-stage{display:none;width:28px;height:28px;perspective:120px;position:absolute;top:-2px;right:-2px;z-index:10}",
".trg-cube-mini{position:relative;width:100%;height:100%;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(-28deg);transition:transform 0.5s cubic-bezier(0.23,1,0.32,1)}",
".trg-cube-mini.kanban{transform:rotateX(-20deg) rotateY(-118deg)}",
".trg-cube-mini.timeline{transform:rotateX(-20deg) rotateY(-208deg)}",
".trg-cube-mini.people{transform:rotateX(-20deg) rotateY(-298deg)}",
".trg-cube-mini-face{position:absolute;width:28px;height:28px}",
".trg-cube-mini-face.front{transform:translateZ(14px)}",
".trg-cube-mini-face.right{transform:rotateY(90deg) translateZ(14px)}",
".trg-cube-mini-face.back{transform:rotateY(180deg) translateZ(14px)}",
".trg-cube-mini-face.left{transform:rotateY(-90deg) translateZ(14px)}",
".trg-cube-mini-face.top{transform:rotateX(90deg) translateZ(14px)}",
".trg-cube-mini-face.bottom{transform:rotateX(-90deg) translateZ(14px)}",
".trg-cube{position:relative;width:100%;height:100%;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(-28deg);transition:transform 0.5s cubic-bezier(0.23,1,0.32,1)}",
".trg-cube.kanban{transform:rotateX(-20deg) rotateY(-118deg)}",
".trg-cube.timeline{transform:rotateX(-20deg) rotateY(-208deg)}",
".trg-cube.people{transform:rotateX(-20deg) rotateY(-298deg)}",
".trg-cube-face{position:absolute;width:72px;height:72px;display:flex;align-items:center;justify-content:center}",
".trg-cube-face.front{transform:translateZ(36px)}",
".trg-cube-face.right{transform:rotateY(90deg) translateZ(36px)}",
".trg-cube-face.back{transform:rotateY(180deg) translateZ(36px)}",
".trg-cube-face.left{transform:rotateY(-90deg) translateZ(36px)}",
".trg-cube-face.top{transform:rotateX(90deg) translateZ(36px)}",
".trg-cube-face.bottom{transform:rotateX(-90deg) translateZ(36px)}",
".trg-page{animation:trg-page 0.3s cubic-bezier(0.4,0,0.2,1)}",
".trg-lift{transition:transform 0.18s cubic-bezier(0.4,0,0.2,1), box-shadow 0.18s cubic-bezier(0.4,0,0.2,1), border-color 0.18s cubic-bezier(0.4,0,0.2,1)}",
".trg-lift:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(31,71,106,0.08), 0 0 0 0.5px rgba(31,71,106,0.04) !important;border-color:#c6d1dc !important}",
".trg-lift:active{transform:translateY(0)}",
".trg-press{transition:transform 0.1s cubic-bezier(0.4,0,0.2,1), background 0.18s cubic-bezier(0.4,0,0.2,1), opacity 0.18s cubic-bezier(0.4,0,0.2,1)}",
".trg-press:active{transform:scale(0.97)}",
".trg-chip{transition:all 0.18s cubic-bezier(0.4,0,0.2,1)}",
".trg-chip:hover{border-color:#0eb2af !important;color:#0eb2af !important;background:#e6f7f7 !important}",
".trg-nav{transition:background 0.18s cubic-bezier(0.4,0,0.2,1)}",
".trg-nav:hover{background:#f4f7fa}",
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
".trg-ph-title{font-size:30px}",
".trg-hero-headline{font-size:28px}",
".trg-focal-title{font-size:36px}",
".trg-focal-num{font-size:28px}",
".trg-hero-num{font-size:42px}",
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
".trg-main [style*=\"font-size: 10px\"]{font-size:12px !important}",
".trg-main [style*=\"font-size: 11px\"]{font-size:13px !important}",
".trg-main [style*=\"font-size: 12px\"]{font-size:14px !important}",
".trg-main [style*=\"font-size: 13px\"]{font-size:15px !important}",
".trg-main [style*=\"font-size: 14px\"]{font-size:16px !important}",
".trg-main [style*=\"font-size: 15px\"]{font-size:17px !important}",
".trg-ph-title{font-size:26px}",
".trg-hero{flex-direction:column;align-items:stretch;gap:16px;padding:20px 20px}",
".trg-hero-divider{display:none}",
".trg-hero-metrics{flex-direction:row;min-width:0;gap:20px;padding-top:16px;border-top:1px solid #e6ecf2}",
".trg-hero-metrics > div{flex:1}",
".trg-hero-headline{font-size:24px}",
".trg-hero-num{font-size:36px}",
".trg-focal-title{font-size:28px}",
".trg-focal-num{font-size:24px}",
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
".trg-view-tabs{flex-wrap:wrap;gap:6px;justify-content:flex-start;margin-top:8px}",
".trg-view-tabs > div{padding:5px 10px !important;font-size:12px !important}",
".trg-kanban-grid{grid-template-columns:minmax(0,1fr) !important;gap:10px !important}",
".trg-kanban-col-hidden-mobile{display:none !important}",
".trg-kanban-mobile-tabs{display:flex !important}",
".trg-cube-bar{display:none !important}",
".trg-cube-mini-stage{display:block !important}",
".trg-strategy-page{position:relative}",
".trg-breadcrumb-replay{display:none}",
".trg-tab-labels span{display:none}",
".trg-kanban-grid{grid-template-columns:minmax(0, 1fr) !important}",
".trg-kanban-mobile-tabs{display:flex !important}",
".trg-kanban-col-hidden-mobile{display:none !important}",
".trg-cube-bar{flex-direction:column !important;align-items:flex-start !important;gap:12px !important}",
".trg-cube-bar-meta{text-align:left !important;min-width:0 !important}",
".trg-vp-grid{grid-template-columns:minmax(0, 1fr) !important}",
".trg-qa-panel{width:100vw !important;max-width:100vw !important}",
"}"
].join("");document.head.appendChild(s);return function(){s.remove();};},[]);
useEffect(function(){if(chatRef.current)chatRef.current.scrollTop=chatRef.current.scrollHeight;},[msgs,chatLoading]);
useEffect(function(){window.scrollTo(0,0);},[page]);
useEffect(function(){setMsgs([]);},[selGoalCtx]);

function fire(){if(phase>0)return;setPhase(1);setTimeout(function(){setPhase(2);},700);setTimeout(function(){setPhase(3);},1400);setTimeout(function(){setPhase(4);},2100);setTimeout(function(){setPhase(5);setPulse(true);},2700);setTimeout(function(){setPulse(false);},4500);}
function reset(){setPhase(0);setPulse(false);}
var progress=phase>=3?62:54;
var actionCount=phase>=3?3:4;
var showRisk=phase<4;
var showBlocker=phase<2;
var completed=phase>=1;

function buildSys(){return "You are TARGA AI speaking to Joe Thompson, CEO of Targatek Inc. You are a strategic execution platform, not a chatbot. Tone: executive, direct, premise-led. Your output should read like a COO's briefing memo. No sycophancy, no generic AI preambles (never start with 'Let me help' or 'Here is' or 'Great question').\n\nContext about the business: "+G.askContext+"\n\nRules: Keep responses 2-3 sentences maximum. Use specific numbers and names. No em-dashes, ever. Use periods or commas instead. No emoji. No markdown formatting. No bullet lists unless explicitly asked. Dollar amounts in short form: $12.4M not $12,400,000. Never use the words task, ticket, sprint, assignee, or project. Use initiative, action, owner instead.";}

function sendChat(){
if(!chatIn.trim()||chatLoading)return;var q=chatIn.trim();setChatIn("");setMsgs(function(p){return p.concat([{role:"user",text:q}]);});setChatLoading(true);
fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:400,system:buildSys(),messages:[{role:"user",content:q}]})}).then(function(r){return r.json();}).then(function(d){var txt=d.content?d.content.map(function(b){return b.text||"";}).join(""):"Could not process.";setMsgs(function(p){return p.concat([{role:"assistant",text:txt}]);});setChatLoading(false);}).catch(function(){setMsgs(function(p){return p.concat([{role:"assistant",text:"Let me pull that from the live data. One moment."}]);});setChatLoading(false);});
}

function askPreset(q){
if(chatLoading)return;setMsgs(function(p){return p.concat([{role:"user",text:q}]);});setChatLoading(true);
fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:400,system:buildSys(),messages:[{role:"user",content:q}]})}).then(function(r){return r.json();}).then(function(d){var txt=d.content?d.content.map(function(b){return b.text||"";}).join(""):"Could not process.";setMsgs(function(p){return p.concat([{role:"assistant",text:txt}]);});setChatLoading(false);}).catch(function(){setMsgs(function(p){return p.concat([{role:"assistant",text:"Let me pull that from the live data. One moment."}]);});setChatLoading(false);});
}

function NI(p){return(<div className="trg-nav" onClick={function(){setPage(p.pg);setSelItemCtx(null);}} style={{width:40,height:40,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:page===p.pg?C.tealBg:"transparent",cursor:"pointer"}} title={p.title}>{p.pg==="cascade"?<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3 L21 7.5 L21 16.5 L12 21 L3 16.5 L3 7.5 Z" fill="none" stroke={page===p.pg?C.navy:"#8b99a8"} strokeWidth="1.2" strokeLinejoin="miter"/><path d="M12 3 L12 21" stroke={page===p.pg?C.navy:"#8b99a8"} strokeWidth="1.2"/><path d="M3 7.5 L12 12 L21 7.5" stroke={page===p.pg?C.navy:"#8b99a8"} strokeWidth="1.2" strokeLinejoin="miter" fill="none"/><path d="M3 7.5 L12 12 L12 21 L3 16.5 Z" fill={C.teal} fillOpacity={page===p.pg?0.9:0.55}/><path d="M12 3 L21 7.5 L12 12 Z" fill="#f4f7fa"/><path d="M21 7.5 L21 16.5 L12 21 L12 12 Z" fill="#db2777" fillOpacity={page===p.pg?0.9:0.55}/></svg>:<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={p.d} stroke={page===p.pg?C.teal:C.gray} strokeWidth="1.8" strokeLinecap="square"/></svg>}</div>);}

function PH(p){return(<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:18,borderBottom:"1px solid "+C.border,marginBottom:18,gap:12,flexWrap:"wrap"}}><div style={{minWidth:0}}><div style={{fontSize:12,fontWeight:500,letterSpacing:1.5,color:C.teal,textTransform:"uppercase",marginBottom:2}}>{p.eyebrow}</div><div className="trg-ph-title" style={{fontWeight:500,color:C.navy,fontFamily:"Space Grotesk, sans-serif",letterSpacing:"-0.02em"}}>{p.title}</div></div>{p.right&&<div>{p.right}</div>}</div>);}

return(
<div className="trg-shell" style={{fontFamily:"Inter, -apple-system, sans-serif",color:C.navy,background:C.bg2}}>

<div className="trg-rail" style={{background:C.white,borderRight:"1px solid "+C.border}}>
<div className="trg-rail-brand" style={{marginBottom:16,cursor:"pointer"}} onClick={function(){setPage("home");}}><svg width="24" height="24" viewBox="0 0 24 24"><polygon points="14.4 18.6 9.7 18.6 12 13.8" fill={C.teal}/><polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill={C.navy}/></svg></div>
<NI pg="home" d="M3 9 L12 3 L21 9 L21 21 L3 21 Z" title="Home"/>
<NI pg="vp" d="M12 12 C14.2 12 16 10.2 16 8 C16 5.8 14.2 4 12 4 C9.8 4 8 5.8 8 8 C8 10.2 9.8 12 12 12 Z M4 20 C4 16.7 7.6 14 12 14 C16.4 14 20 16.7 20 20" title="VP View"/>
<NI pg="cascade" d="M4 5 L20 5 M4 12 L20 12 M4 19 L16 19" title="Strategy Map"/>
<NI pg="detail" d="M9 3 L9 21 M3 9 L15 9 M3 15 L15 15" title="Item Detail"/>
<NI pg="dashboard" d="M3 3 L10 3 L10 13 L3 13 Z M14 3 L21 3 L21 8 L14 8 Z M14 11 L21 11 L21 21 L14 21 Z M3 16 L10 16 L10 21 L3 21 Z" title="Dashboard"/>
<NI pg="pulse" d="M2 12 L6 12 L9 4 L12 20 L15 8 L18 12 L22 12" title="Board Pulse"/>
<NI pg="system" d="M4 4 L10 4 L10 10 L4 10 Z M14 4 L20 4 L20 10 L14 10 Z M4 14 L10 14 L10 20 L4 20 Z M14 14 L20 14 L20 20 L14 20 Z" title="Design System"/>
<div className="trg-flex-spacer" style={{flex:1}}/>
<div className="trg-rail-avatar"><Av i="JT" s={28}/></div>
</div>

<div className="trg-main">

<div key={page} className="trg-page">

{page==="home"&&<div>
<PH eyebrow="Good morning, Joe" title="My world" right={<div style={{display:"flex",alignItems:"center",gap:12}}><div onClick={function(){setQuickAddOpen(true);}} className="trg-press" style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",background:C.navy,color:"#fff",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",boxShadow:"0 1px 2px rgba(31,71,106,0.15)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5 L12 19 M5 12 L19 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg><span>Quick add</span><span style={{marginLeft:4,padding:"1px 6px",background:"rgba(255,255,255,0.2)",borderRadius:4,fontSize:11,fontWeight:500}}>3</span></div><div style={{fontSize:13,color:C.gray}}>Wednesday, April 16, 2026</div></div>}/>

<div className="trg-hero" style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,marginBottom:28,boxShadow:"0 1px 3px rgba(31,71,106,0.04)",padding:"28px 32px"}}>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.4,color:C.tealDk,textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:6}}><TM s={12}/> This week's focus</div>
<div className="trg-hero-headline" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,lineHeight:1.22,letterSpacing:"-0.022em",marginBottom:12}}>Mark flagged Apex Logistics this morning. Two goals are exposed to the same supplier negotiation. One conversation unblocks $6.1M before board review.</div>
<div style={{fontSize:15,color:"#4a5868",lineHeight:1.6}}>Both gross margin and channel mix depend on this vendor. Last three deals closed 1.8% below list, compounding the exposure. Decision window closes when board materials lock in 11 days.</div>
</div>
<div className="trg-hero-divider" style={{background:C.border}}/>
<div className="trg-hero-metrics">
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:6}}>Confidence</div><div style={{display:"flex",alignItems:"baseline",gap:8}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.025em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>3.5<span style={{fontSize:"0.42em",color:C.gray,fontWeight:400}}> / 5</span></span><span style={{fontSize:13,color:C.green,fontWeight:500}}>{"\u2197"} +0.2</span></div></div>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:6}}>Board review</div><div style={{display:"flex",alignItems:"baseline",gap:8}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.amber,letterSpacing:"-0.025em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>11<span style={{fontSize:"0.45em",fontWeight:400}}>d</span></span><span style={{fontSize:13,color:C.gray}}>Q1 materials</span></div></div>
</div>
</div>

<div className="trg-home-grid">
<div className="trg-home-main">
<Eye><SI s={12}/> My goals <span style={{color:C.gray,fontWeight:400}}>. 4</span></Eye>
{strategies.map(function(s){return(<div key={s.id} className="trg-lift" onClick={function(){setSelGoalCtx(s.id);setSelItemCtx(null);setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"22px 26px",marginBottom:12,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14}}><SI s={14}/><div style={{flex:1,fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.navy,lineHeight:1.25,letterSpacing:"-0.02em",minWidth:0}}>{s.t}</div><div style={{display:"flex",gap:5,flexShrink:0,marginTop:2}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div></div>
<div style={{display:"flex",alignItems:"flex-end",gap:32,marginBottom:14,flexWrap:"wrap"}}>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1,textTransform:"uppercase",fontWeight:500,marginBottom:4}}>Impact</div><div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:28,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>{s.impact}</div></div>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1,textTransform:"uppercase",fontWeight:500,marginBottom:4}}>Progress</div><div style={{display:"flex",alignItems:"baseline",gap:3}}><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:28,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>{s.progress}</span><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:16,color:C.gray,fontWeight:400}}>%</span></div></div>
</div>
<PB pct={s.progress} h={3} color={s.sc==="green"?C.teal:C.amber}/>
<div style={{display:"flex",alignItems:"center",gap:8,marginTop:16,paddingTop:14,borderTop:"1px solid "+C.subtle}}><Av i={s.owner} s={22} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/><span style={{fontSize:13,fontWeight:500,color:C.navy}}>{s.name}</span><span style={{fontSize:12,color:C.gray}}>. {s.role}</span><span style={{marginLeft:"auto",fontSize:11,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500}}>{s.actions} actions</span></div>
</div>);})}
</div>
<div className="trg-home-side">
<Eye><TM s={14}/> TARGA Intelligence</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:16}}>
<div style={{fontSize:12,fontWeight:500,letterSpacing:0.5,color:C.tealDk,textTransform:"uppercase",marginBottom:10}}>This week</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px",marginBottom:6,fontSize:15,color:C.navy,lineHeight:1.55}}>Your team resolved 2 actions and moved 1 item from At Risk to On Track. Apex Logistics remains your top priority before board materials lock.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px",marginBottom:6}}><div style={{fontSize:14,fontWeight:500,color:C.navy,marginBottom:2}}>Price realization slipping</div><div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>Last three deals closed 1.8% below list. Compounds the Apex exposure.</div></div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 12px"}}><div style={{fontSize:14,fontWeight:500,color:C.navy,marginBottom:2}}>OpEx efficiency dropping</div><div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>Confidence fell 7 points. Mark escalating two vendor items.</div></div>
</div>
<Eye><TI s={12}/> Recent activity</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"4px 14px"}}>
{[{i:"MS",bg:C.red,fg:"#fff",n:"Mark S.",a:"flagged blocker on COGS",t:"2h ago"},{i:"JT",bg:C.gold,fg:C.navy,n:"Joe T.",a:"updated margin target",t:"Yesterday"},{i:"SD",bg:C.navy,fg:"#fff",n:"Sarah D.",a:"completed 2 interviews",t:"2d ago"}].map(function(e,idx){return(<div key={idx} style={{display:"flex",gap:10,padding:"10px 0",borderBottom:idx<2?"1px solid #f0f3f6":"none"}}><Av i={e.i} bg={e.bg} fg={e.fg} s={22}/><div style={{fontSize:14,lineHeight:1.45}}>{e.n&&<span style={{fontWeight:500}}>{e.n} </span>}<span style={{color:C.gray}}>{e.a}</span><div style={{fontSize:12,color:"#8b99a8",marginTop:2}}>{e.t}</div></div></div>);})}
</div>
</div>
</div>
</div>}


{page==="vp"&&<div>
<PH eyebrow="Good morning, Kyle" title="My initiative" right={<div style={{display:"flex",alignItems:"center",gap:12}}><div style={{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:999}}><Av i="KM" bg={C.teal} fg="#fff" s={18}/><span style={{fontSize:12,fontWeight:500,color:C.tealDk}}>Viewing as Kyle Moyer, VP Operations</span></div><div style={{fontSize:13,color:C.gray}}>Wednesday, April 16, 2026</div></div>}/>

<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:8,padding:"10px 14px",marginBottom:20,fontSize:13,color:C.tealDk,lineHeight:1.5}}><strong style={{fontWeight:500}}>Role-aware landing</strong>. Same data, different altitude. Kyle owns one initiative, not the full goal. Joe sees the business plan when he lands; Kyle sees the slice he's accountable for.</div>

<div className="trg-hero" style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,marginBottom:28,padding:"24px 28px",boxShadow:"0 1px 3px rgba(31,71,106,0.04)"}}>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.4,color:C.tealDk,textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:6}}><TM s={12}/> Your focus this week</div>
<div className="trg-hero-headline" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,lineHeight:1.22,letterSpacing:"-0.022em",marginBottom:12}}>Apex Logistics contract renegotiation is stuck on legal redlines. You own the tier-1 COGS initiative and Mark is waiting for you to close it out.</div>
<div style={{fontSize:15,color:"#4a5868",lineHeight:1.6}}>Three suppliers in scope. Two already signed revised terms. Apex is the holdout, driving the $8M target. Joe flagged it to the board this morning.</div>
</div>
<div className="trg-hero-divider" style={{background:C.border}}/>
<div className="trg-hero-metrics">
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:6}}>COGS impact</div><div style={{display:"flex",alignItems:"baseline",gap:8}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.025em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>$8M</span></div></div>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:6}}>Progress</div><div style={{display:"flex",alignItems:"baseline",gap:8}}><span className="trg-hero-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.amber,letterSpacing:"-0.025em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>40<span style={{fontSize:"0.45em",fontWeight:400}}>%</span></span></div></div>
</div>
</div>

<div className="trg-vp-grid" style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:32}}>
<div style={{minWidth:0}}>

<div onClick={function(){setSelGoalCtx("sp1");setSelItemCtx(null);setPage("detail");}} style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderLeft:"3px solid "+C.teal,borderRadius:8,padding:"10px 14px",marginBottom:18,display:"flex",alignItems:"center",gap:8,cursor:"pointer"}} className="trg-lift"><SI s={12}/><span style={{fontSize:11,fontWeight:500,color:C.tealDk,letterSpacing:0.5}}>PARENT GOAL</span><span style={{fontSize:14,fontWeight:500,color:C.navy}}>Expand gross margin by 300bps</span><span style={{marginLeft:"auto",fontSize:12,color:C.gray}}>Joe Thompson . CEO</span></div>

<Eye><PI s={12}/> Your initiative</Eye>
<div onClick={function(){setSelGoalCtx("sp1");setSelItemCtx(goalContent.sp1.initiatives[0]);setPage("detail");window.scrollTo({top:0,behavior:"smooth"});}} className="trg-lift" style={{background:C.white,border:"1px solid "+C.border,borderLeft:"4px solid "+C.red,borderRadius:10,padding:"20px 24px",marginBottom:24,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:12}}>
<div>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><PI s={11}/><span style={{fontSize:11,fontWeight:500,color:C.pinkDk,letterSpacing:0.8}}>INITIATIVE</span><span style={{fontSize:11,color:C.gray}}>. FY26</span></div>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.navy,lineHeight:1.25,letterSpacing:"-0.015em",marginBottom:8}}>Reduce COGS tier-1</div>
<div style={{fontSize:14,color:"#4a5868",lineHeight:1.6}}>Renegotiate tier-1 supplier contracts to reduce COGS by $8M. Apex Logistics is the primary exposure, two other suppliers secondary.</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}><Pl c="red">BLOCKER</Pl></div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:12,background:C.bg2,borderRadius:8,padding:"14px 16px",marginBottom:14}}>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:4}}>Impact</div><div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums"}}>$8M</div></div>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:4}}>Progress</div><div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums"}}>40%</div></div>
<div><div style={{fontSize:10,color:C.gray,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,marginBottom:4}}>Review</div><div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.amber,letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums"}}>11d</div></div>
</div>
<PB pct={40} h={6} color={C.amber}/>
<div style={{display:"flex",alignItems:"center",gap:8,marginTop:14,paddingTop:14,borderTop:"1px solid "+C.subtle}}><Av i="KM" bg={C.teal} fg="#fff" s={22}/><span style={{fontSize:14,fontWeight:500,color:C.navy}}>Kyle Moyer</span><span style={{fontSize:12,color:C.gray}}>. VP Operations . Owner</span><span style={{marginLeft:"auto",fontSize:12,color:C.teal,fontWeight:500}}>Open item {"\u2192"}</span></div>
</div>

<Eye><AI s={12}/> Your actions <span style={{color:C.gray,fontWeight:400}}>. 4</span></Eye>
{[
{t:"Close Apex Logistics contract",s:"OVERDUE",sc:"red",d:"Apr 16",desc:"Final redline review pending with legal. 3 days past due."},
{t:"Confirm supplier 2 terms",s:"ON TRACK",sc:"green",d:"Apr 22",desc:"Signed addendum arriving this week. Routine."},
{t:"Draft supplier 3 negotiation brief",s:"ON TRACK",sc:"green",d:"Apr 25",desc:"Scope defined. Awaiting Mark's input on volume commitments."},
{t:"Weekly status to Mark",s:"ON TRACK",sc:"green",d:"Friday recurring",desc:"Stand-up summary covering all three supplier streams."}
].map(function(a,idx){return(<div key={idx} className="trg-lift" style={{background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(a.sc==="red"?C.red:"#14B8A6"),borderRadius:8,padding:"12px 14px",marginBottom:8,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:6}}>
<div style={{fontSize:14,fontWeight:500,color:C.navy}}>{a.t}</div>
<Pl c={a.sc}>{a.s}</Pl>
</div>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{a.desc}</div>
<div style={{fontSize:12,color:C.gray}}>Due {a.d}</div>
</div>);})}
</div>

<div style={{minWidth:0}}>
<Eye><TM s={12}/> TARGA intelligence</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:12}}>
<div style={{fontSize:14,color:C.navy,lineHeight:1.55}}>Apex Logistics redlines arrived from their counsel at 9:14 AM. Joe is watching this one. Your weekly to Mark is due Friday. I drafted a status based on the last 48 hours of activity.</div>
<div style={{marginTop:10,padding:"6px 10px",background:C.white,borderRadius:6,fontSize:12,fontWeight:500,color:C.teal,cursor:"pointer",display:"inline-block"}}>Review draft {"\u2192"}</div>
</div>

<Eye><AI s={12}/> Assigned by others</Eye>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"10px 12px",marginBottom:10}}>
<div style={{fontSize:13,fontWeight:500,color:C.navy,marginBottom:4}}>Input for CFO cost model</div>
<div style={{fontSize:12,color:C.gray,lineHeight:1.5,marginBottom:6}}>Assigned by Mark Sternberger . Due Apr 22</div>
<div style={{display:"flex",alignItems:"center",gap:6}}><Av i="MS" bg={C.red} fg="#fff" s={18}/><span style={{fontSize:12,color:C.gray}}>Mark's initiative: OpEx</span></div>
</div>
</div>
</div>
</div>}


{page==="cascade"&&<div className="trg-strategy-page">
<div className="trg-cube-mini-stage">
<div className={"trg-cube-mini "+(cascadeView==="kanban"?"kanban":cascadeView==="timeline"?"timeline":cascadeView==="people"?"people":"")}>
<div className="trg-cube-mini-face front" style={{background:"linear-gradient(135deg, "+C.teal+" 0%, "+C.tealDk+" 100%)"}}/>
<div className="trg-cube-mini-face right" style={{background:"linear-gradient(135deg, #db2777 0%, "+C.pinkDk+" 100%)"}}/>
<div className="trg-cube-mini-face back" style={{background:"linear-gradient(135deg, "+C.gold+" 0%, #d49a0f 100%)"}}/>
<div className="trg-cube-mini-face left" style={{background:"linear-gradient(135deg, "+C.navy+" 0%, #0f2a3e 100%)"}}/>
<div className="trg-cube-mini-face top" style={{background:"linear-gradient(135deg, #f4f7fa 0%, #dde6ef 100%)"}}/>
<div className="trg-cube-mini-face bottom" style={{background:"linear-gradient(135deg, #f4f7fa 0%, #dde6ef 100%)"}}/>
</div>
</div>
<PH eyebrow="Strategy map" title="Enterprise Value Creation - FY26" right={<div className="trg-view-tabs" style={{display:"flex",gap:4}}>{[{k:"hierarchy",l:"Map",c:C.teal},{k:"kanban",l:"Kanban",c:"#db2777"},{k:"timeline",l:"Timeline",c:C.gold},{k:"people",l:"People",c:C.navy}].map(function(v){var active=cascadeView===v.k;return(<div key={v.k} onClick={function(){setCascadeView(v.k);}} style={{display:"flex",alignItems:"center",gap:7,padding:"6px 14px",background:active?C.white:"transparent",border:active?"1px solid "+v.c:"1px solid transparent",borderRadius:6,fontSize:13,color:active?C.navy:C.gray,fontWeight:active?500:400,cursor:"pointer",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)"}}><span style={{width:7,height:7,borderRadius:"50%",background:v.c,flexShrink:0}}/>{v.l}</div>);})}</div>}/>

<div className="trg-cube-bar" style={{display:"flex",alignItems:"center",gap:18,marginBottom:18,padding:"14px 20px",background:C.white,border:"1px solid "+C.border,borderRadius:10}}>
<div className="trg-cube-stage">
<div className={"trg-cube "+(cascadeView==="kanban"?"kanban":cascadeView==="timeline"?"timeline":cascadeView==="people"?"people":"")}>
<div className="trg-cube-face front" style={{background:"linear-gradient(135deg, "+C.teal+" 0%, "+C.tealDk+" 100%)"}}>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.6"/><ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#fff" strokeWidth="1.6"/><line x1="3" y1="12" x2="21" y2="12" stroke="#fff" strokeWidth="1.6"/><line x1="12" y1="3" x2="12" y2="21" stroke="#fff" strokeWidth="1.6"/></svg>
</div>
<div className="trg-cube-face right" style={{background:"linear-gradient(135deg, #db2777 0%, "+C.pinkDk+" 100%)"}}>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="5" height="17" stroke="#fff" strokeWidth="1.5"/><rect x="10" y="4" width="5" height="17" stroke="#fff" strokeWidth="1.5"/><rect x="17" y="4" width="4" height="17" stroke="#fff" strokeWidth="1.5"/><rect x="4" y="6" width="3" height="2.5" fill="#fff"/><rect x="4" y="10" width="3" height="2.5" fill="#fff"/><rect x="11" y="6" width="3" height="2.5" fill="#fff"/><rect x="18" y="6" width="2" height="2.5" fill="#fff"/><rect x="18" y="10" width="2" height="2.5" fill="#fff"/><rect x="18" y="14" width="2" height="2.5" fill="#fff"/></svg>
</div>
<div className="trg-cube-face back" style={{background:"linear-gradient(135deg, "+C.gold+" 0%, #d49a0f 100%)"}}>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><line x1="3" y1="4" x2="3" y2="21" stroke={C.navy} strokeWidth="1.5"/><line x1="3" y1="21" x2="22" y2="21" stroke={C.navy} strokeWidth="1.5"/><rect x="5" y="6" width="10" height="2.5" fill={C.navy}/><rect x="8" y="11" width="11" height="2.5" fill={C.navy}/><rect x="4" y="16" width="7" height="2.5" fill={C.navy}/></svg>
</div>
<div className="trg-cube-face left" style={{background:"linear-gradient(135deg, "+C.navy+" 0%, #0f2a3e 100%)"}}>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><line x1="12" y1="12" x2="5" y2="5" stroke="#fff" strokeWidth="1.4" opacity="0.6"/><line x1="12" y1="12" x2="19" y2="5" stroke="#fff" strokeWidth="1.4" opacity="0.6"/><line x1="12" y1="12" x2="5" y2="19" stroke="#fff" strokeWidth="1.4" opacity="0.6"/><line x1="12" y1="12" x2="19" y2="19" stroke="#fff" strokeWidth="1.4" opacity="0.6"/><circle cx="12" cy="12" r="3" fill="#fff"/><circle cx="5" cy="5" r="2" fill="#fff"/><circle cx="19" cy="5" r="2" fill="#fff"/><circle cx="5" cy="19" r="2" fill="#fff"/><circle cx="19" cy="19" r="2" fill="#fff"/></svg>
</div>
<div className="trg-cube-face top" style={{background:"linear-gradient(135deg, #f4f7fa 0%, #dde6ef 100%)"}}/>
<div className="trg-cube-face bottom" style={{background:"linear-gradient(135deg, #f4f7fa 0%, #dde6ef 100%)"}}/>
</div>
</div>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:10,fontWeight:500,letterSpacing:1.2,color:C.gray,textTransform:"uppercase",marginBottom:4}}>Current view</div>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:22,fontWeight:500,color:C.navy,letterSpacing:"-0.015em",lineHeight:1.15,marginBottom:4}}>{cascadeView==="kanban"?"Board view":cascadeView==="timeline"?"Timeline":cascadeView==="people"?"People":"Strategic hierarchy"}</div>
<div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>{cascadeView==="kanban"?"Goals and initiatives grouped by status. Same cards, rearranged.":cascadeView==="timeline"?"Schedule view. Coming next.":cascadeView==="people"?"Accountability network. Coming next.":"Top-down decomposition from business plan to action."}</div>
</div>
<div className="trg-cube-bar-meta" style={{fontSize:12,color:C.gray,textAlign:"right",minWidth:80}}>Face {cascadeView==="kanban"?"2":cascadeView==="timeline"?"3":cascadeView==="people"?"4":"1"} of 4</div>
</div>

{cascadeView==="hierarchy"&&<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:"48px 40px",minHeight:620,position:"relative"}}>

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
<div className="trg-lift" onClick={function(){setSelGoalCtx("sp1");setSelItemCtx(null);setPage("detail");}} style={{width:300,background:C.tealBg,border:"2px solid "+C.tealBd,borderRadius:12,padding:"18px 22px",cursor:"pointer",boxShadow:"0 2px 12px rgba(14,178,175,0.1)"}}>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}><SI s={13}/><span style={{fontSize:12,fontWeight:500,color:C.tealDk,letterSpacing:0.5}}>BUSINESS PLAN</span></div>
<div style={{fontSize:19,fontWeight:500,color:C.navy,marginBottom:8,lineHeight:1.3}}>Enterprise Value Creation - FY26</div>
<div style={{display:"flex",alignItems:"center",gap:6}}><Pl c="green">{"\u2197"} ON TRACK</Pl><span style={{fontSize:12,color:C.gray,marginLeft:"auto"}}>4 strategies</span></div>
</div>
</div>

<div className="trg-cascade-col">
{strategies.slice(0,3).map(function(s){return(
<div key={s.id} className="trg-lift" onClick={function(){setSelGoalCtx(s.id);setSelItemCtx(null);setPage("detail");}} style={{width:280,background:C.white,border:"1px solid "+C.border,borderLeft:"4px solid "+(s.sc==="green"?C.teal:C.amber),borderRadius:12,padding:"18px 22px",cursor:"pointer",boxShadow:"0 1px 4px rgba(31,71,106,0.06)"}}>
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
{[{t:"Reduce COGS tier-1",s:"BLOCKER",sc:"red",type:"initiative"},{t:"Price realization",s:"ON TRACK",sc:"green",type:"initiative"},{t:"EMEA market launch",s:"ON TRACK",sc:"green",type:"initiative"},{t:"Vendor consolidation",s:"BEHIND",sc:"amber",type:"action"}].map(function(c){return(
<div key={c.t} className="trg-lift" style={{width:210,background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"14px 18px",boxShadow:"0 1px 4px rgba(31,71,106,0.06)",cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
{c.type==="initiative"?<PI s={11}/>:<AI s={11}/>}
<span style={{fontSize:11,fontWeight:500,color:c.type==="initiative"?C.pinkDk:"#a07509",letterSpacing:0.5}}>{c.type==="initiative"?"INITIATIVE":"ACTION"}</span>
</div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:6}}>{c.t}</div>
<Pl c={c.sc}>{c.s}</Pl>
</div>
);})}
</div>

</div>
</div>}

{cascadeView==="kanban"&&<div>
<div style={{background:C.bg2,border:"1px solid "+C.border,borderRadius:12,padding:"20px 20px 24px",minHeight:620}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,padding:"0 4px",flexWrap:"wrap",gap:10}}>
<div style={{fontSize:14,color:C.gray}}>Same goals and initiatives, grouped by status. Cards stay clickable.</div>
<div style={{fontSize:12,color:C.gray}}>Updated today</div>
</div>
<div className="trg-kanban-mobile-tabs" style={{display:"none",gap:6,marginBottom:14,flexWrap:"wrap"}}>
{[
{k:"green",label:"On track",bar:C.green},
{k:"amber",label:"At risk",bar:C.amber},
{k:"red",label:"Blocker",bar:C.red},
{k:"navy",label:"Planning",bar:C.navy}
].map(function(t){var active=kanbanMobileTab===t.k;return(<div key={t.k} onClick={function(){setKanbanMobileTab(t.k);}} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",background:active?C.white:"transparent",border:active?"1px solid "+t.bar:"1px solid transparent",borderRadius:6,fontSize:13,color:active?C.navy:C.gray,fontWeight:active?500:400,cursor:"pointer",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)"}}><span style={{width:7,height:7,borderRadius:"50%",background:t.bar,flexShrink:0}}/>{t.label}</div>);})}
</div>
<div className="trg-kanban-grid" style={{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:16}}>
{[
{k:"green",label:"ON TRACK",count:null,bar:C.green},
{k:"amber",label:"AT RISK",count:null,bar:C.amber},
{k:"red",label:"BLOCKER",count:null,bar:C.red},
{k:"navy",label:"PLANNING",count:null,bar:C.navy}
].map(function(col){
var itemsInCol=[];
strategies.forEach(function(s){
var matchGoal=false;
if(col.k==="green"&&s.sc==="green"&&!s.blocker)matchGoal=true;
if(col.k==="amber"&&s.sc==="amber"&&!s.blocker)matchGoal=true;
if(col.k==="red"&&s.blocker)matchGoal=true;
if(matchGoal)itemsInCol.push({type:"goal",data:s});
});
Object.keys(goalContent).forEach(function(gid){
goalContent[gid].initiatives.forEach(function(ini){
var matchIni=false;
if(col.k==="green"&&ini.sc==="green")matchIni=true;
if(col.k==="amber"&&ini.sc==="amber")matchIni=true;
if(col.k==="red"&&ini.sc==="red")matchIni=true;
if(matchIni)itemsInCol.push({type:"initiative",data:ini,parentId:gid,parentTitle:goalContent[gid].t});
});
});
return(<div key={col.k} className={kanbanMobileTab===col.k?"":"trg-kanban-col-hidden-mobile"} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"12px 12px 16px",minHeight:520}}>
<div style={{display:"flex",alignItems:"center",gap:8,paddingBottom:10,marginBottom:10,borderBottom:"2px solid "+col.bar}}>
<div style={{width:8,height:8,borderRadius:"50%",background:col.bar}}/>
<span style={{fontSize:11,fontWeight:500,letterSpacing:1,color:C.navy,textTransform:"uppercase"}}>{col.label}</span>
<span style={{marginLeft:"auto",fontSize:12,color:C.gray,fontWeight:500}}>{itemsInCol.length}</span>
</div>
{itemsInCol.length===0&&<div style={{padding:"24px 0",textAlign:"center",fontSize:12,color:"#b0bcc9"}}>None in this status</div>}
{itemsInCol.map(function(it,idx){
if(it.type==="goal"){
var s=it.data;
return(<div key={"g"+idx} className="trg-lift" onClick={function(){setSelGoalCtx(s.id);setSelItemCtx(null);setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",marginBottom:8,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}><SI s={10}/><span style={{fontSize:10,fontWeight:500,color:C.tealDk,letterSpacing:0.8}}>GOAL</span></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:8}}>{s.t}</div>
<div style={{display:"flex",alignItems:"center",gap:6}}><Av i={s.owner} s={16} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:s.owner==="SD"?C.teal:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/><span style={{fontSize:11,color:C.gray}}>{s.name}</span><span style={{marginLeft:"auto",fontSize:11,color:C.gray,fontVariantNumeric:"tabular-nums"}}>{s.progress}%</span></div>
</div>);
}else{
var i=it.data;
return(<div key={"i"+idx} className="trg-lift" onClick={function(){setSelGoalCtx(it.parentId);setSelItemCtx(i);setPage("detail");window.scrollTo({top:0,behavior:"smooth"});}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",marginBottom:8,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}><PI s={10}/><span style={{fontSize:10,fontWeight:500,color:C.pinkDk,letterSpacing:0.8}}>INITIATIVE</span></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:4}}>{i.t}</div>
<div style={{fontSize:11,color:C.gray,marginBottom:8}}>{it.parentTitle}</div>
<div style={{display:"flex",alignItems:"center",gap:6}}><Av i={i.av} s={16} bg={i.av==="MS"?C.red:i.av==="KM"?C.teal:i.av==="SD"?C.teal:C.navy} fg="#fff"/><span style={{fontSize:11,color:C.gray}}>{i.ownerName}</span><span style={{marginLeft:"auto",fontSize:11,color:C.gray,fontVariantNumeric:"tabular-nums"}}>{i.prog}%</span></div>
</div>);
}
})}
</div>);})}
</div>
</div>
</div>}

{cascadeView==="timeline"&&<div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:"48px 40px",minHeight:620,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:16}}>
<div style={{width:64,height:64,borderRadius:"50%",background:"linear-gradient(135deg, "+C.gold+" 0%, #d49a0f 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(251,191,36,0.25)"}}>
<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><line x1="4" y1="7" x2="20" y2="7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><line x1="4" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><line x1="4" y1="17" x2="12" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="4" cy="7" r="2" fill="#fff"/><circle cx="4" cy="12" r="2" fill="#fff"/><circle cx="4" cy="17" r="2" fill="#fff"/></svg>
</div>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:28,fontWeight:500,color:C.navy,letterSpacing:"-0.02em"}}>Timeline view</div>
<div style={{fontSize:15,color:"#4a5868",lineHeight:1.6,maxWidth:440}}>Same goals and initiatives, laid out against the calendar. Gantt-style bars show when each initiative runs, where they overlap, and which quarters carry the most load.</div>
<div style={{fontSize:12,color:C.teal,fontWeight:500,padding:"6px 12px",background:C.tealBg,borderRadius:999}}>Coming next</div>
</div>
</div>}

{cascadeView==="people"&&<div>
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,padding:"48px 40px",minHeight:620,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:16}}>
<div style={{width:64,height:64,borderRadius:"50%",background:"linear-gradient(135deg, "+C.navy+" 0%, #0f2a3e 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(31,71,106,0.25)"}}>
<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="#fff" strokeWidth="1.8"/><circle cx="16" cy="8" r="3" stroke="#fff" strokeWidth="1.8"/><path d="M3 20 C3 16.5 5 14 8 14 C11 14 13 16.5 13 20" stroke="#fff" strokeWidth="1.8" fill="none"/><path d="M11 20 C11 16.5 13 14 16 14 C19 14 21 16.5 21 20" stroke="#fff" strokeWidth="1.8" fill="none"/></svg>
</div>
<div style={{fontFamily:"Space Grotesk, sans-serif",fontSize:28,fontWeight:500,color:C.navy,letterSpacing:"-0.02em"}}>People view</div>
<div style={{fontSize:15,color:"#4a5868",lineHeight:1.6,maxWidth:440}}>Accountability network. See who owns what, where the workload is concentrated, and which people are becoming bottlenecks. TARGA surfaces when the same person is blocking multiple initiatives.</div>
<div style={{fontSize:12,color:C.teal,fontWeight:500,padding:"6px 12px",background:C.tealBg,borderRadius:999}}>Coming next</div>
</div>
</div>}

</div>}


{page==="detail"&&<div>
<div style={{display:"flex",alignItems:"center",gap:8,fontSize:14,color:C.gray,paddingBottom:18,borderBottom:"1px solid "+C.border,marginBottom:18}}><span style={{cursor:"pointer",color:C.teal}} onClick={function(){setPage("cascade");setSelItemCtx(null);}}>Strategy Map</span><span style={{color:"#b0bcc9"}}>/</span>{selItemCtx?<span style={{cursor:"pointer",color:C.teal}} onClick={function(){setSelItemCtx(null);window.scrollTo({top:0,behavior:"smooth"});}}>{G.t}</span>:<span style={{color:C.navy,fontWeight:500}}>{G.t}</span>}{selItemCtx&&<span style={{color:"#b0bcc9"}}>/</span>}{selItemCtx&&<span style={{color:C.navy,fontWeight:500}}>{selItemCtx.t}</span>}{phase>=5&&!selItemCtx&&<span className="trg-breadcrumb-replay" onClick={reset} style={{marginLeft:"auto",color:C.teal,cursor:"pointer",fontSize:13,fontWeight:500}}>Replay demo</span>}</div>

<div onClick={function(){setPage("cascade");}} style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderLeft:"3px solid "+C.teal,borderRadius:8,padding:"8px 12px",marginBottom:18,display:"flex",alignItems:"center",gap:8,cursor:"pointer"}}><SI s={12}/><span style={{fontSize:13,fontWeight:500,color:C.tealDk}}>PARENT</span><span style={{fontSize:15,fontWeight:500,color:C.navy}}>Drive enterprise value creation - FY26</span><Pl c="green">{"\u2197"} ON TRACK</Pl></div>

<div className="trg-orbit">
<div className="trg-orbit-left">
<Eye><MI s={12}/> Metrics</Eye>
{G.metrics.map(function(m,idx){
var isExp=expMetric===idx;
var mx=Math.max.apply(null,m.pts);var mn=Math.min.apply(null,m.pts);
var sparkD=m.pts.map(function(pt,pi){return(pi===0?"M":"L")+" "+(pi/(m.pts.length-1)*130)+" "+(36-((pt-mn)/(mx-mn||1))*36);}).join(" ");
var barColor=m.tc==="amber"?C.amber:m.tc==="red"?C.red:C.teal;
var srcNames={netsuite:"NetSuite",sap:"SAP",sf:"Salesforce",gs:"Google Sheets",conf:"Confluence"};
var pct=m.tc==="green"?78:m.tc==="amber"?48:30;
return(<div key={m.l} className="trg-lift" onClick={function(){setExpMetric(isExp?null:idx);}} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px",marginBottom:10,cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:13,color:C.gray,fontWeight:500}}>{m.l}</span><div style={{display:"flex",alignItems:"center",gap:5}}><Logo k={m.src} s={14}/><span style={{fontSize:12,color:C.gray}}>{srcNames[m.src]||m.src}</span></div></div>
<div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:8}}><span style={{fontFamily:"Space Grotesk, sans-serif",fontSize:26,fontWeight:500,color:C.navy,letterSpacing:"-0.02em",lineHeight:1,fontVariantNumeric:"tabular-nums"}}>{m.v}</span></div>
<PB pct={pct} h={4} color={barColor}/>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}><Pl c={m.tc}>{m.trend}</Pl></div>
<div style={{overflow:"hidden",maxHeight:isExp?80:0,opacity:isExp?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}>
<div style={{paddingTop:10,borderTop:"1px solid "+C.subtle,marginTop:10}}><div style={{fontSize:11,color:C.gray,marginBottom:4,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500}}>8-week trend</div>
<svg width="130" height="40" style={{display:"block"}}><path d={sparkD} fill="none" stroke={barColor} strokeWidth="2" strokeLinecap="round"/><circle cx="130" cy={36-((m.pts[m.pts.length-1]-mn)/(mx-mn||1))*36} r="3" fill={barColor}/></svg>
</div></div>
</div>);})}

<div style={{marginTop:16}}>
<Eye><XI s={12}/> External links</Eye>
{[["Q1 Margin Analysis","gs","Google Sheets","2d ago"],["Pricing Model v3","conf","Confluence","5d ago"]].map(function(el){return(<div key={el[0]} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",marginBottom:6,cursor:"pointer",display:"flex",alignItems:"center",gap:10}}><Logo k={el[1]} s={20}/><div style={{flex:1,minWidth:0}}><div style={{fontSize:14,color:C.navy,fontWeight:500}}>{el[0]}</div><div style={{fontSize:12,color:C.gray}}>{el[2]} . {el[3]}</div></div></div>);})}
<div style={{padding:"6px 0",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer"}}>+ Add link</div>
</div>
</div>

<div className="trg-orbit-center">
<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,overflow:"hidden",boxShadow:pulse?"0 0 0 3px rgba(14,178,175,0.3)":"0 2px 8px rgba(31,71,106,0.08)",transition:"box-shadow 1s cubic-bezier(0.23,1,0.32,1)"}}>
<div style={{background:C.navy,backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><polygon points='20,8 32,30 8,30' fill='none' stroke='%230eb2af' stroke-width='1' opacity='0.15'/></svg>\")",backgroundSize:"40px 40px",padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}><TML s={16}/><span style={{fontSize:13,fontWeight:500,letterSpacing:1,color:"#fff",textTransform:"uppercase"}}>{selItemCtx?"Initiative":"Goal"}</span></div>
<div style={{padding:"22px 22px 20px"}}>
<div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>{selItemCtx?<><Pl c="navy">INITIATIVE</Pl><Pl c={selItemCtx.sc}>{selItemCtx.s}</Pl>{selItemCtx.blocker&&<Pl c="red">BLOCKER</Pl>}</>:<><Pl c="navy">OPERATIONAL</Pl><Pl c="teal">Q1 2026</Pl><Pl c={G.hasBlocker?"amber":"green"} hide={G.hasBlocker?!showRisk:false}>{G.hasBlocker?"\u25B3 RISK":"\u2197 ON TRACK"}</Pl>{G.hasBlocker&&<Pl c="green">{"\u2197"} ON TRACK</Pl>}</>}</div>
<div className="trg-focal-title" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,lineHeight:1.15,letterSpacing:"-0.025em",marginBottom:12}}>{selItemCtx?selItemCtx.t:G.t}</div>
<div style={{fontSize:16,color:"#4a5868",lineHeight:1.65,marginBottom:18}}>{selItemCtx?selItemCtx.desc:G.desc}</div>
<div className="trg-owner-row" style={{marginBottom:16}}>
<div style={{background:C.bg2,borderRadius:8,padding:"10px 12px",display:"flex",alignItems:"center",gap:10,minWidth:0}}><Av i={selItemCtx?selItemCtx.av:G.ownerInit} bg={selItemCtx?(selItemCtx.av==="MS"?C.red:selItemCtx.av==="KM"?C.teal:C.navy):(G.ownerBg==="gold"?C.gold:G.ownerBg==="red"?C.red:G.ownerBg==="teal"?C.teal:C.navy)} fg={selItemCtx?"#fff":(G.ownerBg==="gold"?C.navy:"#fff")} s={30}/><div style={{minWidth:0}}><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Owner</div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginTop:1,whiteSpace:"nowrap"}}>{selItemCtx?selItemCtx.ownerName:G.ownerName} <span style={{color:C.gray,fontWeight:400}}>. {selItemCtx?selItemCtx.ownerRole:G.ownerRole}</span></div></div></div>
<div style={{background:C.bg2,borderRadius:8,padding:"10px 12px",minWidth:0}}><div style={{fontSize:12,color:C.gray,letterSpacing:0.5,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Dates</div><div style={{fontSize:15,fontWeight:500,color:C.navy,marginTop:1,whiteSpace:"nowrap"}}>{G.dates}</div></div>
</div>
<div className="trg-stat-strip" style={{background:C.bg2,borderRadius:10,marginBottom:16}}>
<div style={{minWidth:0}}><div style={{fontSize:10,color:C.gray,marginBottom:6,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Impact</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.025em",lineHeight:1,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}}>{selItemCtx?selItemCtx.impact:G.impact}</div></div>
<div style={{minWidth:0}}><div style={{fontSize:10,color:C.gray,marginBottom:6,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Progress</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.025em",lineHeight:1,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}}>{selItemCtx?selItemCtx.prog+"%":(G.hasCascadeDemo?<Odo value={progress} suffix="%" dur={1.6}/>:G.progress+"%")}</div></div>
<div style={{minWidth:0}}><div style={{fontSize:10,color:C.gray,marginBottom:6,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Actions</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:C.navy,letterSpacing:"-0.025em",lineHeight:1,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}}>{selItemCtx?selItemCtx.actions:(G.hasCascadeDemo?<Odo value={actionCount} dur={1.4}/>:G.actionCount)}</div></div>
<div style={{minWidth:0}}><div style={{fontSize:10,color:C.gray,marginBottom:6,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,whiteSpace:"nowrap"}}>Review</div><div className="trg-focal-num" style={{fontFamily:"Space Grotesk, sans-serif",fontWeight:500,color:selItemCtx?C.navy:(G.hasCascadeDemo?(phase>=4?C.green:C.amber):C.navy),letterSpacing:"-0.025em",lineHeight:1,transition:"color 1s cubic-bezier(0.23,1,0.32,1)",whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}}>{selItemCtx?selItemCtx.reviewDays+"d":(G.hasCascadeDemo?<Odo value={phase>=4?9:11} suffix="d" dur={1.4}/>:G.reviewDays+"d")}</div></div>
</div>
<PB pct={selItemCtx?selItemCtx.prog:(G.hasCascadeDemo?progress:G.progress)} h={6} color={selItemCtx&&selItemCtx.sc==="amber"?C.amber:selItemCtx&&selItemCtx.sc==="red"?C.red:C.teal}/>
</div></div>

</div>

<div className="trg-orbit-right">
<Eye><AI s={12}/> Actions <span style={{color:C.gray,fontWeight:400}}>. {G.hasCascadeDemo?<Odo value={actionCount} dur={1.4}/>:G.actionCount}</span></Eye>

{G.hasBlocker&&G.hasCascadeDemo&&<div style={{overflow:"hidden",maxHeight:showBlocker?300:0,opacity:showBlocker?1:0,marginBottom:showBlocker?5:0,transition:"max-height 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1), margin 0.8s cubic-bezier(0.4,0,0.2,1)"}}>
<div style={{background:completed?C.teal:C.white,border:"1px solid "+(completed?C.teal:C.border),borderLeft:"3px solid "+(completed?C.teal:C.red),borderRadius:8,padding:9,transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)"}}><div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:6,marginBottom:5}}><span style={{fontSize:13,fontWeight:500,color:completed?"#fff":C.navy,lineHeight:1.3,transition:"color 0.32s cubic-bezier(0.4,0,0.2,1)"}}>{G.blockerAction}</span>{!completed&&<Pl c="red">BLOCKER</Pl>}{completed&&<div style={{width:20,height:20,borderRadius:"50%",background:"rgba(255,255,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}><Chk/></div>}</div><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:completed?0:8}}><Av i="JT" bg={C.gold} fg={C.navy} s={16}/><span style={{fontSize:11,color:completed?"rgba(255,255,255,0.8)":C.red,fontWeight:500}}>{completed?"Done":"Overdue"}</span></div>{!completed&&<div className="trg-press" onClick={fire} style={{padding:"8px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:13,fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><Chk/> Mark complete</div>}</div>
</div>}

{G.actions.map(function(aRaw){var bgMap={teal:C.teal,navy:C.navy,gold:C.gold,red:C.red};var a=Object.assign({},aRaw,{bg:bgMap[aRaw.bg]||aRaw.bg,fg:aRaw.fg==="navy"?C.navy:aRaw.fg});var isSel=selAction&&selAction.t===a.t;return(<div key={a.t}>
<div className="trg-lift" onClick={function(){setSelAction(isSel?null:a);}} style={{background:"#fff",border:"1px solid "+C.border,borderLeft:"3px solid "+a.bc,borderRadius:8,padding:13,marginBottom:8,cursor:"pointer"}}>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{a.t}</div>
<div style={{display:"flex",alignItems:"center",gap:5}}><Av i={a.i} bg={a.bg} fg={a.fg} s={16}/><span style={{fontSize:11,color:C.gray}}>{a.d}</span><span style={{marginLeft:"auto"}}><Pl c={a.sc}>{a.s}</Pl></span></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSel?300:0,opacity:isSel?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginBottom:5,marginTop:-3}}>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:8}}>{a.desc}</div>
<div style={{fontSize:11,fontWeight:500,letterSpacing:1,color:C.gray,textTransform:"uppercase",marginBottom:6}}>Sub-actions</div>
{a.subs.map(function(sub,si){return(<div key={si} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:si<a.subs.length-1?"1px solid "+C.subtle:"none"}}><div style={{width:14,height:14,border:"1.5px solid "+C.border,borderRadius:3}}/><span style={{fontSize:13,color:C.navy}}>{sub}</span></div>);})}
<div style={{display:"flex",gap:6,marginTop:8}}><div className="trg-press" style={{flex:1,padding:"6px 0",background:C.teal,color:"#fff",borderRadius:6,textAlign:"center",fontSize:12,fontWeight:500,cursor:"pointer"}}>Mark complete</div><div className="trg-press" onClick={function(e){e.stopPropagation();setSelAction(null);}} style={{padding:"6px 10px",border:"1px solid "+C.border,borderRadius:6,fontSize:12,color:C.gray,cursor:"pointer"}}>Close</div></div>
</div></div>
</div>);})}

<div onClick={function(){setShowAddAction(!showAddAction);}} style={{padding:"6px 0",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer",marginTop:4}}>+ Add action</div>
<div style={{overflow:"hidden",maxHeight:showAddAction?200:0,opacity:showAddAction?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}>
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
<div style={{overflow:"hidden",maxHeight:isExpS&&phase<5?120:0,opacity:isExpS&&phase<5?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:11,fontWeight:500}}>{sg.act}</div></div>
</div></div>
<div style={{opacity:phase>=5?1:0,maxHeight:phase>=5?200:0,transition:"opacity 0.8s 0.2s, max-height 0.8s",overflow:"hidden"}}><div style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4}}><div style={{fontSize:12,fontWeight:500,color:C.green,marginBottom:2}}>{"\u2713"} Blocker resolved</div><div style={{fontSize:11,color:C.gray}}>Progress 54% {"\u2192"} 62%.</div></div></div>
</div>);}
return(<div key={si} onClick={function(){setExpSug(isExpS?null:si);}} style={{background:"#fff",border:"1px solid "+C.tealBd,borderRadius:6,padding:8,marginBottom:4,cursor:"pointer"}}><div style={{fontSize:12,fontWeight:500,color:C.navy,marginBottom:2}}>{sg.t}</div><div style={{fontSize:11,color:C.gray}}>{sg.d}</div>
<div style={{overflow:"hidden",maxHeight:isExpS?120:0,opacity:isExpS?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}><div style={{borderTop:"1px solid "+C.tealBd,paddingTop:6,marginTop:6,fontSize:11,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{sg.detail}</div><div style={{display:"flex",gap:4}}><div style={{flex:1,padding:"5px 0",background:C.teal,color:"#fff",borderRadius:4,textAlign:"center",fontSize:11,fontWeight:500}}>{sg.act}</div><div onClick={function(e){e.stopPropagation();setExpSug(null);}} style={{padding:"5px 8px",border:"1px solid "+C.border,borderRadius:4,fontSize:11,color:C.gray}}>Dismiss</div></div></div>
</div>);})}
</div></div>
{phase>=5&&<div style={{marginTop:8,background:C.greenBg,border:"1px solid #a7f3d0",borderRadius:8,padding:10,animation:"fu 0.4s ease"}}><div style={{fontSize:11,fontWeight:500,color:C.green,textTransform:"uppercase",marginBottom:4,display:"flex",alignItems:"center",gap:5}}><TM s={11}/> Cascade impact</div><div style={{fontSize:12,color:"#065f46",lineHeight:1.5}}>Unblocked price realization. Removed 1 risk. Progress 54% {"\u2192"} 62%.</div></div>}
</div>
</div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:12,overflow:"hidden",marginBottom:24,boxShadow:"0 1px 3px rgba(31,71,106,0.04)"}}>
<div style={{padding:"14px 20px",borderBottom:"1px solid "+C.subtle,display:"flex",alignItems:"center",gap:10}}><TM v="a" s={18}/><span style={{fontSize:15,fontWeight:500,color:C.navy}}>Ask TARGA</span><span style={{fontSize:13,color:C.gray,marginLeft:4}}>AI assistant for this {selItemCtx?"initiative":"goal"}</span></div>
<div ref={chatRef} style={{minHeight:140,maxHeight:320,overflow:"auto",padding:"18px 24px"}}>
{msgs.length===0&&<div style={{padding:"18px 8px 8px"}}><div style={{fontSize:14,color:"#6b7a8a",marginBottom:12,lineHeight:1.5}}>Ask anything about this goal. Grounded in live data from your initiatives, metrics, and recent activity.</div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{["What's blocking progress?","Who should I talk to?","What changed this week?"].map(function(ch){return(<div key={ch} className="trg-chip" onClick={function(){askPreset(ch);}} style={{padding:"8px 14px",border:"1px solid "+C.border,borderRadius:999,fontSize:13,color:C.navy,cursor:"pointer",background:"#fff",fontWeight:500}}>{ch}</div>);})}</div></div>}
{msgs.map(function(m,i){return(<div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",marginBottom:10}}><div style={{maxWidth:"78%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?C.navy:C.tealBg,color:m.role==="user"?"#fff":C.navy,fontSize:16,lineHeight:1.55}}>{m.text}</div></div>);})}
{chatLoading&&<div style={{display:"flex",gap:8,padding:"8px 0",alignItems:"center"}}>{[0,1,2].map(function(i){return(<svg key={i} width="14" height="14" viewBox="0 0 24 24" style={{animation:"trg-tri 1.2s ease "+(i*0.18)+"s infinite"}}><polygon points="12,4 21,20 3,20" fill={C.teal}/></svg>);})}</div>}
</div>
<div style={{padding:"12px 20px 16px",borderTop:"1px solid "+C.subtle,display:"flex",gap:10}}><input value={chatIn} onChange={function(e){setChatIn(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter")sendChat();}} placeholder="Ask about this goal..." style={{flex:1,padding:"10px 14px",border:"1px solid "+C.border,borderRadius:8,fontSize:16,color:C.navy,outline:"none",background:C.bg2,fontFamily:"inherit"}}/><div onClick={sendChat} style={{width:42,height:42,background:C.teal,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M12 5 L19 12 L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
</div>

<Eye><PI s={12}/> Initiatives <span style={{color:C.gray,fontWeight:400}}>. {G.initiatives.length}</span></Eye>
<div className="trg-init-row">
{G.initiatives.map(function(chRaw,ci){var ch=G.hasCascadeDemo&&chRaw.t==="Reduce COGS tier-1"?Object.assign({},chRaw,{s:phase>=4?"AT RISK":"BLOCKER",sc:phase>=4?"amber":"red"}):G.hasCascadeDemo&&chRaw.t==="Price realization"?Object.assign({},chRaw,{s:phase>=4?"ON TRACK":"BLOCKED",sc:phase>=4?"green":"amber"}):chRaw;var isSC=selChild===ci;return(<div key={ch.t} style={{flex:1}}>
<div className="trg-lift" onClick={function(){setSelChild(isSC?null:ci);}} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"9px 11px",cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}><PI s={11}/><span style={{fontSize:11,fontWeight:500,color:C.pinkDk}}>INITIATIVE</span></div>
<div style={{fontSize:13,fontWeight:500,color:C.navy,lineHeight:1.3,marginBottom:5}}>{ch.t}</div>
<div style={{display:"flex",alignItems:"center",transition:"color 0.8s, opacity 0.8s"}}><Pl c={ch.sc}>{ch.s}</Pl><div style={{marginLeft:"auto"}}><Av i={ch.av} bg={C.navy} fg="#fff" s={16}/></div></div>
</div>
<div style={{overflow:"hidden",maxHeight:isSC?150:0,opacity:isSC?1:0,transition:"max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s cubic-bezier(0.4,0,0.2,1)"}}>
<div style={{background:C.bg2,border:"1px solid "+C.subtle,borderRadius:8,padding:10,marginTop:4}}>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:6}}>{ch.desc}</div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:C.gray}}>Progress</span><span style={{fontWeight:500,color:C.navy}}>{ch.prog}%</span></div>
<PB pct={ch.prog}/>
<div className="trg-press" onClick={function(e){e.stopPropagation();setSelItemCtx(ch);setSelChild(null);window.scrollTo({top:0,behavior:"smooth"});}} style={{marginTop:6,padding:"5px 0",border:"1px solid "+C.border,borderRadius:6,textAlign:"center",fontSize:12,color:C.teal,fontWeight:500,cursor:"pointer"}}>Open item</div>
</div></div>
</div>);})}
</div>

<div style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,overflow:"hidden"}}>
<div style={{display:"flex",borderBottom:"1px solid "+C.border,overflowX:"auto"}}>
{["Comments","Attachments","History","Hierarchy","Relationships"].map(function(t){return(<div key={t} onClick={function(){setBTab(t);}} style={{flex:"1 0 auto",padding:"10px 16px",textAlign:"center",fontSize:13,fontWeight:bTab===t?500:400,color:bTab===t?C.teal:C.gray,borderBottom:bTab===t?"2px solid "+C.teal:"2px solid transparent",cursor:"pointer",transition:"color 0.18s cubic-bezier(0.4,0,0.2,1), border-color 0.18s cubic-bezier(0.4,0,0.2,1)",whiteSpace:"nowrap"}}>{t}</div>);})}
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
{strategies.map(function(s){return(<div key={s.id} className="trg-lift" onClick={function(){setSelGoalCtx(s.id);setSelItemCtx(null);setPage("detail");}} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:14,marginBottom:16,cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{width:8,height:8,borderRadius:"50%",background:s.sc==="green"?C.green:C.amber,flexShrink:0}}/><div style={{flex:1,fontSize:17,fontWeight:500,color:C.navy,minWidth:0}}>{s.t}</div><Av i={s.owner} s={20} bg={s.owner==="JT"?C.gold:s.owner==="MS"?C.red:C.navy} fg={s.owner==="JT"?C.navy:"#fff"}/></div>
<div style={{display:"flex",gap:24,marginBottom:8,flexWrap:"wrap"}}><div><div style={{fontSize:11,color:C.gray}}>Progress</div><div style={{fontSize:18,fontWeight:500,color:C.navy}}>{s.progress}%</div></div><div><div style={{fontSize:11,color:C.gray}}>Impact</div><div style={{fontSize:18,fontWeight:500,color:C.navy}}>{s.impact}</div></div><div style={{marginLeft:"auto",display:"flex",gap:4}}><Pl c={s.sc}>{s.status}</Pl>{s.blocker&&<Pl c="red">BLOCKER</Pl>}</div></div>
<PB pct={s.progress}/>
</div>);})}
</div>
<div className="trg-home-side">
<Eye><TM s={14}/> AI executive summary</Eye>
<div style={{background:C.tealBg,border:"1px solid "+C.tealBd,borderRadius:10,padding:12,marginBottom:14}}>
<div style={{fontSize:15,color:C.navy,lineHeight:1.6,marginBottom:10}}>Three of four goals on track. OpEx dropped 7 confidence points on vendor blockers. Gross margin depends on Apex Logistics. Two goals share that exposure. Recommend resolving both in one conversation.</div>
<div style={{background:C.white,border:"1px solid "+C.tealBd,borderRadius:6,padding:8,fontSize:13}}><span style={{fontWeight:500,color:C.red}}>Priority:</span> <span style={{color:C.navy}}>Resolve Apex Logistics before board materials lock in 11 days.</span></div>
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
{boardItems.map(function(b,bi){var isOwned=b.owner==="JT";return(<div key={b.t} className={isOwned?"trg-lift":""} onClick={isOwned?function(){setSelGoalCtx("sp1");setSelItemCtx(null);setPage("detail");}:undefined} style={{background:C.white,border:"1px solid "+C.border,borderLeft:"3px solid "+(b.status==="green"?C.green:C.red),borderRadius:10,padding:20,marginBottom:16,cursor:isOwned?"pointer":"default"}}>
<div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10,flexWrap:"wrap"}}><div style={{fontSize:17,fontWeight:500,color:C.navy,flex:1,minWidth:0}}>{b.t}</div><div style={{display:"flex",alignItems:"center",gap:8}}><Av i={b.owner} s={22} bg={b.owner==="JT"?C.gold:b.owner==="MS"?C.red:C.navy} fg={b.owner==="JT"?C.navy:"#fff"}/><span style={{fontSize:13,color:C.gray,whiteSpace:"nowrap"}}>{b.name} . {b.role}</span></div><div style={{textAlign:"right"}}><div style={{fontSize:24,fontWeight:500,color:b.status==="green"?C.green:C.red}}>{b.conf}%</div><div style={{fontSize:12,color:b.conf>b.prev?C.green:C.red}}>{b.conf>b.prev?"\u2197 +":"\u2198 "}{Math.abs(b.conf-b.prev)} pts</div></div></div>
<PB pct={b.conf} color={b.status==="green"?C.green:C.red} h={6}/>
<div style={{fontSize:14,color:"#4a5868",lineHeight:1.6,marginTop:10}}>{b.note}</div>
{isOwned&&<div style={{marginTop:10,paddingTop:10,borderTop:"1px solid "+C.subtle,display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:11,color:C.tealDk,letterSpacing:1,textTransform:"uppercase",fontWeight:500}}>Your goal</span><span style={{fontSize:13,color:C.teal,fontWeight:500}}>Open detail {"\u2192"}</span></div>}
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
{[["Strategic","#0eb2af","Goals, objectives"],["Execution","#db2777","Initiatives, workstreams"],["Action","#fbbf24","Tasks, decisions"],["Measurement","#1f476a","KPIs, metrics"]].map(function(t){return(
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

{quickAddOpen&&<div style={{position:"fixed",inset:0,zIndex:100,display:"flex",justifyContent:"flex-end",pointerEvents:"auto"}}>
<div onClick={function(){setQuickAddOpen(false);}} style={{position:"absolute",inset:0,background:"rgba(15,30,45,0.32)",backdropFilter:"blur(2px)",animation:"fu 0.2s cubic-bezier(0.4,0,0.2,1)"}}/>
<div className="trg-qa-panel" style={{position:"relative",width:460,maxWidth:"94vw",background:C.white,height:"100vh",boxShadow:"-8px 0 32px rgba(15,30,45,0.12)",display:"flex",flexDirection:"column",animation:"qaslide 0.28s cubic-bezier(0.4,0,0.2,1)"}}>

<div style={{padding:"20px 24px 16px",borderBottom:"1px solid "+C.border}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
<div style={{display:"flex",alignItems:"center",gap:8}}><TM s={16}/><span style={{fontSize:16,fontWeight:500,color:C.navy}}>Quick Add</span><span style={{fontSize:12,color:C.gray,padding:"2px 8px",background:C.bg2,borderRadius:4,fontWeight:500}}>3 pending</span></div>
<div onClick={function(){setQuickAddOpen(false);}} style={{cursor:"pointer",padding:4,color:C.gray,fontSize:18,lineHeight:1}}>{"\u00D7"}</div>
</div>
<div style={{fontSize:13,color:C.gray,lineHeight:1.5}}>Captured items wait here until you categorize them. Voice, text, or forwarded email all land in this queue.</div>
</div>

<div style={{flex:1,overflowY:"auto",padding:"16px 24px"}}>
{[
{t:"Follow up with Apex Logistics counsel on redlines",src:"Voice . 6:42 AM",detail:"Captured while driving. Thought about calling Matt directly rather than waiting for legal."},
{t:"New market exploration: New Zealand Q3",src:"Text . Yesterday",detail:"Nadia's trip notes suggest opportunity. Contract sales model might work. Need Bill's input."},
{t:"Schedule Mark 1:1 on OpEx recovery plan",src:"Email forward . Tuesday",detail:"Board materials raised OpEx as a gap. Mark needs a 30-min to walk through his recovery plan."}
].map(function(q,idx){return(<div key={idx} style={{background:C.white,border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontSize:11,color:C.gray,fontWeight:500,letterSpacing:0.5,marginBottom:6}}>{q.src}</div>
<div style={{fontSize:15,fontWeight:500,color:C.navy,lineHeight:1.35,marginBottom:6}}>{q.t}</div>
<div style={{fontSize:13,color:"#4a5868",lineHeight:1.5,marginBottom:12}}>{q.detail}</div>
<div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,fontWeight:500,color:C.navy,cursor:"pointer"}}>Action</div>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,fontWeight:500,color:C.navy,cursor:"pointer"}}>Initiative</div>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,fontWeight:500,color:C.navy,cursor:"pointer"}}>Comment</div>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,fontWeight:500,color:C.navy,cursor:"pointer"}}>Meeting</div>
<div style={{marginLeft:"auto",padding:"6px 10px",fontSize:12,color:C.gray,cursor:"pointer"}}>Dismiss</div>
</div>
</div>);})}

<div style={{marginTop:8,padding:"16px 18px",background:C.bg2,border:"1px dashed "+C.border,borderRadius:10,textAlign:"center"}}>
<div style={{fontSize:13,color:C.gray,marginBottom:6}}>Add another</div>
<div style={{display:"flex",gap:8,justifyContent:"center"}}>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,color:C.navy,cursor:"pointer",display:"flex",alignItems:"center",gap:4}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2 L12 14 M8 10 L12 14 L16 10" stroke={C.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20 L20 20" stroke={C.navy} strokeWidth="2" strokeLinecap="round"/></svg> Type</div>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,color:C.navy,cursor:"pointer",display:"flex",alignItems:"center",gap:4}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="3" width="6" height="12" rx="3" fill={C.navy}/><path d="M5 11 C5 15 8 18 12 18 C16 18 19 15 19 11 M12 18 L12 22" stroke={C.navy} strokeWidth="2" strokeLinecap="round" fill="none"/></svg> Voice</div>
<div className="trg-chip" style={{padding:"6px 12px",background:C.white,border:"1px solid "+C.border,borderRadius:999,fontSize:12,color:C.navy,cursor:"pointer",display:"flex",alignItems:"center",gap:4}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 8 L12 14 L20 8 M4 8 L4 18 L20 18 L20 8 M4 8 L12 2 L20 8" stroke={C.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> Email</div>
</div>
</div>
</div>

<div style={{padding:"14px 24px",borderTop:"1px solid "+C.border,background:C.bg2,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{fontSize:12,color:C.gray}}>Items stay here until you categorize them.</div>
<div onClick={function(){setQuickAddOpen(false);}} style={{fontSize:13,fontWeight:500,color:C.teal,cursor:"pointer",padding:"6px 10px"}}>Done</div>
</div>

</div>
</div>}

</div>
);
}
