import { useParams } from "react-router-dom"
import { getSpecificDog } from "../services/GetDogsWithWalkers"
import { useEffect, useState } from "react"
import { getWalkers } from "../services/GetWalkers"

export const DogList = () => {
    const { dogId } = useParams()
    const [dog, setDog] = useState({})
    const [walker, setWalker] = useState([])

    const getAndSetDog = () => {
        let dogObj = {}
        getSpecificDog(dogId).then(dog => {
            dogObj = dog
            setDog(dog)
        })
        getWalkers().then(walkerArray => {
            walkerArray.find((walker) => {walker.Id == dogObj.Id})
            setWalker(walkerArray)
        })
    }

    useEffect(() => {
        getAndSetDog()
    }, [])

    return (
        <>
            <h2>Hello! My name is {dog.name}</h2>
            <p>Currently being walked by: {walker?.name}</p>
        </>
    )
}