const releases = [
  { number: "01", title: "I’ll Follow Your Lead", year: "2026", kind: "Single", href: "https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" },
  { number: "02", title: "Here For You", year: "2026", kind: "Live at Stagg Street Studio", href: "https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" },
  { number: "03", title: "Truth Bender", year: "2025", kind: "Single", href: "https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" },
  { number: "04", title: "Je Ne Sais Quoi", year: "2024", kind: "Single", href: "https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" },
  { number: "05", title: "Funeral", year: "2023", kind: "Single", href: "https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Ruxandra</a>
        <div className="nav-links">
          <a href="#music">Music</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <p className="eyebrow hero-eyebrow">Los Angeles · California</p>
        <div className="hero-copy">
          <h1 id="hero-title">Ruxandra</h1>
          <p className="hero-line">A voice for the space<br />between breaking &amp; becoming.</p>
          <a className="circle-link" href="#music">
            <span>Listen<br />in</span>
            <Arrow />
          </a>
        </div>
        <div className="eclipse" aria-hidden="true">
          <div className="eclipse-core" />
        </div>
        <p className="hero-caption">Downtempo soul / late-night revelation</p>
        <a className="scroll-cue" href="#music">Scroll to enter <span>↓</span></a>
      </section>

      <section className="manifesto" aria-label="Artist statement">
        <p className="eyebrow">01 / The feeling</p>
        <div>
          <p className="manifesto-text">Smoky blues. Cinematic shadows. Songs for the moment the old story loses its hold.</p>
          <p className="manifesto-note">Ruxandra makes intimate, atmospheric music that follows truth into the unknown.</p>
        </div>
      </section>

      <section className="music-section" id="music" aria-labelledby="music-title">
        <div className="section-heading">
          <p className="eyebrow">02 / Selected works</p>
          <h2 id="music-title">Music for<br /><em>the in-between.</em></h2>
        </div>
        <div className="release-list">
          {releases.map((release) => (
            <a className="release" href={release.href} target="_blank" rel="noreferrer" key={release.number}>
              <span className="release-number">{release.number}</span>
              <span className="release-title">{release.title}</span>
              <span className="release-meta">{release.kind} · {release.year}</span>
              <Arrow />
            </a>
          ))}
        </div>
        <a className="text-link" href="https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" target="_blank" rel="noreferrer">Open Spotify <Arrow /></a>
      </section>

      <section className="feature" aria-label="Latest single">
        <div className="feature-orbit" aria-hidden="true"><span /></div>
        <div className="feature-copy">
          <p className="eyebrow">New single / 2026</p>
          <h2>I’ll Follow<br /><em>Your Lead</em></h2>
          <p>A late-night surrender — all heat, restraint, and the courage to not know where it lands.</p>
          <a className="button-link" href="https://open.spotify.com/artist/5Oarng9ZEUTCAP92qqOFKo" target="_blank" rel="noreferrer">Listen now <Arrow /></a>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <p className="eyebrow">03 / About</p>
        <div className="about-copy">
          <h2 id="about-title">Music as<br />world-building.</h2>
          <div>
            <p>Born in Romania and now creating from Los Angeles, Ruxandra turns memory, illusion, and inner transformation into songs that feel like quiet revelations.</p>
            <p>Her debut album is taking shape with producer David Fulton — an intimate record about unraveling, repair, and what remains luminous.</p>
            <a className="text-link" href="https://www.mixtapemeditation.com/artists/ruxandra" target="_blank" rel="noreferrer">Read the story <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="connect" id="connect" aria-labelledby="connect-title">
        <p className="eyebrow">04 / Stay close</p>
        <h2 id="connect-title">Follow the<br /><em>thread.</em></h2>
        <div className="connect-grid">
          <a href="https://www.instagram.com/ruxandramusic/" target="_blank" rel="noreferrer"><span>Instagram</span><Arrow /></a>
          <a href="https://www.youtube.com/@ruxandramusic" target="_blank" rel="noreferrer"><span>YouTube</span><Arrow /></a>
          <a href="https://music.apple.com/us/artist/ruxandra/1715620606" target="_blank" rel="noreferrer"><span>Apple Music</span><Arrow /></a>
        </div>
      </section>

      <footer>
        <span>RUXANDRA © 2026</span>
        <span>Made for the lingering</span>
      </footer>
    </main>
  );
}
