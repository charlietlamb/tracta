import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

const nextConfig = {
  images: {
    domains: ['avatar.iran.liara.run', 'qipridxmibgoaraznkba.supabase.co'],
  },
  webpack: (config, { isServer }) => {
    // Ensure Webpack treats .wasm files correctly
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'javascript/auto',
    })

    // Ensure Webpack treats .js files in the static media directory as ES modules
    config.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, '_next/static/media'),
      type: 'javascript/esm',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
            plugins: [
              '@babel/plugin-syntax-import-meta',
              'babel-plugin-transform-import-meta',
            ],
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
