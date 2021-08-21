import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'

function ByGenre() {

    const [genre, setGenre] = useState(null)

    useEffect(() => {
            // fetch(`http://localhost:5000/${genre}`)
            // .then(response => response.json())
            // .then(data => setGameData(data))
            // .catch(err => alert(err))
    }, [genre])

    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Genre
                </Dropdown.Toggle>

                <Dropdown.Menu onChange={e => setGenre(e.target.value)}>
                    <Dropdown.Item value="bygenre/Action">Action</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Sports">Sports</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Adventure">Adventure</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Battle">Battle Royale</Dropdown.Item>
                    <Dropdown.Item value="bygenre/RPG">RPG (Role Playing Games)</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Racing">Racing</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Fighting">Fighting</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Simulation">Simulation</Dropdown.Item>
                    <Dropdown.Item value="bygenre/FPS">FPS (First Person Shooter)</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Puzzle">Puzzle</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Shooter">Shooter</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Strategy">Strategy</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Indie">Indie</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Platformer">Platformer</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Fighting">Fighting</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Arcade">Arcade</Dropdown.Item>
                    <Dropdown.Item value="bygenre/MMO">MMO (Massively Multiplayer Online)</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Casual">Casual</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByGenre

                