<script lang="ts">
  import AssistantMessage from "$lib/components/chat/messages/AssistantMessage.svelte"
  import UserMessage from "$lib/components/chat/messages/UserMessage.svelte"
  import ChatInput from "$lib/components/share/ChatInput.svelte";
  import { stateStore } from "$lib/stores/StateStore"
  import { Author } from "$lib/types/Chat"

  $: history = $stateStore.history
</script>

<div id="chat-page">
  <div id="chat-history">
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
    overflow-y: auto;
    margin-bottom: 2%;
  }
</style>