import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12" style={{ background: 'var(--background)' }}>
      <main className="w-full max-w-2xl rounded-2xl p-10 shadow-lg" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>We're Under Maintenance</h1>
          </div>

          <p className="max-w-lg text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Sorry for the inconvenience - we're performing some updates to improve the site. We'll be back online ASAP. For any inquiries, please contact us through our social platforms.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://www.facebook.com/PosterScoop.new/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook"
              className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-shadow"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            >
              <FaFacebookF size={18} aria-hidden className="text-current" />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/posterscoop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-shadow"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            >
              <FaInstagram size={18} aria-hidden className="text-current" />
              Instagram
            </a>

            <a
              href="mailto:posterscoop.official@gmail.com"
              aria-label="Send us an email"
              className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-shadow"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            >
              <MdEmail size={18} aria-hidden className="text-current" />
              Email
            </a>
          </div>

          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Need updates? Follow us on social for announcements.
          </p>
        </div>
      </main>
    </div>
  );
}
