<script lang="ts">
  import { client } from "$lib/client/Client"
  import { stateStore } from "$lib/stores/StateStore"
  import Icon from "@iconify/svelte"
  import { onMount } from "svelte"
  import { get } from "svelte/store"

  let text: string = ""

  let textarea: HTMLTextAreaElement

  onMount(() => {
    textarea.focus()
  })

  const submitText = async () => {
    if (text.length === 0) return
    if (text.trim() === "") return

    if (get(stateStore).debug)
      console.log("Text Submitted:", text)

    $stateStore.input = text
    text = ""

    if (get(stateStore).translate) {
      const translated = await client.translateToEn($stateStore.input)

      if (get(stateStore).debug)
        console.log("Translated Text Submit: ", translated)

      await client.send(translated, $stateStore.input)
    } else {
      await client.send($stateStore.input)
    }
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
    bind:this={textarea}
    bind:value={text}
    class="chat-input"
    on:keydown={handleKeyDown}
    placeholder="Type a message"
  />
  <button
    class="chat-send-btn"
    class:chat-send-icon-submittable={(text.length > 0)}
    on:click={submitText}
  >
    <Icon icon="formkit:submit" />
  </button>
</div>

<style>
  .chat-box {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-width: 540px;
    max-width: 35%;
    width: 35%;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .chat-send-btn {
    background-color: rgba(0, 0, 0, 0.2);
    color: #f2f2f2;
    border-radius: 50%;
    border: none;
    width: 42px;
    height: 42px;
    margin-left: auto; /* push to the right */
  }

  .chat-input {
    background-color: transparent;
    color: #f2f2f2;
    border: none;
    outline: none;
    width: 100%;

    overflow: auto;
    resize: none;

    font-size: 1rem;
    font-family: Cabin, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }

  .chat-send-icon-submittable {
    transition: 0.2s;
    background-color: rgba(0, 197, 104, 0.6) !important;
    cursor: pointer !important;
  }
</style>