import path from 'path'
import { fileURLToPath } from 'url'
const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

const nextConfig = {
  images: {
    domains: ['avatar.iran.liara.run'],
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
      include: path.resolve(__dirname, '._next/static/media'),
      type: 'javascript/esm', // Explicitly set type to ESM
      use: [
        {
          loader: 'babel-loader', // Use Babel loader to transpile the JS files
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true, // Transpile to ES modules
                  },
                },
              ],
            ],
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
