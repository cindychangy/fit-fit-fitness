
const videos = [
  {
    title: 'example site one',
    url: 'www.google.com'
  },
  {
    title: 'example site two',
    url: 'www.yahoo.com'
  },
  {
    title: 'example site three',
    url: 'www.time.com'
  }
];

const videoUrl = document.getElementById('videoUrl');
const showInput = document.getElementById('showInput');
const submitBtn = document.getElementById('submit');
const pickBtn = document.getElementById('pick');
const inputElements = document.getElementsByClassName('nav__input')[0];
const displayVideo = document.getElementById('display-video');

//pick + display random video
pickBtn.addEventListener('click', () => {
  let picked = videos[Math.floor(Math.random() * videos.length)];
  displayVideo.innerHTML = picked;
  console.log(picked);
});

//play video in fullscreen

//show input components
showInput.addEventListener('click', () => {
  inputElements.classList.toggle('visible');
});

//add video functionality

const addNewVideo = () => {
  videos.push(videoUrl.value);
  videoUrl.value = '';
}

submitBtn.addEventListener('click', addNewVideo)


//be able to delete videos from array

