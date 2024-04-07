import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from "../helpers/getGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
    }

    useEffect(() => {
        getImages();
    }, []);
    
    return (
        <>
            <h3>{category}</h3>

            <div className='display-flex g-1 flex-wrap'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url}
                        />
                    ))
                }
            </div>
        </>
    )
}