import { useEffect } from "react"
import { useState } from "react"
import DateInput from "./components/DateInput"
import Photo from "./components/Photo"
import axios from "axios"

function App() {
  const [date, setDate] = useState("")
  const [photo, setPhoto] = useState("")

  const getPhoto = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      return setPhoto(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPhoto(date)
  })

  const handleDateChange = (e) => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    setDate(dateFromInput)
    getPhoto(dateFromInput)
  }

  return (
    <div>
      <h1>Astronomy Picture of the day </h1>
      <DateInput changeDate={handleDateChange} />
      <Photo photo={photo} />
    </div>
  )
}

export default App
