<script lang="ts">
  export let profilePic: string
  export let bgColor: string
  export let message: string
</script>


<div
  class="chat-bg"
  style="background-color: {bgColor};"
>
  <img
    class="chat-proc"
    src={profilePic}
    alt={"Profile"}
  />
  <p class="chat-msg">{message}</p>
</div>

<style>
  .chat-bg {
    display: flex;
    flex-direction: row;

    padding: 1rem;
    border-radius: 1rem;
    color: #f2f2f2;

    margin: 0.5rem auto;
    min-width: 320px;
    max-width: 60%;

    width: 100%;
  }

  .chat-proc {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-right: 1rem;

    object-fit: cover;
  }

  .chat-msg {
    font-weight: 400;
    line-height: 1.5rem;
    align-self: center;
  }
</style>