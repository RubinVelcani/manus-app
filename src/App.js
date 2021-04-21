import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;