
import './index.css'

function Sign() {
  return (
    <>
 
 <main class="sign-in-page">
      <h1 class="visually-hidden">Travel App</h1>
      <form class="sign-in-form" autocomplete="off">
        <h2 class="sign-in-form__title">Sign In</h2>
        <label class="trip-popup__input input">
          <span class="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Password</span>
          <input name="password" type="password" autocomplete="new-password" required />
        </label>
        <button class="button" type="submit">Sign In</button>
      </form>
      <span>
        Already have an account?
        <a href="./sign-up.html" class="sign-in-form__link">Sign Up</a>
      </span>
    </main>
  
  </>
  );
}

export default Sign;
