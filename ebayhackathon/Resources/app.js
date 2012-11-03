//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

var home = Ti.UI.createWindow({
	backgroundColor: '#FFF'
});

var scrollView = Ti.UI.createScrollView({
  contentHeight: 'auto',
  layout: 'vertical',
  backgroundColor: '#393939'
});

home.add(scrollView);

var maprow = Ti.UI.createView({
	borderColor: '#000',
	backgroundColor: '#393939',
    borderWidth: .5,
    width:'100%', height: 70,
    top: 0, left: 0,
    touchEnabled: true
});
var mapLabel = Ti.UI.createLabel({
	text: 'Current Location',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	color: 'white'
});
maprow.add(mapLabel);
scrollView.add(maprow);

for (var i=0; i<8; i++){
	var row = Ti.UI.createView({
	borderColor: '#000',
	backgroundColor: '#393939',
    borderWidth: .5,
    width:'100%', height: 70,
    top: 0, left: 0,
    touchEnabled: false
	});
	scrollView.add(row);
}

maprow.addEventListener('click', function(e){
	map.open();	
});

home.open();

var annotations1 = Ti.Map.createAnnotation({
        latitude: 30.2950,
        longitude: -97.7439,
        title: 'Chris\' Crib',
        subtitle: 'YOLO',
        animate: true
});
   
var annotations = [annotations1,];

var map = Ti.UI.createWindow({});
var mapView = Titanium.Map.createView({
    mapType : Titanium.Map.STANDARD_TYPE,
    region : {latitude:30.2950, longitude:-97.7439,latitudeDelta:0.1, longitudeDelta:0.1},             
    animate : true,
    regionFit : true,
    userLocation : false,
    annotations: annotations
});
map.add(mapView);