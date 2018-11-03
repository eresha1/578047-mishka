  ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.93863106417265,30.3230545],
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/icon-map-pin.svg",
    iconImageSize: [66, 101],
    iconImageOffset: [-40, -90],
});

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable([
    "drag",
    "dblClickZoom",
    "rightMouseButtonMagnifier",
    "ruler",
    "routeEditor",
    "scrollZoom"
  ]);
  myMap.controls
    .remove("searchControl")
    .remove("routeButtonControl")
    .remove("trafficControl")
    .remove("typeSelector")
    .remove("fullscreenControl")
    .remove("rulerControl");

    }
