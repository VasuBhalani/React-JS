export const NetflixCard = (props) => {
  console.log('props:', props);
  const {name,img_url,description,rating,cast,genre,watch_url} = props.data;  
  const ratingclass = rating>8.5 ? "super-hit" : "avg";
  const col = rating>8.5 ? "#A8CD89" : "#FFE893";
    return (
        <li className="card">
          <div>
            <img src={img_url} alt={name} width="300px" height="200px" />
          </div>
          <div className="card-content">
            <h2>{name} </h2>
            <h3>Rating: <span className={`rating ${ratingclass}`}>{rating}</span></h3>  
            <p>Summary: {description}{" "}</p>
            <p>Genre:{genre.join(", ")} </p>
            <p>Cast:{cast.join(", ")}</p>
            <a href={watch_url} target="_blank">
                <button style={{backgroundColor:`${col}`}}>Watch Now</button>
            </a>
          </div>
        </li>
      );
};