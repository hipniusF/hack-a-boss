import config from './config.js';
const axios = require('axios');

const API_KEY = config.apiKey;
const BASE_URL = 'https://ws.audioscrobbler.com';

// Basic info urls
const TOP_ARTISTS_URL = `/2.0/?method=geo.gettopartists&country=spain&api_key=${API_KEY}&format=json`;
const TOP_TRACKS_URL = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json`;
const TOP_TAGS_URL = `/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;

// EXTRA INFO URL
// Arist urls
const ARTIST_INFO_URL = `/2.0/?method=artist.getinfo&api_key=${API_KEY}&format=json&mbid=`;
const ARTIST_ALBUMS_URL = `/2.0/?method=artist.gettopalbums&api_key=${API_KEY}&format=json&mbid=`;
const ARTIST_TRACK_URL = `/2.0/?method=artist.gettoptracks&api_key=${API_KEY}&format=json&mbid=`;

// Tracks urls
const TRACK_INFO_URL = `/2.0/?method=track.getInfo&api_key=${API_KEY}&format=json&`;
const TRACK_TAGS_URL = `/2.0/?method=track.gettoptags&api_key=${API_KEY}&format=json&`;

// Tags urls
const TAG_INFO_URL = `/2.0/?method=tag.getinfo&api_key=${API_KEY}&format=json&tag=`;
const TAG_TRACK_URL = `/2.0/?method=tag.gettoptracks&api_key=${API_KEY}&format=json&tag=`;
const TAG_ARTISTS_URL = `/2.0/?method=tag.gettopartists&api_key=${API_KEY}&format=json&tag=`;
const TAG_ALBUMS_URL = `/2.0/?method=tag.gettopalbums&api_key=${API_KEY}&format=json&tag=`;

// This function gets the artists from the api.
async function getArtists() {
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

// This function gets the tags from the api.
async function getTags() {
	try {
		return (await axios.get(BASE_URL + TOP_TAGS_URL)).data.tags.tag;
	} catch (error) {
		console.log(error);
	}
}

// This function gets extra info from a specific artists using its mbid
async function getArtistInfo(mbid) {
	try {
		const info = (await axios.get(BASE_URL + ARTIST_INFO_URL + mbid)).data.artist;
		const albums = (await axios.get(BASE_URL + ARTIST_ALBUMS_URL + mbid)).data.topalbums.album;
		const tracks = (await axios.get(BASE_URL + ARTIST_TRACK_URL + mbid)).data.toptracks.track;

		info.topalbums = albums;
		info.toptracks = tracks;

		return info;
	} catch (error) {
		console.log(error);
	}
}

// This function gets extra info from a specific track using its name and artist
async function getTrackInfo(artist, name) {
	try {
		const info = (
			await axios.get(BASE_URL + TRACK_INFO_URL + `artist=${artist.replace(' ', '+')}&track=${name.replace(' ', '+')}`)
		).data.track;

		const tags = (
			await axios.get(BASE_URL + TRACK_TAGS_URL + `artist=${artist.replace(' ', '+')}&track=${name.replace(' ', '+')}`)
		).data.toptags.tag;

		info.toptags = tags;

		return info;
	} catch (error) {
		console.log(error);
	}
}

// This function gets extra info from a specific track using its name and artist
async function getTagInfo(name) {
	try {
		const info = (await axios.get(BASE_URL + TAG_INFO_URL + name.replace(' ', '+'))).data.tag;
		const tracks = (await axios.get(BASE_URL + TAG_TRACK_URL + name.replace(' ', '+'))).data.tracks.track;
		const artists = (await axios.get(BASE_URL + TAG_ARTISTS_URL + name.replace(' ', '+'))).data.topartists.artist;
		const albums = (await axios.get(BASE_URL + TAG_ALBUMS_URL + name.replace(' ', '+'))).data.albums.album;

		info.toptracks = tracks;
		info.topartists = artists;
		info.topalbums = albums;

		return info;
	} catch (error) {
		console.log(error);
	}
}

export default {
	getArtists,
	getTracks,
	getTags,
	getArtistInfo,
	getTrackInfo,
	getTagInfo
};
