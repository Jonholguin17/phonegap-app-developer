const startHockeyApp = (HOCKEY_APP_ID) => {
  hockeyapp.start(() => {
    hockeyapp.checkForUpdate(function() {
    // success
    }, () => {
      alert('failed to get update');
    }
  }, () => {
    // error 
  }, HOCKEY_APP_ID)
};
