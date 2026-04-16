const countdown = document.querySelector("[data-event-countdown]");
if (countdown) {
  const start = new Date("2026-04-25T19:00:00+05:00").getTime();
  const tick = () => {
    const diff = start - Date.now();
    if (diff <= 0) {
      countdown.textContent = "Match window";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    countdown.textContent = `${days}d ${hours}h ${minutes}m`;
  };
  tick();
  setInterval(tick, 60000);
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = "2026";
});

