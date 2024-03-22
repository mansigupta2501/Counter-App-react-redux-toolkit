import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch images based on searchQuery and selectedCategory
    const apiUrl = `https://api.unsplash.com/search/collections/?client_id=ClhSBszg6lJgKIMD09FE7JJ_OyQuwoIl73xNmdkvRPU&page=2&query=${searchQuery}&query=${selectedCategory}&per_page=20`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const imageData = data.results.map(image => ({
          id: image.id,
          src: image.cover_photo ? image.cover_photo.urls.small : '',
          alt: image.alt_description,
          width: image.cover_photo ? image.cover_photo.width : 0,
          height: image.cover_photo ? image.cover_photo.height : 0,
          createdAt: image.published_at,
        }));
        setImages(imageData);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, [searchQuery, selectedCategory]);

  const categories = ['Mountains', 'Beaches', 'Birds', 'Food'];

  const rows = [];
  for (let i = 0; i < images.length; i += 5) {
    rows.push(images.slice(i, i + 5));
  }

  const handleMouseEnter = (imageId) => {
    const hoveredImg = images.find(image => image.id === imageId);
    setHoveredImage(hoveredImg);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200vh',
      }}
    >
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'red' }}>Image Gallery</h1>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button onClick={() => setSearchQuery('')}>Clear Search</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                margin: '5px',
                backgroundColor: selectedCategory === category ? 'green' : '#001f3f',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="image-grid">
          <Grid container justifyContent="center" spacing={2}>
            {rows.map((row, rowIndex) => (
              <Grid key={rowIndex} container item xs={12} spacing={2} justifyContent="center">
                {row.map(image => (
                  <Grid key={image.id} item onMouseEnter={() => handleMouseEnter(image.id)} onMouseLeave={handleMouseLeave}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{ width: '150px', height: '150px', margin: '5px' }}
                      />
                      {hoveredImage && hoveredImage.id === image.id && (
                        <div
                          style={{
                            position: 'absolute',
                            background: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '5px',
                            transform: 'scale(0.8)',
                            borderRadius: '5px',
                            transition: 'transform 0.3s',
                            zIndex: '1',
                          }}
                        >
                          <p>Width: {hoveredImage.width}px</p>
                          <p>Height: {hoveredImage.height}px</p>
                          <p>Published At: {new Date(hoveredImage.createdAt).toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
