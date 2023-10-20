<script lang="ts">
  import { NodeState } from "$lib/store/NodeState";
  import { onDestroy, onMount } from "svelte";

  let ChatNode: HTMLDivElement;
  onMount(() => {
    $NodeState = ChatNode;
  });
  onDestroy(() => {
    $NodeState = null;
  });
</script>

<div bind:this={ChatNode} class="chat-blocks main-width" />

<style>
  .chat-blocks {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343540;
    padding: 100px 0;
  }
</style>
