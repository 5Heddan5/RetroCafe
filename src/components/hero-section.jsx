const images = [
  { src: "src/images/hot.jpg"},
  { src: "src/images/juicy.jpg"},
  { src: "src/images/cosy.jpg"},
];

const titles = ["Hot", "Juicy", "Cozy"];

export default function HeroSection() {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="section">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </>
  );
}
