export const NetflixCard = (props) => {
    console.log('props:', props);
    const {name,img_url,description,rating,cast,genre,watch_url} = props.data;  
    return (
        <li>
            <div className="card">
                <img 
                    src={img_url} 
                    alt="Avatar" 
                    style={{ width: "300px", height: "300px", objectFit: "contain" }} 
                />
                <div className="container">
                    <h3>Name: <b>{name}</b></h3>
                    <p><b>Description:</b> {description}</p>
                    <p><b>Rating:</b> {rating}</p>
                    <p><b>Cast:</b> {cast}</p>
                    <p><b>Genre:</b> {genre}</p>
                    <button>
                        <a href={watch_url} target="_blank">
                            Watch Now
                        </a>
                    </button>
                </div>
            </div>
        </li>
    );
};