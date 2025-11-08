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
            './src/data/shinzou/shinshou/shinshouRokuAlphaData',
            './src/data/shinzou/shinshou/shinshouRokuBetaData',
            './src/data/shinzou/shinshou/ambitionData',
            './src/data/shinzou/shinshou/shinshouRokuYData',
            './src/data/shinzou/shinshou/coldData',
            './src/data/shinzou/shinshou/shinshouRokuDelta',
            './src/data/shinzou/shinshou/emergeData',
            './src/data/shinzou/shinshou/shinshouRokuEData',
            './src/data/shinzou/shinshou/shinshouRokuCData',
            './src/data/shinzou/shinshou/dawnData',
            './src/data/shinzou/shinshou/shinshouRokuNData',
            './src/data/shinzou/shinshou/shinshouRokuTData',
            './src/data/shinzou/shinshou/blue',
            './src/data/shinzou/shinshou/shinshouRokuI',
            './src/data/shinzou/shinshou/shinshouRokuV'
          ],
          'kaisou-data': [
            './src/data/shinzou/kaisou/kaisou1',
            './src/data/shinzou/kaisou/kaisou2',
            './src/data/shinzou/kaisou/kaisou3',
            './src/data/shinzou/kaisou/kaisou4',
            './src/data/shinzou/kaisou/kaisou5',
            './src/data/shinzou/kaisou/kaisou6',
            './src/data/shinzou/kaisou/kaisou7',
            './src/data/shinzou/kaisou/kaisou8',
            './src/data/shinzou/kaisou/kaisou9',
            './src/data/shinzou/kaisou/kaisou10',
            './src/data/shinzou/kaisou/kaisou11',
            './src/data/shinzou/kaisou/kaisou12'
          ],
          'tsuisou-data': [
            './src/data/shinzou/tsuisou/tsuisouRoku0Data',
            './src/data/shinzou/tsuisou/tsuisouRoku1Data',
            './src/data/shinzou/tsuisou/tsuisouRoku2Data',
            './src/data/shinzou/tsuisou/tsuisouRoku3Data',
            './src/data/shinzou/tsuisou/tsuisouRoku4Data',
            './src/data/shinzou/tsuisou/tsusouRoku5Data'
          ],
          'extra-data': [
            './src/data/shinzou/extra/veronica',
            './src/data/shinzou/extra/tetra',
            './src/data/shinzou/extra/ookami'
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
