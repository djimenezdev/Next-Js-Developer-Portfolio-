module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'firebasestorage.googleapis.com',
    ],
  },
  typescript: {
    // to skip fontawesome type error. it shows icon perfectly complaining about wanting the string literal
    ignoreBuildErrors: true,
  },
};
