(() => {
  const paths = {
    "/": "/",
    "/index.html": "/",
    "/legal-information.html": "/legal-information.html",
    "/privacy-policy.html": "/privacy-policy.html",
    "/terms-and-conditions.html": "/terms-and-conditions.html",
  };
  const path = paths[window.location.pathname];
  if (path) {
    window.location.replace(`https://itsfbridge.com${path}${window.location.search}${window.location.hash}`);
  }
})();
