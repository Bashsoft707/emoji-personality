const emojisArray = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < emojisArray.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojisArray[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    modifyEmoji("push", emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});

function modifyEmoji(myAction, value) {
  emojisArray[myAction](value);
}

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojisArray.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});

popBtn.addEventListener("click", function () {
  emojisArray.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", function () {
  emojisArray.shift();
  renderEmojis();
});
