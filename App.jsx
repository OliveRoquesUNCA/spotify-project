import SearchForm from "./components/SearchForm.jsx"
import SearchResultsCarousel from "./components/SearchResultsCarousel.jsx";
import React, { useState } from "react";

export default function App() {

    const [tracks, setTracks] = useState([]);

    async function fetchData(values) {
        const { searchTerm, limit } = values;
        const dataType = "track";
        const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
        const url = `${baseURL}?q=${searchTerm}&type=${dataType}&limit=${limit}`;
        const request = await fetch(url);
        const data = await request.json();
        setTracks(data);
    }
            
    return (
        <div>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <p>Search Here</p>
                <div>
                    <SearchForm onFinish={fetchData} />
                    <SearchResultsCarousel tracks={tracks} />
                </div>
            </main>
        </div>
    );
}