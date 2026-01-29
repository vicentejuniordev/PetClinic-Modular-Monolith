
async function fetchVets() {
    const res = await fetch('http://localhost:3001/vets');

    if(res.status === 200){
        return res.json();
    }

    return []
}

console.log(await fetchVets());

const vets = await fetchVets()

export default function getVets() {
    return {
        data: vets
    };
}
