<script lang="ts">
  import { stateStore } from "$lib/stores/StateStore"
  import type { PageType } from "$lib/types/Chat"

  export let iconSrc: string
  export let category: PageType | undefined
  export let href: string


  const applyCategory = () => {
    if (category) $stateStore.pageType = category
  }
</script>

<li class="side-btn">
  <a class="side-btn-wrap side-btn"
     class:selected={$stateStore.pageType === category}
     href={href}
     on:click={applyCategory}
  >
    <div class="side-btn-content">
      <img alt="icon"
           class="vertical-center"
           src={iconSrc}
           width="28px"
      />
      <h4 class="side-title"><slot/></h4>
    </div>
  </a>
</li>

<style>
  .side-title {
    flex: 1;
    text-align: center;
    font-weight: 500;
    color: #f2f2f2;
  }

  .side-btn {
    width: 100%;
    margin-bottom: 4px;
  }

  .side-btn .side-btn-wrap {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
  }

  .side-btn .side-btn-wrap:hover {
    background-color: rgba(77, 77, 77, 0.5);
  }

  .selected {
    background-color: #474749 !important;
  }

  .side-btn-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
  }

</style>