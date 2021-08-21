import React, { useEffect, useState, useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { UserDetailsContext } from '../App'

function GameList({route}) {

    const {user, setShow, setIsLogin} = useContext(UserDetailsContext)
    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        if(route !== 'genre')
            fetch(`http://localhost:5000/${route}`)
            .then(response => response.json())
            .then(data => setGameData(data))
            .catch(err => alert(err))
    }, [route])

    if(!gameData) {
        return <h1>Loading...</h1>
    }

    const handleFavorite = () => {
        // fetch('http://localhost:5000/addfav', {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer: ${token}`
        //     },
        //     body: JSON.stringify()
        // })
        // .then(response => response.json())
        // .then(data => )
        // .catch(err => alert(err))
    }

    const handleSignInFav = () => {
        setIsLogin(true)
        setShow(true)
    }

    return (
        <>
        {gameData.map(games => {
            const game = games
            return (
                <>
                <Card style={{ width: '18rem', height: '620px' ,float: 'left' }}>
                    <Card.Img variant="top" src={game.poster} alt="Image Coming Soon..." style={{width: '100%', height: 150}} />
                    <Card.Body>
                        <Card.Title>{game.name}</Card.Title>
                        <Card.Text>
                            <p>
                                <b>Genres:</b> 
                                <br />{game.genres.join(' | ')}
                            </p>
                            <p>
                                <b>Release Date:</b> 
                                <br />
                                {game.releaseDate}
                            </p>
                            <p>
                                <b>Rating:</b> 
                                <br/>
                                ⭐️{game.rating}
                            </p>
                            <p>
                                <b>Platforms:</b> 
                                <br />
                                {game.platforms.join(' | ')}
                            </p>
                        </Card.Text>
                        {!user 
                        ?
                        <Button 
                            variant="dark" 
                            onClick={handleSignInFav}
                            style={{}}
                        >
                            Sign In to Favorite
                        </Button>
                        :
                        <Button 
                            variant="warning" 
                            onClick={handleFavorite}
                        >
                            Favorite
                        </Button>
                        }
                    </Card.Body>
                </Card>
                </>
            )
        })}
        </>
    )
}

export default GameList