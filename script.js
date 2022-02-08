window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    console.log("This page was restored from the bfcache.");
  } else {
    console.log("This page was loaded normally.");
  }
});
