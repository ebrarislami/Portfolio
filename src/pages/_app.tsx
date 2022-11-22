import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import { Exo_2 } from '@next/font/google'

const font = Exo_2({
  subsets: ['latin'],
  variable: '--font-primary',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${font.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
