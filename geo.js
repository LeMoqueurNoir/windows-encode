const findState = () => {
    fetch('https://www.ipaddresslocation.org/', {
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': '_gid=GA1.2.1475975538.1666612123; __gads=ID=e29b60d3b05f06cd-22d57ff155d6003a:T=1666612123:RT=1666612123:S=ALNI_MZZBsN3ZAkTaJePa52kjAjcDTCxWg; __gpi=UID=00000b15f7efa3d0:T=1666612123:RT=1666612123:S=ALNI_MYN2VrpkvtjlXNZrHlguiRLVhb21w; _ga_Y9JB3L0TSQ=GS1.1.1666612122.1.1.1666612159.0.0.0; _ga=GA1.2.405319823.1666612123; FCCDCF=%5Bnull%2Cnull%2Cnull%2C%5B%22CPhWlcAPhWlcAEsABBENCmCoAP_AAG_AABpYHQpB7D7FbSFCyP55aLsAMAhXRkCEQqQAAASBAmABQAKQIAQCkkAQFASgBAACAAAgIAJBAQIMCAgACUABQAAAAAEEAAAABAAIIAAAgAEAAAAIAAACAIAAEAAIAAAAEAAAmQhAAIIACAAABAAAAAAAAAAAAAAAAgdCgHsLsVtIUJI_GkoswAgCFdGQIRCoAAAAIECQAAAApAgBAKQQBAABKAEAAAAACAgAgEBAAgACAABQAFAAAAAAAAAAAAAAAggAACAAQAAAAAAAAIAgAAQAAgAAAAAAACJCEAAggAIAAAAAAAAAAAAAAAAAAACAAA%22%2C%221~2072.70.89.93.108.122.149.2202.162.167.196.2253.241.2299.259.2357.311.317.323.2373.338.358.2415.415.449.2506.2526.482.486.494.495.2568.2571.2575.540.574.2624.624.2677.817.827.864.981.1048.1051.1095.1097.1127.1171.1201.1205.1211.1276.1301.1365.1415.1449.1570.1577.1651.1716.1753.1765.1870.1878.1889.1958.2012%22%2C%22DCBB91BC-3E44-4089-8B4E-C6F429B9D3DA%22%5D%2Cnull%2Cnull%2C%5B%5D%5D; FCNEC=%5B%5B%22AKsRol86vZhTHcAk6b9jBUtgLJXZYx07du4T75P2Lfe__tnLEEnPNIghfaqpR2YcDNdIRpWfD2Pr1570NRfHOjFqNBHbjDXVX7aVquZANO5s9MM29iDYqbgCMlKA6T_2DWOumpr-yVpuaBTR99LhdYdzloe3wloDgg%3D%3D%22%5D%2Cnull%2C%5B%5D%5D',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
        }
    }).then(x => console.log(x.text));

}
findState();