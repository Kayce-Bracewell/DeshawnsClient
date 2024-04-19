export const getSpecificDog = async (id) => {
    const res = await fetch(`https://localhost:7146/dogs/${id}`);
    const data = await res.json();
    console.log(data)
    return data;
};