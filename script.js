chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.captureVisibleTab(tab.windowId, {"format": "png"}, function(img) {
    window.open(img);
  });
});