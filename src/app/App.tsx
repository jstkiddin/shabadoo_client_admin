import Dashboard from '../pages/Dashboard'
import Navbar from '../widgets/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page</h2>
const NotFound = () => <h2>404: Page Not Found</h2>

function App() {
  return (
    <>
      {/* <Navbar />
      <Dashboard />
      <Router>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
