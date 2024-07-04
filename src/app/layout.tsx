import { Metadata, Viewport } from "next"
import { ColorSchemeProvider } from "../lib/ColorScheme/ColorSchemeProvider"

export const metadata: Metadata = {
  metadataBase: new URL("https://draconia.world"),
  title: "World of Draconia",
  description: "World of Draconia",
  keywords: "minecraft",
  referrer: "strict-origin",
  manifest: "/assets/manifest.json",
  applicationName: "Draconia",
  openGraph: {
    type: "website",
    url: "https://draconia.world",
    title: "Draconia",
    description: "World of Draconia",
    siteName: "Draconia",
  },
  twitter: {
    site: "@draconia",
    creator: "@AndrewStill04",
    card: "summary",
    title: "Draconia",
    description: "World of Draconia",
  },
  appleWebApp: {
    statusBarStyle: "black",
    title: "Draconia",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    <head>
      {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://api.mcsrvstat.us/; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'" /> */}
      {/* <meta http-equiv="Access-Control-Allow-Origin" content="https://draconia.world" /> */}
      
      {/* <meta name="mobile-web-app-capable" content="yes" /> */}

      <link fetchPriority="high" rel="preload" href="/assets/fonts/macondo.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link fetchPriority="high" rel="preload" href="/assets/fonts/noto.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </head>
    <body>
      <ColorSchemeProvider>{children}</ColorSchemeProvider>
    </body>
  </html>
  )
}