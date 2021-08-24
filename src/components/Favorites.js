import React from "react"
import { Button, Card } from "react-bootstrap"

function Favorites({favData, user, setFavData}) {

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
            alert(data.message)
        })
        .catch(err => alert(err))
    }
    return(
        <>
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