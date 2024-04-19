export const CreateDog = async (dogName) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Name: dogName
        }) 
    };

    const response = await fetch(`https://localhost:7146/dogs`, postOptions);
};
