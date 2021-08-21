import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"

function GameList({route}) {
    
    const [gameData, setGameData] = useState(null)

    useEffect(() => {
            fetch(`http://localhost:5000/${route}`)
            .then(response => response.json())
            .then(data => setGameData(data))
            .catch(err => alert(err))
    }, [route])

    if(!gameData) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        {gameData.map(games => {
            const game = games
            return (
                // <div className="games">
                // <Button variant="outline-warning" className="button-star">⭐️</Button>
                // <img src={game.poster} alt="game" style={{width: 150, height: 100}}/>
                // <h4>{game.name}</h4>
                // <p>Genres: {game.genres.join(' ')}</p>
                // <p>Release Date: <br/>{game.releaseDate}</p>
                // <p>Rating: <br/>{game.rating}</p>
                // <p>Platforms: {game.platforms.join(' ')}</p>
                // <br />
                // </div>
                <>
                <Card style={{ width: '18rem', height: '575px' ,float: 'left' }}>
                    <Card.Img variant="top" src={game.poster} style={{width: '100%', height: 150}} />
                    <Card.Body>
                        <Card.Title>{game.name}</Card.Title>
                        <Card.Text>
                            <p><b>Genres:</b> <br />{game.genres.join(' | ')}</p>
                            <p><b>Release Date:</b> <br />{game.releaseDate}</p>
                            <p><b>Rating:</b> <br/>⭐️{game.rating}</p>
                            <p><b>Platforms:</b> <br />{game.platforms.join(' | ')}</p>
                        </Card.Text>
                        <Button variant="outline-warning">Favorite</Button>
                    </Card.Body>
                </Card>
                </>
            )
        })}
        </>
    )
}

export default GameList