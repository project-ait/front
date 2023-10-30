<script lang="ts">
  import Profile from "$lib/components/sidebar/Profile.svelte"
  import SettingsButton from "$lib/components/sidebar/SettingsButton.svelte"
  import SideButton from "$lib/components/sidebar/SideButton.svelte"
  import { PageType } from "$lib/types/Chat"
  import Icon from "@iconify/svelte"

  let isCollapsed = (localStorage.getItem("isCollapsed") === "true")

  function toggleCollapse() {
    isCollapsed = !isCollapsed
    localStorage.setItem("isCollapsed", isCollapsed.toString())
  }
</script>

<div
  class:collapsed={isCollapsed}
  class="side-container dark:bg-dark bg-lightdark"
>
  <div class="sidebar-content">
    <div class="sidebar-top-content">
      {#if isCollapsed}
        <!--Move to lending page after-->
        <a class="side-new-chat" href="/chat">
          <i>
            <Icon icon="ph:chat-bold" />
          </i>
          <span>Project Title Here</span>
        </a>
      {/if}
      <button class="side-toggle-coll" on:click={toggleCollapse}>
        <i>
          {#if isCollapsed}
            <img alt="Collapse" src="/sidebar-collapse.svg" class="side-coll-btn" />
          {:else}
            <img alt="Expend" src="/sidebar-expand.svg" class="side-coll-btn" />
          {/if}
        </i>
      </button>
    </div>
    <ul class="side-buttons">
      <!-- Buttons Here -->
      <SideButton
        category={PageType.Chat}
        href="/chat"
        iconSrc="/chat.svg"
      >
        {#if isCollapsed}
          <p class="side-btn-title">Chat With AI</p>
        {/if}
      </SideButton>
      <SideButton
        category={PageType.Docs}
        href="/docs"
        iconSrc="/document.svg"
      >
        {#if isCollapsed}
          <p class="side-btn-title">Docs Organizer</p>
        {/if}
      </SideButton>
    </ul>
  </div>
  <!--  -->
  <div class="side-bottom">
    {#if isCollapsed}
      <Profile />
    {:else}
      <SettingsButton />
    {/if}
  </div>
</div>
<!--  -->

<style>
  .side-btn-title {
    flex: 1;
    text-align: center;
    font-weight: 500;
    color: #f2f2f2;

    /*animation-name: slideDown;*/
    /*animation-duration: 0.5s;*/
    /*animation-timing-function: ease-in-out;*/
    /*animation-delay: 0.6s;*/
  }

  .side-coll-btn {
    width: 32px;
    height: 32px;
    color: white;
  }

  /* new chat, hide sidebar icons/text */
  .side-container i {
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    /* TODO I think 320/340px is better for get the widgets */
    width: 80px;

    height: 100vh;
    padding: 8px 12px;

    transition: width 0.2s ease-in-out;
  }

  .collapsed {
    width: 280px;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .sidebar-top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    margin: 10px;
  }

  .side-new-chat {
    display: flex;
    align-items: center;
    width: 320px;
    margin-right: 4px;
    height: 100%;
    background-color: transparent;
    padding: 10px;
    border: 1px solid #474749;
    border-radius: 5px;
    cursor: pointer;
  }

  .side-new-chat span {
    font-size: 14px;
    color: white;
    margin-left: 10px;

    animation: opacity 0.5s ease-in-out;
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .side-toggle-coll {
    width: 88px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #474749;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  /*  */

  .side-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 1px solid #474749;
    border-bottom: 1px solid #474749;
    overflow-y: auto;
    padding-top: 10px;
  }


  .side-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    width: 100%;
  }

  /* Media */
</style>
