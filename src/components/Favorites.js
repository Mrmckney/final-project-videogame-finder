import React, { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"

function Favorites({favData, user, setFavData}) {

    const [removedFav, setRemovedFav] = useState(null)

    const handleRemoveFav = (e) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/deletefav`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer: ${user}`
            },
            body: JSON.stringify(e)
        })
        .then(response => response.json())
        .then(data => {
            setFavData(data.favorites)
            setRemovedFav("Removed Favorite")
        })
        .catch(err => alert(err))
    }

    const handleClose = () => setRemovedFav(null)

    return(
        <>
        {removedFav === "Removed Favorite" &&
            <Modal
            show={removedFav}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Removed Favorite</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        }
        {favData &&
        favData.map((games, i) => {
            const game = games
            return (
                <>
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
                        <Button 
                            variant="danger" 
                            onClick={() => handleRemoveFav(game)}
                        >
                            Remove Favorite
                        </Button>
                    </Card.Body>
                </Card>
                </>
            )
        })}
        </>
    )
}

export default Favorites