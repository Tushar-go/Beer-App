const BeerCard = ({ beerData: { id, tagline, image_url, name,description  } }) => {
    return (
      <div className="beer" key={id}>
        <div>
          <p>Description- {description}</p>
        </div>
  
        <div>
          <img src={image_url !== "N/A" ? image_url : "https://via.placeholder.com/400"} alt={name} />
        </div>
  
        <div>
          <span>{tagline}</span>
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
  
  export default BeerCard;