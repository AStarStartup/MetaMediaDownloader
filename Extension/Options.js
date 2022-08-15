const name_input = document.getElementById("NameInput");
const time_input = document.getElementById("TimeInput");
const save_button = document.getElementById("SaveButton");

save_button.addEventListener("click", () => {
  const name = name_input.value
  const notification_time = time_input.value
  chrome.storage.sync.set({
    name,
    notification_time,
  })
})

chrome.storage.sync.get(["name", "notification_time"], (res) => {
  name_input = res.name ?? "???"
  time_input = res.notification_time ?? 1000
})

setInterval(() => {
  console.log("options")
}, 1000)
