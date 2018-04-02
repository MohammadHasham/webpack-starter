import '../styles/image_viewer.css';
import download from '../assets/download.jpg';
export default () => {
	const image = document.createElement('img');
	image.src = 'http://lorempixel.com/400/200';

	document.body.appendChild(image);
};
