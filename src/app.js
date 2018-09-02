
const videos = [
	'18hPypKsQ8w',
	'VUipWn2gf1M',
	'STN3KpGIxcY',
	'6cm2jHct_fU',
	'EtHzY-yD5gY',
	'mNoh78nufPo',
	'76VpyX5AHEI',
	'qoaPEkTdg6w',
	'RdyMsECmhGQ',
	'YaQ7JByPnw8',
	'Zl4LyE6k6FI',
	'yxAwtm8__E8'
];

const showInputBtn = document.getElementById('showInput');
const submitBtn = document.getElementById('submit');
const pickBtn = document.getElementById('pick');
const displayVideo = document.getElementById('display-video');
const modal = document.getElementsByClassName('modal')[0];

//get a random video
const getVideo = () => {
  let picked = videos[Math.floor(Math.random() * videos.length)];
  const videoContainer = document.getElementsByClassName('modal__video-container')[0];

  //show video
  modal.classList.toggle('show-modal');
  videoContainer.innerHTML = `<iframe id="videoFrame" width="853" height="480" src="https://www.youtube.com/embed/${picked}" frameborder="0" allowfullscreen"></iframe>`;
}

//close video
const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
})

//show the video
pickBtn.addEventListener('click', getVideo);

//show add video component
showInputBtn.addEventListener('click', () => {
  const inputElements = document.getElementsByClassName('nav__input')[0];
  inputElements.classList.toggle('visible');
});

//add video functionality
const addNewVideo = () => {
  const videoUrl = document.getElementById('videoUrl');
  videos.push(videoUrl.value);
  videoUrl.value = '';
}

submitBtn.addEventListener('click', addNewVideo);
