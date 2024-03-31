let shareCLose = document.querySelector("section.share > div.share-btn");
let shareOpen = document.querySelector("aside > div.share-btn");
let isShareOpen = false;

shareOpen.addEventListener("click", () => {
  let sharing = document.querySelector("section.share");
  if (!isShareOpen) {
    sharing.style.left = "0";
      sharing.style.display = "flex"
    isShareOpen = true;
  } else {
    sharing.style.left = "0";
      sharing.style.display = "none"
    isShareOpen = false;
  }
});

shareCLose.addEventListener("click", () => {
  let sharing = document.querySelector("section.share");
  sharing.style.left = "150%";
  //   sharing.style.display = "nones"
  isShareOpen = false;
});
