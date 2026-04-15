import { Link, NavLink, Outlet } from 'react-router-dom'
import { GITHUB_PROFILE, LINKEDIN } from '../data/projects'

export function Layout() {
  return (
    <div className="site">
      <header className="header">
        <Link to="/" className="wordmark">
          Hoyoon Song
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link--active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link--active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link--active' : ''}`
            }
          >
            Gallery
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-note">© {new Date().getFullYear()}</span>
          <div className="footer-links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
