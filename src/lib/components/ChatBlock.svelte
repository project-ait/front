<script lang="ts">
  export let isUser = false;
</script>

<div class="chat-block {isUser ? 'user-block-bg' : 'ai-block-bg'}">
  <div class="chat-main">
    <div class="chat-profile">
      <!-- ai blcok 인지 user block인지 판별 후 이미지 지정 -->
      <img alt="" />
    </div>
    <div class="chat-content" />
  </div>
  <!-- Btn flex 나중에 구현 -->
  <div>Btn</div>
</div>

<style>
  .chat-block {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 20px 40px;
  }

  .chat-main {
    width: 100%;
    display: flex;
  }

  .chat-profile {
    min-width: 35px;
    height: 35px;
    margin-right: 20px;
  }

  .chat-profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .chat-content {
    width: 90%;
    padding: 0 40px;
    font-size: 15px;
    color: white;
    word-break: break-all;
  }

  /*  */

  .user-block-bg {
    background-color: transparent;
  }

  .ai-block-bg {
    background-color: #444654;
  }
</style>
