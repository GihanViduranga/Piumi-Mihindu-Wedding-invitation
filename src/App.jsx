import { useState, useEffect, useRef } from "react";

function useCSS(css) {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = css;
    document.head.appendChild(el);
    return () => { try { document.head.removeChild(el); } catch (_) {} };
  }, []);
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Josefin+Sans:wght@100;200;300;400&family=Great+Vibes&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --blush-lt:  #F3E5DA;
  --blush:     #EFDCCC;
  --sand:      #D1B7A0;
  --taupe:     #A18168;
  --card-bg:   #E9D4C1;
  --card-mid:  #EFDCCC;
  --card-drk:  #D1B7A0;
  --accent:    #A18168;
  --crimson:   #5E0006;
  --text:      #2a1008;
  --text-dim:  rgba(42,16,8,0.78);
  --sep:       rgba(94,0,6,0.35);
}

html,body{width:100%;min-height:100%;margin:0;padding:0;font-family:'Josefin Sans',sans-serif;overflow-x:hidden}

body{
  min-height:100vh;
  background:radial-gradient(ellipse 160% 140% at 50% 0%, rgba(42,4,14,0.82) 0%, rgba(26,4,8,0.82) 55%, rgba(13,1,3,0.82) 100%),
  url('/images/image1.jpeg') center/cover no-repeat fixed;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
}

.dust{position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden}
.dp{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(161,129,104,.4) 0%,transparent 70%);animation:dpRise linear infinite}
@keyframes dpRise{0%{transform:translateY(102vh);opacity:0}10%{opacity:.7}90%{opacity:.15}100%{transform:translateY(-4vh);opacity:0}}

.hearts{position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden}
.heart{position:absolute;top:-60px;animation:heartFall linear forwards;opacity:0;filter:drop-shadow(0 2px 8px rgba(94,0,6,.4))}
@keyframes heartFall{
  0%  {opacity:0;transform:translateY(0) rotate(-15deg) scale(.5)}
  8%  {opacity:1}
  50% {transform:translateY(50vh) rotate(15deg) scale(1)}
  94% {opacity:.8}
  100%{opacity:0;transform:translateY(108vh) rotate(-10deg) scale(.7)}
}

.env-stage{
  position:relative;z-index:10;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  width:100%;
  padding:clamp(60px,15vw,120px) 1rem clamp(60px,10vw,100px);
}
.env-wrap{
  position:relative;width:clamp(280px,82vw,460px);cursor:pointer;
  filter:drop-shadow(0 28px 55px rgba(0,0,0,.75)) drop-shadow(0 8px 18px rgba(0,0,0,.5));
  transition:transform .2s ease;
}
.env-wrap:hover{transform:scale(1.015)}
.env-svg{width:100%;display:block;overflow:visible}

.hint{margin-top:1.8rem;text-align:center;transition:opacity .5s}
.hint.gone{opacity:0;pointer-events:none}
.hint-t{display:block;font-size:8px;letter-spacing:.52em;color:rgba(209,183,160,.7);text-transform:uppercase;animation:hPulse 2.6s ease-in-out infinite}
.hint-l{display:block;margin:.5rem auto 0;width:1px;height:26px;background:linear-gradient(to bottom,rgba(209,183,160,.7),transparent);animation:hPulse 2.6s ease-in-out infinite}
@keyframes hPulse{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(5px)}}

.full-page{
  position:fixed;inset:0;
  background:radial-gradient(ellipse 160% 140% at 50% 0%, rgba(42,4,14,0.75) 0%, rgba(26,4,8,0.75) 55%, rgba(13,1,3,0.75) 100%),
  url('/images/image1.jpeg') center/cover no-repeat fixed;
  overflow-y:auto;
  padding:clamp(2rem,5vw,4rem) clamp(.75rem,3vw,1.5rem) clamp(3rem,6vw,5rem);
  z-index:50;opacity:0;pointer-events:none;
  transition:opacity .9s ease .15s;
}
.full-page.show{opacity:1;pointer-events:all}
.full-inner{width:100%;max-width:520px;margin:0 auto}

.full-card{
  position:relative;overflow:hidden;
  background:linear-gradient(158deg, rgba(233,212,193,0.52) 0%, rgba(239,220,204,0.52) 60%, rgba(209,183,160,0.52) 100%);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  border:1px solid rgba(94,0,6,.2);
  box-shadow:0 0 0 1px rgba(161,129,104,.08),0 40px 100px rgba(0,0,0,.8),0 0 80px rgba(94,0,6,.12);
  transform:translateY(50px) scale(.93);
  transition:transform 1.1s cubic-bezier(.16,1,.3,1) .65s;
}
.full-page.show .full-card{transform:translateY(0) scale(1)}

