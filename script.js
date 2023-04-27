document.addEventListener("DOMContentLoaded", function () {
    const images = [
      { src: "icon/hutu.png", probability: 30 },
      { src: "icon/huhe.png", probability: 25 },
      { src: "icon/nita.png", probability: 20 },
      { src: "icon/bero.png", probability: 7 },
      { src: "icon/kowa.png", probability: 5 },
      { src: "icon/kowa2.png", probability: 5 },
      { src: "icon/nita0.png", probability: 5 },
      { src: "icon/tiku.png", probability: 2 },
      { src: "icon/tiku2.png", probability: 1 },
    ];
  
    const randomImage = document.getElementById("randomImage");
    let previousImageIndex = 0;
  
    randomImage.src = images[previousImageIndex].src;
  
    randomImage.addEventListener("click", function () {
      let newImageIndex;
      let randomNumber = Math.random() * (100 - images[previousImageIndex].probability);
  
      let cumulativeProbability = 0;
      for (let i = 0; i < images.length; i++) {
        if (i === previousImageIndex) continue;
  
        cumulativeProbability += images[i].probability;
        if (randomNumber < cumulativeProbability) {
          newImageIndex = i;
          break;
        }
      }
  
      randomImage.src = images[newImageIndex].src;
      previousImageIndex = newImageIndex;
    });
  });
  