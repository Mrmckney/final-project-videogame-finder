import { useEffect } from "react"

function GameList({route}) {
    
    useEffect(() => {
        fetch(`http://localhost:5000/topgames`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => alert(err))
    }, [route])
    

    return (
        <h1></h1>
    )
}

export default GameList