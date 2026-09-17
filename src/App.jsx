import { useEffect, useMemo, useRef, useState } from 'react'
import profileImage from './img/c.png'
import './styles/App.css'

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'GitHub', id: 'github' },
  { label: 'Contact', id: 'contact' }
]

const resumeItems = [
  {
    title: 'BSc. Software Engineering',
    place: 'University of Dodoma',
    period: '2024 - Present',
    desc: 'Currently studying software engineering and building practical projects alongside classes.'
  },
  {
    title: 'Advanced Level',
    place: 'Iyunga Technical',
    period: '2022 - 2024',
    desc: 'Computer Science and Mathematics.'
  },
  {
    title: 'Ordinary Level',
    place: 'Bukoba Secondary',
    period: '2018 - 2021',
    desc: 'Strong foundation in science and problem solving.'
  }
]

const skillTracks = [
  { name: 'Python', iconKey: 'Python', note: 'Backend and scripting' },
  { name: 'JavaScript', iconKey: 'JavaScript', note: 'Interactive web pages' },
  { name: 'HTML / CSS', iconKey: 'HTML5', note: 'Layout and styling' },
  { name: 'Java', iconKey: 'Java', note: 'Object-oriented code' },
  { name: 'C++', iconKey: 'C++', note: 'Logic and algorithms' },
  { name: 'Git', iconKey: 'Git', note: 'Version control' }
]

const techBadges = [
  { name: 'Python', label: 'Python', accent: '#3776ab', icon: 'python' },
  { name: 'JavaScript', label: 'JavaScript', accent: '#f7df1e', icon: 'javascript' },
  { name: 'React', label: 'React', accent: '#61dafb', icon: 'react' },
  { name: 'HTML5', label: 'HTML5', accent: '#e34f26', icon: 'html5' },
  { name: 'CSS3', label: 'CSS3', accent: '#2965f1', icon: 'css3' },
  { name: 'Java', label: 'Java', accent: '#f7a41d', icon: 'java' },
  { name: 'C++', label: 'C++', accent: '#00599c', icon: 'cplusplus' },
  { name: 'Git', label: 'Git', accent: '#f05032', icon: 'git' }
]

const officialIcons = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
}

const whatsappUrl = 'https://wa.me/255757219157'

const services = [
  {
    title: 'Portfolio websites',
    text: 'Personal sites with clear structure, clean spacing, and a simple first impression.'
  },
  {
    title: 'Product UI',
    text: 'Interfaces for tools, dashboards, and small internal systems that need clarity.'
  },
  {
    title: 'Student tools',
    text: 'Useful software ideas for study, organization, and everyday workflows.'
  }
]

