let contentDiv = document.getElementById('content');

let routes = {
  '/': homepage,
  '/index.html': homepage,
  '/javascript': javascript,
  '/css': css,
  '/about': about,
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];