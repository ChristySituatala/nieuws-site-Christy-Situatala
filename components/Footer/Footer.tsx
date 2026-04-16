"use client"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white text-center py-4 text-sm">
  <div className="mb-2">
    &copy; {currentYear} Your Company. All rights reserved.
  </div>

  <div className="flex justify-center space-x-4">
    <Link href="/terms-of-agreement" className="underline hover:text-[#CFFF04]">
      Terms of Agreement
    </Link>
    <Link href="/copyright-regulations" className="underline hover:text-[#CFFF04]">
      Copyright Regulations
    </Link>
    <Link href="/cookie-settings" className="underline hover:text-[#CFFF04]">
      Cookie Settings
    </Link>
  </div>
</footer>
  )
}
