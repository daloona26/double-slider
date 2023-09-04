const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh `;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeIndex++;
    if (activeIndex > slidesLength - 1) {
      activeIndex = 0;
    }
  } else if (direction === "down") {
    activeIndex--;
    if (activeIndex > 0) {
      activeIndex = slidesLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(${activeIndex * sliderHeight}px)`;
  slideRight.style.transform = `translateY(-${activeIndex * sliderHeight}px)`;
};
