<script lang="ts">
  import ChatBlock from "$lib/components/ChatBlock.svelte";
</script>

<div class="chat-block main-width">
  <ChatBlock />
  <ChatBlock />
  <ChatBlock />
  <ChatBlock />
</div>

<style>
  .chat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343540;
  }
</style>
