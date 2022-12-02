import React, { useState, useEffect } from 'react'
import axios from 'axios'

import delButton from '../../img/del.svg';
import More from "../../img/more.svg"

import Header from "../../Components/Header"
import "./Home.css"

import { Link } from 'react-router-dom';
import edit from '../../img/edit.svg'



function Home() {

    const [posts, setPosts] = useState([])

    //a parte do {post.} é onde chama cada componente do json server

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
            })

            .catch(() => {
                console.log("Deu errrado")
            })

    }, [])

    function deletePost(id) {

        axios.delete(`https://jsonplaceholder.typicode.com/posts/delete/${id}`)

        setPosts(posts.filter(post => post._id !== id ))

    }

    return (

        <div className="app">
            <Header />
            <main>

                <div className="cards">
                    {posts.map((post, key) => {
                        return (
                            <div className="card" key={key} >

                                <header>
                                    <h2> {post.title}  </h2>
                                </header>
                                <div className="line"></div>

                                <p> {post.body}</p>

                                <div className="btns" >

                                    <div className="btn-edit">
                                        <Link > <img src={edit} alt="edit button" />  </Link>
                                    </div>
                                    <div className="btn-more">
                                        <Link to="/lerMais"> <img src={More} alt='ver mais' /></Link>
                                    </div>
                                    <div className="btn-del">
                                        <div>  <img src={delButton} alt="del button" />  </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>

    )
}


export default Home