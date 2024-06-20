let dataUrl = "/data/";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATA_URL: dataUrl,
    COVER_URL: dataUrl + "covers/",
    THUMBNAIL_URL: dataUrl + "thumbnails/",
    VIDEO_URL: dataUrl + "videos/",
    PORTRAIT_URL: dataUrl + "portraits/",
  }
};

export default nextConfig;
