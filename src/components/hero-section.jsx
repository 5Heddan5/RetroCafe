const images = [
  {
    src: "src/images/hot.jpg",
    title: "Hot",
    text1: "Hot freshly ground black coffee or a cup of exquisite tea?",
    text2: "We give you that perfect cup every time",
    menu: (
      <div className="product-list">
        <p>
          <span>Motcha Latte</span>
          <span>€ 7.50</span>
        </p>
        <p>
          <span>Caffe Formaggio</span>
          <span>€ 5.00</span>
        </p>
        <p>
          <span>Espresso</span>
          <span>€ 3.50</span>
        </p>
        <p>
          <span>Chai Verde Latte</span>
          <span>€ 5.50</span>
        </p>
      </div>
    ),
  },
  {
    src: "src/images/juicy.jpg",
    title: "Juicy",
    text1: "Ripe fruit - freshly squeezed.",
    text2: "It's as simple as that. Chunky or smooth - it's your choice.",
    menu: (
      <div className="product-list">
        <p>
          <span>Branched Apricots</span>
          <span>€ 4.20</span>
        </p>
        <p>
          <span>Deep Raspberries</span>
          <span>€ 3.50</span>
        </p>
        <p>
          <span>Smooth Oranges</span>
          <span>€ 6.50</span>
        </p>
      </div>
    ),
  },
  {
    src: "src/images/cosy.jpg",
    title: "Cozy",
    text1: "Hang around. Enjoy the settings.",
    text2: "Use our fast WiFi. Borrow a newspaper or a novel.",
    menu: (
      <div className="product-list">
        <p>
          <span>Mon-Sun</span>
          <span>8am – 11pm</span>
        </p>
        <p>
          <span>Caffe Retro</span>
          <span>Canto VI</span>
        </p>
        <p>
          <span>0123-45 67 89</span>
          <span>caffe@lorem.pge</span>
        </p>
      </div>
    ),
  },
];

export default function HeroSection() {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="section">
          <img src={image.src} alt={image.title} />
          <div className="image-title">{image.title}</div>
          <div className="image-text1">{image.text1}</div>
          <div className="image-text2">{image.text2}</div>
          <div className="image-menu">{image.menu}</div>
        </div>
      ))}
    </>
  );
}
