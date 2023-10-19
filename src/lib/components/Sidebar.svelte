<script lang="ts">
</script>

<div class="sideBx">
  <!-- 나중에 <i />에 icon 추가 -->
  <!--  -->
  <div class="side-btns">
    <div class="side-top-btns">
      <button class="side-new">
        <span><i /></span>
        <span>New Chat</span>
      </button>
      <button class="side-close"><i /></button>
    </div>
    <ul class="side-chats">
      {#each new Array(15).fill("") as arr, i}
        <li class="side-chat">
          <button class="side-chat-btn">
            <div class="side-chat-title">
              <span><i /></span>
              <span>Chat Btn</span>
            </div>
            <div class="side-chat-edit">
              <button>
                <i />
              </button>
              <button>
                <i />
              </button>
            </div>
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <!-- / -->
  <div class="side-auth">
    <button class="side-profile">
      <div class="side-profile-info">
        <span class="side-profile-img">
          <img alt="" />
        </span>
        <span class="side-profile-name">Profile</span>
      </div>
      <div class="side-profile-opt">
        <i />
      </div>
    </button>
    <button class="side-profile">
      <div class="side-profile-info">
        <span class="side-profile-img">
          <img alt="" />
        </span>
        <span class="side-profile-name">Profile</span>
      </div>
      <div class="side-profile-opt">
        <i />
      </div>
    </button>
  </div>
  <!--  -->
</div>

<style>
  .sideBx {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height: 100vh;
    background-color: #202123;
    padding: 8px 12px;
  }

  .side-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 100%;
  }

  .side-top-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    margin-bottom: 20px;
  }

  .side-new {
    display: flex;
    align-items: center;
    width: 77%;
    height: 100%;
    background-color: transparent;
    border: none;
    padding: 10px;
    border: 1px solid #474749;
    border-radius: 5px;
    cursor: pointer;
  }

  .side-new span i {
    display: block;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: white;
  }

  .side-new span:last-child {
    font-size: 14px;
    color: white;
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

  .side-close i {
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: white;
  }

  /*  */

  .side-chats {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    border-bottom: 1px solid #474749;
    overflow-y: auto;
  }

  .side-chat {
    width: 100%;
    margin-bottom: 10px;
  }

  .side-chat .side-chat-btn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
  }

  .side-chat .side-chat-btn:hover {
    background-color: #474749;
  }

  .side-chat .side-chat-btn .side-chat-title {
    display: flex;
    align-items: center;
  }

  .side-chat .side-chat-btn .side-chat-title span i {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: white;
    margin-right: 10px;
  }

  .side-chat .side-chat-btn .side-chat-title span:last-child {
    font-size: 16px;
    color: white;
  }

  .side-chat .side-chat-btn .side-chat-edit {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .side-chat .side-chat-btn .side-chat-edit button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-chat .side-chat-btn .side-chat-edit button i {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: white;
    margin-right: 5px;
  }

  /*  */

  .side-auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    height: 20%;
  }

  .side-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  .side-profile:hover {
    background-color: #474749;
  }

  .side-profile-info {
    display: flex;
    align-items: center;
  }

  .side-profile-img {
    display: block;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .side-profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .side-profile-name {
    font-size: 16px;
    color: white;
  }

  .side-profile-opt {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-profile-opt i {
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: white;
  }
</style>
