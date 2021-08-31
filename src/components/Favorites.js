import React, { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"

function Favorites({favData, user, setFavData}) {

    const [removedFav, setRemovedFav] = useState(null)
    const [modalFav, setModalFav] = useState([])

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
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Removed Favorite</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <img src={modalFav[0].poster} alt="Coming Soon..." style={{width: 250, height: 150}} />
                    <br />
                    <br />
                    <h3>{modalFav[0].name}</h3>
                    <br />
                        <span>
                                <b>Genres:</b> 
                                <br />
                                {modalFav[0].genres.join(' | ')}
                        </span>
                    <br />
                    <br />
                        <span>
                            <b>Release Date:</b> 
                            <br />
                            {modalFav[0].releaseDate}
                        </span>
                    <br />
                    <br />
                        <span>
                            <b>Rating:</b> 
                            <br />
                            ⭐️{modalFav[0].rating}
                        </span>
                    <br />
                    <br />
                        <span>
                            <b>Platforms:</b> 
                            <br />
                            {modalFav[0].platforms.join(' | ')}
                        </span>
                </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        }
        {favData &&
        favData.map((game) => {
            return (
                <Card style={{ width: '18rem', height: '760px'}} key={game._id}>
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
                            onClick={() => {
                                handleRemoveFav(game)
                                setModalFav([game])
                            }}
                        >
                            Remove Favorite
                        </Button>
                    </Card.Body>
                </Card>
            )
        })}
        </>
    )
}

export default Favorites