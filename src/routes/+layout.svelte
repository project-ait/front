<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "./styles.css";
</script>

<div class="app">
  <!-- Header 필요시 Header Component 추가 -->
  <main>
    <Sidebar />
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
