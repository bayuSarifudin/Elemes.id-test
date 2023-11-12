import Home from "@/Pages/Home/Home"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="space-y-20 pb-28">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
