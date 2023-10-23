<script lang="ts">
  import "./styles.css";
  import { NodeState } from "$lib/stores/NodeState";
  import { SettingState } from "$lib/stores/SettingState";
  import Input from "$lib/components/Input.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Settings from "$lib/components/Settings.svelte";
  import { onMount } from "svelte";
  import { DarkMode } from "$lib/utils/DarkMode";

  onMount(() => {
    const isDark = JSON.parse(localStorage.getItem("isDark") || "false");
    DarkMode(isDark);
  });
</script>

{#if typeof window !== "undefined"}
  <div class="app">
    <!-- Header 필요시 Header Component 추가 -->
    <main>
      <Sidebar />
      {#if $SettingState.isOpen}
        <Settings />
      {/if}
      {#if $NodeState}
        <Input />
      {/if}
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
