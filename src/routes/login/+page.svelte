<script lang="ts">
</script>

<form class="login-form main-width">
  <div class="input-container">
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
  </div>
  <div class="btns-container">
    <button type="submit">Enter</button>
    <button type="button">Close</button>
  </div>
</form>

<style>
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #343540;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .input-container input {
    width: 300px;
    height: 40px;
    padding: 20px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .btns-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btns-container button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
  }
  .btns-container button:first-child {
    margin-right: 10px;
  }
</style>
