<script lang="ts">
  import { NodeState } from "$lib/stores/NodeState";
  import Input from "$lib/components/Input.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "./styles.css";
  import Settings from "$lib/components/Settings.svelte";
  import { SettingState } from "$lib/stores/SettingState";
</script>

<div class="app">
  <!-- Header 필요시 Header Component 추가 -->
  <main>
    <Sidebar />
    {#if $SettingState}
      <Settings />
    {/if}
    {#if $NodeState}
      <Input />
    {/if}
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
