/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    nodeName: process.env.NEXT_PUBLIC_NODE_NAME,
    podName: process.env.NEXT_PUBLIC_POD_NAME,
    podNamespace: process.env.NEXT_PUBLIC_POD_NAMESPACE,
    podIp: process.env.NEXT_PUBLIC_POD_IP,
    appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
    api: process.env.NEXT_PUBLIC_API,
    env: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
