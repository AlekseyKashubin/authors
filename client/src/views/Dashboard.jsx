import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [authors, setAuthors] = useState([])

    const navigator = useNavigate()


    const fetchItem = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.error(err));
    }


    useEffect(fetchItem, []);


    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(() => fetchItem())
            .catch(err => { console.log(err) })
    }


    return (
        <div>
            <Link className='navLink' to='/authors/new'> Add an Author</Link>
            <h3>We have quote by: </h3>

            <table className='authors'>
                <tr>
                    <th>Author</th>
                    <th>Actions Avalible</th>
                </tr>

                {authors.map((author, index) => {
                    return (

                        <tr key={index}>
                            <td>{author.name}</td>
                            <td><button onClick={() => { navigator(`/authors/${author._id}/edit`) }} >Edit</button>  
                                <button onClick={() => handleDelete(author._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>


        </div>
    )
}

export default Dashboard
