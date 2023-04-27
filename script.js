document.addEventListener("DOMContentLoaded", function() {
    const images = [
      { src: "icon/hutu.png", probability: 40 },
      { src: "icon/huhe.png", probability: 30 },
      { src: "icon/nita.png", probability: 20 },
      { src: "icon/bero.png", probability: 10 },
      // 画像のファイル名と確率を追加
    ];
  
    const randomImage = document.getElementById("randomImage");
  
    // ページ読み込み時に最初の画像（image1.jpg）を表示
    randomImage.src = images[0].src;
  
    // クリック時に画像を変更
    randomImage.addEventListener("click", function() {
      let randomNumber = Math.random() * 100;
  
      let cumulativeProbability = 0;
      for (let i = 0; i < images.length; i++) {
        cumulativeProbability += images[i].probability;
        if (randomNumber < cumulativeProbability) {
          randomImage.src = images[i].src;
          break;
        }
      }
    });
  });
  