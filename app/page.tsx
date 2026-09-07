import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  Scissors,
  Sprout,
  TreePine,
} from 'lucide-react';

const phoneDisplay = '07796 872642';
const phoneHref = 'tel:+447796872642';

const services = [
  { number: '01', icon: TreePine, title: 'Tree surgery', text: 'Careful reductions, pruning, pollarding and dismantling for trees of all sizes.', items: ['Tree reductions', 'Sectional dismantling', 'Deadwood removal'] },
  { number: '02', icon: Scissors, title: 'Hedges & pruning', text: 'One-off cuts and routine shaping to keep boundaries neat, healthy and under control.', items: ['Hedge cutting', 'Height reductions', 'Shrub pruning'] },
  { number: '03', icon: Sprout, title: 'Garden clearance', text: 'Overgrown areas cleared, unwanted growth removed and outdoor spaces made usable again.', items: ['Site clearances', 'Green waste removal', 'General garden work'] },
];

const gallery = [
  ['/work/tree-reduction.png', 'Large tree reduced in a back garden', 'Tree work'],
  ['/work/hedge-shaping.png', 'Mature hedge being shaped', 'Hedge care'],
  ['/work/tree-felling.png', 'Tree sections safely lowered during removal', 'Tree removal'],
  ['/work/garden-clearance.png', 'Conifer and garden clearance in progress', 'Clearance'],
  ['/work/pollarding.png', 'Trees pollarded beside a home', 'Pollarding'],
  ['/work/conifer-reduction.png', 'Tall conifer being carefully reduced', 'Tree work'],
];

export default function Home() {
  return (
    <main>
      <div className="top-strip">
        <div className="shell top-strip-inner">
          <span>Local tree & garden work</span>
          <span className="top-location"><MapPin size={14} /> Toddington, Dunstable</span>
          <a href={phoneHref}>Open 24 hours · {phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="C and J Landscaping and Trees home">
            <span className="brand-mark" aria-hidden="true"><TreePine size={26} /></span>
            <span className="brand-name"><strong>C&amp;J</strong><small>Landscaping &amp; Trees</small></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About</a><a href="#quote">Get a quote</a>
          </nav>
          <a className="nav-call" href={phoneHref}><Phone size={17} /> {phoneDisplay}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Tree care · Hedges · Clearances</p>
            <h1>Tree work,<br />handled <em>properly.</em></h1>
            <p className="hero-lead">Practical, tidy tree and garden services for homes in Toddington, Dunstable and the surrounding area.</p>
            <div className="hero-actions">
              <a className="button button-accent" href={phoneHref}>Call for a free quote <ArrowUpRight size={19} /></a>
              <a className="text-link" href="#work">See recent work <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-proof">
              <div><strong>24/7</strong><span>Open for enquiries</span></div>
              <div><strong>Local</strong><span>Toddington based</span></div>
              <div><strong>Free</strong><span>No-obligation quotes</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="hero-photo"><img src="/work/hero-tree.png" alt="Tree work being carried out at height in Toddington" /></figure>
            <div className="hero-note"><span>Current work</span><strong>Tree reduction<br />&amp; branch removal</strong></div>
            <div className="tree-ring" aria-hidden="true"><span /><span /><span /></div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true"><div>PRUNING <span>✦</span> TREE REMOVAL <span>✦</span> HEDGE CUTTING <span>✦</span> GARDEN CLEARANCE <span>✦</span> PRUNING <span>✦</span></div></div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> What we do</p><h2>From the canopy<br />to the garden gate.</h2></div>
          <p>Whether it is one problem tree, an overgrown boundary or a full garden clearance, call to talk through the job and arrange a free quote.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, text, items }) => (
            <article className="service-card" key={title}>
              <div className="service-top"><span>{number}</span><Icon size={30} strokeWidth={1.6} /></div>
              <h3>{title}</h3><p>{text}</p>
              <ul>{items.map(item => <li key={item}><Check size={15} /> {item}</li>)}</ul>
              <a href={phoneHref}>Discuss this work <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading light">
            <div><p className="eyebrow"><span /> On the tools</p><h2>Recent work.</h2></div>
            <p>Real jobs completed by C&amp;J Landscaping &amp; Trees — from controlled reductions to full clearances.</p>
          </div>
          <div className="gallery">
            {gallery.map(([src, alt, label], index) => (
              <figure className={`gallery-item item-${index + 1}`} key={src}>
                <img src={src} alt={alt} loading={index < 2 ? 'eager' : 'lazy'} />
                <figcaption><span>0{index + 1}</span>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="about-image"><img src="/work/ground-work.png" alt="C and J Landscaping and Trees team member working on a garden" loading="lazy" /><span>Local. Hands-on. Reliable.</span></div>
        <div className="about-copy">
          <p className="eyebrow dark"><span /> C&amp;J Landscaping &amp; Trees</p>
          <h2>A straightforward local service.</h2>
          <p className="about-lead">Tell us what needs doing. We’ll take a look, explain the options and give you a clear, no-obligation quote.</p>
          <div className="about-list">
            <div><strong>01</strong><span><b>Start with a call</b>Describe the job and where you are.</span></div>
            <div><strong>02</strong><span><b>Get a clear quote</b>We’ll assess the work before you commit.</span></div>
            <div><strong>03</strong><span><b>Leave it to us</b>Practical work with a tidy finish.</span></div>
          </div>
          <a className="button button-dark" href={phoneHref}><Phone size={18} /> Speak to C&amp;J</a>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="shell quote-grid">
          <div className="quote-copy">
            <p className="eyebrow"><span /> Free no-obligation quote</p>
            <h2>Got a tree<br />that needs attention?</h2>
            <p>Call with a short description of the work and your postcode. Photos are helpful if you have them.</p>
            <a className="quote-phone" href={phoneHref}>{phoneDisplay} <ArrowUpRight /></a>
            <address><MapPin size={18} /> 9 Bradford Road, Toddington,<br />Dunstable LU5 6EQ</address>
          </div>
          <form className="quote-form" aria-label="Quote enquiry preview">
            <div className="form-status"><span /> Online enquiry form coming soon</div>
            <h3>Tell us about the job</h3>
            <label>What do you need help with?<select disabled defaultValue=""><option value="">Choose a service</option><option>Tree work</option><option>Hedge cutting</option><option>Garden clearance</option><option>Other garden work</option></select></label>
            <div className="form-row">
              <label>Your name<input disabled placeholder="Full name" /></label>
              <label>Postcode<input disabled placeholder="LU5 6EQ" /></label>
            </div>
            <label>A few details<textarea disabled rows={4} placeholder="What needs doing?" /></label>
            <button type="button" disabled>Online enquiries coming soon</button>
            <p>For now, please call <a href={phoneHref}>{phoneDisplay}</a> for a free quote.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand footer-brand" href="#top"><span className="brand-mark"><TreePine size={26} /></span><span className="brand-name"><strong>C&amp;J</strong><small>Landscaping &amp; Trees</small></span></a>
          <p>Tree surgery, hedge care and garden clearances around Toddington and Dunstable.</p>
          <div><a href={phoneHref}>{phoneDisplay}</a><span>Open 24 hours</span></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 C&amp;J Landscaping &amp; Trees</span><span>Placeholder website for review</span></div>
      </footer>

      <div className="mobile-bar"><a href={phoneHref}><Phone size={18} /> Call {phoneDisplay}</a><a href="#quote">Free quote <ArrowUpRight size={17} /></a></div>
    </main>
  );
}
