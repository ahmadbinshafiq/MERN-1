import React, { useEffect, useState } from "react";

const Dashboard = () => {

    const [getData, setData] = useState('Nothing..')

    async function populateQuote() {
        await fetch('http://localhost:1337/api/get')
            .then((res) => res.json())
            .then((json) => {
                setData(json.result)
            })

    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>{getData}</h2>
            <button onClick={populateQuote}>
                get request
            </button>
        </div>
    )
}

export default Dashboard;