import styles from './style.module.scss'

const { attribution } = styles;

export const Footer = () => (
  <footer>
    <p className={attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="http://javierglopezreques.tk">Javier López</a>.
    </p>
  </footer>
);