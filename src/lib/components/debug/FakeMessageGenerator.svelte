<script lang="ts">
  import { client } from "$lib/client/Client"
  import { stateStore } from "$lib/stores/StateStore"
  import { Author } from "$lib/types/Chat"

  let isBot: boolean = false
  let content: string = ""

  const sendAs = async () => {
    await client.appendHistory(isBot ? Author.Assistant : Author.User, content)
  }
</script>

{#if $stateStore.debug}
  <div id="fmsg">
    <div id="fmsg-is-this">
      <h3>Is this a bot?</h3>
      <input type="checkbox" bind:value={isBot} />
    </div>
    <div id="fmsg-is-this">
      <input bind:value={content} />
      <button on:click={sendAs}>Send</button>
    </div>
  </div>
{/if}

<style>
  #fmsg-is-this {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #fmsg {
    display: flex;
    flex-direction: column;
    color: #f2f2f2;
  }
</style>