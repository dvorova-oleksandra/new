import brif from './briefcase.svg';
import user from './user.svg'
import './index.css'

function AddHeaders() {
  return (
    <>
    <header class="header">
    <div class="header__inner">
      <a href="./index.html" class="header__logo">Travel App</a>
      <nav class="header__nav">
        <ul class="nav-header__list">
          <li class="nav-header__item" title="Bookings">
            <a href="../public/booking.html" class="nav-header__inner">
              <span class="visually-hidden">Bookings</span>
              <img src={brif} alt=" icon" />
            </a>
          </li>
          <li class="nav-header__item" title="Profile">
            <div class="nav-header__inner profile-nav" tabindex="0">
              <span class="visually-hidden">Profile</span>
              <img src={user} alt="profile icon" />
              <ul class="profile-nav__list">
                <li class="profile-nav__item profile-nav__username">John Doe</li>
                <li class="profile-nav__item">
                  <button class="profile-nav__sign-out button">Sign Out</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </>
  );
}

export default AddHeaders;

