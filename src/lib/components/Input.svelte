<script lang="ts">
  import { goto } from "$app/navigation";

  export let value = "";
  // function InsertBeforeSplitContent(content: string[]) {
  //   const ChatElement = document.createElement("div");
  //   ParentNode.insertAdjacentElement("afterend", ChatElement);
  //   for (let i = 0; i < content.length; i++) {
  //     // setTimeout
  //     setTimeout(() => {
  //       ChatElement.innerText += content[i] + String.fromCharCode(160);
  //     }, Math.min(20, Math.ceil(content.length / 3)) * i);
  //     // clearTimeout
  //     clearTimeout(
  //       setTimeout(() => {
  //         ChatElement.innerText += content[i] + String.fromCharCode(160);
  //       }, Math.min(20, Math.ceil(content.length / 3)) * i)
  //     );
  //   }
  // }
  function onSubmit() {
    goto("/1");
  }
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <input bind:value type="text" placeholder="Send a message" />
</form>

<style>
  .input-form {
    position: fixed;
  }
</style>
