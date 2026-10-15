/*
  HERO BANNER SETTINGS
  ====================
  Controls the big image at the top of the home page.

  To run a promotion:
    1. Put your image/animation in the  assets/hero/  folder
       (.gif, .jpg, .png, .webp, .svg, or a short .mp4/.webm video).
    2. Add an entry to "promotions" below (copy the example and remove the // ).
    3. Save, then: git add -A, git commit -m "New promo", git push

  - "start" / "end" are dates (YYYY-MM-DD). The promo shows from the start of
    "start" to the end of "end". Leave either out for no limit.
  - "link" is optional: where people go when they click the banner
    (e.g. "#contact", "#packages", or a full https:// address).
  - If several promotions are active, the FIRST one in the list wins.
  - When no promotion is active, "default" is shown.
  - Best size: square, around 1080 x 1080 pixels. On computers the banner is a
    tall narrow column; on phones it is a wide short strip. The edges get
    cropped either way, so keep important text and logos in the CENTRE.
*/
window.HERO_CONFIG = {
  default: {
    image: "assets/hero-building.svg",
    alt: "Construction project"
  },

  promotions: [
    // {
    //   image: "assets/hero/diwali-offer.gif",
    //   alt: "Diwali offer - free site visit and 5% off",
    //   link: "#contact",
    //   start: "2026-10-20",
    //   end: "2026-11-05"
    // },
  ]
};
