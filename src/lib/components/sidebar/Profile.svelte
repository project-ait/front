<script lang="ts">
  import SettingsButton from "$lib/components/sidebar/SettingsButton.svelte"

  export let name = "Guest"
  export let profilePic = "/guest.png"
</script>


<div class="proc-box">
  <a class="proc-content" href="/login">
        <span class="proc-image-container">
          <img alt="Profile" src={profilePic} />
        </span>
    <span class="side-profile-name">{name}</span>
  </a>
  <SettingsButton />
</div>

<style>
  .proc-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
  }

  .proc-box:hover {
    background-color: #474749;
  }

  .proc-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .proc-image-container {
    display: block;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .proc-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .side-profile-name {
    font-size: 16px;
    color: white;
  }
</style>