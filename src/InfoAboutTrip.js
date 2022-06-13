
import isl from './iceland.jpg'
import './index.css'

function Info() {
  return (
    <>
   
   <main class="trip-page">
      <h1 class="visually-hidden">Travel App</h1>
      <div class="trip">
        <img src={isl} class="trip__img" alt="trip image" />
        <div class="trip__content">
          <div class="trip-info">
            <h3 class="trip-info__title">Iceland</h3>
            <div class="trip-info__content">
              <span class="trip-info__duration"><strong>15</strong> days</span>
              <span class="trip-info__level">easy</span>
            </div>
          </div>
          <div class="trip__description">
            An island is a body of land surrounded by water. Continents are also surrounded by
            water, but because they are so big, they are not considered islands. Australia, the
            smallest continent, is more than three times the size of Greenland, the largest island.
            There are countless islands in the ocean, lakes, and rivers around the world. They vary
            greatly in size, climate, and the kinds of organisms that inhabit them.
          </div>
          <div class="trip-price">
            <span>Price</span>
            <strong class="trip-price__value">7000 $</strong>
          </div>
          <button class="trip__button button">Book a trip</button>
        </div>
      </div>
    </main>
   
  </>
  );
}

export default Info;
