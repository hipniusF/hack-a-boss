import config from './config.js';
const axios = require('axios');

const API_KEY = config.apiKey;
const BASE_URL = 'https://ws.audioscrobbler.com';

const TOP_ARTISTS_URL = `/2.0/?method=geo.gettopartists&country=spain&api_key=${API_KEY}&format=json`;
const TOP_TRACKS_URL = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json`;
const TOP_TAGS_URL = `/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;
const ARTIST_INFO_URL = `/2.0/?method=artist.getinfo&api_key=${API_KEY}&format=json&mbid=`;
const TRACK_INFO_URL = `/2.0/?method=track.getInfo&api_key=${API_KEY}&format=json&`;

async function getArtists() {
	// This function gets the artists from the api.

	try {
		return (await axios.get(BASE_URL + TOP_ARTISTS_URL)).data.topartists.artist;
	} catch (error) {
		console.log(error);
	}
}

async function getTracks(pictures = false) {
	// This function gets the tracks from the api.
	// 		-If the "pictures" variables is true it will save the images of the albums
	// 		by making individual request to the extra info api. This is really slow.

	// 		-Else it will return the normal tracks from the api

	try {
		if (pictures === 'true') {
			const tracks = (await axios.get(BASE_URL + TOP_TRACKS_URL)).data.tracks.track;
			for (const track of tracks) {
				const info = await getTrackInfo(track.artist.name, track.name);
				if (info.album) {
					track.image[2]['#text'] = info.album.image[2]['#text'];
				}
			}

			return tracks;
		} else {
			return (await axios.get(BASE_URL + TOP_TRACKS_URL)).data.tracks.track;
		}
	} catch (error) {
		console.log(error);
	}
}

async function getTags() {
	// This function gets the tags from the api.

	try {
		return (await axios.get(BASE_URL + TOP_TAGS_URL)).data.tags.tag;
	} catch (error) {
		console.log(error);
	}
}

async function getArtistInfo(mbid) {
	// This function gets extra info from a specific artists using its mbid

	try {
		return (await axios.get(BASE_URL + ARTIST_INFO_URL + mbid)).data.artist;
	} catch (error) {
		console.log(error);
	}
}

async function getTrackInfo(artist, name) {
	// This function gets extra info from a specific track using its name and artist

	try {
		return (
			await axios.get(BASE_URL + TRACK_INFO_URL + `artist=${artist.replace(' ', '+')}&track=${name.replace(' ', '+')}`)
		).data.track;
	} catch (error) {
		console.log(error);
	}
}

export default {
	getArtists,
	getTracks,
	getTags,
	getArtistInfo,
	getTrackInfo
};
