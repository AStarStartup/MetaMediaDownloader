
chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "is_running"], (res) => {
    console.log("tick")
    const time = res.timer ?? 0
    is_running = res.is_running ?? true
    if(!is_running) {
      return
    }
    chrome.storage.local.set({
      timer: time + 1
    })
    chrome.action.setBadgeText({
      text: `${time + 1}`
    })
    chrome.storage.sync.get(["notification_time"], (res) => {
      notification_time = res.notification_time 
      if(time % notification_time == 0) {
        this.registration.showNotification("Timer up!", {
          body: `${notification_time}.`,
          icon: "icon128.png"
        })
      }
    })
  })
})
