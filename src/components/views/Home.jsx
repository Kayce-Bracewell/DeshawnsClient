import { Link, useNavigate } from "react-router-dom";
import { getDogs } from "../services/GetDogs"
import { useEffect, useState } from "react";
import { AddDog } from "./AddDog";

export const Home = () => {
    const [dogs, setDogs] = useState([])
    const [addDog, setAddDog] = useState(false)

    const navigate = useNavigate()

    const getAndSetDogs = () => {
        getDogs().then(dogArray => {
            setDogs(dogArray)
        })
    }
    
    useEffect(() => {
        getAndSetDogs()
    }, [addDog])
    

    return (
        <>
            {addDog == true ? <AddDog setAddDog={setAddDog}/> :
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
                    <button type="button" onClick={() => {
                    setAddDog(true)
                }}>Add dog</button>
                <p>TESTING</p>
                </div>
            </>
            }
        </>
    )
}