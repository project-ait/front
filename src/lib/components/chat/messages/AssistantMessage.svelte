<script lang="ts">
  import BaseMessage from "$lib/components/chat/messages/BaseMessage.svelte";

  export let message: string = ""
</script>

<BaseMessage
  bgColor="rgba(0, 0, 0, 0.05)"
  message={message}
  profilePic="/llama2.png"
/>