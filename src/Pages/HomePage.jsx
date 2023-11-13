import { useState } from 'react'
import './HomePage.css'
import { useEffect } from 'react'
import PhotoCard from '../Components/PhotoCard'

const HomePage = () => {

    const [photoData, setPhotoData] = useState([])
    const [query, setQuery] = useState('Salman')
    
    const getData = async () => {
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${query||"Salman"}`)
            console.log("Response: ", response.json)
            const data = await response.json()
            console.log("data: ", data)
            setPhotoData(data.items)
        } catch (error) {
            console.log(`Error while fetching Data: ${error.message}`)
        }
    }

    useEffect(() => {
        getData()
    }, [query])

  return (
    <div className='homePage'>
        <div className='inputBox'>
            <input id="userInput" type="text" placeholder='Enter GitHub UserName..'/>
        </div>
        <div className="imageContainer">
            {
                photoData?.map((e) => {
                    return <PhotoCard key={e.login} id={e.login} url={e.avatar_url} />
                })
            }
        </div>
    </div>
  )
}

export default HomePage