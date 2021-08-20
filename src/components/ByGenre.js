import { Dropdown } from 'react-bootstrap'
import '../App.css'

function ByGenre() {

    const casualGames = () => {
        
    }
    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Genre
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="">Action</Dropdown.Item>
                    <Dropdown.Item href="">Sports</Dropdown.Item>
                    <Dropdown.Item href="">Adventure</Dropdown.Item>
                    <Dropdown.Item href="">Battle Royale</Dropdown.Item>
                    <Dropdown.Item href="">RPG (Role Playing Games)</Dropdown.Item>
                    <Dropdown.Item href="">Racing</Dropdown.Item>
                    <Dropdown.Item href="">Fighting</Dropdown.Item>
                    <Dropdown.Item href="">Simulation</Dropdown.Item>
                    <Dropdown.Item href="">FPS (First Person Shooter)</Dropdown.Item>
                    <Dropdown.Item href="">Puzzle</Dropdown.Item>
                    <Dropdown.Item href="">Shooter</Dropdown.Item>
                    <Dropdown.Item href="">Strategy</Dropdown.Item>
                    <Dropdown.Item href="">Indie</Dropdown.Item>
                    <Dropdown.Item href="">Platformer</Dropdown.Item>
                    <Dropdown.Item href="">Fighting</Dropdown.Item>
                    <Dropdown.Item href="">Arcade</Dropdown.Item>
                    <Dropdown.Item href="">MMO (Massively Multiplayer Online)</Dropdown.Item>
                    <Dropdown.Item onClick={casualGames}>Casual</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByGenre

                