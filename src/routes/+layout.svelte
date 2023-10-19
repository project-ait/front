<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "./styles.css";

  let value = "";
</script>

<div class="app">
  <!-- Header 필요시 Header Component 추가 -->
  <main>
    <Sidebar />
    <Input bind:value />
    <slot />
  </main>
  <!-- Footer 필요시 Footer Component 추가 -->
</div>

<style>
  main {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
