import React, {useEffect, useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'
import { UserDetailsContext } from '../App'

function ByTag() {

    const {setGameData} = useContext(UserDetailsContext)

    const [tag, setTag] = useState(null)

    useEffect(() => {
        if(tag !== null){
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/${tag}`)
            .then(response => response.json())
            .then(game => setGameData(game))
            .catch(err => alert(err))
        }
    }, [tag, setGameData])

    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Tags
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={e => setTag(e.target.getAttribute("value"))}>
                    <Dropdown.Item value="bytag/Singleplayer">Singleplayer</Dropdown.Item>
                    <Dropdown.Item value="bytag/Multiplayer">Multiplayer</Dropdown.Item>
                    <Dropdown.Item value="bytag/Co-op">Co-op</Dropdown.Item>
                    <Dropdown.Item value="bytag/Online Co-Op">Online Co-op</Dropdown.Item>
                    <Dropdown.Item value="bytag/Local Co-Op">Local Co-op</Dropdown.Item>
                    <Dropdown.Item value="bytag/RPG">RPG</Dropdown.Item>
                    <Dropdown.Item value="bytag/Open World">Open World</Dropdown.Item>
                    <Dropdown.Item value="bytag/Free to Play">Free to Play</Dropdown.Item>
                    <Dropdown.Item value="bytag/First-Person">First Person</Dropdown.Item>
                    <Dropdown.Item value="bytag/FPS">FPS</Dropdown.Item>
                    <Dropdown.Item value="bytag/Third Person">Third Person</Dropdown.Item>
                    <Dropdown.Item value="bytag/Third-Person Shooter">TPS</Dropdown.Item>
                    <Dropdown.Item value="bytag/Action RPG">Action RPG</Dropdown.Item>
                    <Dropdown.Item value="bytag/Medieval">Medieval</Dropdown.Item>
                    <Dropdown.Item value="bytag/Sandbox">Sandbox</Dropdown.Item>
                    <Dropdown.Item value="bytag/Moddable">Moddable</Dropdown.Item>
                    <Dropdown.Item value="bytag/vr mod">VR</Dropdown.Item>
                    <Dropdown.Item value="bytag/Story Rich">Story Rich</Dropdown.Item>
                    <Dropdown.Item value="bytag/Fantasy">Fantasy</Dropdown.Item>
                    <Dropdown.Item value="bytag/Magic">Magic</Dropdown.Item>
                    <Dropdown.Item value="bytag/Sci-fi">Sci-fi</Dropdown.Item>
                    <Dropdown.Item value="bytag/Space">Space</Dropdown.Item>
                    <Dropdown.Item value="bytag/Classic">Classic</Dropdown.Item>
                    <Dropdown.Item value="bytag/Exploration">Exploration</Dropdown.Item>
                    <Dropdown.Item value="bytag/Stealth">Stealth</Dropdown.Item>
                    <Dropdown.Item value="bytag/Retro">Retro</Dropdown.Item>
                    <Dropdown.Item value="bytag/Action-Adventure">Action Adventure</Dropdown.Item>
                    <Dropdown.Item value="bytag/Tactical">Tactical</Dropdown.Item>
                    <Dropdown.Item value="bytag/Crime">Crime</Dropdown.Item>
                    <Dropdown.Item value="bytag/War">War</Dropdown.Item>
                    <Dropdown.Item value="bytag/PvP">PvP</Dropdown.Item>
                    <Dropdown.Item value="bytag/PvE">PvE</Dropdown.Item>
                    <Dropdown.Item value="bytag/Competitive">Competitive</Dropdown.Item>
                    <Dropdown.Item value="bytag/Realistic">Realistic</Dropdown.Item>
                    <Dropdown.Item value="bytag/Gore">Gore</Dropdown.Item>
                    <Dropdown.Item value="bytag/Survival">Survival</Dropdown.Item>
                    <Dropdown.Item value="bytag/Zombies">Zombies</Dropdown.Item>
                    <Dropdown.Item value="bytag/Physics">Physics</Dropdown.Item>
                    <Dropdown.Item value="bytag/Mystery">Mystery</Dropdown.Item>
                    <Dropdown.Item value="bytag/Violent">Violent</Dropdown.Item>
                    <Dropdown.Item value="bytag/Horror">Horror</Dropdown.Item>
                    <Dropdown.Item value="bytag/Aliens">Aliens</Dropdown.Item>
                    <Dropdown.Item value="bytag/Difficult">Difficult</Dropdown.Item>
                    <Dropdown.Item value="bytag/2D">2D</Dropdown.Item>
                    <Dropdown.Item value="bytag/3D">3D</Dropdown.Item>
                    <Dropdown.Item value="bytag/Fast-Paced">Fast Paced</Dropdown.Item>
                    <Dropdown.Item value="bytag/Remake">Remake</Dropdown.Item>
                    <Dropdown.Item value="bytag/Robots">Robots</Dropdown.Item>
                    <Dropdown.Item value="bytag/Diplomacy">Diplomacy</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByTag