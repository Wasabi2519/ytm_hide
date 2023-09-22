const blockedDomains = [
    "*://i.ytimg.com/vi/*",
    "*://lh3.googleusercontent.com/*",
    "*://yt3.googleusercontent.com/*",
    "*://www.gstatic.com/music/*",
    "*://yt3.ggpht.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: blockedDomains},
    ["blocking"]
);
