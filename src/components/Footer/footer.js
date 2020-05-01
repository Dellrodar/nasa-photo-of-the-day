import React from "react";

function Footer() {
  return (
    <footer>
      <p className = "myName">&copy;Emilio Crocco</p>
      <div className="social-icons">
        <a
          className="fab fa-twitter-square"
          href="https://twitter.com/Dellrodar"
          aria-hidden="true">
        </a>
        <a
          className="fab fa-github"
          href="https://github.com/Dellrodar"
          aria-hidden="true">
        </a>
      </div>
    </footer>
  );
}

export default Footer;