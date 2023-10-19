<script lang="ts">
  import UserChatBlock from "$lib/components/UserChatBlock.svelte";
</script>

<div class="chat-block main-width">
  <UserChatBlock />
</div>

<style>
  .chat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343540;
  }
</style>
