<script lang="ts">
</script>

<!-- 나중에 전달될 prop으로 ai block 인지 user block인지 판별 후 bg 색상 변경 -->
<div class="chat-block user-block-bg">
  <div class="chat-main">
    <div class="chat-profile">
      <!-- ai blcok 인지 user block인지 판별 후 이미지 지정 -->
      <img alt="" />
    </div>
    <div class="chat-content">
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content
    </div>
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
    min-height: 140px;
    padding: 20px;
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
    font-size: 15px;
    color: white;
    word-break: break-all;
  }

  /*  */

  .user-block-bg {
    background-color: transparent;
  }

  .ai-block-bg {
    background-color: #343540;
  }
</style>
