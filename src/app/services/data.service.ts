import { Episodes } from './../interfaces/episodes';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  episodesData: Episodes[];

  constructor() {}
  // postEpisodes(name, date, topic, duration, guests, soundCloud, instagram) {
  //   return this.db.collection('episodes').add({
  //     name: name,
  //     date: date,
  //     topic: topic,
  //     duration: duration,
  //     guests: guests,
  //     soundCloud: soundCloud,
  //     instagram: instagram,
  //   });
}
