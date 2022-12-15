import React, { useState, useContext } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import '../App.css'
import { UserDetailsContext } from '../App'

function SearchBar() {

    const {setGameData} = useContext(UserDetailsContext)

    const [word, setWord] = useState('')

    const searchBar = (e) => {
        e.preventDefault()
        if(word.trim() !== ''){
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/search/search?query=${word}`)
            .then(response => response.json())
            .then(game => {
                setGameData(game)
            })
            .catch(err => alert(err))
        }
    }

    return (
        <Form className="d-flex" onSubmit={(e) => searchBar(e)}>
            <FormControl
                type="search"
                placeholder="Search game here!"
                className="mr-2"
                aria-label="Search"
                style={{width: '350px', height: '50px', marginLeft: '20px', borderWidth: 3, borderColor: 'slategrey'}}
                onChange={e => setWord(e.target.value)}
            />
        </Form>
    )
}

export default SearchBar