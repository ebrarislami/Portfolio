import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import { Exo_2 } from '@next/font/google'

const font = Exo_2({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}
