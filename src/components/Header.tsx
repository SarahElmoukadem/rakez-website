"use client"

import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
<header className="w-full fixed top-0 z-50 bg-white/30  transition-all duration-300">
  <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
    {/* Logo */}
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="RAKEZ Logo"
        width={120}
        height={40}
        className="h-auto w-auto max-h-10 object-contain"
        priority
      />
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden md:flex gap-6 text-sm  text-white">
      <Link href="#">Start your journey</Link>
      <Link href="#">Start a Business</Link>
      <Link href="#">Client Services</Link>
      <Link href="#">Insights</Link>
      <Link href="#">About</Link>
      <Link href="#">Offers</Link>
      <Link href="#">Contact</Link>
    </nav>

    {/* Mobile Hamburger Menu */}
    <div className="md:hidden">
      <button className="text-2xl">☰</button>
    </div>
  </div>
</header>

  )
}

export default Header
