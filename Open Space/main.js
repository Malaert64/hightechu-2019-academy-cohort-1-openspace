// var audio1 = document.getElementById("beep-one");

// function playAudio() {
// 	console.log(audio1);
//   audio1.play();
// }


var media = document.getElementById("beep-one");


function playAudio() {
	const playPromise = media.play();
	if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
			// Show playing UI.
			console.log(media)
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
// }

// function pauseAudio() {
// 	const playPromise = media.pause();
// 	if (playPromise !== undefined) {
//     playPromise.then(_ => {
//       // Automatic playback started!
// 			// Show playing UI.
// 			console.log(media)
//     })
//     .catch(error => {
//       // Auto-play was prevented
//       // Show paused UI.
//     });
//   }
// }