"use client"

import { ReactNode } from "react"
import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Phonetics Practice</title>
          <meta name="description" content="Practice phonetics with interactive exercises" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="font-sans bg-background text-foreground">
          {children}
        </body>
      </html>
    </>
  )
}
