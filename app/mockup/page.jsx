export const metadata = {
  title: 'TARGA AI — Live Demo',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MockupPage() {
  return (
    <>
      {/* Cross-page nav — sits above the iframe */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        background: '#0f2035',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: '-apple-system, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginRight: 24 }}>
          <svg width="16" height="16" viewBox="0 0 24 24">
            <polygon points="14.4 18.6 9.7 18.6 12 13.8" fill="#0eb2af"/>
            <polygon points="23.5 23.9 19.4 23.9 12.1 8.7 4.7 24 0.5 24 9.8 4.7 11.4 1.5 12.1 0" fill="#fff"/>
          </svg>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
            TARGA AI
          </span>
        </div>
        <a href="/mockup" style={{ padding: '0 14px', height: 40, display: 'inline-flex', alignItems: 'center', fontSize: 12, fontWeight: 600, color: '#0eb2af', letterSpacing: '0.04em', textDecoration: 'none', borderBottom: '2px solid #0eb2af' }}>
          Live Demo
        </a>
        <a href="/guide" style={{ padding: '0 14px', height: 40, display: 'inline-flex', alignItems: 'center', fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', textDecoration: 'none', borderBottom: '2px solid transparent' }}>
          Platform Guide
        </a>
        <a href="/reference" style={{ padding: '0 14px', height: 40, display: 'inline-flex', alignItems: 'center', fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', textDecoration: 'none', borderBottom: '2px solid transparent' }}>
          Technical Reference
        </a>
        <div style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          HBC-TARGA-UX-2026
        </div>
      </div>

      {/* Demo iframe — pushed down by nav height */}
      <iframe
        src="/targa_demo_v2.html"
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          width: '100%',
          height: 'calc(100% - 40px)',
          border: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          zIndex: 999,
        }}
        title="TARGA AI Live Demo"
      />
    </>
  );
}
