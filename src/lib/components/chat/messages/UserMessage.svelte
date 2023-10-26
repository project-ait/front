<script lang="ts">
  import BaseMessage from "$lib/components/chat/messages/BaseMessage.svelte";

  export let message: string = ""
</script>

<BaseMessage
  bgColor="rgba(0, 0, 0, 0.1)"
  message={message}
  profilePic="/guest.png"
/>