import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function HomePageGames() {

    const [homeGames, setHomeGames] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/rawgid`)
        .then(response => response.json())
        .then(game => setHomeGames(game))
        .catch(err => alert(err))
    }, [])

    return (
        <>
        <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        {homeGames.map(game => {
            return (
                <Card style={{ height: '525px', width: '18rem' }} key={game._id}>
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
                    </Card.Body>
                </Card>
            )
        })}
        </div>
        </>
    )
}
    

export default HomePageGames