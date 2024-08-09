const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isTabInView = () => !document.hidden;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");