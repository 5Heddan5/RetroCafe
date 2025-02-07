import images from './data';

export const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className="buttons">
        {images.map((image, index) => (
          <button
            key={index}
            className="button"
            onClick={() => handleScroll(image.id)} 
          >
            {image.title} 
          </button>
        ))}
      </div>
    </nav>
  );
};
