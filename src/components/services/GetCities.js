export const getCities = async () => {
    const res = await fetch(`https://localhost:7146/cities`);
    const data = await res.json();
    console.log(data)
    return data;
};