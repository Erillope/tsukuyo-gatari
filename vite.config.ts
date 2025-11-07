import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tsukuyo-gatari/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          'shinshou-data': [
            './src/data/shinshou/shinshouRokuAlphaData',
            './src/data/shinshou/shinshouRokuBetaData',
            './src/data/shinshou/ambitionData',
            './src/data/shinshou/shinshouRokuYData',
            './src/data/shinshou/coldData',
            './src/data/shinshou/shinshouRokuDelta',
            './src/data/shinshou/emergeData',
            './src/data/shinshou/shinshouRokuEData',
            './src/data/shinshou/shinshouRokuCData',
            './src/data/shinshou/dawnData',
            './src/data/shinshou/shinshouRokuNData',
            './src/data/shinshou/shinshouRokuTData',
            './src/data/shinshou/blue',
            './src/data/shinshou/shinshouRokuI',
            './src/data/shinshou/shinshouRokuV'
          ],
          'kaisou-data': [
            './src/data/kaisou/kaisou1',
            './src/data/kaisou/kaisou2',
            './src/data/kaisou/kaisou3',
            './src/data/kaisou/kaisou4',
            './src/data/kaisou/kaisou5',
            './src/data/kaisou/kaisou6',
            './src/data/kaisou/kaisou7',
            './src/data/kaisou/kaisou8',
            './src/data/kaisou/kaisou9',
            './src/data/kaisou/kaisou10',
            './src/data/kaisou/kaisou11',
            './src/data/kaisou/kaisou12'
          ],
          'tsuisou-data': [
            './src/data/tsuisou/tsuisouRoku0Data',
            './src/data/tsuisou/tsuisouRoku1Data',
            './src/data/tsuisou/tsuisouRoku2Data',
            './src/data/tsuisou/tsuisouRoku3Data',
            './src/data/tsuisou/tsuisouRoku4Data',
            './src/data/tsuisou/tsusouRoku5Data'
          ],
          'extra-data': [
            './src/data/extra/veronica',
            './src/data/extra/tetra',
            './src/data/extra/ookami'
          ],
          
          'ui-components': [
            './src/components/ui/AnimatedButton',
            './src/components/ui/RTypography',
            './src/components/ui/Icon'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
