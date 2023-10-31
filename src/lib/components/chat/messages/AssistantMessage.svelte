<script lang="ts">
  import BaseMessage from "$lib/components/chat/messages/BaseMessage.svelte";
  import { stateStore } from "$lib/stores/StateStore"
  import { onMount } from "svelte"
  import { get } from "svelte/store"

  export let message: string = ""

  // extract contents within backticks
  const regex = /`([^`]*)`/g

  let commands: Array<string> = []
  let command: string // the first element of commands if it exists

  onMount(() => {
    commands = message.match(regex) ?? []

    if (commands.length > 0) {
      command = commands[0].slice(2, -1) // remove backticks
      message = message.replaceAll(regex, "") // remove commands from the message
    }

    if (get(stateStore).debug)
      console.log("Assisting!", {
        message,
        commands,
        command
      })
  })
</script>

<BaseMessage
  bgColor="rgba(0, 0, 0, 0.05)"
  message={message}
  profilePic="/llama2.png"
/>