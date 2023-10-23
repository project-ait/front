<script lang="ts">
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent";
  import { createEditor, Editor, EditorContent } from "svelte-tiptap";
  import Placeholder from "@tiptap/extension-placeholder";
  import StarterKit from "@tiptap/starter-kit";
  import { Extension } from "@tiptap/core";
  import { NodeState } from "$lib/stores/NodeState";
  import { onMount } from "svelte";
  import type { Readable } from "svelte/store";
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";

  let test = false;
  let SubmitNode: HTMLButtonElement;
  let editor: Readable<Editor>;

  function onSubmit() {
    if ($editor.getText().replaceAll("\n", "") === "") return;
    if ($NodeState) {
      InsertBeforeSplitContent(
        $editor.getText({ blockSeparator: "\n" }),
        test,
        $NodeState
      );
      $NodeState.scrollTo({
        top: $NodeState.scrollHeight,
        behavior: "smooth",
      });
      $editor.commands.setContent(``);
    } else {
      goto("/1");
    }
    test = !test;
  }

  const CustomEnter = Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: () => {
          SubmitNode.click();
          return true;
        },
      };
    },
  });

  onMount(() => {
    editor = createEditor({
      extensions: [
        StarterKit,
        CustomEnter,
        Placeholder.configure({
          placeholder: "메세지를 입력해주세요",
        }),
      ],
      content: `Hello World`,
    });
  });
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <EditorContent editor={$editor} />
  <button class="submit-btn" bind:this={SubmitNode} type="submit">
    <i><Icon icon="formkit:submit" /></i>
  </button>
</form>

<style>
  .input-form {
    position: absolute;
    bottom: 5%;
    right: 40%;
    transform: translate(50%, -50%);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-btn {
    position: absolute;
    top: 50%;
    right: 3%;
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
