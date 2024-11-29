const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 shadow-inner">
      <div className="container mx-auto text-center space-y-6">
        {/* Branding and Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Amazing Startup. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            aria-label="Follow us on Twitter"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56c-.88.39-1.83.65-2.83.77a4.92 4.92 0 002.15-2.72 9.86 9.86 0 01-3.13 1.2A4.92 4.92 0 0016.67 3c-2.73 0-4.94 2.2-4.94 4.92 0 .38.04.75.12 1.1A13.94 13.94 0 011.64 3.15a4.91 4.91 0 001.52 6.55 4.91 4.91 0 01-2.23-.61v.06c0 2.37 1.68 4.35 3.91 4.8a4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.89 9.89 0 010 21.54a13.94 13.94 0 007.54 2.21c9.05 0 14-7.5 14-14 0-.21-.01-.42-.02-.63A10.01 10.01 0 0024 4.56z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Connect with us on LinkedIn"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.9v-5.4c0-1.29-.03-2.95-1.8-2.95-1.81 0-2.09 1.41-2.09 2.84v5.51H8.76V9h3.74v1.56h.05c.52-1.01 1.78-2.08 3.65-2.08 3.9 0 4.62 2.57 4.62 5.92v6.05zM5.34 7.43c-1.26 0-2.28-1.02-2.28-2.28 0-1.27 1.03-2.29 2.28-2.29s2.28 1.03 2.28 2.29c0 1.26-1.02 2.28-2.28 2.28zM7.25 20.45H3.44V9h3.81v11.45zM22.23 0H1.77C.79 0 0 .79 0 1.77v20.45C0 23.22.79 24 1.77 24h20.45c.98 0 1.77-.79 1.77-1.78V1.77C24 .79 23.22 0 22.23 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Explore our GitHub"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.1.79-.25.79-.55v-2.01c-3.34.73-4.04-1.54-4.04-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.26 3.4.96.1-.75.41-1.26.74-1.55-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.39 1.23-3.24-.12-.3-.54-1.51.12-3.14 0 0 1-.32 3.29 1.23a11.54 11.54 0 015.99 0C19 5.09 20 5.41 20 5.41c.66 1.63.24 2.84.12 3.14.76.85 1.23 1.94 1.23 3.24 0 4.63-2.8 5.66-5.47 5.96.43.37.81 1.1.81 2.22v3.29c0 .3.2.66.8.55A11.5 11.5 0 0012 .5z" />
            </svg>
          </a>
        </div>

        {/* Credit */}
        <p className="text-xs text-gray-500">
          Designed and built with ❤️ by <span className="font-medium">Your Amazing Team</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
