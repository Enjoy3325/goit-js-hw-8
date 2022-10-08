import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getVideoTitle, 1000));

function getVideoTitle(evt) {
  localStorage.setItem('videoplayer-current-time', `${evt.seconds}`);
}
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
currentTime ? player.setCurrentTime(currentTime) : '';
