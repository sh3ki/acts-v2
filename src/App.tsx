import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { contact, departments, history, institution, presidentMessage } from './data/institution'
import { collegePrograms, seniorHighStrands } from './data/programs'

const nav = [['Home', '/'], ['Courses', '/courses'], ['About Us', '/about'], ['Contact', '/contact']]
const img = (name: string) => `/images/${name}`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const location = useLocation()
  const page = location.pathname
  const isHome = page === '/' || !['/courses', '/about', '/contact'].includes(page)
  const isCourses = page === '/courses'
  const isAbout = page === '/about'
  const isContact = page === '/contact'
  const reduced = useReducedMotion()
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'ACTS Computer College | A place to learn with purpose',
      '/courses': 'Courses | ACTS Computer College',
      '/about': 'About Us | ACTS Computer College',
      '/contact': 'Contact | ACTS Computer College',
    }
    document.title = titles[page] ?? titles['/']
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }))
    } else {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    }
  }, [location.pathname, location.hash, page, reduced])
  const reveal = reduced ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .14 }, transition: { duration: .65 } }

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('#main > section')
    if (reduced || !('IntersectionObserver' in window)) {
      sections.forEach(section => section.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: .08, rootMargin: '0px 0px -40px 0px' })
    sections.forEach(section => {
      section.classList.add('section-reveal')
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [reduced, location.pathname])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link className="brand" to="/" aria-label="ACTS Computer College home"><img src="/logo.webp" alt="" /><span><b>ACTS</b><small>COMPUTER COLLEGE</small></span></Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map(([label, href]) => <Link to={href} key={label} onClick={() => setMenuOpen(false)} aria-current={page === href ? 'page' : undefined}>{label}</Link>)}<Link className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>Contact ACTS <ArrowUpRight size={16}/></Link></nav>
    </header>
    <motion.main id="main" className="route-page" key={location.pathname} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
      {isHome && <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-photo" src={img('campus2.webp')} alt="Illustrative rendering of the ACTS campus with students outside" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="kicker light"><span className="dot"/> Santa Cruz, Laguna &middot; Est. 1987</p>
          <h1 id="hero-title">A place to<br/><em>learn with purpose.</em></h1>
          <div className="hero-bottom"><p>{institution.name} brings education, experience, expertise, and excellence together in the heart of Laguna.</p><a className="round-link" href="#school" aria-label="Scroll to discover ACTS"><ArrowDown/></a></div>
        </div>
        <div className="hero-caption"><span>01 &mdash; 04</span><i/> A Laguna learning community</div>
        <svg className="hero-cut" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C300 100 950 90 1440 0V100H0Z"/></svg>
      </section>

      <section className="intro section-wrap" id="school">
        <motion.div className="intro-label" {...reveal}><span className="kicker">WHO WE ARE</span><span className="index">01 / THE SCHOOL</span></motion.div>
        <motion.div className="intro-copy" {...reveal}>
          <h2>Rooted in Laguna.<br/><em>Ready for what&apos;s next.</em></h2>
          <p className="lead">Since 1987, ACTS Computer College has served learners in Santa Cruz through higher education shaped by instruction, research, and community service.</p>
          <p>A private, non-sectarian institution, ACTS offers college and Senior High School programs grounded in its phrase: <strong>Experience, Expertise &amp; Excellence.</strong></p>
          <Link className="text-link" to="/about#history">A history of learning <ArrowRight size={17}/></Link>
        </motion.div>
        <div className="intro-photo"><img src={img('campus-community2.jpg')} alt="Illustrative students studying together outdoors on campus"/><span>Santa Cruz, Laguna</span></div>
        <div className="intro-stamp"><b>1987</b><span>ESTABLISHED<br/>IN LAGUNA</span></div>
      </section>

      <section className="facts-strip" aria-label="ACTS at a glance"><div><b>{institution.established}</b><span>YEAR ESTABLISHED</span></div><div><b>{seniorHighStrands.length}</b><span>SENIOR HIGH STRANDS</span></div><div><b>{collegePrograms.length}</b><span>COLLEGE PROGRAMS</span></div><div><b>Santa Cruz</b><span>LOCATION · LAGUNA</span></div></section>

      <section className="home-paths section-wrap"><div className="home-paths-heading"><span className="kicker">WHERE TO NEXT?</span><h2>Explore the ways<br/><em>you can learn.</em></h2><p>Start with Senior High School or explore ACTS’ listed college programs.</p></div><Link className="home-path-card shs-path" to="/courses#senior-high-programs"><img src={img('classroom2.webp')} alt="Illustrative students working in a Senior High School classroom"/><span>SENIOR HIGH SCHOOL</span><b>Choose a strand <ArrowUpRight size={18}/></b></Link><Link className="home-path-card college-path" to="/courses#college-programs"><img src={img('computer-learning2.jpg')} alt="Illustrative students learning at computers"/><span>COLLEGE PROGRAMS</span><b>Find your field <ArrowUpRight size={18}/></b></Link></section>

      <section className="home-purpose section-wrap"><div className="home-purpose-mark"><span className="kicker light">WHAT GUIDES US</span><span className="purpose-orbit" aria-hidden="true">A</span></div><div className="home-purpose-copy"><p className="home-phrase">{institution.phrase}</p><p>ACTS&apos; mission places instruction, research, and community service at the heart of its work, supporting national development and global requirements.</p><Link className="text-link light-link" to="/about">Read our mission and vision <ArrowRight size={17}/></Link></div></section>

      <section className="home-history section-wrap"><div className="home-history-heading"><span className="kicker">A STORY THAT KEEPS GROWING</span><h2>From a first step<br/><em>to lasting milestones.</em></h2><p>ACTS&apos; history began in Santa Cruz in 1987. Here are a few early chapters.</p><Link className="text-link" to="/about#history">See the full timeline <ArrowRight size={17}/></Link></div><div className="home-history-list">{history.slice(0, 3).map(item => <article key={item.year}><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight size={17}/></article>)}</div></section>

      <section className="home-president section-wrap"><div className="home-president-photo"><img src={img('president.avif')} alt="Prof. Ruben F. Macalinao, School President"/></div><div className="home-president-copy"><span className="kicker">A WELCOME FROM OUR PRESIDENT</span><blockquote>{presidentMessage.message.split('\n\n')[1]}</blockquote><div className="home-president-signature"><b>{presidentMessage.name}</b><span>{presidentMessage.role}</span></div><Link className="text-link" to="/about">Meet the school and read the full message <ArrowRight size={17}/></Link></div></section>
      </>}
      {isCourses && <>
      <section className="courses-hero section-wrap" id="programs"><div className="courses-hero-copy"><span className="kicker">ACADEMIC PATHS AT ACTS</span><h1>Find a field<br/><em>that moves you.</em></h1><p>Explore ACTS Computer College’s Senior High School strands and college degree programs. Each path has its own focus; contact ACTS to confirm current availability and enrollment details.</p><div className="courses-jumps"><a href="#senior-high-programs">Senior High School <ArrowDown size={16}/></a><a href="#college-programs">College programs <ArrowDown size={16}/></a></div><div className="courses-counts"><span><b>{seniorHighStrands.length}</b> SENIOR HIGH STRANDS</span><span><b>{collegePrograms.length}</b> COLLEGE PROGRAMS</span></div></div><div className="courses-hero-visual"><img src={img('computer-learning2.jpg')} alt="Illustrative ACTS students studying in a computer lab"/><span>LEARN WITH PURPOSE</span><b>01—02</b></div></section>

      <section className="strand-details section-wrap" id="senior-high-programs"><div className="strand-details-heading"><span className="kicker light">SENIOR HIGH SCHOOL</span><h2>Four strands.<br/><em>Explore yours.</em></h2><p>Read the focus of each strand, then ask ACTS about the current enrollment process.</p></div><div className="strand-detail-list">{seniorHighStrands.map((strand, index) => <article key={strand.abbreviation}><span>0{index + 1}</span><div><h3>{strand.abbreviation}</h3><b>{strand.name}</b><p>{strand.description}</p></div></article>)}</div></section>

      <section className="course-details section-wrap" id="college-programs"><div className="course-details-heading"><span className="kicker">COLLEGE PROGRAM GUIDE</span><h2>What each program<br/><em>focuses on.</em></h2><p>Descriptions below summarize the program information maintained by ACTS. Confirm current availability and enrollment details directly with the school.</p></div><div className="course-detail-grid">{collegePrograms.map((program, index) => <article className="course-detail" key={program.abbreviation}><span className="course-detail-no">0{index + 1} / {program.abbreviation}</span><h3>{program.name}</h3><p>{program.description}</p><div className="course-chip-group"><span className="course-chip-label">FOCUS AREAS</span><div>{program.focusAreas.map(area => <span key={area}>{area}</span>)}</div></div><div className="course-chip-group pathways"><span className="course-chip-label">RELATED PATHWAYS</span><div>{program.pathways.map(pathway => <span key={pathway}>{pathway}</span>)}</div></div></article>)}</div></section>

      <section className="course-inquiry"><span className="kicker light">READY TO ASK ABOUT A PROGRAM?</span><p>ACTS can confirm current program availability, requirements, and schedules.</p><Link className="button gold" to="/contact">Contact ACTS <ArrowUpRight size={17}/></Link></section>

      </>}
      {isAbout && <>
      <section className="purpose section-wrap" id="purpose">
        <div className="purpose-top"><span className="kicker">A SHARED DIRECTION</span><span className="index">02 / PURPOSE</span></div>
        <div className="purpose-title"><h2>Education with<br/><em>intention.</em></h2><p>ACTS&apos; institutional statements guide its work as a higher educational institution.</p></div>
        <div className="statement-grid">
          <article className="statement mission"><span className="statement-no">A</span><div><h3>Our mission</h3><p>{institution.mission}</p></div><BookOpen className="statement-icon"/></article>
          <article className="statement vision"><span className="statement-no">B</span><div><h3>Our vision</h3><p>{institution.vision}</p></div><span className="vision-mark" aria-hidden="true">ACTS</span></article>
        </div>
        <div className="values-line"><span>OUR CORE VALUES</span>{institution.coreValues.map((value, i) => <p key={value}><b>0{i + 1}</b>{value.replace(/,$/, '')}</p>)}</div>
      </section>

      <section className="president section-wrap">
        <div className="president-photo"><img src={img('president.avif')} alt="Prof. Ruben F. Macalinao, School President"/><span>LEADERSHIP / ACTS</span></div>
        <div className="president-copy"><span className="kicker">A MESSAGE FROM OUR PRESIDENT</span><h2>&ldquo;Learning transforms<br/><em>lives.&rdquo;</em></h2><div className="quote-rule"/>{presidentMessage.message.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="signature"><b>{presidentMessage.name}</b><span>{presidentMessage.role}</span></div></div>
      </section>

      <section className="history section-wrap" id="history">
        <div className="history-heading"><span className="kicker light">OUR STORY, IN YEARS</span><h2>Built one<br/><em>milestone at a time.</em></h2><p>From the first computer school in Santa Cruz to the institution ACTS is today.</p><span className="history-date">1987 &mdash; TODAY</span></div>
        <div className="timeline">{history.map((item, index) => <motion.article className="milestone" key={item.year} {...reveal}><div className="milestone-year">{item.year}</div><div className="milestone-marker"><i/></div><div className="milestone-copy"><span>0{index + 1} / MILESTONE</span><h3>{item.title}</h3><p>{item.description}</p></div></motion.article>)}</div>
      </section>

      <section className="departments section-wrap"><div className="departments-heading"><span className="kicker">ACADEMIC COMMUNITY</span><h2>Learning across<br/><em>disciplines.</em></h2><p>ACTS’ department statements describe the educational purpose behind its areas of study.</p></div><div className="department-list">{departments.map((department, index) => <article key={department.name}><span>0{index + 1}</span><div><h3>{department.name}</h3><p>{department.mission}</p></div></article>)}</div></section>

      </>}
      {isHome && <>
      <section className="admissions section-wrap" id="admissions">
        <div className="admissions-photo"><img src={img('students-hero2.png')} alt="Illustrative students sharing ideas around a laptop"/><span>YOUR NEXT STEP</span></div>
        <div className="admissions-copy"><span className="kicker">START A CONVERSATION</span><h2>Curious about<br/><em>joining ACTS?</em></h2><p>Choose a program that interests you, then contact ACTS for current enrollment requirements, schedules, and available options.</p><div className="steps"><div><b>01</b><span>Explore the programs</span></div><div><b>02</b><span>Prepare your questions</span></div><div><b>03</b><span>Ask ACTS about enrollment</span></div></div><Link className="button dark" to="/contact">Inquire with ACTS <ArrowUpRight size={18}/></Link></div>
      </section>

      </>}
      {isAbout && <>
      <section className="campus section-wrap"><div className="campus-title"><span className="kicker">LEARNING HAPPENS EVERYWHERE</span><h2>Life around<br/><em>the classroom.</em></h2><p>A glimpse of the people, spaces, and shared work that make a school community.</p></div><figure className="campus-wide"><img src={img('collaborative-learning2.jpg')} alt="Illustrative students collaborating in a computer lab"/><figcaption>LEARN TOGETHER <span>ACTS COMPUTER COLLEGE</span></figcaption></figure><figure className="campus-small"><img src={img('campus2.webp')} alt="Illustrative rendering of the ACTS campus building"/><figcaption>A PLACE TO BEGIN</figcaption></figure></section>

      </>}
      {isContact && <>
      <section className="faq section-wrap"><div><span className="kicker">GOOD TO KNOW</span><h2>Before you<br/><em>reach out.</em></h2><p>For current enrollment details, please confirm directly with ACTS.</p></div><div className="faq-list">{[
        ['What programs does ACTS offer?', 'ACTS lists seven college programs and four Senior High School strands. Visit the Courses page to explore them, then contact the school about current availability.'],
        ['What are the enrollment requirements?', 'Requirements may depend on the program and your situation. Please confirm the current official list directly with the admissions office.'],
        ['Is financial assistance available?', 'ACTS has introduced assistance initiatives in its history. Contact the school to ask which options are currently available and whether you qualify.'],
      ].map(([question, answer], i) => <article className="faq-item" key={question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>0{i + 1}</span>{question}<ChevronDown className={openFaq === i ? 'turned' : ''}/></button>{openFaq === i && <p>{answer}</p>}</article>)}</div></section>

      <section className="inquiry-guide section-wrap"><div><span className="kicker">MAKE YOUR INQUIRY COUNT</span><h2>A few details can<br/><em>help us guide you.</em></h2><p>When you contact ACTS, sharing what you’re interested in helps the school direct your question.</p></div><ol><li><b>01</b><span>Tell us which course or Senior High School strand you’re considering.</span></li><li><b>02</b><span>Ask which requirements and schedules currently apply to you.</span></li><li><b>03</b><span>Use the phone, email, or address below to get in touch.</span></li></ol></section>

      <section className="contact" id="contact"><div className="contact-main"><div><span className="kicker light">COME SAY HELLO</span><h2>Your next step<br/><em>starts here.</em></h2><p>Reach out to ACTS Computer College in Santa Cruz, Laguna.</p><a className="button gold" href={`mailto:${contact.email}`}>Email ACTS <ArrowUpRight size={18}/></a></div><div className="contact-details"><span>VISIT</span><p>{contact.address}</p><span>CALL</span><p><a href={`tel:${contact.mobile[0]}`}>{contact.mobile[0]}</a><br/><a href={`tel:${contact.mobile[1]}`}>{contact.mobile[1]}</a><br/><a href={`tel:${contact.landline}`}>{contact.landline}</a></p><span>WRITE</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div></div></section>
      </>}
    </motion.main>
    <div className="contact-footer"><Link className="footer-brand" to="/"><b>ACTS</b><span>COMPUTER COLLEGE</span></Link><span className="footer-motto">EXPERIENCE, EXPERTISE &amp; EXCELLENCE</span><div className="footer-social"><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14}/></a><a href={contact.youtube} target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14}/></a></div><small className="footer-copy">© {new Date().getFullYear()} ACTS Computer College</small></div>
  </>
}

export default App

