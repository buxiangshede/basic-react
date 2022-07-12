import { useState } from "react";

// 受控组件  可变状态通常报错在组件的state属性中，并通过使用serState来更新
// React中的state成为‘唯一的数据源’，渲染表单的React组件还控制住用户输入过程中表单发生的操作。被React以这种方式控制取值的表单输入元素就是受控组件。
export default function App() {
  const [username, setUserName] = useState(null);
  console.log("username", username);
  return (
    <div>
      登录
      <input
        type="text"
        value={username}
        defaultValue="shasha"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("username", username);
        }}
      >
        登录
      </button>
      <button
        onClick={() => {
          setUserName("");
        }}
      >
        重置
      </button>
    </div>
  );
}
