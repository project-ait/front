<script lang="ts">
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent";
  export let value = "";
  export let ChatNode: HTMLDivElement;
  let test = false;
  function onSubmit() {
    InsertBeforeSplitContent(value.split(" "), test, ChatNode);
    test = !test;
    value = "";
  }
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <input bind:value type="text" placeholder="Send a message" />
</form>

<style>
  .input-form {
    position: fixed;
  }
</style>
