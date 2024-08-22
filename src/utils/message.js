// 发送消息
export function message(text, time = 3000) {
  const tempContainer = document.createElement("components-message");
  tempContainer.innerHTML = text;

  document.body.appendChild(tempContainer);
  setTimeout(() => {
    document.body.removeChild(tempContainer);
  }, time);
}
