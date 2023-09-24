import React, { useEffect, useRef, useState } from "react"

function Welcome1 (props) {

   

    const [count, setCount] = useState(1);
    const [name, setName] = useState("Nguyen Van A");
   
    useEffect(() => {
        console.log('useEffect')
    })
    
    useEffect(() => {
        console.log('mounted')
    }, [])

    useEffect(() => {
        console.log('edit name')
    }, [name])

    useEffect(() => {
        console.log('edit count')
    }, [count])
    function handleSubmit () {
        console.log('inputEl', inputEl)
        setCount(count + 1)
    }

    const inputEl = useRef(null);
    const userRef = useRef(null);
    return (
        <div>
        <hr></hr>
             <input ref={inputEl} type="text" />
             <input ref={userRef}  className="user"  type="text" />

            <h1>Count, {count}</h1>;
            <h1>Name: {name} </h1>;
            <button onClick={handleSubmit}>Increment</button>
            <h1>address, {props.address} </h1>
        </div>
    )
}

export default Welcome1
