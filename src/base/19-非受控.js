import { useRef } from "react";

// 非受控组件   没有状态控制  内部通过ref来获取数据   数据是存在真实的Dom中的
// 后期数据变化 无法传递到其他组件中去
// defaultValue 是在非受控组件中搭配使用
export default function App() {
  const username = useRef(null);
  console.log("username", username);
  return (
    <div>
      登录
      <input type="text" ref={username} defaultValue="shasha" />
      <button
        onClick={() => {
          console.log("username.current.value", username.current.value);
        }}
      >
        登录
      </button>
      <button
        onClick={() => {
          username.current.value = "";
        }}
      >
        重置
      </button>
    </div>
  );
}
