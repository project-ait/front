<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  let value = "";
  let ChatNode: HTMLDivElement;
</script>

<div bind:this={ChatNode} class="chat-blocks main-width" />
<Input bind:value bind:ChatNode />

<style>
  .chat-blocks {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343540;
    padding: 100px 0;
  }

  /*  */
</style>
