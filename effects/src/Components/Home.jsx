import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getStamData().then(result => setData(result));
    }, []);

    return <Comp data={data} />;
}

function Comp({ data }) {
    return !data ?
        'Loading...' :
        <pre>{JSON.stringify(data, null, 2)}</pre>;
}

async function getStamData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    const res = await fetch(apiUrl);
    return await res.json();
}