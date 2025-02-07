import hotImage from "../images/hot.jpg";
import juicyImage from "../images/juicy.jpg";
import cozyImage from "../images/cosy.jpg";

const images = [
  {
    id: "hot",
    src: hotImage,
    title: "Hot",
    text1: "Hot freshly ground black coffee or a cup of exquisite tea?",
    text2: "We give you that perfect cup every time",
    menu: () => (
      <div className="product-list">
        <p><span>Motcha Latte</span><span>€ 7.50</span></p>
        <p><span>Caffe Formaggio</span><span>€ 5.00</span></p>
        <p><span>Espresso</span><span>€ 3.50</span></p>
        <p><span>Chai Verde Latte</span><span>€ 5.50</span></p>
      </div>
    ),
  },
  {
    id: "juicy",
    src: juicyImage,
    title: "Juicy",
    text1: "Ripe fruit - freshly squeezed.",
    text2: "It's as simple as that. Chunky or smooth - it's your choice.",
    menu: () => (
      <div className="product-list">
        <p><span>Branched Apricots</span><span>€ 4.20</span></p>
        <p><span>Deep Raspberries</span><span>€ 3.50</span></p>
        <p><span>Smooth Oranges</span><span>€ 6.50</span></p>
      </div>
    ),
  },
  {
    id: "cozy",
    src: cozyImage,
    title: "Cozy",
    text1: "Hang around. Enjoy the settings.",
    text2: "Use our fast WiFi. Borrow a newspaper or a novel.",
    menu: () => (
      <div className="product-list">
        <p><span>Mon-Sun</span><span>8am – 11pm</span></p>
        <p><span>Caffe Retro</span><span>Canto VI</span></p>
        <p><span>0123-45 67 89</span><span>caffe@lorem.pge</span></p>
      </div>
    ),
  },
];

export default images;
