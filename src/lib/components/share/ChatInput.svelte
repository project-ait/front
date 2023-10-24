<script lang="ts">
  import { stateStore } from "$lib/stores/StateStore"
  import Icon from "@iconify/svelte"

  let text: string = ""
  const submitText = async () => {
    $stateStore.input = text
    text = ""
    console.log("Text Submitted: ", text)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()  // prevent a new line
      submitText()
    }
  }

</script>

<div class="chat-box">
  <textarea
    class="chat-input"
    placeholder="Type a message"
    bind:value={text}
    on:keydown={handleKeyDown}
  />
  <div class="chat-controls">
    <button
      class="chat-send-btn"
      class:chat-send-icon-submittable={(text.length > 0)}
      on:submit={submitText}
    >
      <Icon icon="formkit:submit" />
    </button>
  </div>
</div>

<style>
  .chat-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 8px;
    flex-direction: row;
  }

  .chat-send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-left: 12px;
    color: #f2f2f2;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
  }

  .chat-send-icon-submittable {
    transition: 0.2s;
    background-color: rgba(0, 197, 104, 0.6) !important;
    cursor: pointer !important;
  }

  .chat-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }

  .chat-input {
    min-width: 720px;
    min-height: 60px;
    max-width: 480px;

    overflow: auto;
    /*height: 60px;*/

    padding: 8px 16px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
    font-size: 1rem;
    font-family: Cabin, sans-serif;
    font-weight: 400;
    color: #f2f2f2;
    line-height: 1.5;
    text-align: left;
    resize: none;
    box-sizing: border-box;
  }
</style>