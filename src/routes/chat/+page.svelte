<script>
  import ChatInput from "$lib/components/share/ChatInput.svelte";
  import Message from "$lib/components/chat/Message.svelte";
</script>

<div id="chat-page">
  <div id="chat-history">
    <Message
      message="I hate facebook ads"
      bgColor="rgba(0, 0, 0, 0.1)"
      profilePic="guest.png"
    />
    <Message
      message="Facebook is no more exists lol multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines multiple lines"
      bgColor="rgba(255, 255, 255, 0.05)"
      profilePic="llama2.png"
    />
  </div>
  <ChatInput />
</div>

<style>
  #chat-page {
    display: flex;
    flex-direction: column;
    height: 100%;

    justify-content: flex-end;
    align-items: center;

    padding: 32px;
  }

  #chat-history {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    margin-bottom: 2%;
  }
</style>