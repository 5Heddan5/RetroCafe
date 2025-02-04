const imagesWithTitles = [
  { src: "src/images/hot.jpg", 
    title: "Hot", 
    text1: "Hot freshly ground black coffee or a cup of equisite tea?", 
    text2: "We give you that perfect cup every time",
    menu: "Mocha Latte   € 7.50<br>" +
          "Caffe Formaggio   € 5.00<br>" +
          "Espresso   € 3.50<br>" +
          "Chai Verde Latte   € 5.50"},

  { src: "src/images/juicy.jpg", 
    title: "Juicy",
    text1: "Ripe fruit - freshly squeezed.",
    text2: "It's as simple as that. Chunky or smooth - it's your choice.",
    menu: "Branched Apricots   € 4.20<br>" +
          "Deep Rasberries   € 3.50<br>" +
          "Smooth Oranges   € 6.50"},

  { src: "src/images/cosy.jpg", 
    title: "Cozy",
    text1: "Hang around. Enjoy the settings.",
    text2: "Use our fast WiFi. Borrow a newspaper or a novel.",
    menu: "Mon-Sun   8am – 11pm<br>" +
          "Caffe Retro  Canto VI<br>" +
          "0123-45 67 89   caffe@lorem.pge"},
];


export default function HeroSection() {
  return (
    <>
      {imagesWithTitles.map((image, index) => (
        <div key={index} className="section">
          <img src={image.src} alt={image.alt} />
          <div className="image-title">{image.title}</div>
          <div className="image-text1">{image.text1}</div>
          <div className="image-text2">{image.text2}</div>
          <div className="image-menu" dangerouslySetInnerHTML={{ __html: image.menu }} />
        </div>
      ))}
    </>
  );
}
