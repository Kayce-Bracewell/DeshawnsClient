import { useEffect, useState } from "react"
import { CreateDog } from "../services/CreateDog"


export const AddDog = ({setAddDog}) => {
    const [dogName, setDogName] = useState("")

    return (
        <>
            <h2>Tester</h2>
            <form>
                <fieldset>
                    <legend>New Dogg who dis?</legend>
                    <label>Enter Dog Name:</label><br />
                    <input type="text" id="name-field" onChange={(e) => {
                        setDogName(e.target.value)
                    }}/><br/>
                    <button type="button" onClick={() => {
                        CreateDog(dogName)
                        setAddDog(false)
                    }}>Add dog</button>
                </fieldset>
            </form>
        </>
    )
}