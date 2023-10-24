<script lang="ts">
  import Profile from "$lib/components/sidebar/Profile.svelte"
  import SideButton from "$lib/components/sidebar/SideButton.svelte"
  import Icon from "@iconify/svelte"
</script>

<div class="side-container dark:bg-dark bg-lightdark">
  <!--  -->
  <div class="sidebar-content">
    <div class="sidebar-top-content">
      <a class="side-new-chat" href="/">
        <i>
          <Icon icon="ph:chat-bold" />
        </i>
        <span>New Chat</span>
      </a>
      <button class="side-close">
        <i>
          <Icon icon="mdi:close-outline" />
        </i>
      </button>
    </div>
    <ul class="side-buttons">
      <SideButton
        iconSrc="/chat.svg"
        name="Chat with AI"
      />
    </ul>
  </div>
  <!--  -->
  <div class="side-bottom">
    <Profile />
  </div>
</div>
<!--  -->

<style>
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
    width: 280px;

    height: 100vh;
    padding: 8px 12px;
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
    width: 77%;
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
  }

  .side-close {
    width: 20%;
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
