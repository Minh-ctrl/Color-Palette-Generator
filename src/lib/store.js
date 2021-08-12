import {writable} from 'svelte/store';
import {browser} from '$app/env';

export const palettes = writable((browser) ? JSON.parse(localStorage.getItem(`palettes`)) ?? [] : []);