import { useParams } from "react-router-dom"
import { getSpecificDog } from "../services/GetDogsWithWalkers"
import { useEffect, useState } from "react"

export const DogList = () => {
    const { dogId } = useParams()
    const [dog, setDog] = useState([])

    const getAndSetDog = () => {
        getSpecificDog(dogId).then(dog => {
            setDog(dog)
        })
    }

    useEffect(() => {
        getAndSetDog()
    }, [])

    return (
        <>
            <h2>Hello! My name is {dog.name}</h2>
            <p>Currently being walked by: {dog.walker.name}</p>
        </>
    )
}