import { useEffect, useState } from "react"
import { getDogs } from "../services/GetDogs"
import { useNavigate } from "react-router-dom"

export const AssignDog = ({ walkerToAssign }) => {
    const [dogs, setDogs] = useState([])
    const [cities, setCities] = useState([])
    const [walker, setWalker] = useState(walkerToAssign)

    const navigate = useNavigate()

    const dogsInWalkerCity = () => {
        getDogs().then(dogArray => {
            const availableDogs = dogArray.filter((dogObj) => 
            dogObj.cityId == walkerToAssign.cityId &&
            dogObj.walkerId == 0)
            setDogs(availableDogs)
        });
    }

    useEffect(() => {
        dogsInWalkerCity()
    }, [])

    return (
        <>
            <h2>Plz Wurk</h2>
            <p>Here are the available dogs:</p>
            {dogs.map((dog) => {
                return (
                    <div onClick={() => {
                        AssignDog(dog.id ,walkerToAssign.id)
                        navigate(`/dogs/${dog.id}`)
                    }}>
                        <p>{dog.name}</p>
                    </div>
                )
            })}
        </>
    )
}