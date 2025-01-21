import seriesData from '../../../api/seriesData.json';
import { NetflixCard } from './NetflixCard.jsx';
export const Card = () => {
    const data = seriesData;
    return (
        <ul className='grid grid-three--cols'>
            {data.map((item) => (
                    <NetflixCard 
                        key={item.id} 
                        data={item} 
                    />
                ))}
        </ul>
    );
};
