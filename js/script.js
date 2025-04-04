const epicMix = [
  "Build you up - 50 cent",
  "Creepin - Jamie Foxx",
  "Can't take my eyes off of you - Lauryn Hill",
  "Blame it - T-pain/Jamie Foxx",
  "Beauty - Dru Hill",
  "Never - Green",
  "You love me good - Ekolu",
  "You and I - Natural Vibrations",
  "Empress touch - Likkle Jordee",
  "Your man - Joji",
  "Patience - Damian Marley",
  "Herside story - Goldlink",
  "Beautiful - Snoop Dogg/Pharell"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} impactful songs.`

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`
    mixList.append(li);
  });
};