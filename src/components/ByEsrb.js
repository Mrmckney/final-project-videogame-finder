import React, {useEffect, useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'
import { UserDetailsContext } from '../App'

function ByEsrb() {

    const {setGameData} = useContext(UserDetailsContext)

    const [esrb, setEsrb] = useState(null)

    useEffect(() => {
        if(esrb !== null){
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/${esrb}`)
            .then(response => response.json())
            .then(game => setGameData(game))
            .catch(err => alert(err))
        }
    }, [esrb, setGameData])

    return(
        <>
            <Dropdown className="genre-dropdown">
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    ESRB
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={e => setEsrb(e.target.getAttribute("value"))}>
                    <Dropdown.Item value="byesrb/Everyone">Everyone</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Everyone 10+">Everyone 10+</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Teen">Teen</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Mature">Mature</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Adults Only">Adults Only</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Rating Pending">Rating Pending</Dropdown.Item>
                    <Dropdown.Item value="byesrb/Unrated">Unrated</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ByEsrb