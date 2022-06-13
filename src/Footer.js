
import heart from './heart.svg'
import './index.css'

function Footer() {
  return (
    <>
 <footer class="footer">
      <span class="footer__text">
        from <a class="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img class="footer__icon" src={heart} alt="heart icon" />
      </span>
    </footer>
  </>
  );
}

export default Footer;
