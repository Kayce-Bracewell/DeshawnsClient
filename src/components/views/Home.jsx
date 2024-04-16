import { Link } from "react-router-dom";
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
                            <div key={dog.id} className="dog-container">
                                <Link to={`/dogdetails/${dog.id}`}>
                                    <h4>{dog.name}</h4>
                                </Link>
                                <button className="btn" type="button">Dog Details</button>
                            </div>
                        )
                    })}
                
            </div>
        </> 
    )
}