/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ]
  // },
}

export default nextConfig