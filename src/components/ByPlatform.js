import React, {useEffect, useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'
import { UserDetailsContext } from '../App'

function ByPlatform() {

    const {setGameData} = useContext(UserDetailsContext)

    const [platform, setPlatform] = useState(null)

    useEffect(() => {
        if(platform !== null){
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/${platform}`)
            .then(response => response.json())
            .then(game => setGameData(game))
            .catch(err => alert(err))
        }
    }, [platform, setGameData])

    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Platform
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={e => setPlatform(e.target.getAttribute("value"))}>
                    <Dropdown.Item value="byplatform/Xbox Series S%2FX">Xbox Series S/X</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Xbox One">Xbox One</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Xbox 360">Xbox 360</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Xbox">Xbox</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PlayStation 5">PlayStation 5</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PlayStation 4">PlayStation 4</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PlayStation 3">PlayStation 3</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PlayStation 2">PlayStation 2</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PS Vita">PS Vita</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PSP">PSP</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Web">Web</Dropdown.Item>
                    <Dropdown.Item value="byplatform/PC">PC</Dropdown.Item>
                    <Dropdown.Item value="byplatform/macOS">macOS</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Linux">Linux</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Apple II">Apple II</Dropdown.Item>
                    <Dropdown.Item value="byplatform/iOS">iOS</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Android">Android</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Wii U">Wii U</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Wii">Wii</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Nintendo Switch">Nintendo Switch</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Nintendo 3DS">Nintendo 3DS</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Nintendo DS">Nintendo DS</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Nintendo 64">Nintendo 64</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Game Boy Advance">Game Boy Advance</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Game Boy Color">Game Boy Color</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Game Boy">Game Boy</Dropdown.Item>
                    <Dropdown.Item value="byplatform/GameCube">GameCube</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Game Gear">Game Gear</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari Lynx">Atari Lynx</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari ST">Atari ST</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari 2600">Atari 2600</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari 5200">Atari 5200</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari 7800">Atari 7800</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Atari 8-bit">Atari 8-bit</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Commodore %2F Amiga">Commodore / Amiga</Dropdown.Item>
                    <Dropdown.Item value="byplatform/SEGA 32X">SEGA 32X</Dropdown.Item>
                    <Dropdown.Item value="byplatform/SEGA Saturn">SEGA Saturn</Dropdown.Item>
                    <Dropdown.Item value="byplatform/SEGA Master System">SEGA Master System</Dropdown.Item>
                    <Dropdown.Item value="byplatform/SEGA CD">SEGA CD</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Genesis">Genesis</Dropdown.Item>
                    <Dropdown.Item value="byplatform/NES">NES</Dropdown.Item>
                    <Dropdown.Item value="byplatform/SNES">SNES</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Jaguar">Jaguar</Dropdown.Item>
                    <Dropdown.Item value="byplatform/3DO">3DO</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Neo Geo">Neo Geo</Dropdown.Item>
                    <Dropdown.Item value="byplatform/Classic Macintosh">Classic Macintosh</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByPlatform