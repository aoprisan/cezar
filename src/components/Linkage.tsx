/**
 * Semnătura vizuală a paginii: un mecanism patrulater articulat (four-bar
 * linkage) — domeniul de o viață al profesorului, teoria mecanismelor.
 * Desenat ca o planșă tehnică, în linii fine, cu adnotări de cotă. Liniile se
 * „trasează" la încărcare (stroke-dashoffset). Diagramă statică și corectă
 * cinematic — decorativă. Animația respectă `prefers-reduced-motion` din CSS.
 */
export default function Linkage({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`linkage ${className}`}
      viewBox="0 0 280 220"
      role="img"
      aria-label="Schiță tehnică: mecanism patrulater articulat — teoria mecanismelor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Linii de cotă / construcție, foarte fine */}
      <g className="linkage__guides">
        <line x1="40" y1="178" x2="240" y2="178" strokeDasharray="2 5" />
        <line x1="40" y1="178" x2="40" y2="60" strokeDasharray="2 5" />
        <line x1="40" y1="60" x2="208" y2="60" strokeDasharray="2 5" />
      </g>

      {/* Barele mecanismului */}
      <g className="linkage__bars">
        {/* batiul (bara fixă) */}
        <line className="linkage__bar linkage__bar--ground" x1="60" y1="160" x2="200" y2="160" />
        {/* manivela */}
        <line className="linkage__bar" x1="60" y1="160" x2="78" y2="92" />
        {/* biela */}
        <line className="linkage__bar" x1="78" y1="92" x2="200" y2="80" />
        {/* balansierul */}
        <line className="linkage__bar" x1="200" y1="160" x2="200" y2="80" />
      </g>

      {/* Articulații (cuplele de rotație) */}
      <g className="linkage__joints">
        <circle cx="60" cy="160" r="5" className="linkage__joint linkage__joint--fixed" />
        <circle cx="200" cy="160" r="5" className="linkage__joint linkage__joint--fixed" />
        <circle cx="78" cy="92" r="4" className="linkage__joint" />
        <circle cx="200" cy="80" r="4" className="linkage__joint" />
      </g>

      {/* Roata dințată — singurul element în mișcare, lent și constant */}
      <g className="linkage__gear" style={{ transformOrigin: '60px 160px' }}>
        <circle cx="60" cy="160" r="13" className="linkage__gear-body" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4
          const x1 = 60 + Math.cos(a) * 13
          const y1 = 160 + Math.sin(a) * 13
          const x2 = 60 + Math.cos(a) * 17
          const y2 = 160 + Math.sin(a) * 17
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="linkage__tooth" />
        })}
        <circle cx="60" cy="160" r="3.5" className="linkage__gear-hub" />
      </g>
    </svg>
  )
}
