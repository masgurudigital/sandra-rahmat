function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5y8e8wQL4nu":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

