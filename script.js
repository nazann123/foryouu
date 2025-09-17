const message = `dear my prettiest girl..\naku sadar gaada yg bisa di maafin lagi dari aku,aku mintaa maaf atas semua kekurangan aku, dan kadang aku malah nyepelein usaha besar yang udah kamu lakuin buat hubungan kita.\n\nyou’ve always tried your best to make this relationship work, while I was too blind to appreciate it. I feel so guilty for that.\n\nI promise ill try harder to be better for you, to care more,and to never make you feel unappreciated again. You mean the world to me, and I don’t ever want to lose you. I LOVE YOU Nathasha Aurellia.\n "Fauzan Yaskuri Lubis"`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // 🎵 Play musik
  const bgMusic = document.getElementById("bg-music");
  bgMusic.play().catch(err => {
    console.log("Autoplay dicegah browser:", err);
  });

  // 🎥 Video (selalu muted)
  const videoBox = document.getElementById("videoBox");
  const myVideo = document.getElementById("myVideo");

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    videoBox.style.display = "block";
    myVideo.play(); // jalanin video, tapi muted

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 600);
}
