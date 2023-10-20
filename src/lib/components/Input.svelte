<script lang="ts">
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent";
  import { createEditor, Editor, EditorContent } from "svelte-tiptap";
  import StarterKit from "@tiptap/starter-kit";
  import { Extension } from "@tiptap/core";
  import { NodeState } from "$lib/stores/NodeState";
  import { onMount } from "svelte";
  import type { Readable } from "svelte/store";
  import { goto } from "$app/navigation";

  let test = false;
  let SubmitNode: HTMLButtonElement;
  let editor: Readable<Editor>;

  const DisableEnter = Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: () => {
          SubmitNode.click();
          return true;
        },
      };
    },
  });
  function onSubmit() {
    if ($NodeState) {
      InsertBeforeSplitContent(
        $editor.getText({ blockSeparator: "\n" }),
        test,
        $NodeState
      );
      $editor.commands.setContent(``);
    } else {
      goto("/1");
    }
    test = !test;
  }
  onMount(() => {
    editor = createEditor({
      extensions: [StarterKit, DisableEnter],
      content: `Hello World`,
    });
  });
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <EditorContent editor={$editor} />
  <button bind:this={SubmitNode} type="submit">Enter</button>
</form>

<style>
  .input-form {
    position: fixed;
  }
</style>
