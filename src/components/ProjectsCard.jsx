import React from 'react';
import "../styles/ProjectsCard.css"

function ProjectsCard({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img id='this-image' key={index} src={image} alt={`Gallery image ${index + 1}`} />
      ))}
    </div>
  );
}

export default ProjectsCard;
