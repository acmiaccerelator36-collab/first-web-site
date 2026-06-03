function changeMessage() {

    const messages = [
        "今日も積み上げ🔥",
        "月100万円目指す🔥",
        "AIと一緒に成長中🔥",
        "継続は力なり🔥",
        "まずは毎日30分🔥"
    ];

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    document.getElementById("message").textContent =
        messages[randomIndex];
}

function changeText() {
  const messages = [
    "副業頑張る！",
    "調布最高！",
    "今日も継続！",
    "月100万への道！"
  ];

  const colors = [
    "lightblue",
    "lightgreen",
    "lightyellow",
    "lightpink",
    "lavender"
  ];

}

function changeImage() {

  const image =
    document.getElementById("bikeImage");

  image.src = "MT-25 2.jpg";

}