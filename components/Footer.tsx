export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 border-t border-border-gray">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-text-muted">
            © {currentYear} Trey Moen. All rights reserved.
          </p>

          <nav className="flex gap-6">
            <a
              href="https://github.com/greatgitsby"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-text-muted hover:text-terracotta transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/trey-moen/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-text-muted hover:text-terracotta transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
