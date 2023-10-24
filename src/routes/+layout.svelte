<script lang="ts">
  import Sidebar from "$lib/components/NavSidebar.svelte"
  import Settings from "$lib/components/sidebar/settings/Settings.svelte"
  import { DarkMode } from "$lib/utils/DarkMode"
  import { onMount } from "svelte"
  import "./styles.css"

  onMount(() => {
    const isDark = JSON.parse(localStorage.getItem("isDark") || "false")
    DarkMode(isDark)
  })
</script>

{#if typeof window !== "undefined"}
  <div class="app">
    <!-- Header 필요시 Header Component 추가 -->
    <main>
      <Sidebar />
      <Settings />
      <div class="main-width dark:bg-lightdark">
        <slot />
      </div>
    </main>
    <!-- Footer 필요시 Footer Component 추가 -->
  </div>
{/if}

<style>
  main {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
