<script lang="ts">
  import { stateStore } from "$lib/stores/StateStore"
  import { DarkMode } from "$lib/utils/DarkMode"

  let isDark = false


  $: isDark = JSON.parse(localStorage.getItem("isDark") || "false")
  $: isSettingsShow = (<boolean>$stateStore.showSettings)

  function applyDark() {
    DarkMode(isDark)
    localStorage.setItem("isDark", String(isDark))
  }

  function hideSettings() {
    $stateStore.showSettings = false
  }
</script>

{#if isSettingsShow}
  <ul class="settings-container">
    <li>
      <h1>Theme</h1>
      <label class="checkbox-label">
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
      <input id="url-input"
             bind:value={$stateStore.url.model}
      />
    </li>
    <button class="settings-close" on:click={hideSettings}>Save and Close</button>
  </ul>
{/if}

<style>
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
  }

  .settings-container li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
  }

  .settings-container li h1 {
    color: white;
    font-size: 24px;
  }

  .checkbox-label {
    width: 50px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    right: 10%;
  }

  .checkbox-label input {
    position: absolute;
    display: none;
  }

  .checkbox-label span {
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 10px;
    background-color: lightgray;
    filter: drop-shadow(0 0 0.3em #ccdee3);
  }

  .checkbox-label input:checked ~ span {
    background-color: #343540;
  }

  .checkbox-label span::before {
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

  .checkbox-label input:checked ~ span::before {
    transform: translate(130%, -50%) rotateZ(200deg);
    box-shadow: inset 10px 0 0 0 lightgray;
  }

  .settings-close {
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .settings-close:hover {
    background-color: rgba(255, 255, 255, 0.65);
  }
</style>
