import axios from 'axios';

export const YOUTUBE = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
	  part: 'snippet',
	  type: 'video',
	  maxResults: 5,
	  key: 'AIzaSyBtWUZ3qwuIlSOkZGO6b6serr1GWWfHUVc',
  },
});
export const TICKETMASTER = axios.create({
  baseURL: ' https://app.ticketmaster.com/discovery/v2/',
  params: {
	 apikey: 'q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG',
  },
});

