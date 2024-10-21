import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-md'>Tailwind with props</h1>
      <Card name="shyam" roll="21121A05H7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v9vqUb9RRWxUrNLYPQMbpAg4nu5lO3Khlg&s"/>{" "}
      <Card name="moksh" roll="21121A05J2" src="https://rukminim2.flixcart.com/image/850/1000/kx9as280/poster/k/x/u/medium-car-neon-lamborghini-vehicle-matte-finish-poster-original-imag9r55fkbsrs7z.jpeg?q=90&crop=false"/>{" "}
      <Card name="charan" roll="21121A05K6" src="https://img.freepik.com/premium-photo/neon-car-with-word-audi-front_256339-6397.jpg"/>
    </>
  )
}

export default App
