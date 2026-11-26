const methodSteps = [
  {
    number: '01',
    title: 'Set the two periods',
    description:
      'Start with revenue and customer count for the earlier and later period. Average spend is derived for each period.',
  },
  {
    number: '02',
    title: 'Separate the change',
    description:
      'Attribute the difference to customer volume, average spend, and the interaction between both changes.',
  },
  {
    number: '03',
    title: 'Check the total',
    description:
      'Add the three effects and compare their sum with the actual revenue change. The bridge should reconcile.',
  },
]

const effects = [
  { name: 'Customer volume', calculation: '(110 − 100) × 12', value: '120' },
  { name: 'Average spend', calculation: '100 × (15 − 12)', value: '300' },
  { name: 'Interaction', calculation: '(110 − 100) × (15 − 12)', value: '30' },
]

function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectLink({ className = '' }: { className?: string }) {
  return (
    <a
      className={`project-link ${className}`}
      href="https://github.com/Amirsons/diagnose-revenue-drivers-skill"
      target="_blank"
      rel="noreferrer"
    >
      <span>Explore the GitHub project</span>
      <ArrowMark />
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Diagnose Revenue Drivers, home">
        <span className="wordmark-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>Diagnose Revenue Drivers</span>
      </a>
      <ProjectLink className="header-link" />
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> A portable AI skill</p>
        <h1 id="hero-title">A clearer read on what changed revenue.</h1>
        <p className="hero-intro">
          Diagnose Revenue Drivers breaks a two-period revenue change into
          customer-volume, average-spend, and interaction effects—then checks
          that the pieces add back to the whole.
        </p>
        <div className="hero-actions">
          <ProjectLink className="hero-cta" />
          <span className="author-note">Made by Amirsons</span>
        </div>
      </div>

      <aside className="revenue-card" aria-label="Revenue change overview">
        <div className="card-topline">
          <span>THE CHANGE, MADE LEGIBLE</span>
          <span className="card-index">01 / 01</span>
        </div>
        <div className="revenue-comparison">
          <div>
            <span className="period-label">Earlier period</span>
            <strong>1,200</strong>
            <span className="period-detail">100 customers · 12 average spend</span>
          </div>
          <span className="comparison-arrow" aria-hidden="true">→</span>
          <div>
            <span className="period-label">Later period</span>
            <strong>1,650</strong>
            <span className="period-detail">110 customers · 15 average spend</span>
          </div>
        </div>
        <div className="card-rule" />
        <div className="net-change">
          <span>Net revenue change</span>
          <strong>+450</strong>
        </div>
        <p className="card-footnote">Illustrative numbers · Synthetic example</p>
      </aside>
    </section>
  )
}

function MethodSection() {
  return (
    <section className="method-section section-frame" aria-labelledby="method-title">
      <div className="section-heading">
        <p className="eyebrow">The method</p>
        <h2 id="method-title">Three steps. One reconciled answer.</h2>
      </div>
      <div className="method-grid">
        {methodSteps.map((step) => (
          <article className="method-step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function WorkedExample() {
  return (
    <section className="example-section" aria-labelledby="example-title">
      <div className="example-intro">
        <p className="eyebrow">A worked example</p>
        <h2 id="example-title">Where did the 450 come from?</h2>
        <p>
          In this synthetic example, revenue moves from 1,200 to 1,650 as
          customers rise from 100 to 110 and average spend moves from 12 to 15.
        </p>
        <div className="example-periods">
          <div><span>Earlier</span><strong>100 × 12 = 1,200</strong></div>
          <div><span>Later</span><strong>110 × 15 = 1,650</strong></div>
        </div>
      </div>

      <div className="bridge" aria-label="Revenue change breakdown">
        <div className="bridge-header">
          <span>Driver</span>
          <span>Calculation</span>
          <span>Effect</span>
        </div>
        {effects.map((effect) => (
          <div className="bridge-row" key={effect.name}>
            <span className="effect-name">{effect.name}</span>
            <span className="effect-calculation">{effect.calculation}</span>
            <strong className="effect-value">{effect.value}</strong>
          </div>
        ))}
        <div className="bridge-total">
          <span>Net change</span>
          <span className="total-equation">120 + 300 + 30</span>
          <strong>450</strong>
        </div>
        <div className="reconciliation">
          <span className="check-mark" aria-hidden="true">✓</span>
          <p><strong>Reconciles.</strong> 1,200 + 450 = 1,650</p>
        </div>
      </div>
      <p className="example-caption">Synthetic example · Values shown without a specified currency</p>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Diagnose Revenue Drivers</p>
        <p className="footer-meta">An educational tool · Made by Amirsons</p>
      </div>
      <p className="disclaimer">Educational use only. Not an investment recommendation.</p>
      <ProjectLink className="footer-link" />
    </footer>
  )
}

export function ProjectExplainer() {
  return (
    <div className="page-shell" id="top">
      <SiteHeader />
      <main>
        <Hero />
        <MethodSection />
        <WorkedExample />
      </main>
      <SiteFooter />
    </div>
  )
}
