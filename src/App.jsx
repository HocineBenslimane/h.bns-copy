import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Products from './components/Products'
import CustomDesigner from './components/CustomDesigner'
import Support from './components/Support'
import FAQ from './components/FAQ'
import Policies from './components/Policies'
import Legal from './components/Legal'
import PaymentTerms from './components/PaymentTerms'
import QuoteForm from './components/QuoteForm'
import Merch from './components/Merch'
import Footer from './components/Footer'
import CustomChatBot from './components/CustomChatBot'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <CustomChatBot />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/custom-designer" element={<CustomDesigner />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/payment-terms" element={<PaymentTerms />} />
          <Route path="/get-a-quote" element={<QuoteForm />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App