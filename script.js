function createNode(element, attributes = {}) {
    const node = document.createElement(element);
    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
    return node;
  }

  function changeImage(index) {
    mainImage.src = thumbnails[index].src;
    currentImage = index;
    togglePrevNextButtons();
  }

  function disablePrevButton() {
    prevBtn.disabled = true;
    prevBtn.style.opacity = 0.5;
  }

  function enablePrevButton() {
    prevBtn.disabled = false;
    prevBtn.style.opacity = 1;
  }

  function disableNextButton() {
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.5;
  }

  function enableNextButton() {
    nextBtn.disabled = false;
    nextBtn.style.opacity = 1;
  }

  function togglePrevNextButtons() {
    if (currentImage === 0) {
      disablePrevButton();
    } else {
      enablePrevButton();
    }
    if (currentImage === thumbnails.length - 1) {
      disableNextButton();
    } else {
      enableNextButton();
    }
  }

  const thumbnailsContainer = createNode("div", {
    class: "thumbnails-container",
  });
  const thumbnails = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
  ].map((src, index) => {
    const img = createNode("img", { src, alt: "Product Image" });
    img.addEventListener("click", () => {
      changeImage(index);
      togglePrevNextButtons();
    });
    thumbnailsContainer.appendChild(img);
    return img;
  });

  const productGallery = createNode("div", { class: "product-gallery" });
  productGallery.appendChild(thumbnailsContainer);

  const imageContainer = createNode("div", { class: "image-container" });
  const mainImage = createNode("img", {
    src: thumbnails[0].src,
    alt: "Product Image",
    class: "main-image",
  });
  imageContainer.appendChild(mainImage);

  const buttons = createNode("div", { class: "buttons" });
  const prevBtn = createNode("button", {
    class: "prev-btn",
    disabled: true,
  });
  prevBtn.textContent = "Previous";
  const nextBtn = createNode("button", { class: "next-btn" });
  nextBtn.textContent = "Next";
  buttons.appendChild(prevBtn);
  buttons.appendChild(nextBtn);
  imageContainer.appendChild(buttons);

  productGallery.appendChild(imageContainer);

  document.body.appendChild(productGallery);

  let currentImage = 0;
  togglePrevNextButtons();

  prevBtn.addEventListener("click", () => {
    if (currentImage > 0) {
      currentImage--;
      changeImage(currentImage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentImage < thumbnails.length - 1) {
      currentImage++;
      changeImage(currentImage);
    }
  });

  nextBtn;
