<script lang="ts">
  export let gradiant: boolean = false
  export let bgColor: string = '#F7F7F7'
</script>

<div
  class="feat-bg"
  class:gradiant={gradiant}
  style="background-color: {bgColor};"
>
  <slot />
</div>

<style>
  .gradiant {
    background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }

  .feat-bg {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #1F1F21;
    border-radius: 10px;
    min-width: 480px;

    padding: 12px 16px 8px 16px;

    border: 6px solid rgba(199, 191, 191, 0.86);
    font-family: Cabin, serif;
  }
</style>