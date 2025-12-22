import './App.css'
import Card from './components/Card.jsx'
import QrCodeImage from './assets/image-qr-code.png'

function App() {

  return (
    <>
      <div className="app">
        <Card
          title="Improve my front-end skills by building projects"
          paragraph="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
          img={QrCodeImage}
        ></Card>
      </div>
    </>
  )
}

export default App
