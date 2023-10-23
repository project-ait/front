<script lang="ts">
  import { NodeState } from "$lib/stores/NodeState";
  import { onDestroy, onMount } from "svelte";

  let ChatNode: HTMLDivElement;
  onMount(() => {
    $NodeState = ChatNode;
  });
  onDestroy(() => {
    $NodeState = null;
  });
</script>

<div bind:this={ChatNode} class="chat-blocks" />

<style>
  .chat-blocks {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 100px 0;
  }
</style>
