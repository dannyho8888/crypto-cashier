/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['cryptologos.cc', 'assets.coingecko.com', 'res.cloudinary.com', 'lh3.googleusercontent.com', 'pbs.twimg.com']
  }
}
