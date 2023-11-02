<script lang="ts">
  import { client } from "$lib/client/Client"
  import BaseFeatureMessage from "$lib/components/chat/messages/features/BaseFeatureMessage.svelte"
  import type { WeatherInfo } from "$lib/types/api/WeatherResponse"
  import { date as dateClient } from "$lib/utils/DateClient"
  import { onMount } from "svelte"

  let isLoading: boolean = true
  let info: Promise<WeatherInfo | void>

  const loadWeatherInfo = async () => {
    try {
      info = client.getWeather()
      info.finally(() => {
        isLoading = false
      })
    } catch (error) {
      console.error("Failed to load weather info: " + error)
      isLoading = false
    }
  }

  onMount(() => {
    loadWeatherInfo()
  })
</script>

<div class="anim-appear-left">
  {#await info}
    {#if isLoading}
      Loading...
    {/if}
  {:then res}
    <div class="appearFromVoid weather-box">
      <BaseFeatureMessage>
        {dateClient.getFullMonth()}.{dateClient.getDate()}. {dateClient.getDayOfWeekCurrentKr()}
        요일 {dateClient.getHours()}시 날씨<br />
        <hr />
        <div class="weather-content">
          <img
            class="weather-icon"
            src="/weather/sun-light.svg"
            alt="맑음"
          />
          <div class="flex-col ml-8">
            <p>{res?.rain === 0 ? "비가 오지 않습니다." : "비가 옵니다."}</p>
            <p>체감 온도: {res?.chill}</p>
            <p>온도:{res?.temp}°C</p>
          </div>
          <div class="flex-col ml-8">
            <p>습도: {res?.reh}%</p>
            <p>풍속: {res?.ws}m/s</p>
            <p>강수량: {res?.rain}mm</p>
          </div>
        </div>
      </BaseFeatureMessage>
    </div>
  {:catch error}
    <p>Failed to load weather info: {error}</p>
  {/await}
</div>

<style>
  .weather-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  .weather-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .weather-box hr {
    margin-bottom: 8px;
  }

  .weather-icon {
    color: #000;
    animation: spin 30s linear infinite;
    margin-left: 12px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  .anim-appear-left {
    animation: appearFromLeft 0.5s ease-out;
    margin-top: 6px;
  }

  @keyframes appearFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .appearFromVoid {
    animation: appearFromVoid 0.5s ease-out;
  }

  @keyframes appearFromVoid {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>