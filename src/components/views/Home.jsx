import { getDogs } from "../services/GetDogs"
import { useEffect, useState } from "react";

export const Home = () => {
    const [dogs, setDogs] = useState([])

    const getAndSetDogs = () => {
        getDogs().then(dogArray => {
            setDogs(dogArray)
        })
    }
    
    useEffect(() => {
        getAndSetDogs()
    }, [])

    return (
        <>
            <h2>Welcome to Deshawn's Dog Walking!</h2>
            <div className="master-container">
                    {dogs.map((dog) => {
                        return (
                            <div key={dog.Id} className="dog-container">
                                <h4>{dog.name}</h4>
                                <button className="btn" type="button">Dog Details</button>
                            </div>
                        )
                    })}
                
            </div>
        </> 
    )
}