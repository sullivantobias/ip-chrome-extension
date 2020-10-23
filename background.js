chrome.runtime.onInstalled.addListener(() => {
    getLocal()
});

const getLocal = async () => {
    const res = await fetch('http://ip-api.com/json');
    const formattedRes = await res.json();

    chrome.storage.sync.set({'information': formattedRes})
};
