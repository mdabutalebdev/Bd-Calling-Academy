/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "api.bdcallingacademy.com",
    },
  ],
}

};

export default nextConfig;
