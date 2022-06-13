
import './index.css'

function SignUp() {
  return (
    <>
 

 <main class="sign-up-page">
      <h1 class="visually-hidden">Travel App</h1>
      <form class="sign-up-form" autocomplete="off">
        <h2 class="sign-up-form__title">Sign Up</h2>
        <label class="trip-popup__input input">
          <span class="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Password</span>
          <input name="password" type="password" autocomplete="new-password" required />
        </label>
        <button class="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <a href="./sign-in.html" class="sign-up-form__link">Sign In</a>
      </span>
    </main>
   
  
  </>
  );
}

export default SignUp;
