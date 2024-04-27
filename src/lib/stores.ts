// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";
import type { Session } from "$lib/types/placemark-types";

export const currentSession = writable<Session>();
export const subTitle = writable<string>();