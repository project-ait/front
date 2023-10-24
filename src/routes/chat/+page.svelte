<script>
  import ChatInput from "$lib/components/share/ChatInput.svelte";
</script>

<div id="chat-page">
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
</style>