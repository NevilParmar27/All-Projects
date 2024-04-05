
import './App.css'
import ConatctDetails from './components/ContactDetails/ConatctDetails'
import Herosection from './components/Herosection/Herosection'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <Herosection/>
      <ConatctDetails/>
      </main>
      
    </>
  )
}

export default App
