import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import WhatsAppButton from './WhatsAppButton'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen"><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
