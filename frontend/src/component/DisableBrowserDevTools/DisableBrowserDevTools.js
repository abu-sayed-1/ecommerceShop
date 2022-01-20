const DisableBrowserDevTools = () => {
  // stop keyboard shortcuts
  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
      event.preventDefault();
    }

    if (event.ctrlKey && (event.key === "C" || event.key === "c")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "J" || event.key === "j")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "I" || event.key === "i")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
      event.preventDefault();
    }
  });
  // stop right click
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });


  // if anyone somehow opens the dev tools then 
  // we can annoy who tries to use the developer tool on our site
  (function () {
    (function a() {
      try {
        (function b(i) {
          if (("" + i / i).length !== 1 || i % 20 === 0) {
            (function () {}.constructor("debugger")());
          } else {
            debugger;
          }
          b(++i);
        })(0);
      } catch (e) {
        setTimeout(a, 5000);
      }
    })();
  })();
};

export default DisableBrowserDevTools;
