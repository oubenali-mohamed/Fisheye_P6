/**
 * @property {HTMLElement} element
 * @property {string[]} images  chemins des images de la lightbox
 * @property {string} url image actuellement affichée
 */
/* class lightbox {
  static init() {
    const links = Array.from(
      document.querySelectorAll(
        'a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]'
      )
    );
    const gallery = links.map((link) => link.getAttribute("href"));
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new lightbox(e.currentTarget.getAttribute("href"), gallery);
      })
    );
  } */
/**
 *@param {string} url url de l'image
 *@param {string[]} images chemins des images de la lightbox
 */

/* constructor(url, images) {
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener("Keyup", this.onKeyUp);
  } */

/**
 *
 *@param {string} url url de l'image
 */
/* loadImage(url) {
    this.url = null;
    const image = new Image();
    const container = this.element.querySelector(".lightbox_container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox_loader");
    container.innerHTML = "";
    container.appendChild(loader);
    image.onload = () => {
      container.removeChild(loader);
      container.appendChild(image);
      this.url = url;
    };
    image.src = url;
  } */
/**
 *
 * @param {KeyBoardEvent} e
 */
/* onKeyUp(e) {
    if (e.key === "Escap") {
      this.close(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    }
  } */

/**
 * ferme la lightbox
 * @param {mouseEvent/keyBoardEvent} e
 */
/* close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("Keyup", this.onKeyUp);
  } */

/**
 * @param {mouseEvent/keyBoardEvent} e
 */
/* next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
  } */

/**
 * @param {mouseEvent/keyBoardEvent} e
 */
/*  prev(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
  } */

/**
 *@param {string} url url de l'image
 *@return {HTMLElement}
 */
/* buildDOM(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = ` 
    <button class="lightbox_close">
      <img src="assets/icons/close.svg" alt="" />
    </button>
    <button class="lightbox_prev">
      <img src="assets/icons/next.svg" alt="" />
    </button>
    <button class="lightbox_next">
      <img src="assets/icons/next.svg" alt="" />
    </button>
    <div class="lightbox_container"></div>`;
    dom
      .querySelector(".lightbox_close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightbox_next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightbox_prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}

lightbox.init();
  */
