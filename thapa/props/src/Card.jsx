import seriesData from '../api/seriesData.json';
import { NetflixCard } from './NetflixCard.jsx';
export const Card = () => {
    const data = seriesData;
    return (
        <ul>
            {data.map((item) => {
                console.log(item);
                return (
                    <NetflixCard 
                        key={item.series_id} 
                        seriesKey={item.series_id} // Pass key explicitly as a regular prop
                        data={item} 
                    />
                );
            })}
        </ul>
    );
};
