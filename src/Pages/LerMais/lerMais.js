import React from "react"
import Header from "../../Components/Header2"
import "./style.css"





function Home() {
    return (
        <div className="app">
            <Header/>
            <main>
                <div className="cards">
                    <div className="card" >
                        <header>
                            <h2> movies </h2>
                            
                        </header>
                        <div className="line"></div>
                        <p>Lorem</p>
                    
                    </div>

                </div>
            </main>
        </div>
    )
}


export default Home