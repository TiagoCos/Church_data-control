import React from 'react';

function MyCard({title, description, imgSrc}) {
  return (
    <div className="card-container" style={{ width: "300px", height: "230px"}}>
      <img src={imgSrc} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content {
          padding: 10px;
          width: 100%;
          text-align: center;
        }
        .card-title {
          margin: 0;
          font-weight: bold;
        }
        .card-description {
          margin: 5px 0 0 0;
        }
      `}</style>
    </div>
  );
}

export default MyCard;
