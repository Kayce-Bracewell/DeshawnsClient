export const getDogs = async () => {
    const res = await fetch("https://localhost:7146/dogs");
    const data = await res.json();
    console.log(data)
    return data;
};