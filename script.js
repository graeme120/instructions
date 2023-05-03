//chat gpt answer

const videos = [
  {
    video: document.getElementById("video1"),
    audio: document.getElementById("audio1"),
    startHeight: 500,
    endHeight: 1500,
  },
  {
    video: document.getElementById("video2"),
    audio: document.getElementById("audio2"),
    startHeight: 800,
    endHeight: 2000,
  },
];

window.addEventListener("scroll", function () {
  videos.forEach(function (obj) {
    const video = obj.video;
    const audio = obj.audio;
    const startHeight = obj.startHeight;
    const endHeight = obj.endHeight;
    const distanceToTop = video.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    let proximity = 0;

    if (scrollPosition > startHeight) {
      if (scrollPosition > endHeight) {
        proximity = 0;
      } else {
        proximity =
          1 -
          Math.max(
            (distanceToTop - (scrollPosition - startHeight)) /
              (windowHeight - (endHeight - startHeight)),
            0
          );
      }
    }

    audio.volume = proximity;
  });
});
