
import { useSelector } from 'react-redux'
import './App.css'
import Button from './components/Button'
import DisplayCounter from './components/DisplayCounter'
import Header from './components/Header'
import PrivacyMessage from './components/PrivacyMessage'

function App() {
  
  const privacy = useSelector(store=> store.privacy)

  return (
    <>
      <Header />
      {
        privacy ? <PrivacyMessage /> : <DisplayCounter />
      }
      <Button />
    </>
  )
}

export default App
