// 用于组件之间的通信

// 向 dom 发送事件
export const dispatchMessage = (name, value) => {
  document.dispatchEvent(
    new CustomEvent(name, {
      detail: value,
      composed: true,
    })
  );
};

// 在 dom 监听事件
export const listenMessage = (eventName, callback) => {
  document.addEventListener(eventName, (event) => {
    const detail = event.detail;
    callback(detail);
  });
};
