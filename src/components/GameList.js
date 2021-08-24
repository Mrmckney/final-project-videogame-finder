import React, { useEffect, useContext} from "react"
import { Button, Card } from "react-bootstrap"
import { UserDetailsContext } from '../App'
import Favorites from "./Favorites"

function GameList({route}) {

    const {user, setShow, setIsLogin, gameData, setGameData, favData, setFavData} = useContext(UserDetailsContext)

    useEffect(() => {
        if(route !== null) {
            if(route === 'favorites' && user) {
                fetch(`http://localhost:5000/${route}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application',
                        Authorization: `Bearer: ${user}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setFavData(data.favorites)
                })
                .catch(err => alert(err))
            } else {
                fetch(`http://localhost:5000/${route}`)
                .then(response => response.json())
                .then(data => {
                    setGameData(data)
                })
                .catch(err => alert(err))
            }
        }
    }, [route, user, setGameData, setFavData])

    if(!gameData) {
        return <h1>Loading...</h1>
    }

    const handleFavorite = (e) => {
        fetch('http://localhost:5000/addfav', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer: ${user}`
            },
            body: JSON.stringify(e)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message)
        })
        .catch(err => alert(err))
    }

    const handleSignInFav = () => {
        setIsLogin(true)
        setShow(true)
    }

    return (
        <>
        {favData
        ? 
        <Favorites favData={favData} />
        :
        gameData.map(games => {
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
                                <br />
                                {game.genres.join(' | ')}
                            </p>
                        </Card.Text>
                        <Card.Text>
                            <p>
                                <b>Release Date:</b> 
                                <br />
                                {game.releaseDate}
                            </p>
                        </Card.Text>
                        <Card.Text>
                            <p>
                                <b>Rating:</b> 
                                <br />
                                ⭐️{game.rating}
                            </p>
                        </Card.Text>
                        <Card.Text>
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
                            onClick={() => handleFavorite(game)}
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