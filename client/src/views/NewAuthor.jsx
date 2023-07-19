import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const NewAuthor = (props) => {
    const { createNew } = props


    const navigator = useNavigate()


    const [authorData, setAuthorData] = useState({
        name: ""
        
    })


    const [nameErr, setNameErr] = useState('')



    const handleChange = (e) => {
        const { value, name } = e.target
        setAuthorData(current => ({ ...current, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/authors', authorData)
            .then(res =>navigator('/'))
            .catch(err => {
                console.log(err, "test")
                const errs = err.response.data.errors;
                if (errs.name) {
                    setNameErr(errs.name.message)
                } else {
                    setNameErr('')
                }
                console.log(err)
            })
    }


    return (
        
        <div>
        <Link className='navLink' to='/'>Home</Link>
        <h3>Add new Author</h3>
            <form className='formCard' onSubmit={handleSubmit}>
                
                <label><h2>Name :</h2></label>
                <br />
                <p className='err'>{nameErr}</p>
                <input className='input' onChange={handleChange} value={authorData.name} name='name' type='text'></input>
                <br />
                <Link  to={'/'}><button className='btn'>Cancel</button></Link>
                <button className='btn'>Submit</button>
            </form>
        </div>



    )
}

export default NewAuthor
