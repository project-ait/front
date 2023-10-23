const ChatBlock = `<div class="chat-main">
      <div class="chat-profile">
        <img alt="" />
      </div>
      <div id="content" class="chat-content"></div>
    </div>
    </div>`;

export function InsertBeforeSplitContent(
  content: string,
  isUser: boolean,
  ParentNode: Element
) {
  const replaceContent = content.replaceAll(" ", String.fromCharCode(160));
  const splitedContent = replaceContent.split(String.fromCharCode(160));
  // ParentNode에 삽일할 엘리먼트 생성 후 class 추가
  const NewElement = document.createElement("div");
  NewElement.classList.add(`chat-block`);
  NewElement.classList.add(`${isUser ? "user-block-bg" : "ai-block-bg"}`);

  // 삽입할 엘리먼트에 채팅블록 삽입
  NewElement.innerHTML = ChatBlock;

  // 새로운 엘리먼트를 부모 엘리먼트에 삽입
  ParentNode.insertAdjacentElement("beforeend", NewElement);

  // split된 문자들을 집어 넣을 엘리먼트 선택
  const ContentElement = NewElement.querySelector("#content") as HTMLDivElement;

  // split된 문자들을 몇초 간격으로 선택한 엘리먼트에 추가
  if (isUser) {
    ContentElement.innerText = content;
  } else {
    for (let i = 0; i < splitedContent.length; i++) {
      // setTimeout
      setTimeout(() => {
        ContentElement.innerText +=
          splitedContent[i] + String.fromCharCode(160);
      }, Math.min(20, Math.ceil(splitedContent.length / 3)) * i);
      // clearTimeout
      clearTimeout(
        setTimeout(() => {
          ContentElement.innerText +=
            splitedContent[i] + String.fromCharCode(160);
        }, Math.min(20, Math.ceil(splitedContent.length / 3)) * i)
      );
    }
  }
}
