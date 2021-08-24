import React from "react"
import { Button, Card } from "react-bootstrap"

function Favorites({favData}) {
    const handleRemoveFav = () => {
        fetch('')
    }
    return(
        <>
        {favData.map(games => {
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