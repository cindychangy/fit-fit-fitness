'use strict';

var videos = ['18hPypKsQ8w', 'VUipWn2gf1M', 'STN3KpGIxcY', '6cm2jHct_fU', 'EtHzY-yD5gY', 'mNoh78nufPo', '76VpyX5AHEI', 'qoaPEkTdg6w', 'RdyMsECmhGQ', 'YaQ7JByPnw8', 'Zl4LyE6k6FI', 'yxAwtm8__E8'];

var showInputBtn = document.getElementById('showInput');
var submitBtn = document.getElementById('submit');
var pickBtn = document.getElementById('pick');
var displayVideo = document.getElementById('display-video');
var modal = document.getElementsByClassName('modal')[0];

//get a random video
var getVideo = function getVideo() {
		var picked = videos[Math.floor(Math.random() * videos.length)];
		var videoContainer = document.getElementsByClassName('modal__video-container')[0];

		//show video
		modal.classList.toggle('show-modal');
		videoContainer.innerHTML = '<iframe id="videoFrame" width="853" height="480" src="https://www.youtube.com/embed/' + picked + '" frameborder="0" allowfullscreen"></iframe>';
};

//close video
var closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', function () {
		modal.classList.toggle('show-modal');
});

//show the video
pickBtn.addEventListener('click', getVideo);

//show add video component
showInputBtn.addEventListener('click', function () {
		var inputElements = document.getElementsByClassName('nav__input')[0];
		inputElements.classList.toggle('visible');
});

//add video functionality
var addNewVideo = function addNewVideo() {
		var videoUrl = document.getElementById('videoUrl');
		videos.push(videoUrl.value);
		videoUrl.value = '';
};

submitBtn.addEventListener('click', addNewVideo);