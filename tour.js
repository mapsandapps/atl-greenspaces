$(document).ready(function() {
  var tour;

  tour = new Shepherd.Tour({
  	defaults: {
  		classes: 'shepherd shepherd-element shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      scrollTo: false,
      showCancelLink: true
  	}
  });

  tour.addStep('intro-step', {
    title: 'Atlanta Greenspaces',
    text: 'Welcome to Atlanta Greenspaces.<br>This is a tour of the site.<br>Click "next" to continue or the "X" to leave.',
    attachTo: '#map top',
    buttons: [
      {
        text: 'Exit',
        classes: 'shepherd-button-secondary',
        action: tour.cancel
      },{
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep('layers-step', { // can this be named anything?
    title: 'Layers',
  	text: 'You can click the checkboxes to add and remove data shown on the map.',
  	attachTo: '.leaflet-control-layers-list bottom',
  	tetherOptions: {
  		targetOffset: '0 -50%'
  	},
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },{
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep('geolocate-step', {
    title: 'Geolocation',
    text: 'Geolocation',
    attachTo: '.leaflet-bar-part-single right',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },{
        text: 'Next',
        action: tour.next
      }
    ]
  });

  markerStepText = 'Map marker icons for:<br> \
  <img src="book.png" height=24>&nbsp;Parks in the Book<br> \
  <img src="world.png" height=24>&nbsp;Other Greenspaces<br> \
  <img src="arbol.png" height=24>&nbsp;Champion Trees';

  tour.addStep('marker-step', {
    title: 'Markers',
    text: markerStepText,
    attachTo: '.leaflet-marker-icon bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },{
        text: 'Next',
        action: tour.next
      }
    ]
  });
  
  // kind of hacky
  // the invisibleStep causes the popup to occur before the popup-step is triggered
  var invisibleStep;

  invisibleStep = tour.addStep('invisible-step');

  invisibleStep.on('show', function() {
    // make next line less hacky:
    map._layers[171].openPopup();
    invisibleStep.hide();
    popupStep.show();
  });

  var popupStep;

  popupStep = tour.addStep('popup-step', {
    title: 'Popups',
    text: 'Popup',
    attachTo: '.leaflet-popup bottom',
    buttons: [
      // back button removed because of bugginess
      {
        text: 'Finish Tour',
        action: tour.next
      }
    ]
  });



  tour.start();
});