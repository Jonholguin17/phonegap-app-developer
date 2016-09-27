const setPermission = (config, persmissionVal) => {

};

const getPersmission = (config) => {

};

const logEvent = (config, category, action, label) => {
  var eventInfo = {
      v : 1,                                                  // version
      tid : 'UA-94271-34',                                    // tracking id
      cid : device.uuid,                                      // client id
      t : 'event',                                            // event type
      ec : (typeof category != 'undefined' ? category : ''),  // event category
      ea : (typeof action != 'undefined' ? action : ''),      // event action
      el : (typeof label != 'undefined' ? label : '')         // event label
  };
  if(config.optIn) sendEvent(eventInfo);
};


sendEvent = (eventInfo) => {
  var gaURL = 'https://www.google-analytics.com/collect?';
  $.ajax({ type: 'GET', url: gaURL + $.param(eventInfo) });
};
