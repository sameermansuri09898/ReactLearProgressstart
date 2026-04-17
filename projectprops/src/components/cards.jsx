import hero from "../assets/1.jpg";

const Cards = (props) => {
  return (
    <div className="cards">
      <div class="carfunc">
        <li>Car Name</li>
        <li><span>Avaliblity</span></li>
      </div>
      <img src={hero} alt=""  id ="imgc"/>
      <div class="caroption">
        <ul>
          <li>5 Seater</li>
          <li>Automated</li>
          <li>Ac</li>
          </ul>
        

      </div>
      <div class="book-btn">
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Cards;