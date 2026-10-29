import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-neutral-200">
      {/* Garis Aksen Halus Korporat (Biru Perusahaan & Merah-Oranye Minimal) */}
      <div className="h-0.5 w-full bg-linear-to-r from-blue-900 via-blue-800 to-orange-600" />

      {/* Identitas Korporat Atas */}
      <div className="border-b border-neutral-200 bg-neutral-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-slate-600 uppercase truncate">
            PT Wiratama Mitra Abadi
          </p>
          <span className="text-[10px] sm:text-xs font-medium text-neutral-400 tracking-wider hidden sm:inline-block uppercase">
            B2B Industrial Portal
          </span>
        </div>
      </div>

      {/* Area Masthead & Logo Resmi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo Resmi */}
          <Link
            href="/"
            className="shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
          >
            <Image
              src="/images/wma-logo.png"
              alt="Logo PT Wiratama Mitra Abadi"
              width={64}
              height={64}
              priority
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
          </Link>

          {/* Identitas Editorial */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 uppercase">
                <Link
                  href="/"
                  className="hover:text-blue-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                >
                  WMA BLOG
                  <span className="text-orange-600 font-black">.</span>
                </Link>
              </h1>
              <span className="hidden sm:inline-block text-neutral-300">|</span>
              <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-600 uppercase truncate">
                PT Wiratama Mitra Abadi
              </p>
            </div>
            <p className="mt-0.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-500">
              Industrial Products &amp; Insights
            </p>
          </div>
        </div>
      </div>

      {/* Navigasi Editorial */}
      <div className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Navigasi Utama" className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center py-3 text-xs sm:text-sm font-semibold tracking-wider text-slate-950 uppercase border-b-2 border-blue-900 -mb-px hover:text-blue-900 transition-colors"
            >
              Beranda
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
