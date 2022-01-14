import {Navbar, Welcome, Footer, Transactions, Services,Stats} from './components';

function App() {

  return (
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Stats />
          <Transactions/>
          <Footer/>
      </div>
  )
}

export default App
