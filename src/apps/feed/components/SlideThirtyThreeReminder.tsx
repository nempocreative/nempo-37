// Slide 33 — animated "datang besok" reminder layered over the shared MusiComedy frame.
// Scoped to slide 33 only: slides 31 and 32 keep their own looks (see AGENTS.md).

const notes = [
  { glyph: '♪', left: '9%', bottom: '34%', size: 'clamp(18px, 3.4vw, 34px)', delay: '0s', duration: '5.2s' },
  { glyph: '♫', left: '84%', bottom: '42%', size: 'clamp(15px, 2.9vw, 28px)', delay: '1.4s', duration: '5.8s' },
  { glyph: '♪', left: '6%', bottom: '58%', size: 'clamp(13px, 2.4vw, 24px)', delay: '2.6s', duration: '6.4s' },
  { glyph: '♬', left: '88%', bottom: '22%', size: 'clamp(16px, 3vw, 30px)', delay: '3.5s', duration: '5.5s' },
  { glyph: '♪', left: '14%', bottom: '18%', size: 'clamp(12px, 2.2vw, 22px)', delay: '4.3s', duration: '6.1s' },
];

const sparks = [
  { left: '18%', top: '52%', delay: '0s' },
  { left: '78%', top: '30%', delay: '0.7s' },
  { left: '10%', top: '26%', delay: '1.5s' },
  { left: '86%', top: '60%', delay: '2.2s' },
  { left: '50%', top: '34%', delay: '2.9s' },
  { left: '26%', top: '20%', delay: '3.6s' },
];

export function SlideThirtyThreeReminder() {
  return (
    <section
      role="group"
      aria-label="Pengingat datang besok ke MusiComedy Night"
      className="musicomedy-s33 absolute inset-0 z-[4] overflow-hidden pointer-events-none"
    >
      {/* Warm glow pulse behind the logo */}
      <div
        aria-hidden="true"
        className="musicomedy-s33-glow absolute left-1/2 top-[13%] h-[26%] w-[62%] -translate-x-1/2"
      />

      {/* Floating music notes */}
      <div aria-hidden="true">
        {notes.map((note) => (
          <span
            key={`${note.glyph}-${note.delay}`}
            className="musicomedy-s33-note absolute"
            style={{
              left: note.left,
              bottom: note.bottom,
              fontSize: note.size,
              animationDelay: note.delay,
              animationDuration: note.duration,
            }}
          >
            {note.glyph}
          </span>
        ))}
      </div>

      {/* Twinkling sparks */}
      <div aria-hidden="true">
        {sparks.map((spark, index) => (
          <span
            key={index}
            className="musicomedy-s33-spark absolute"
            style={{ left: spark.left, top: spark.top, animationDelay: spark.delay }}
          />
        ))}
      </div>

      {/* Reminder ribbon: the BESOK! chip sits inline with the reminder line. */}
      <div className="musicomedy-s33-ribbon absolute left-[26%] right-[16%] top-[4.5%]">
        <p className="musicomedy-s33-ribbon-text">
          <span className="musicomedy-s33-stamp-inner">BESOK!</span>
          Jangan lupa datang besok — kita seru-seruan bareng!
        </p>
      </div>
    </section>
  );
}
