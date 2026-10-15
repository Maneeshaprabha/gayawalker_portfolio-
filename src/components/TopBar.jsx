export default function TopBar() {
  return (
    // 'hidden md:block' eka ain kala. Mobile waladi padding adu kala ida ithuru wenna.
    <div className="w-full pt-2 md:pt-4 px-4 md:px-12 absolute top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto bg-[#2A2A2A] text-gray-200 rounded-[16px] md:rounded-full px-4 md:px-6 py-2 md:py-2 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm font-medium shadow-lg gap-1.5 md:gap-0">
        
        {/* Contact Info (Mobile waladi peli dekakata yanawa lassanata) */}
        <div className="flex items-center justify-center gap-3 md:gap-6 text-center">
          <a href="tel:+18005291037" className="hover:text-[#0BB671] transition-colors flex items-center gap-1">
            <span className="hidden sm:inline">Call us: </span>+1 800 529 10 37
          </a>
          <span className="text-gray-500">|</span>
          <a href="mailto:neuros@mail.co" className="hover:text-[#0BB671] transition-colors flex items-center gap-1">
            <span className="hidden sm:inline">Email: </span>gayankanchana@mail.co
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 pt-1 md:pt-0">
          <a href="#" aria-label="Facebook" className="hover:text-[#0BB671] transition-colors">
            <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="X" className="hover:text-[#0BB671] transition-colors">
            <svg width="13" height="13" className="md:w-[15px] md:h-[15px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#0BB671] transition-colors">
            <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-[#0BB671] transition-colors">
            <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  );
}