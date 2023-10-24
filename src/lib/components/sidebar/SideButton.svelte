<script lang="ts">

  export let iconSrc: string
  export let name = "None"
</script>
<li class="side-btn">
  <a class="side-btn-wrap side-btn" href="/test">
    <div class="side-btn-content">
      <img alt="icon"
           class="vertical-center"
           src={iconSrc}
           width="24px"
      />
      <h5 class="text-2xl text-right">{name}</h5>
    </div>
  </a>
</li>

<style>
  .side-btn {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
  }

  .side-btn .side-btn-wrap {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
  }

  .side-btn .side-btn-wrap:hover {
    background-color: #474749;
  }

  .side-btn .side-btn-wrap .side-btn-content {
    display: flex;
    align-items: center;
  }

  .side-btn .side-btn-wrap .side-btn-content h5 {
    text-align: center;
    color: white;
    margin-left: 12px;
  }
</style>