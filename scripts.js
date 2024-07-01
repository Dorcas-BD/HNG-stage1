document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    currentTimeElement.textContent = now.toUTCString();
    currentDayElement.textContent = days[now.getUTCDay()];
  }

  updateTime();
  setInterval(updateTime, 1000);
});
