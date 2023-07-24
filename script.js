document.addEventListener("DOMContentLoaded", function () {
    const images = [
      { src: "icon/hutu.png", probability: 10 },
      { src: "icon/hutu-2.png", probability: 5 },
      { src: "icon/hutu-up.png", probability: 5 },
      { src: "icon/huhe.png", probability: 9 },
      { src: "icon/nita.png", probability: 8 },
      { src: "icon/maji.png", probability: 7 },
      { src: "icon/bero.png", probability: 6 },
      { src: "icon/bero-ai.png", probability: 5 },
      { src: "icon/basu.png", probability: 5 },
      { src: "icon/kowa.png", probability: 5 },
      { src: "icon/kowa2.png", probability: 5 },
      { src: "icon/kowa2.png", probability: 2 },
      { src: "icon/nita0.png", probability: 5 },
      { src: "icon/ike2.png", probability: 5 },
      { src: "icon/tiku.png", probability: 2 },
      { src: "icon/tiku2.png", probability: 2 },
      { src: "icon/mono.png", probability: 2 },
      { src: "icon/note13kmrhvkpnqk3tkg4z4x7527aqejqg90vk8hwe38khmd9hn29lcwsr5qxaj.jpg", probability: 2 },
      { src: "icon/note18aqm9p750934wyswmhfrdu93tnexrn6s62ser2fdlgs3xw7pc6csegutl2.jpg", probability: 2 },
      { src: "icon/note1x4sau4fqg7yg5l639x3d9yahhczmhvzgg6sc9adzttc2uqer4faqvx5p7q.jpg", probability: 2 },
      { src: "icon/note14x0c3vwz47ht4vnuvd0wxc5l8az2k09z4hx2hmw4zcgwz26nd9lsrr6f68.jpg", probability: 2 },
      { src: "icon/note10z20nh6k3cawg6d2alqdytqct5rud897l0eplv930zkzpt4k6zqs96lr8q.jpg", probability: 2 },
      { src: "icon/note1myxhqt5p3sc477h3fw7qfjgv37rx05cuj5yfj0y7u59yjszjjxgsczz76w.jpg", probability: 2 },
      { src: "icon/note1pju99k0jwhw3dftr4a2fk0kj5yaackklgaxx0tr9tstthnzkygwqyufrqg.jpg", probability: 2 }
    ];

    // 全ての確率の合計を計算
    const totalProbability = images.reduce((total, image) => total + image.probability, 0);

    // 各画像の確率を正規化（合計が1になるように調整）
    images.forEach(image => image.probability /= totalProbability);
  
    const randomImage = document.getElementById("randomImage");
    let previousImageIndex = 0;
  
    randomImage.src = images[previousImageIndex].src;
  
    randomImage.addEventListener("click", function () {
      let newImageIndex;
      let randomNumber = Math.random();
  
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
  