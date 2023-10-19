<script lang="ts">
  import { InsertBeforeSplitContent } from "$lib/utils/InsertBeforeSplitContent";
  import { onMount } from "svelte";
  import type { Readable } from "svelte/store";
  import { createEditor, Editor, EditorContent } from "svelte-tiptap";
  import StarterKit from "@tiptap/starter-kit";

  export let value = `Hello World`;
  export let ChatNode: HTMLDivElement;
  let test = false;
  let editor: Readable<Editor>;
  function onSubmit() {
    InsertBeforeSplitContent(
      $editor.getText({ blockSeparator: "\n" }),
      test,
      ChatNode
    );
    test = !test;
    value = "";
  }
  onMount(() => {
    editor = createEditor({
      extensions: [StarterKit],
      content: `Hello World`,
    });
  });
</script>

<form on:submit|preventDefault={onSubmit} class="input-form">
  <!-- Editor 버그 있어서 나중에 고쳐야됨 -->
  <EditorContent editor={$editor} />
  <button type="submit">Enter</button>
</form>

<style>
  .input-form {
    position: fixed;
  }
</style>
