import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer><p>@deepali 2023</p> </footer>
    </div>
}
