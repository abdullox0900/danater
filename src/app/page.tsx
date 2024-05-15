import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'

export default function Home() {
  return (
    <>
      <div className='flex flex-col h-screen justify-between'>
        <div>
          <Header />
          <Hero />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}
