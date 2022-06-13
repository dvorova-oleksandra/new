import is from './iceland.jpg';
import './index.css'


function Main() {
  return (
    <>
    <main>
      <h1 class="visually-hidden">Travel App</h1>
      <section class="trips-filter">
        <h2 class="visually-hidden">Trips filter</h2>
        <form class="trips-filter__form" autocomplete="off">
          <label class="trips-filter__search input">
            <span class="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" />
          </label>
          <label class="select">
            <span class="visually-hidden">Search by duration</span>
            <select name="duration">
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label class="select">
            <span class="visually-hidden">Search by level</span>
            <select name="level">
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <section class="trips">
        <h2 class="visually-hidden">Trips List</h2>
        <ul class="trip-list">
          <li class="trip-card">
            <img src={is} alt="trip image" />
            <div class="trip-card__content">
              <div class="trip-info">
                <h3 class="trip-info__title">Island</h3>
                <div class="trip-info__content">
                  <span class="trip-info__duration"><strong>15</strong> days</span>
                  <span class="trip-info__level">easy</span>
                </div>
              </div>
              <div class="trip-price">
                <span>Price</span>
                <strong class="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="../public/trip.html" class="button">Discover a trip</a>
          </li>
          <li class="trip-card">
          <img src={is} alt="trip image" />
            <div class="trip-card__content">
              <div class="trip-info">
                <h3 class="trip-info__title">Island</h3>
                <div class="trip-info__content">
                  <span class="trip-info__duration"><strong>15</strong> days</span>
                  <span class="trip-info__level">easy</span>
                </div>
              </div>
              <div class="trip-price">
                <span>Price</span>
                <strong class="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="../public/trip.html" class="button">Discover a trip</a>
          </li>
          <li class="trip-card">
          <img src={is} alt="trip image" />
            <div class="trip-card__content">
              <div class="trip-info">
                <h3 class="trip-info__title">Island</h3>
                <div class="trip-info__content">
                  <span class="trip-info__duration"><strong>15</strong> days</span>
                  <span class="trip-info__level">easy</span>
                </div>
              </div>
              <div class="trip-price">
                <span>Price</span>
                <strong class="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="../public/trip.html" class="button">Discover a trip</a>
          </li>
          <li class="trip-card">
         <img src={is} alt="trip image" />
            <div class="trip-card__content">
              <div class="trip-info">
                <h3 class="trip-info__title">Island</h3>
                <div class="trip-info__content">
                  <span class="trip-info__duration"><strong>15</strong> days</span>
                  <span class="trip-info__level">easy</span>
                </div>
              </div>
              <div class="trip-price">
                <span>Price</span>
                <strong class="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="../public/trip.html" class="button">Discover a trip</a>
          </li>
        </ul>
      </section>
    </main>
    </>
  );
}

export default Main;
