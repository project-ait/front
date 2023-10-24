<script lang="ts">
  import { goto } from "$app/navigation"
  import { NodeState } from "$lib/stores/NodeState"
  import { Appearance, stateStore } from "$lib/stores/StateStore"
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent"
  import Icon from "@iconify/svelte"
  import { Extension } from "@tiptap/core"
  import Placeholder from "@tiptap/extension-placeholder"
  import StarterKit from "@tiptap/starter-kit"
  import { onMount } from "svelte"
  import { createEditor, Editor } from "svelte-tiptap"
  import type { Readable } from "svelte/store"

  let test = false
  let SubmitNode: HTMLButtonElement
  let editor: Readable<Editor>

  let isDark = $stateStore.appearance === Appearance.Dark

  function onSubmit() {
    if ($editor.getText().replaceAll("\n", "") === "") return
    if ($NodeState) {
      InsertBeforeSplitContent(
        $editor.getText({ blockSeparator: "\n" }),
        test,
        $NodeState
      )
      $NodeState.scrollTo({
        top: $NodeState.scrollHeight,
        behavior: "smooth",
      })
      $editor.commands.setContent(``)
    } else {
      goto("/1")
    }
    test = !test
  }

  const CustomEnter = Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: () => {
          SubmitNode.click()
          return true
        },
      }
    },
  })

  onMount(() => {
    editor = createEditor({
      extensions: [
        StarterKit,
        CustomEnter,
        Placeholder.configure({
          placeholder: "Send a message",
        }),
      ],
      content: `Hello World`,
    })
  })
</script>

<div>
  <textarea class="input-form" on:submit={onSubmit} placeholder="Type a message" />
  <button bind:this={SubmitNode} class="submit-btn" type="submit">
    <i>
      <Icon icon="formkit:submit" />
    </i>
  </button>
</div>

<style>
  .input-form {
    /* size */
    width: 50vw;
    height: 50px;

    /* position */
    position: absolute;
    bottom: 0;
    transform: translate(50%, -50%);
    right: 40%;

    /* colours */
    background-color: #41414E;
    color: #f2f2f2;

    /* etc */
    border-radius: 8px;
    padding: 15px;
    font-size: 16px;
    font-family: Calibri, sans-serif;

  }

  .submit-btn {
    position: absolute;
    bottom: 2%;
    right: 16%;
    transform: translate(0, -50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .submit-btn i {
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>