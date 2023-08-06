/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};
