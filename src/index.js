import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div
  const div = document.createElement("div");
  div.className = "list-low";

  // p
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンのliを削除
    const completeTarget = completeButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // TODO内容を取得
    const text = completeTarget.firstChild.firstChild.innerText;

    // 完了target div以下を初期化
    completeTarget.firstChild.textContent = null;

    // p
    const p = document.createElement("p");
    p.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
    });

    // completetargetにp,戻すボタンを配置
    completeTarget.firstChild.appendChild(p);
    completeTarget.firstChild.appendChild(backButton);

    // 完了リストに配置
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのliを削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liの子要素にdiv,pを配置
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
