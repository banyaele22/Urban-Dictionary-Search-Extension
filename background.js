chrome.contextMenus.onClicked.addListener(function(info, tab){
    var newURL = "https://urbandictionary.com/" + info.selectionText;
    chrome.tabs.create({ url: newURL})
});
chrome.runtime.onInstalled.addListener(() => {
    var contextMenuItem = {
        "id": "urban",
        "title": "Find on Urban Dictionary",
        "contexts": ["selection"]
    }

    chrome.contextMenus.create(contextMenuItem);

   
});