chrome.storage.sync.get(['information'], result => {
    const info = ['query', 'lat', 'lon', 'country', 'zip', 'regionName', 'timezone']

    const allDivs = document.querySelectorAll('div.sub')

    allDivs.forEach((div, index) => div.innerText = result.information[info[index]]);
});