const projects = [
  {
    title: 'Offline learning tools',
    text: 'Ideas and prototypes that help students keep learning offline or with weak connections.',
    tags: ['Product thinking', 'Accessibility']
  },
  {
    title: 'Small business systems',
    text: 'Simple web tools for orders, messaging, and everyday business tasks.',
    tags: ['Web apps', 'Workflows']
  },
  {
    title: 'Frontend interfaces',
    text: 'Responsive pages and dashboards with clean layout and smooth motion.',
    tags: ['React', 'Motion']
  }
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7L5.5 7.5V17h13V7.5L12 12Zm0-1.5L17 7H7l5 3.5Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.85 11.85 0 0 0 12.08 0C5.53 0 .2 5.32.2 11.87c0 2.09.55 4.13 1.59 5.93L.1 23.8l6.16-1.62a11.87 11.87 0 0 0 5.82 1.52h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.14-3.46-8.33Zm-8.42 18.2h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.66.96.98-3.56-.23-.37a9.82 9.82 0 0 1-1.51-5.27C2.27 6.46 6.67 2.06 12.09 2.06c2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.42-4.41 9.82-9.85 9.82Zm5.39-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.67c-2.78.6-3.37-1.17-3.37-1.17-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.61.07-.61 1.02.07 1.56 1.04 1.56 1.04.9 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.41.21 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.67.92.67 1.86v2.76c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4.22 5.64a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 1 1-1.42 1.41L4.22 7.05a1 1 0 0 1 0-1.41Zm12.73 12.73a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41l-1.41-1.42a1 1 0 0 1 0-1.41ZM2 11h2a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2Zm18 0h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5.64 19.78a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 1 1 1.41 1.42l-1.42 1.41a1 1 0 0 1-1.41 0Zm12.73-12.73a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 1 1 1.41 1.42l-1.42 1.41a1 1 0 0 1-1.41 0Z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a1 1 0 0 0-1.23 1.23 10.5 10.5 0 1 0 12 12 1 1 0 0 0-1.23-1.23Z" />
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.2 2.25c3.55 0 4.18 1.59 4.18 3.68v2.7h-6.19c-1.86 0-3.36 1.5-3.36 3.36v1.93H6.27c-2.08 0-3.77-.63-3.77-4.18 0-3.57 1.68-7.49 7.49-7.49h3.21Zm-3.52 2.24a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16Z" />
      <path d="M10.79 21.75c-3.55 0-4.18-1.59-4.18-3.68v-2.7h6.19c1.86 0 3.36-1.5 3.36-3.36v-1.93h1.62c2.08 0 3.77.63 3.77 4.18 0 3.57-1.68 7.49-7.49 7.49h-3.27Zm3.53-2.24a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16Z" />
    </svg>
  )
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <path d="M8.9 8.4v5.9c0 1.46-.64 2.06-1.82 2.06-.55 0-1.1-.13-1.52-.36l.4-1.45c.22.1.52.21.83.21.34 0 .56-.19.56-.76V8.4h1.55Zm4.1 0h1.55v6.22h2.93v1.37H13v-7.59Zm1.55 8.3c0-.59.47-1.07 1.07-1.07.6 0 1.08.48 1.08 1.07 0 .6-.48 1.08-1.08 1.08a1.07 1.07 0 0 1-1.07-1.08Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.7" transform="rotate(-60 12 12)" />
    </svg>
  )
}

function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3.5h16l-1.55 17L12 22.5 5.55 20.5 4 3.5Zm4.12 6.2.2 2.2h6.36l-.14 1.6-2.06.56-2.07-.56-.12-1.24H8.18l.34 4.13 3.48.94 3.48-.94.45-5.1H8.12l-.14-1.6h8.04l.16-1.76H7.85l.27 1.77Z" />
    </svg>
  )
}

function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3.5h16l-1.45 16.54L12 22.5 5.45 20.04 4 3.5Zm4.08 6.2.22 2.18h6.37l-.14 1.57-2.05.57-2.07-.57-.13-1.25H8.14l.35 4.12 3.49.95 3.49-.95.44-5.06H8.06l-.15-1.6h8.02l.17-1.74H7.78l.3 1.78Z" fill="currentColor" stroke="none" opacity="0.92" />
    </svg>
  )
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75c1.55 1.4 2.44 2.94 2.44 4.06 0 1.08-.67 1.91-1.67 2.47 1.35-.03 2.42.38 3.1 1.02 1.37 1.3 1.48 3.67 1.48 4.7 0 1.64-.48 2.92-1.38 3.83-.9.9-2.22 1.35-3.96 1.35-1.95 0-3.42-.45-4.42-1.35-.97-.86-1.47-2.06-1.47-3.6 0-1.67.55-2.95 1.68-3.82.96-.74 2.25-1.09 3.87-1.07.66 0 1.18-.1 1.57-.3.42-.22.63-.55.63-1 0-.54-.28-1.14-.87-1.82C12.65 5.8 12.31 5.41 12 5v-2.25Z" />
      <path d="M8.25 18.4c0 .54.16.95.49 1.24.33.28.83.43 1.49.43 1.01 0 1.67-.28 1.97-.83.3-.54.44-1.3.44-2.27 0-.46-.05-.89-.16-1.28-.1-.39-.35-.73-.74-1.04-.39-.31-.95-.47-1.67-.47-1.76 0-2.63.94-2.63 2.82 0 .52.03.95.11 1.28Z" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
  )
}

function CppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.25 20.75 7v10L12 21.75 3.25 17V7L12 2.25Zm4.2 9.3h1.3V9.38h1.85V8.07H17.5V6.25h-1.3v1.82h-1.85v1.31h1.85v2.17Zm-8.22-1.2a2.74 2.74 0 0 1 1.01-2.15 3.84 3.84 0 0 1 2.47-.82c1.12 0 2.04.26 2.76.77l-.72 1.2c-.56-.4-1.2-.6-1.93-.6-.7 0-1.24.16-1.63.48-.4.32-.6.75-.6 1.3 0 .55.2.99.6 1.31.4.32.94.48 1.63.48.76 0 1.44-.2 2.03-.62l.75 1.18c-.77.55-1.76.83-2.97.83-1.06 0-1.95-.26-2.66-.78-.72-.53-1.08-1.23-1.08-2.08Z" />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.2 12.8 3.5a1.9 1.9 0 0 0-2.68 0l-1.62 1.62 2.4 2.4a2.26 2.26 0 0 1 2.86 2.86l2.3 2.3a2.26 2.26 0 1 1-1.36 1.26l-2.14-2.14v5.64a2.26 2.26 0 1 1-1.63 0V11.8a2.26 2.26 0 0 1-1.24-2.95L8.2 6.46 3.5 11.17a1.9 1.9 0 0 0 0 2.68l7.72 7.72a1.9 1.9 0 0 0 2.68 0l6.6-6.6a1.9 1.9 0 0 0 0-2.67Z" />
    </svg>
  )
}

function OfficialTechIcon({ icon, label }) {
  return <img src={officialIcons[icon]} alt={`${label} official icon`} loading="lazy" />
}

function renderInlineMarkdown(text, keyPrefix) {
  const tokenPattern = /(`[^`]+`|!\[[^\]]*\]\([^)]*\)|\[[^\]]+\]\([^)]*\)|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_)/g
  return text.split(tokenPattern).filter(Boolean).map((token, index) => {
    const key = `${keyPrefix}-${index}`
    if (token.startsWith('![')) {
      const match = token.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      return match ? <img className="readme-image" key={key} src={match[2]} alt={match[1]} loading="lazy" /> : token
    }
    if (token.startsWith('[')) {
      const match = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      return match ? <a key={key} href={match[2]} target="_blank" rel="noreferrer">{match[1]}</a> : token
    }
    if (token.startsWith('`')) return <code key={key}>{token.slice(1, -1)}</code>
    if (token.startsWith('**') || token.startsWith('__')) return <strong key={key}>{token.slice(2, -2)}</strong>
    if (token.startsWith('*') || token.startsWith('_')) return <em key={key}>{token.slice(1, -1)}</em>
    return token
  })
}

