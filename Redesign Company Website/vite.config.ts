import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// oklch(L C H) → rgb 近似转换，兼容百度浏览器/旧版 Android WebView
// 使用 CSS Color 4 规范的近似算法
function oklchToRgb(l: number, c: number, h: number): string {
  const hRad = (h * Math.PI) / 180
  const a = c * Math.cos(hRad)
  const b = c * Math.sin(hRad)

  // OKLab → linear sRGB
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b

  const lc = l_ * l_ * l_
  const mc = m_ * m_ * m_
  const sc = s_ * s_ * s_

  let r = +4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc
  let g = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc
  let bv = -0.0041960863 * lc - 0.7034186147 * mc + 1.7076147010 * sc

  // linear → sRGB gamma
  const toSrgb = (x: number) => {
    x = Math.max(0, Math.min(1, x))
    return x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055
  }

  const ri = Math.round(toSrgb(r) * 255)
  const gi = Math.round(toSrgb(g) * 255)
  const bi = Math.round(toSrgb(bv) * 255)
  return `rgb(${ri},${gi},${bi})`
}

// Vite 插件：构建完成后将 dist 目录中 CSS 文件的 oklch() 转换为 rgb()
function oklchPolyfillPlugin() {
  return {
    name: 'oklch-to-rgb-polyfill',
    apply: 'build' as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist/assets')
      if (!fs.existsSync(distDir)) return

      const files = fs.readdirSync(distDir).filter((f: string) => f.endsWith('.css'))
      for (const file of files) {
        const filePath = path.join(distDir, file)
        let content = fs.readFileSync(filePath, 'utf-8')
        if (!content.includes('oklch(')) continue

        content = content.replace(
          /oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)\s*(?:\/\s*([\d.]+%?))?\s*\)/g,
          (_: string, lRaw: string, cRaw: string, hRaw: string, alphaRaw: string) => {
            const l = lRaw.endsWith('%') ? parseFloat(lRaw) / 100 : parseFloat(lRaw)
            const c = parseFloat(cRaw)
            const h = parseFloat(hRaw)
            const rgb = oklchToRgb(l, c, h)
            if (alphaRaw !== undefined) {
              const alpha = alphaRaw.endsWith('%') ? parseFloat(alphaRaw) / 100 : parseFloat(alphaRaw)
              return rgb.replace('rgb(', 'rgba(').replace(')', `,${alpha})`)
            }
            return rgb
          }
        )
        fs.writeFileSync(filePath, content, 'utf-8')
        console.log(`[oklch-polyfill] converted: ${file}`)
      }
    },
  }
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    figmaAssetResolver(),
    oklchPolyfillPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
