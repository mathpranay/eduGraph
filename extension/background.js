chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: 'youtube.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.video){
    console.log(request.data.title)
      fetch('http://127.0.0.1:5000/data?title='+request.data.title,{method: "GET"}).then(data=>{
        console.log('done')
      })
  }
});chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.title){
    var title = changeInfo.title
    var goog = title.includes('Google Search')
    var newTab = title.includes('New Tab')
    var yt = title.includes('YouTube') && !title.includes('-')
    if(!(goog || newTab || yt)){
      fetch('http://127.0.0.1:5000/data?title='+title,{method: "GET"}).then(data=>{
        return data.json()
      }).then(res=>{
        console.log(res)
        var opt = {
          type: "basic",
          title: "Distracted?",
          message: "It seems that the website you are on is unrelated to your coursework. Time to refocus?",
          iconUrl: "images/get_started48.png",
          buttons: [
            {title: 'Buy Now'}
          ]
        }
        chrome.notifications.create('distractedNotif', opt,async function() {
          await new Promise(r => setTimeout(r, 5000));
          chrome.notifications.clear('distractedNotif')
        })
      })
    }
  }
}); 
chrome.notifications.onButtonClicked.addListener(replyBtnClick);


function replyBtnClick() {
  console.log('jsancxiubn')
}