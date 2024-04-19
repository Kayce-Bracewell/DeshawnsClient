export const getWalkers = async () => {
    const res = await fetch(`https://localhost:7146/walkers`);
    const data = await res.json();
    console.log(data)
    return data;
};