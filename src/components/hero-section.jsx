import images from './data'; 

export default function HeroSection() {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} id={image.id} className="section">
          <img src={image.src} alt={image.title} />
          <div className="image-title">{image.title}</div>
          <div className="image-text1">{image.text1}</div>
          <div className="image-text2">{image.text2}</div>
          <div className="image-menu">{image.menu()}</div>
        </div>
      ))}
    </>
  );
}
