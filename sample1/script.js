function generate() {
  const input = document.getElementById("input").value;
 
  const patterns = [
    `100年に1度の『 ${input} 』`,
    `愛と『 ${input} 』の物語`,
    `世界よ！これが真の『 ${input} 』だ！！`,
    `100円ショップにあるものだけで『 ${input} 』を作る`,
    `世界は『 ${input} 』で出来ている`,
    `衝撃！『 ${input} 』だけで１ヵ月生活`,
    `あなたの知らない『 ${input} 』の世界`,
    `あの素晴らしい『 ${input} 』をもう一度`,
    `今からはじめる『 ${input} 』`
  ];
 
  const random = patterns[Math.floor(Math.random() * patterns.length)];
 
  document.getElementById("output").textContent = random;
}