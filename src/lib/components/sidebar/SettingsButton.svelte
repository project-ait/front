<script>
  import Icon from "@iconify/svelte"
  import { stateStore } from "$lib/stores/StateStore"

  function openSettings() {
    $stateStore.showSettings = true
  }
</script>

<div class={$$props.class}>
  <button class="side-profile-opt" on:click={openSettings}>
    <i class="vertical-center">
      <Icon icon="iwwa:option-horizontal" />
    </i>
  </button>
</div>

<style>
  .side-profile-opt {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    margin: 4px;
  }
</style>