function renderMarkdown(markdown) {
  const lines = markdown.replaceAll('\r', '').split('\n')
  const blocks = []
  let paragraph = []
  let list = []
  let ordered = false
  let code = null

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(<p key={`p-${blocks.length}`}>{renderInlineMarkdown(paragraph.join(' '), `p-${blocks.length}`)}</p>)
      paragraph = []
    }
  }
  const flushList = () => {
    if (list.length) {
      const List = ordered ? 'ol' : 'ul'
      blocks.push(<List key={`list-${blocks.length}`}>{list.map((item, index) => <li key={index}>{renderInlineMarkdown(item, `list-${blocks.length}-${index}`)}</li>)}</List>)
      list = []
      ordered = false
    }
  }

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      flushParagraph(); flushList()
      if (code) {
        blocks.push(<pre key={`code-${index}`}><code>{code.lines.join('\n')}</code></pre>)
        code = null
      } else {
        code = { language: line.trim().slice(3), lines: [] }
      }
      return
    }
    if (code) { code.lines.push(line); return }
    if (!line.trim()) { flushParagraph(); flushList(); return }

    const heading = line.match(/^(#{1,4})\s+(.+)$/)
    if (heading) {
      flushParagraph(); flushList()
      const Heading = `h${heading[1].length}`
      blocks.push(<Heading key={`heading-${index}`}>{renderInlineMarkdown(heading[2], `heading-${index}`)}</Heading>)
      return
    }
    const unordered = line.match(/^\s*[-*+]\s+(.+)$/)
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/)
    if (unordered || numbered) {
      flushParagraph()
      const nextOrdered = Boolean(numbered)
      if (list.length && ordered !== nextOrdered) flushList()
      ordered = nextOrdered
      list.push((unordered || numbered)[1])
      return
    }
    if (/^\s*>/.test(line)) {
      flushParagraph(); flushList()
      blocks.push(<blockquote key={`quote-${index}`}>{renderInlineMarkdown(line.replace(/^\s*>\s?/, ''), `quote-${index}`)}</blockquote>)
      return
    }
    if (/^\s*([-*_])\s*\1\s*\1\s*$/.test(line)) { flushParagraph(); flushList(); blocks.push(<hr key={`hr-${index}`} />); return }
    flushList()
    paragraph.push(line.trim())
  })

  if (code) blocks.push(<pre key="code-final"><code>{code.lines.join('\n')}</code></pre>)
  flushParagraph(); flushList()
  return blocks
}

const badgeIcons = {
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  HTML5: HtmlIcon,
  CSS3: CssIcon,
  Java: JavaIcon,
  'C++': CppIcon,
  Git: GitIcon
}

