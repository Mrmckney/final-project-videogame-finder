import React, { useEffect, useContext, useState } from "react"
import { Button, Card, Spinner, Modal } from "react-bootstrap"
import { UserDetailsContext } from '../App'
import Favorites from "./Favorites"

function GameList({route}) {

    const {user, setShow, setIsLogin, gameData, setGameData, favData, setFavData} = useContext(UserDetailsContext)
    const [addedFav, setAddedFav] = useState(null)

    const loadFavorites = async () => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/favorites`, {
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
    }

    useEffect(() => {
        if(route !== null) {
            if(user) {
                loadFavorites().then()
            }
            if(route !== 'favorites') {
                fetch(`${process.env.REACT_APP_API_ENDPOINT}/${route}`)
                .then(response => response.json())
                .then(data => {
                    setGameData(data)
                })
                .catch(err => alert(err))
            }
        }
    }, [route, user])

    if(!gameData) {
        return (
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    const handleFavorite = (e) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/addfav`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer: ${user}`
            },
            body: JSON.stringify(e)
        })
        .then(response => response.json())
        .then(data => {
            setAddedFav("Added Favorite")
            loadFavorites().then()
        })
        .catch(err => alert(err))
    }   

    const handleSignInFav = () => {
        setIsLogin(true)
        setShow(true)
    }

    const handleClose = () => setAddedFav(null)

    return (
        <>
        {addedFav === "Added Favorite" &&
            <Modal
                show={addedFav}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Favorite Added!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        }
        <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        {route === 'favorites'
        ? 
        <Favorites key="fav" favData={favData} setFavData={setFavData} user={user}/>
        :
        gameData.map((games, i) => {
            const game = games;
            const isFavorite = favData && favData?.find(({rawgid}) => rawgid === game.rawgid);
            return (
                <>
                <Card style={{ height: '760px', width: '18rem' }} key={i}>
                    <h5>{1 + i}.</h5>
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
                            variant={isFavorite ? "info" : "warning"}
                            onClick={() => handleFavorite(game)}
                            disabled={isFavorite ? true : false}
                        >
                            {isFavorite ? "Already Favorited" : "Favorite"}
                        </Button>
                        }
                    </Card.Body>
                </Card>
                </>
            )
        })}
        </div>
        </>
    )
}

export default GameList