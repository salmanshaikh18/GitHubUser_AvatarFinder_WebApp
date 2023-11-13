import { useState } from 'react'
import './HomePage.css'
import { useEffect } from 'react'
import PhotoCard from '../Components/PhotoCard'
import useDebounce from '../CustomHooks/useDebounce'

const HomePage = () => {

    const [photoData, setPhotoData] = useState([])
    const [query, setQuery] = useState('mariya')
    const debounceUpdateSearch = useDebounce((e) => setQuery(e.target.value))
    
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
         <h1 id="heading">GitHub User Avatar Finder</h1>
        <div className='inputBox'>
            <input id="userInput" onChange={debounceUpdateSearch} type="text" placeholder='Enter GitHub UserName..'/>
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