import { Route, Routes } from "react-router"
import Rating from "./pages/rating/rating"
import ThankYou from './Pages/ThankYou/ThankYou'
import { useState } from "react"

function App() {
  const [rate, setRate] = useState()
  const savedRate = (rate) => {
    setRate(rate)
  }

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Rating savedRate={savedRate} />} />
        <Route path="thank-you" element={<ThankYou rate={rate} />} />

      </Routes>

    </>
  )
}

export default App