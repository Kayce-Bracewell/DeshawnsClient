export const AssignDog = async (dogId ,walkerId) => {
    const postOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            walkerId: walkerId
        }) 
    };

    const response = await fetch(`https://localhost:7146/dogs/${dogId}`, postOptions);
}