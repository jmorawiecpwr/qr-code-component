import './App.css'
import QRCode from './assets/image-qr-code.png'

function App() {
 return (
  <div className="flex justify-center items-center h-screen bg-blue-100 p-4">
     <div className="bg-white shadow-xl rounded-4xl max-w-m text-center p-6 max-w-[50vh]">
      <img src={QRCode} alt="QR Code" className='w-full rounded-xl mb-14' />
      <h1 className='text-4xl font-bold text-[#1F314F] mb-14'>Improve your front-end skills by building projects</h1>
      <p className="text-3xl font-medium text-[#7D889E] mb-14">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
     </div>
  </div>
 )
}

export default App
