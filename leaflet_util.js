var map;

var leaflet_init = function (tiles_url, initial_x, initial_y, initial_z)
{
	map = L.map("mapcontainer", {zoomControl: false, scrollWheelZoom: false});
	map.setView([initial_y, initial_x], initial_z);
	L.tileLayer(tiles_url, {}).addTo(map);
};

var leaflet_mark = function (x, y, title_, popup_)
{
	var popup = L.popup({}).setContent(popup_);
	L.marker([y, x], {title: title_}).bindPopup(popup).addTo(map);
};

