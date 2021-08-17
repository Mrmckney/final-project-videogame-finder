import { Dropdown } from 'react-bootstrap'
import '../App.css'

function ByGenre() {
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
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByGenre

                