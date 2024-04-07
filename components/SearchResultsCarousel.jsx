import React from 'react';
import { Carousel } from 'antd';

export default function SearchResultsCarousel({tracks}) {
    function tracksToJSX(tracksJSON) {
        return (
            <div key={tracksJSON.id}>
                <iframe
                    key = {tracksJSON.id}
                    src={"https://open.spotify.com/embed/track/" + tracksJSON.id + "?utm_source=generator"}
                    width="100%" 
                    border="0"
                    height="352" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        )
    }
    return (
        <Carousel dotPosition='top'>
            {
            tracks.map(tracksToJSX)
            }
        </Carousel>
    )
}
