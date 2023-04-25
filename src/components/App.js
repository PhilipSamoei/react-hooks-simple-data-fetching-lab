import React, { useState, useEffect } from 'react';

function App() {
    const [name, setName] = useState("")
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
        .then((data)=>setName(data.message))
    }, [])

    if (!name) return <p>Loading ...</p>
    
    return (
        <div>
            <img src={name} alt="Random dog"/>
        </div>
    )
}
export default App
