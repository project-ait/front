<script lang="ts">
  import AssistantMessage from "$lib/components/chat/messages/AssistantMessage.svelte"
  import UserMessage from "$lib/components/chat/messages/UserMessage.svelte"
  import ChatInput from "$lib/components/share/ChatInput.svelte";
  import { stateStore } from "$lib/stores/StateStore"
  import { Author } from "$lib/types/Chat"
  import { afterUpdate } from "svelte"

  $: history = $stateStore.history

  let historyElement: HTMLDivElement

  afterUpdate(() => {
    autoScrollToBottom(historyElement)
  })

  const autoScrollToBottom = async (node: HTMLElement) => {
    node.scroll({
      top: node.scrollHeight,
      behavior: "smooth"
    })
  }
</script>

<div id="chat-page">
  <div id="chat-history" bind:this={historyElement}>
    {#each history as ctx}
      {#if ctx.author === Author.Assistant}
        <AssistantMessage message={ctx.message} />
      {:else}
        <UserMessage message={ctx.message} />
      {/if}
    {/each}
  </div>
  <ChatInput />
</div>

<style>
  #chat-page {
    display: flex;
    flex-direction: column;
    height: 100%;

    justify-content: flex-end;
    align-items: center;

    padding: 32px;
  }

  #chat-history {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: auto;
    margin-bottom: 2%;
  }
</style>