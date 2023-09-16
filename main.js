document.addEventListener('DOMContentLoaded', async () => {
    const images = await fetch('images.json').then(resp => resp.json());

    // 全ての確率の合計を計算
    const totalProbability = images.reduce((total, image) => total + image.probability, 0);

    // 各画像の確率を正規化（合計が1になるように調整）
    images.forEach(image => image.probability /= totalProbability);
  
    const randomImage = document.querySelector('#randomImage');
    let previousImageIndex = 0;
  
    randomImage.src = images[previousImageIndex].src;
  
    randomImage.addEventListener('click', () => {
      let newImageIndex = 0;
      const randomNumber = Math.random();
  
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
