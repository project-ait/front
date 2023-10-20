<script lang="ts">
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent";
  import { createEditor, Editor, EditorContent } from "svelte-tiptap";
  import StarterKit from "@tiptap/starter-kit";
  import { NodeState } from "$lib/store/NodeState";
  import { onMount } from "svelte";
  import type { Readable } from "svelte/store";
  import { goto } from "$app/navigation";

  let test = false;
  let editor: Readable<Editor>;

  function onSubmit() {
    if ($NodeState) {
      InsertBeforeSplitContent(
        $editor.getText({ blockSeparator: "\n" }),
        test,
        $NodeState
      );
    } else {
      goto("/1");
    }
    $editor.commands.setContent(``);
    test = !test;
  }
  onMount(() => {
    editor = createEditor({
      extensions: [StarterKit],
      content: `Hello World`,
    });
  });
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <EditorContent editor={$editor} />
  <button type="submit">Enter</button>
</form>

<style>
  .input-form {
    position: fixed;
  }
</style>
