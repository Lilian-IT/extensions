chrome.runtime.onInstalled.addListener(async()=>{console.log("extension installed")});chrome.commands.onCommand.addListener(e=>{chrome.tabs.update({},async o=>{e=="tabs-to-buffer"&&console.log("extension command: tabs-to-buffer")})});chrome.alarms.onAlarm.addListener(e=>{console.log("onAlarm",e),chrome.notifications.create("notification1",{type:"basic",iconUrl:"/icons/alert.png",title:"Напоминашка",message:"Ахтунг! Пришло время напомнить!",buttons:[{title:"Спасибо"}],priority:0},o=>{console.log("Last error:",chrome.runtime.lastError)})});chrome.notifications.onButtonClicked.addListener(async(e,o)=>{console.log({notificationId:e,buttonIndex:o})});chrome.notifications.onClicked.addListener(async e=>{chrome.storage.sync.get(["timer"],o=>{o.timer&&chrome.alarms.create({delayInMinutes:o.timer})}),chrome.notifications.clear(e)});
