const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const allResults = await Promise.all(items.map(async (item) => {}));