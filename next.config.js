/** @type {import('next').NextConfig} */
require('next-ws/server').verifyPatch();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
