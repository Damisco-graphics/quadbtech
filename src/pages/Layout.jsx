import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios'
import Body from '../component/body.jsx'
import "../css/App.css"
import "../css/body.css"




const Layout = () => {
    const [shows, setShows] = useState([])

    const fetchShows = () => {
        axios.get('https://api.tvmaze.com/search/shows?q=all#')
            .then((res) => {
                // console.log(res.data)
                setShows(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };
    useEffect(() => {
        fetchShows()
    }, []);

    return (
        <div style={{ marginTop: "48px", backgroundColor: "#2979FF", margin: "auto", paddingBottom: '-100px', height: "100%", overflow: "hidden" }}>
            {Body()}                
            <div className='App'>
                
                    <h1 style={{ textShadow: "1px 1px black", textAlign: "center", textDecoration: "underline", marginTop: "10px" }}>Movies</h1>
                    <div className="CardsHolder">
                        {shows.map((movie) => {

                            return (
                                <div id="Crewcard" key={movie.show.id}>
                                    <img src={movie.show.image.original} alt={movie.show.name} style={{
                                        marginBottom: "10px", width: "100%", height: "60%", borderTopLeftRadius: "calc(0.75rem - 1px)",
                                        borderTopRightRadius: "calc(0.75rem - 1px)", left: 0, padding: 0
                                    }} />
                                    <h3 style={{ marginBottom: 0, textDecoration: "underline" }} >Title:</h3>
                                    <span style={{ top: 0, marginBottom: "10px" }}><a href={movie.show.url} style={{ textDecorationLine: "none" }}><h1  ><code>{movie.show.name}</code></h1></a></span>
                                    <Link to={`/quadbtech/summary/${movie.show.id}`} style={{ fontWeight: "bold" }} >See Summary</Link>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}


export default Layout;
