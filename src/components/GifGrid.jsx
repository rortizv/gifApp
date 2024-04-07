import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

   
    
    return (
        <>
            {
                isLoading
                ? <div className='loader-cnt'>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                : null
            }
            
            <h3>{category}</h3>

            <div className='display-flex g-1 flex-wrap'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}