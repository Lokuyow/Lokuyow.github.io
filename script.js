document.addEventListener("DOMContentLoaded", function () {
    const images = [
      { src: "icon/hutu.png", probability: 10 },
      { src: "icon/huhe.png", probability: 10 },
      { src: "icon/nita.png", probability: 15 },
      { src: "icon/maji.png", probability: 10 },
      { src: "icon/bero.png", probability: 7 },
      { src: "icon/basu.png", probability: 7 },
      { src: "icon/kowa.png", probability: 5 },
      { src: "icon/kowa2.png", probability: 5 },
      { src: "icon/nita0.png", probability: 5 },
      { src: "icon/ike.png", probability: 3 },
      { src: "icon/tiku.png", probability: 3 },
      { src: "icon/tiku2.png", probability: 2 },
      { src: "icon/note13kmrhvkpnqk3tkg4z4x7527aqejqg90vk8hwe38khmd9hn29lcwsr5qxaj.jpg", probability: 4 },
      { src: "icon/note18aqm9p750934wyswmhfrdu93tnexrn6s62ser2fdlgs3xw7pc6csegutl2.jpg", probability: 4 },
      { src: "icon/note1x4sau4fqg7yg5l639x3d9yahhczmhvzgg6sc9adzttc2uqer4faqvx5p7q.jpg", probability: 2 },
      { src: "icon/note14x0c3vwz47ht4vnuvd0wxc5l8az2k09z4hx2hmw4zcgwz26nd9lsrr6f68.jpg", probability: 4 },
      { src: "icon/note10z20nh6k3cawg6d2alqdytqct5rud897l0eplv930zkzpt4k6zqs96lr8q.jpg", probability: 4 },
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
  