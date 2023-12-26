import { useEffect, useState } from "react";

export default function StopWatch() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const nisim = setInterval(() => {
            console.log('hi');
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(nisim);
    }, []);

    return <p>{seconds}</p>;
}