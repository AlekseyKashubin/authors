import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditAuthor = () => {
    const { id } = useParams();
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

        axios.put(`http://localhost:8000/api/authors/${id}`, authorData)
            .then(res => navigator('/'))
            .catch(err => {

                const errs = err.response.data.errors;

                if (errs.name) {
                    setNameErr(errs.name.message)
                } else {
                    setNameErr('')
                }
                console.log(err)
            })
    }
    const fetchItem = () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthorData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(fetchItem, []);


    return (
        <div>
        <Link className='navLink' to='/'>Home</Link>
        <h3>Edit This Author</h3>
            <form className='formCard' onSubmit={handleSubmit}>
                
                <label><h2>Name :</h2></label>
                <br />
                <p className='err'>{nameErr}</p>
                <input className='input' onChange={handleChange} value={authorData.name} name='name' type='text'></input>
                <br />
                <Link to={'/'}><button className='btn'>Cancel</button></Link>
                <button className='btn'>Submit</button>
            </form>

        </div>


    )
}

export default EditAuthor
