const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: [
      'cdn.sanity.io'
    ]
  }
}
