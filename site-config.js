window.SITE_CONFIG = {
  newsletterFormAction: "https://buttondown.com/api/emails/embed-subscribe/adrian_cruz86"
};

(() => {
  const assetVersion = "20260913c";

  // GitHub Pages can reject/handle HEAD checks inconsistently for media files.
  // The page only uses this HEAD request as an existence check, so allow it
  // to proceed and let the <video> element perform the real media request.
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input, init = {}) => {
    const url = typeof input === "string" ? input : (input && input.url) || "";
    const method = String(init && init.method || "GET").toUpperCase();
    if (method === "HEAD" && url.includes("assets/ashen/worldspark-awakening.mp4")) {
      return Promise.resolve(new Response(null, { status: 200 }));
    }
    return nativeFetch(input, init);
  };

  const refreshAshenAssets = () => {
    const cover = document.querySelector("img.cover");
    const coverSource = document.querySelector(".cover-stage source");
    if (cover) {
      cover.src = `assets/ashen/ashen-cover.webp?v=${assetVersion}`;
    }
    if (coverSource) {
      coverSource.srcset = `assets/ashen/ashen-cover-small.webp?v=${assetVersion}`;
    }

    const video = document.querySelector("#worldspark-video");
    if (video) {
      video.src = `assets/ashen/worldspark-awakening.mp4?v=${assetVersion}`;
      video.preload = "metadata";
      video.hidden = false;
      video.load();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refreshAshenAssets, { once: true });
  } else {
    refreshAshenAssets();
  }
})();
