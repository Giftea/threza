import {Navbar, Welcome, Footer, Transactions, Services, News} from './components'

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions/>
      <News />
      <Footer/>
    </div>
  )
}

export default App
