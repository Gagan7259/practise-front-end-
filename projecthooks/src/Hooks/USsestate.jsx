import React, { useEffect, useState } from 'react';

function USsestate() {
    const [count, setCount] = useState(0);

    const ButtonHandler = (() => {
        setCount(count + 1)
    })

    useEffect(() => {
        console.log(`you clicked button ${count} - ComponentDidMount`)
    },[])

    useEffect(() => {
        console.log(`you clicked button ${count} - ComponentDidUpdate`)
    },[count])
    
    return (
        <div>
            <h1>Life CYcle Method</h1>
            <p>You Clicked  {count} times</p>
            <button onClick={ButtonHandler}>Click Me</button>
        </div>
    )
}

export default USsestate
