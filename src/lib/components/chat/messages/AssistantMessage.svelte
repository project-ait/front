<script lang="ts">
  import BaseMessage from "$lib/components/chat/messages/BaseMessage.svelte";
  import { stateStore } from "$lib/stores/StateStore"
  import { Features } from "$lib/types/Features"
  import { afterUpdate } from "svelte"
  import { get } from "svelte/store"


  // extract contents within backticks
  const regex = /`([^`]*)`/g

  export let message: string = ""

  let showingMessage = ""

  let delay = 0
  message.replaceAll(regex, "").trim().split("").forEach(char => {
    delay += get(stateStore).delay
    setTimeout(() => {
      showingMessage += char
    }, delay)
  })

  let raw_commands: Array<string> = [] // raw commands but extract only the first one

  let command: string // the first element of commands if it exists
  let args: Array<string> = []

  let feature: Features

  function getFeature(feature: string): Features {
    return Object.values(Features).includes(feature as Features) ? feature as Features : Features.None
  }

  // TODO make better
  let executed = false // for lifecycle, must be executed only once

  afterUpdate(() => { // It cannot be $: can't use global return
    if (executed) {
      // If executed feature is once over, We don't have to execute more but don't want to remove from history.
      // We don't have a plan to remove from history remove from the message when history is updated
      // ~ until find better way
      message = message.replaceAll(regex, "").trim()
      return
    }

    raw_commands = message.match(regex) ?? []

    // preprocess message
    if (raw_commands.length > 0) {
      command = raw_commands[0].slice(2, -1) // remove backticks
      message = message.replaceAll(regex, "").trim() // remove commands from the message

      command = command.trim().toLowerCase() // TODO do not use like a buffer

      const splitted = command.split(" ")
      command = splitted[0] // root of cmd
      args = splitted.slice(1) // else args
    }

    // fetch feature from command and check is that real exists one
    feature = getFeature(command)

    // debug and last processing stuffs
    if (get(stateStore).debug)
      console.log("Assisting!", {
        message,
        commands: raw_commands,
        args,
        command,
        "feature": feature,
      })
    executed = true
  })
</script>

<BaseMessage
  bgColor="rgba(0, 0, 0, 0.05)"
  message={showingMessage}
  profilePic="/llama2.png"
>
  {#if feature !== Features.None}
    <div class="feat-box">
      {#if feature === Features.Weather}
        <FeatWeather />
      {/if}
    </div>
  {/if}
</BaseMessage>

<style>
  .feat-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 6px auto;
  }
</style>