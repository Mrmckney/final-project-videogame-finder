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
    }, [route, user])

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
        <Favorites favData={favData} setFavData={setFavData} user={user}/>
        :
        gameData.map((games, i) => {
            const game = games
            return (
                <Card style={{ width: '18rem', height: '620px' ,float: 'left' }} key={i}>
                    <Card.Img variant="top" src={game.poster} alt="Image Coming Soon..." style={{width: '100%', height: 150}} />
                    <Card.Body>
                        <Card.Title>{game.name}</Card.Title>
                        <Card.Text>
                            <span>
                                <b>Genres:</b> 
                                <br />
                                {game.genres.join(' | ')}
                            </span>
                        </Card.Text>
                        <Card.Text>
                            <span>
                                <b>Release Date:</b> 
                                <br />
                                {game.releaseDate}
                            </span>
                        </Card.Text>
                        <Card.Text>
                            <span>
                                <b>Rating:</b> 
                                <br />
                                ⭐️{game.rating}
                            </span>
                        </Card.Text>
                        <Card.Text>
                            <span>
                                <b>Platforms:</b> 
                                <br />
                                {game.platforms.join(' | ')}
                            </span>
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
            )
        })}
        </>
    )
}

export default GameList