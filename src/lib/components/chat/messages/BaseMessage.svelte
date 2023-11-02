<script lang="ts">
  import { decode } from "html-entities"
  import { marked } from "marked"

  export let profilePic: string
  export let bgColor: string
  export let message: string
</script>


<div
  class="chat-bg"
  style="background-color: {bgColor};"
>
  <img
    alt={"Profile"}
    class="chat-proc"
    src={profilePic}
  />
  <div class="chat-msg">
    {@html decode(marked(message))}
    <slot />
  </div>
</div>

<style>
  .chat-bg {
    display: flex;
    flex-direction: row;

    padding: 1rem;
    border-radius: 1rem;
    color: #f2f2f2;

    margin: 0.5rem auto;
    min-width: 600px;
    max-width: 35%;

    width: 100%;

    animation: slideDown 0.3s ease-in-out;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .chat-proc {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-right: 1rem;

    object-fit: cover;
  }

  .chat-msg, .chat-msg :global(p) {
    font-weight: 400;
    line-height: 1.5rem;
    align-self: center;
    word-break: break-word;
    width: 100%;
  }

</style>