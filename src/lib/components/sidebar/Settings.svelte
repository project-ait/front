<script lang="ts">
  import { stateStore } from "$lib/stores/StateStore"
  import { DarkMode } from "$lib/utils/DarkMode"
  import { onMount } from "svelte"
  import { get } from "svelte/store"

  let isDark = true
  let closingAnimation = false

  $: isDark = JSON.parse(localStorage.getItem("isDark") || "true")
  $: isSettingsShow = (<boolean>$stateStore.showSettings)

  const applyDark = () => {
    DarkMode(isDark)
    localStorage.setItem("isDark", String(isDark))
  }

  const saveAndClose = () => {
    console.log("Settings saved!")

    // save to local storage
    localStorage.setItem("model", $stateStore.url.model)
    localStorage.setItem("server", $stateStore.url.server)

    // closing animation
    closingAnimation = true
    setTimeout(() => {
      $stateStore.showSettings = false
      closingAnimation = false
    }, 120) // it should be as (the animation duration - 10ms) for smooth closing
  }

  onMount(() => {
    $stateStore.url.model = localStorage.getItem("model") || ""
    $stateStore.url.server = localStorage.getItem("server") || get(stateStore).url.server
  })
</script>

{#if isSettingsShow}
  <div class="settings-bg"></div>
  <ul class="settings-container" class:settings-container-hide={closingAnimation}>
    <li>
      <h1>Theme</h1>
      <label class="settings-theme-btn">
        <input type="checkbox" bind:checked={isDark} on:change={applyDark} />
        <span />
      </label>
    </li>
    <li>
      <h1>Server API</h1>
      <input
        id="url-input"
        bind:value={$stateStore.url.server}
      />
    </li>
    <li>
      <h1>Model API</h1>
      <input
        id="url-input"
        bind:value={$stateStore.url.model}
      />
    </li>
    <li>
      <h1>Debug</h1>
      <label class="settings-btn">
        <input type="checkbox" bind:checked={$stateStore.debug} />
        <span />
      </label>
    </li>
    <button
      class="settings-close"
      on:click={saveAndClose}
      disabled={!$stateStore.showSettings}
    >Save and Close
    </button>
  </ul>
{/if}

<style>
  .settings-bg {
    filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.13);
  }

  .settings-btn {
    background-color: #343540;
    border-radius: 10px;
    width: 50px;
    height: 30px;
    cursor: pointer;
    right: 10%;
  }

  .settings-btn input {
    display: none;
  }

  .settings-btn span {
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 10px;
    background-color: #ccdee3;
    filter: drop-shadow(0 0 0.3em #ccdee3);
  }

  .settings-btn input:checked ~ span {
    background-color: rgba(17, 255, 119, 0.5);
  }

  .settings-btn span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(20%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #343540;
    transition: 0.7s;
  }

  .settings-btn input:checked ~ span::before {
    transform: translate(130%, -50%);
    box-shadow: inset 10px 0 0 0 lightgray;
  }

  #url-input {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #343540;
    color: white;
    font-size: 16px;
    margin: 5px;
  }

  .settings-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 500px;
    min-height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: #202123;

    animation: fade-in 0.2s ease-in-out;

    border: 1px solid lightgray;
    box-shadow: 0 0 1.4em #000000;
    z-index: 10;
  }

  .settings-container-hide {
    animation: fade-out 0.13s ease-in-out;
  }

  .settings-container li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 4px;
    padding: 8px 0;
    border-bottom: 1px solid lightgray;
  }

  .settings-container li h1 {
    color: white;
    font-size: 24px;
  }

  .settings-theme-btn {
    width: 50px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
  }

  .settings-theme-btn input {
    position: absolute;
    display: none;
  }

  .settings-theme-btn span {
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 10px;
    background-color: lightgray;
    filter: drop-shadow(0 0 0.3em #ccdee3);
  }

  .settings-theme-btn input:checked ~ span {
    background-color: #343540;
  }

  .settings-theme-btn span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(20%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #343540;
    transition: 0.7s;
  }

  .settings-theme-btn input:checked ~ span::before {
    transform: translate(130%, -50%) rotateZ(200deg);
    box-shadow: inset 10px 0 0 0 lightgray;
  }

  .settings-close {
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin: 14px 10px 0 10px;
  }

  .settings-close:hover {
    background-color: rgba(255, 255, 255, 0.65);
  }
</style>
