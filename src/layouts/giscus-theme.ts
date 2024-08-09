function init() {
  document.documentElement.addEventListener(
    "theme-change",
    themeChangeListener
  );

  const giscusScript = document.querySelector(
    'script[src="https://giscus.app/client.js"]'
  );

  if (giscusScript)
    giscusScript.setAttribute("data-theme", isDarkTheme() ? "dark" : "light");
}

function isDarkTheme() {
  return document.documentElement.classList.contains("dark");
}

function themeChangeListener() {
  const iframe = document.querySelector(".giscus-frame") as HTMLIFrameElement;
  if (!iframe) return;
  const url = new URL(iframe.src);
  url.searchParams.set("theme", isDarkTheme() ? "dark" : "light");
  iframe.src = url.toString();
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("astro:page-load", init);
document.addEventListener("astro:after-swap", init);
