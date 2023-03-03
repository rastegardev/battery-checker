const level = document.querySelector(".level");
const charging = document.querySelector(".charging");

navigator.getBattery().then((battery) => {

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    charging.innerHTML = `Battery charging? ${battery.charging ? "Yes" : "No"}`;
  }
  
  battery.addEventListener("levelchange", () => { updateLevelInfo();
  });
  function updateLevelInfo() {
  level.innerHTML = `Battery level: ${battery.level * 100}%`;
  }
  
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  setInterval(updateAllBatteryInfo(), 1000);
  
});
