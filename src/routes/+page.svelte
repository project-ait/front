<script lang="ts">
  import { onMount } from "svelte"

  onMount(() => {
    // TODO if not settings about first page
    location.href = "/chat"
  })
</script>

<svelte:head>
  <title>Home</title>
  <meta content="Svelte demo app" name="description" />
</svelte:head>

<!-- About 페이지 또는 채팅 공간 만드는 페이지 -->
<div class="main" />

<style>
  .main {
    width: 100%;
    height: 100%;
  }
</style>