export default function App() {
  const heroRef = useRef(null)
  const portraitRef = useRef(null)
  const themeTimersRef = useRef({ swap: null, clear: null })
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [themeTransition, setThemeTransition] = useState(null)
  const [heroReady, setHeroReady] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [githubRepos, setGithubRepos] = useState([])
  const [githubState, setGithubState] = useState('loading')

  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem('theme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const nextTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : preferredTheme

    setTheme(nextTheme)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function loadGitHubProjects() {
      try {
        const response = await fetch('https://api.github.com/users/The-Agaba/repos?per_page=100&sort=updated')
        if (!response.ok) throw new Error('GitHub repositories could not be loaded')
        const repositories = await response.json()
        const visibleRepos = repositories.filter((repo) => !repo.fork && !repo.archived)
        const projectsWithReadmes = await Promise.all(visibleRepos.map(async (repo) => {
          try {
            const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`)
            if (!readmeResponse.ok) return { ...repo, readme: '' }
            const readme = await readmeResponse.json()
            const markdown = atob(readme.content.replaceAll('\n', ''))
            return { ...repo, readme: decodeURIComponent(escape(markdown)) }
          } catch {
            return { ...repo, readme: '' }
          }
        }))
        if (!cancelled) {
          setGithubRepos(projectsWithReadmes)
          setGithubState('ready')
        }
      } catch {
        if (!cancelled) setGithubState('error')
      }
    }

    loadGitHubProjects()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined
    const updateSpotlight = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', updateSpotlight, { passive: true })
    return () => window.removeEventListener('pointermove', updateSpotlight)
  }, [reducedMotion])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    return () => {
      window.clearTimeout(themeTimersRef.current.swap)
      window.clearTimeout(themeTimersRef.current.clear)
    }
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('[data-reveal-card]'))
    if (!cards.length) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return undefined
    }

    cards.forEach((card, index) => {
      card.style.setProperty('--reveal-delay', `${index * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined
    const hero = heroRef.current
    const portrait = portraitRef.current
    if (!hero || !portrait) return undefined

    let frame = 0

    const reset = () => {
      portrait.style.setProperty('--rx', '0deg')
      portrait.style.setProperty('--ry', '0deg')
      portrait.style.setProperty('--mx', '50%')
      portrait.style.setProperty('--my', '50%')
    }

    const onMove = (event) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        portrait.style.setProperty('--rx', `${((0.5 - y) * 10).toFixed(2)}deg`)
        portrait.style.setProperty('--ry', `${((x - 0.5) * 12).toFixed(2)}deg`)
        portrait.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
        portrait.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
      })
    }

    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', reset)
    reset()

    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', reset)
    }
  }, [reducedMotion])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    window.clearTimeout(themeTimersRef.current.swap)
    window.clearTimeout(themeTimersRef.current.clear)

    setThemeTransition(nextTheme)

    themeTimersRef.current.swap = window.setTimeout(() => {
      setTheme(nextTheme)
    }, 360)

    themeTimersRef.current.clear = window.setTimeout(() => {
      setThemeTransition(null)
    }, 900)
  }

  return (
    <div className="page">
      <div className={`theme-shift ${themeTransition ? `to-${themeTransition}` : ''} ${themeTransition ? 'is-active' : ''}`} aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <header className="topbar">
        <button className="brand" type="button" onClick={() => scrollToSection('hero')}>
          <span>CA</span>
          <strong>Colin Raymund</strong>
        </button>

        <nav id="site-nav" className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
                setMenuOpen(false)
              }}
            >
              <span className={activeSection === item.id ? 'is-active' : ''}>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="btn small ghost icon-btn" href="mailto:collinraymund403@gmail.com" aria-label="Email Collin Agaba Raymund">
            <EmailIcon />
            <span>Email</span>
          </a>
          <button
            className="btn small ghost icon-btn theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle menu"
            aria-controls="site-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="hero" ref={heroRef}>
          <div className="hero-shell">
            <div className="hero-left">
              <p className={`eyebrow hero-animate ${heroReady ? 'is-visible' : ''}`} style={{ '--hero-delay': '0ms' }}>
                Available for work
              </p>
              <h1 className={`hero-animate ${heroReady ? 'is-visible' : ''}`} style={{ '--hero-delay': '120ms' }}>
                Colin Raymund
              </h1>
              <p className={`hero-subtitle hero-animate ${heroReady ? 'is-visible' : ''}`} style={{ '--hero-delay': '220ms' }}>
                I build clean websites and practical software tools.
              </p>

              <div className={`hero-actions hero-animate ${heroReady ? 'is-visible' : ''}`} style={{ '--hero-delay': '320ms' }}>
              <button className="btn primary" type="button" onClick={() => scrollToSection('contact')}>
                Get in touch
                </button>
                <a className="btn secondary icon-btn" href="https://github.com/The-Agaba" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                  <GitHubIcon />
                  GitHub
                </a>
              </div>
              <div className="hero-proof" aria-label="Portfolio highlights">
                <span><strong>01</strong> curious builder</span>
                <span><strong>24/7</strong> learning mindset</span>
              </div>
            </div>

            <div className={`hero-right hero-animate ${heroReady ? 'is-visible' : ''}`} style={{ '--hero-delay': '220ms' }}>
              <div className="portrait-wrap" ref={portraitRef}>
                <div className="portrait-bg" />
                <div className="portrait-core">
                  <div className="portrait-card">
                    <img src={profileImage} alt="Collin Agaba Raymund portrait" className="portrait-image" />
                  </div>
                </div>
                <div className="portrait-chip chip-top">Available for work</div>
                <div className="portrait-chip chip-bottom">The-Agaba</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Capabilities">
          <div className="ticker-track ticker-badges">
            {Array.from({ length: 2 }).flatMap((_, cycleIndex) =>
              techBadges.map(({ name, label, accent, icon }, badgeIndex) => {
                return (
                  <span className="tech-badge" key={`${cycleIndex}-${badgeIndex}-${name}`} style={{ '--badge-accent': accent }}>
                    <span className="tech-badge-icon" aria-hidden="true">
                      <OfficialTechIcon icon={icon} label={label} />
                    </span>
                    <span className="tech-badge-label">{label}</span>
                  </span>
                )
              })
            )}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-title-wrap">
            <p className="section-label">About Me</p>
            <h2>I build websites and tools that are easy to use.</h2>
          </div>

          <div className="about-grid">
            <p>
              I&apos;m Collin Agaba Raymund, a software engineering student who likes clear layouts, smooth motion, and useful features.
            </p>
            <p>
              I focus on personal sites, small tools, and frontend experiences that feel complete.
            </p>
          </div>
          <div className="about-highlights">
            <div><strong>01</strong><span>Student developer</span></div>
            <div><strong>06</strong><span>Core technologies</span></div>
            <div><strong>∞</strong><span>Ideas to explore</span></div>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-title-wrap">
            <p className="section-label">Resume</p>
            <h2>Education.</h2>
          </div>

          <div className="resume-list">
            {resumeItems.map((item) => (
              <article className="resume-item" data-reveal-card key={item.title}>
                <div className="resume-period">{item.period}</div>
                <div className="resume-body">
                  <h3>{item.title}</h3>
                  <p className="resume-place">{item.place}</p>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title-wrap">
            <p className="section-label">Tools</p>
            <h2>Tools I use.</h2>
          </div>

          <div className="skill-badge-grid">
            {skillTracks.map((skill) => {
              const techBadge = techBadges.find((badge) => badge.name === skill.iconKey)
              return (
                <article className="skill-badge-card" data-reveal-card key={skill.name}>
                  <div className="skill-badge-head">
                    <span className="tech-badge-icon" aria-hidden="true">
                      <OfficialTechIcon icon={techBadge.icon} label={skill.name} />
                    </span>
                    <h3>{skill.name}</h3>
                  </div>
                  <p>{skill.note}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-title-wrap">
            <p className="section-label">Services</p>
            <h2>What I can build.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" data-reveal-card key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="section-title-wrap">
            <p className="section-label">Work</p>
            <h2>Selected work.</h2>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <article className="portfolio-card" data-reveal-card key={project.title}>
                <span className="project-number">0{projects.indexOf(project) + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section github-section" id="github">
          <div className="section-title-wrap">
            <p className="section-label">Live from GitHub</p>
            <h2>Every project, in one place.</h2>
          </div>
          <p className="github-intro">A live collection of my public repositories, with each README available to explore without leaving this portfolio.</p>
          {githubState === 'loading' && <div className="github-status" role="status"><span className="status-pulse" /> Loading repositories from GitHub…</div>}
          {githubState === 'error' && <div className="github-status error" role="alert">GitHub is temporarily unavailable. <a href="https://github.com/The-Agaba" target="_blank" rel="noreferrer">Browse the profile directly ↗</a></div>}
          {githubState === 'ready' && (
            <div className="github-repo-grid">
              {githubRepos.length === 0 && <div className="github-status">No public repositories found yet.</div>}
              {githubRepos.map((repo, index) => (
                <article className="github-repo-card is-visible" data-reveal-card key={repo.id}>
                  <div className="repo-card-top"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="repo-language">{repo.language || 'Code'}</span></div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description || 'A project from my GitHub workspace.'}</p>
                  <div className="repo-meta"><span>★ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span><span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span></div>
                  <div className="repo-actions">
                    <a className="btn small secondary" href={repo.html_url} target="_blank" rel="noreferrer">View repository ↗</a>
                    {repo.readme && <details><summary>Read README</summary><div className="readme-content">{renderMarkdown(repo.readme)}</div></details>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div className="section-title-wrap">
              <p className="section-label">Contact</p>
              <h2>Let&apos;s talk.</h2>
            </div>

            <div className="contact-links">
              <a className="icon-btn" data-reveal-card href="mailto:collinraymund403@gmail.com" aria-label="Email Collin Agaba Raymund">
                <EmailIcon />
                <span>Email</span>
              </a>
              <a className="icon-btn whatsapp-link" data-reveal-card href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Message Collin Agaba Raymund on WhatsApp">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a className="icon-btn" data-reveal-card href="https://github.com/The-Agaba" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Colin Raymund</span>
        <span>Built with curiosity, React, and clean interfaces.</span>
        <a href="https://github.com/The-Agaba/my_portfolio" target="_blank" rel="noreferrer">View source on GitHub ↗</a>
      </footer>
    </div>
  )
}

