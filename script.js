let header = document.getElementById("header");
let content = document.getElementById("content");
let footer = document.getElementById("footer");
async function fetchHTML(file, callback) {
	let response = await fetch(`/html/${file}.html`);
	let data = await response.text();
	callback(data);
}
function getAllTemplates() {
	let htmlTemplates = [];
	htmlTemplates["header"] = "";
	htmlTemplates["footer"] = "";
	htmlTemplates["landing"] = "";
	htmlTemplates["page1"] = "";
	htmlTemplates["page2"] = "";
	htmlTemplates.forEach(function (value, index) {
		fetchHTML(index, function (data) {
			value = data;
		});
	});
	return htmlTemplates;
}
function loadDefaultSite() {
	let htmlTemplates = getAllTemplates();
	header.innerHTML = htmlTemplates["header"];
}
loadDefaultSite();