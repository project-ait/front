<script lang="ts">
  import BaseMessage from "$lib/components/chat/messages/BaseMessage.svelte";

  export let message: string = ""
</script>

<BaseMessage
  profilePic="/llama2.png"
  message={message}
  bgColor="rgba(0, 0, 0, 0.05)"
/>