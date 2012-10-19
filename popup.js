chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.captureVisibleTab(tab.windowId, {"format": "png"}, function(img) {
    //console.log(img);
    window.open(img);
  });
});