import React, {useEffect, useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'
import { UserDetailsContext } from '../App'

function ByGenre() {

    const {setGameData} = useContext(UserDetailsContext)

    const [genre, setGenre] = useState(null)

    useEffect(() => {
        if(genre !== null){
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/${genre}`)
            .then(response => response.json())
            .then(game => setGameData(game))
            .catch(err => alert(err))
        }
    }, [genre, setGameData])

    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Genre
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={e => setGenre(e.target.getAttribute("value"))}>
                    <Dropdown.Item value="bygenre/Action">Action</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Sports">Sports</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Adventure">Adventure</Dropdown.Item>
                    <Dropdown.Item value="bygenre/RPG">RPG (Role Playing Games)</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Racing">Racing</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Fighting">Fighting</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Simulation">Simulation</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Puzzle">Puzzle</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Shooter">Shooter</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Strategy">Strategy</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Indie">Indie</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Platformer">Platformer</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Arcade">Arcade</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Massively Multiplayer">MMO (Massively Multiplayer Online)</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Educational">Educational</Dropdown.Item>
                    <Dropdown.Item value="bygenre/Casual">Casual</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByGenre

                