.fc-wm{position:absolute;inset:0;pointer-events:none;opacity:.025;
  background-image:repeating-linear-gradient(45deg,transparent,transparent 15px,#A18168 15px,#A18168 16px),
  repeating-linear-gradient(-45deg,transparent,transparent 15px,#A18168 15px,#A18168 16px)}

.fcc{position:absolute;width:22px;height:22px;border-color:var(--crimson);border-style:solid;opacity:.35;z-index:3}
.fcc.tl{top:12px;left:12px;border-width:1.5px 0 0 1.5px}
.fcc.tr{top:12px;right:12px;border-width:1.5px 1.5px 0 0}
.fcc.bl{bottom:12px;left:12px;border-width:0 0 1.5px 1.5px}
.fcc.br{bottom:12px;right:12px;border-width:0 1.5px 1.5px 0}

.ribbon{height:4px;background:linear-gradient(90deg,#5E0006,#A18168,#D1B7A0,#A18168,#5E0006)}

.fc-bg{
  position:absolute;
  inset:0;
  background:url('/images/image2.jpeg') center/cover no-repeat;
  opacity:0.3;
  pointer-events:none;
  z-index:1;
}

.fs{
  padding:clamp(1.6rem,4.5vw,2.8rem) clamp(1.4rem,4.5vw,2.6rem);
  text-align:center;position:relative;z-index:2;
  opacity:0;transform:translateY(28px);
  transition:opacity .8s ease,transform .8s ease;
}
.full-page.show .fs{opacity:1;transform:translateY(0)}
.full-page.show .fs:nth-child(2) {transition-delay:.80s}
.full-page.show .fs:nth-child(4) {transition-delay:1.00s}
.full-page.show .fs:nth-child(6) {transition-delay:1.20s}
.full-page.show .fs:nth-child(8) {transition-delay:1.40s}
.full-page.show .fs:nth-child(10){transition-delay:1.60s}
.full-page.show .fs:nth-child(12){transition-delay:1.80s}
.full-page.show .fs:nth-child(14){transition-delay:2.00s}
.full-page.show .fs:nth-child(16){transition-delay:2.20s}

.fsep{height:1px;margin:0 clamp(1.4rem,4.5vw,2.6rem);background:linear-gradient(90deg,transparent,var(--sep),transparent);position:relative;z-index:2;opacity:0;transition:opacity .7s ease}
.full-page.show .fsep{opacity:1}
.full-page.show .fsep:nth-of-type(1){transition-delay:.95s}
.full-page.show .fsep:nth-of-type(2){transition-delay:1.15s}
.full-page.show .fsep:nth-of-type(3){transition-delay:1.35s}
.full-page.show .fsep:nth-of-type(4){transition-delay:1.55s}
.full-page.show .fsep:nth-of-type(5){transition-delay:1.75s}
.full-page.show .fsep:nth-of-type(6){transition-delay:1.95s}
.full-page.show .fsep:nth-of-type(7){transition-delay:2.15s}

.sep-gem{text-align:center;margin-top:-.58rem;position:relative;z-index:3;opacity:0;transition:opacity .5s ease}
.full-page.show .sep-gem{opacity:1}
.full-page.show .sep-gem:nth-of-type(1){transition-delay:1.0s}
.full-page.show .sep-gem:nth-of-type(2){transition-delay:1.2s}
.full-page.show .sep-gem:nth-of-type(3){transition-delay:1.4s}
.full-page.show .sep-gem:nth-of-type(4){transition-delay:1.6s}
.full-page.show .sep-gem:nth-of-type(5){transition-delay:1.8s}
.full-page.show .sep-gem:nth-of-type(6){transition-delay:2.0s}
.full-page.show .sep-gem:nth-of-type(7){transition-delay:2.2s}
.sep-gem span{background:var(--card-mid);padding:0 .75rem;color:#5E0006;font-size:.72rem;font-weight:600}

.eyebrow{font-size:clamp(7.5px,1.3vw,8.5px);font-weight:600;letter-spacing:.55em;color:#5E0006;text-transform:uppercase;display:block;margin-bottom:.85rem}
.heading{font-family:'Cormorant Garamond',serif;font-size:clamp(1.05rem,2.8vw,1.55rem);font-weight:600;color:#1a0005;line-height:1.3;margin-bottom:.55rem}
.body-p{font-family:'Cormorant Garamond',serif;font-size:clamp(.9rem,1.9vw,1.06rem);font-weight:400;color:rgba(20,0,5,0.92);line-height:1.8}

.cover-names{font-family:'Great Vibes',cursive;font-size:clamp(3rem,9.5vw,5.8rem);color:#1a0005;line-height:.94;text-shadow:0 2px 12px rgba(94,0,6,.18)}
.cover-amp{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(.85rem,2.4vw,1.25rem);color:#5E0006;display:block;margin:.22rem 0}
.cover-date{font-family:'Cormorant Garamond',serif;font-size:clamp(.84rem,1.9vw,1rem);font-weight:400;letter-spacing:.12em;color:rgba(20,0,5,0.85);margin-top:1rem}

.couple-photos{
  display:grid;grid-template-columns:1fr 1fr;
  gap:clamp(.6rem,1.5vw,1rem);
  padding:0 clamp(1.4rem,4.5vw,2.6rem) clamp(1.6rem,4.5vw,2.4rem);
  opacity:0;transform:translateY(24px);
  transition:opacity .9s ease,transform .9s ease;
  position:relative;z-index:2;
}
.full-page.show .couple-photos{opacity:1;transform:translateY(0);transition-delay:.92s}

.photo-frame{position:relative;aspect-ratio:3/4;border:1px solid rgba(94,0,6,.25);background:linear-gradient(135deg,#E9D4C1 0%,#D1B7A0 50%,#A18168 100%);overflow:hidden}
.photo-frame::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 60%)}
.photo-frame::after{content:'';position:absolute;inset:6px;border:1px solid rgba(94,0,6,.2);pointer-events:none}
.photo-inner{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem}
.photo-icon{font-size:clamp(1.8rem,5vw,2.8rem);opacity:.45}
.photo-label{font-size:clamp(6px,1.2vw,7.5px);letter-spacing:.4em;color:rgba(94,0,6,.5);text-transform:uppercase;font-family:'Josefin Sans',sans-serif;font-weight:200}
.photo-frame img{width:100%;height:100%;object-fit:cover;display:block}

.det-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(.7rem,2vw,1rem);text-align:left;margin-top:.75rem}
.det-box{border:1px solid rgba(94,0,6,.18);padding:clamp(.62rem,1.6vw,.95rem);background:rgba(94,0,6,.04);transition:border-color .3s,background .3s}
.det-box:hover{border-color:rgba(94,0,6,.35);background:rgba(94,0,6,.08)}
.det-l{font-size:clamp(8px,1.6vw,10px);letter-spacing:.38em;color:#5E0006;font-weight:600;text-transform:uppercase;display:block;margin-bottom:.22rem}
.det-v{font-family:'Cormorant Garamond',serif;font-size:clamp(.95rem,2vw,1.15rem);font-weight:500;color:#1a0005;line-height:1.4;white-space:pre-line}

/* ── MAP ── */
.map-wrap{width:100%;border-radius:3px;overflow:hidden;border:1px solid rgba(94,0,6,.22);margin-top:.85rem}
.map-wrap iframe{display:block;width:100%;height:220px;border:0}
.map-btn{
  display:flex;align-items:center;justify-content:center;gap:.55rem;
  width:100%;padding:.72rem 1rem;
  background:#5E0006;color:#F3E5DA;
  font-family:'Josefin Sans',sans-serif;
  font-size:clamp(7px,1.4vw,9px);font-weight:400;letter-spacing:.42em;text-transform:uppercase;
  text-decoration:none;border:none;cursor:pointer;transition:background .22s;
}
.map-btn:hover{background:#3a0004}
.map-pin{font-size:13px;letter-spacing:0}

.cl-script{font-family:'Great Vibes',cursive;font-size:clamp(1.9rem,6vw,3rem);color:#1a0005;opacity:.75;;margin-bottom:.7rem}
.cl-verse{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(.82rem,1.7vw,.97rem);font-weight:400;color:rgba(20,0,5,0.75);line-height:1.76}
.cl-rule{display:flex;align-items:center;gap:.75rem;justify-content:center;margin-top:1.3rem}
.cl-line{flex:1;height:1px}
.cl-line.l{background:linear-gradient(90deg,transparent,rgba(94,0,6,.4))}
.cl-line.r{background:linear-gradient(90deg,rgba(94,0,6,.4),transparent)}
.cl-reply{margin-top:1.1rem;font-size:clamp(5.5px,1.1vw,7px);letter-spacing:.44em;font-weight:400;color:rgba(42,16,8,.5);text-transform:uppercase}

@media(max-width:440px){
  .det-grid{grid-template-columns:1fr}
  .couple-photos{grid-template-columns:1fr 1fr}
  .full-page{padding:1.8rem .65rem 3.5rem}
  .fs{padding:1.25rem 1.1rem}
}
`;

function DustParticles() {
  const pts = Array.from({ length: 18 }, (_, i) => ({
    id: i, sz: 2 + Math.random() * 3.5,
    left: Math.random() * 100,
    delay: Math.random() * 14, dur: 14 + Math.random() * 18,
  }));
  return (
    <div className="dust">
      {pts.map(p => (
        <div key={p.id} className="dp" style={{
          width: p.sz, height: p.sz, left: p.left + "%",
          animationDelay: p.delay + "s", animationDuration: p.dur + "s",
        }} />
      ))}
    </div>
  );
}

function EnvelopeSVG() {
  const W = 300, H = 200, MX = 150, MY = 104;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="env-svg" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9D4C1" /><stop offset="50%" stopColor="#D1B7A0" /><stop offset="100%" stopColor="#A18168" />
        </linearGradient>
        <linearGradient id="gLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFDCCC" /><stop offset="100%" stopColor="#A18168" />
        </linearGradient>
        <linearGradient id="gRight" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFDCCC" /><stop offset="100%" stopColor="#A18168" />
        </linearGradient>
        <linearGradient id="gBottom" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#5E0006" /><stop offset="100%" stopColor="#A18168" />
        </linearGradient>
        <linearGradient id="gFlap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3E5DA" /><stop offset="60%" stopColor="#D1B7A0" /><stop offset="100%" stopColor="#A18168" />
        </linearGradient>
        <linearGradient id="gSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" /><stop offset="55%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={W} height={H} rx="4" fill="url(#gBase)" />
      <polygon points={`0,0 0,${H} ${MX},${MY}`} fill="url(#gLeft)" />
      <polygon points={`${W},0 ${W},${H} ${MX},${MY}`} fill="url(#gRight)" />
      <polygon points={`0,${H} ${W},${H} ${MX},${MY}`} fill="url(#gBottom)" />
      <polygon points={`0,0 ${W},0 ${MX},${MY}`} fill="url(#gFlap)" />
      <polygon points={`0,0 ${W},0 ${MX},${MY}`} fill="url(#gSheen)" />
      <circle cx={MX} cy={MY} r="20" fill="#5E0006" />
      <circle cx={MX-4} cy={MY-5} r="20" fill="#A18168" opacity="0.4" />
      <circle cx={MX} cy={MY} r="14" fill="none" stroke="rgba(243,229,218,0.4)" strokeWidth="1" />
      <text x={MX} y={MY+6} textAnchor="middle" fontFamily="'Great Vibes', cursive" fontSize="16"
        fill="rgba(243,229,218,0.95)" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,.6))" }}>{"\nP\n♡M"}</text>
      <g opacity="0.45" transform={`translate(${W-56}, 10)`}>
        <circle cx="16" cy="16" r="14" fill="none" stroke="#5E0006" strokeWidth="1.5" />
        <line x1="31" y1="12" x2="40" y2="12" stroke="#5E0006" strokeWidth="1.5" />
        <line x1="31" y1="16" x2="40" y2="16" stroke="#5E0006" strokeWidth="1.5" />
        <line x1="31" y1="20" x2="40" y2="20" stroke="#5E0006" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

const HEART_CHARS = ["❤️","🤍","💛","🌸","💕","💖","✨","💝","🌺","💗"];
function spawnHearts(setHearts) {
  const batch = Array.from({ length: 38 }, (_, i) => ({
    id: Date.now() + i,
    left: Math.random() * 96,
    char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
    dur: 2.2 + Math.random() * 2.8,
    delay: Math.random() * 2,
    fs: 16 + Math.random() * 24,
    rot: -25 + Math.random() * 50,
  }));
  setHearts(h => [...h, ...batch]);
  setTimeout(() => setHearts(h => h.filter(x => !batch.find(b => b.id === x.id))), 7000);
}

function PhotoFrame({ src, label, icon }) {
  return (
    <div className="photo-frame">
      {src ? <img src={src} alt={label} /> : (
        <div className="photo-inner">
          <span className="photo-icon">{icon}</span>
          <span className="photo-label">{label}</span>
        </div>
      )}
    </div>
  );
}

/* ── Venue map: embedded iframe + open-in-Maps button ── */
const MAPS_QUERY = "Grand+Divine+Hotel+Kosgama+Sri+Lanka";
const MAPS_OPEN  = `https://maps.google.com/?q=${MAPS_QUERY}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed`;

function VenueMap() {
  return (
    <div className="map-wrap">
      <iframe
        title="Grand Divine Hotel — Kosgama"
        src={MAPS_EMBED}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a href={MAPS_OPEN} target="_blank" rel="noopener noreferrer" className="map-btn">
        <span className="map-pin">📍</span>
        Open in Google Maps
      </a>
    </div>
  );
}

export default function WeddingInvitation() {
  useCSS(CSS);
  const [phase, setPhase] = useState("idle");
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (phase !== "idle") return;
    audioRef.current.play();
    setPhase("hearts");
    spawnHearts(setHearts);
    setTimeout(() => { spawnHearts(setHearts); }, 2000);
    setTimeout(() => { setPhase("full"); }, 2500);
  };

  return (
    <>
      <DustParticles />

      <div className="hearts">
        {hearts.map(h => (
          <div key={h.id} className="heart" style={{
            left: h.left + "%", fontSize: h.fs + "px",
            animationDuration: h.dur + "s", animationDelay: h.delay + "s",
            transform: `rotate(${h.rot}deg)`,
          }}>{h.char}</div>
        ))}
      </div>

      {phase !== "full" && (
        <div className="env-stage">
          <div className="env-wrap" onClick={handleClick}>
            <EnvelopeSVG />
          </div>
          <div className={`hint${phase !== "idle" ? " gone" : ""}`}>
            <span className="hint-t">Tap the envelope to open</span>
            <span className="hint-l" />
          </div>
        </div>
      )}

      <div className={`full-page${phase === "full" ? " show" : ""}`}>
        <div className="full-inner">
          <div className="full-card">
            <div className="fc-bg" />
            <div className="fcc tl" /><div className="fcc tr" />
            <div className="fcc bl" /><div className="fcc br" />
            <div className="ribbon" />

            {/* 1 — Cover */}
            <div className="fs">
              <span className="eyebrow">Together with their families</span>
              <div className="cover-names">Piumi<span className="cover-amp">&amp;</span>Mihindu</div>
              <p className="cover-date">Monday · the Eighteenth of May · 2026</p>
            </div>

            <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
            </div>

            {/* 2 — Photos */}
            <div className="couple-photos">
              <PhotoFrame src="\images\image1.jpeg" label="Add photo here" icon="🌸" />
              <PhotoFrame src="\images\image2.jpeg" label="Add photo here" icon="🌸" />
            </div>

            <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
            </div>

            {/* 3 — Invitation */}
            <div className="fs">
              <span className="eyebrow">Our Invitation</span>
              <h2 className="heading">We joyfully invite you to share in our happiness</h2>
              <p className="body-p">as we unite in marriage and begin our journey together. Surrounded by the love of our family and friends, we invite you to an evening of warmth, laughter, and celebration, filled with blessings, smiles, and memories to treasure forever. Come and witness our hearts become one under the beautiful Sri Lankan skies.</p>
            </div>

            <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
            </div>

            {/* 4 — Details */}
            <div className="fs">
              <span className="eyebrow">Celebration Details</span>
              <div className="det-grid font-size:1rem">
                {[
                  { l: "Date",     v: "Monday\n18 May 2026" },
                  { l: "Ceremony", v: "10:40 AM\nPoruwa Ceremony" },
                  { l: "Hotel",    v: "Grand Divine Hotel\nKosgama", map: true },
                ].map(d => (
                  <div className="det-box" key={d.l}>
                    <span className="det-l">{d.l}</span>
                    {d.map ? (
                      <a href={MAPS_OPEN} target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "clamp(.95rem,2vw,1.15rem)",
                        fontWeight: 500,
                        color: "#5E0006",
                        textDecoration: "underline",
                        textDecorationColor: "rgba(94,0,6,0.3)",
                        textUnderlineOffset: "3px",
                        whiteSpace: "pre-line",
                        display: "block",
                        lineHeight: 1.4,
                      }}>
                        {d.v} 📍
                      </a>
                    ) : (
                      <div className="det-v">{d.v}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
            </div>

            {/* 5 — Map */}
            <div className="fs">
              <span className="eyebrow">Find Us Here</span>
              <VenueMap />
            </div>

            <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
            </div>

            {/* 6 — Closing */}
            <div className="fs">
              <div className="cl-script">P &amp; M</div>
              <p className="cl-verse">
                "I carry your heart with me,<br />I carry it in my heart."<br />
                <span style={{ fontSize: ".8em", opacity: .65 }}>— e.e. cummings</span>
              </p>
              <div className="cl-rule">
                <div className="cl-line l" />
                <span style={{ color: "var(--crimson)", fontSize: ".68rem" }}>✦</span>
                <div className="cl-line r" />
              </div>
              <p className="cl-reply">Kindly reply by the 5th of May · 2026</p>
            </div>

            <div className="ribbon" style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="\music\song.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}