import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)

const nextConfig = {
  images: {
    domains: ['avatar.iran.liara.run', 'qipridxmibgoaraznkba.supabase.co'],
  },
  // webpack: (config) => {
  //   config.resolve.alias.canvas = false
  //   config.module.rules.push({
  //     test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
  //     type: 'asset/resource',
  //     generator: {
  //       filename: 'static/chunks/[name].[hash][ext]',
  //     },
  //   })

  //   return config
  // },
}

export default nextConfig
