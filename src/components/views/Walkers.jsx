import { useEffect, useState } from "react"
import { getWalkers } from "../services/GetWalkers"
import { Link, useNavigate } from "react-router-dom"
import { getCities } from "../services/GetCities"
import { AssignDog } from "./AssignDog"


export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filterCity, setFilterCity] = useState(0)
    const [assignClicked, setAssignClicked] = useState(false)
    const [walkerToAssign, setWalkerToAssign] = useState({})

    const navigate = useNavigate();

    const getAndSetWalkers = () => {
        getWalkers().then(walkerArray => {
            setWalkers(walkerArray)
        })
    }

    const getAndSetCities = () => {
        getCities().then(cityArray => {
            setCities(cityArray)
        })
    }

    useEffect(() => {
        if (filterCity == 0) {
            getAndSetWalkers()
        } else {
            const cityMatch = walkers.filter((walker) => walker.id == filterCity)
            setWalkers(cityMatch)
        }
    }, [filterCity])

    useEffect(() => {
        getAndSetWalkers()
        getAndSetCities()
    }, [])

    return (
        <>
            {assignClicked == true ? <AssignDog walkerToAssign={walkerToAssign}/> :
            <>
            <p>testing</p>
            <div className="filter-bar">
                <p>Filter by City:</p>
                <select onChange={(e) => {
                    const index = e.target.selectedIndex;
                    const el = e.target.childNodes[index];
                    const option = el.getAttribute('id');
                    setFilterCity(option)
                }}>
                    <option id="0">All</option>
                    {cities.map((city) => {
                        return (
                            <option key={city.id} id={city.id}>{city.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="master-container">
                {walkers.map((walker) => {
                        return (
                            <div key={walker.id} className="dog-container">
                                <Link to={`/walkerdetails/${walker.id}`}>
                                    <h4>{walker.name}</h4>
                                </Link>
                                <button className="btn" type="button">Walker Details</button>
                                <button className="btn" type="button" onClick={() => {
                                    setAssignClicked(true)
                                    setWalkerToAssign(walker)
                                }}>Assign Doge</button>
                            </div>
                        )
                    })}
            </div>
            </>}
        </>
    )
}