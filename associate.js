const images = [
    { imgUrl: "./images/associate/1.jpg", brandName: "" },
    { imgUrl: "./images/associate/2.png", brandName: "" },
    { imgUrl: "./images/associate/3.png", brandName: "" },
    { imgUrl: "./images/associate/4.png", brandName: "" },
    { imgUrl: "./images/associate/5.jpg", brandName: "" },
    { imgUrl: "./images/associate/6.png", brandName: "" },
    { imgUrl: "./images/associate/7.png", brandName: "" },
    { imgUrl: "./images/associate/8.png", brandName: "" },
    { imgUrl: "./images/associate/9.png", brandName: "" },
    { imgUrl: "./images/associate/10.png", brandName: "" },
    { imgUrl: "./images/associate/11.jpg", brandName: "" },
    { imgUrl: "./images/associate/12.jpg", brandName: "" },
    { imgUrl: "./images/associate/13.png", brandName: "" },
    { imgUrl: "./images/associate/14.png", brandName: "" },
    { imgUrl: "./images/associate/15.png", brandName: "" },
    { imgUrl: "./images/associate/16.png", brandName: "" },
    { imgUrl: "./images/associate/17.png", brandName: "" },

]

document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.getElementById("wrapper");
    let output = "";
    for (let i = 0; i < images.length; i++) {
        output += `
      <div class="swiper-slide "><img src=${images[i].imgUrl} alt="" srcset="" class="h-12 w-12 sm:w-20 sm:h-20 rounded-full"></div>
      `
    }
    wrapper.innerHTML = output;
})