<script lang="ts">
  import { client } from "$lib/client/Client"
  import { stateStore } from "$lib/stores/StateStore"
  import { Author } from "$lib/types/Chat"

  let isBot: boolean = false
  let content: string = ""

  const sendAs = async () => {
    await client.appendHistory(isBot ? Author.Assistant : Author.User, content)
  }

  const sendWeather = async () => {
    await client.appendHistory(Author.Assistant, " ` weather` Yes sir!")
  }

  const sendTrain = async () => {
    await client.appendHistory(Author.Assistant, " ` train` Yes sir!")
  }

  const clearChat = async () => {
    await client.clearHistory()
  }
</script>

{#if $stateStore.debug && $stateStore.isSidebarCollapsed}
  <div id="fmsg">
    <div id="fake-msg-input">
      <h3>Is this a bot?</h3>
      <input type="checkbox" bind:value={isBot} />
    </div>
    <div id="fake-msg-input">
      <input bind:value={content} />
      <button on:click={sendAs}>Send</button>
    </div>
    <div id="fake-msg-input">
      <!-- Get feature names from enum and select-send -->
      <input type="button" value="Weather" on:click={sendWeather} />
      <input type="button" value="Train" on:click={sendTrain} />
      <input type="button" value="Clear History" on:click={clearChat} />
    </div>
  </div>
{/if}

<style>
  #fake-msg-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #fake-msg-input input[type="button"] {
    padding: 4px 8px;
    margin: 4px 0;
  }

  #fake-msg-input input {
    padding: 2px 2px;
  }

  #fmsg {
    display: flex;
    flex-direction: column;
    color: #f2f2f2;
  }
</style>