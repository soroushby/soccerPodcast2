import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-load-episodes',
  templateUrl: './load-episodes.component.html',
  styleUrls: ['./load-episodes.component.scss'],
})
export class LoadEpisodesComponent implements OnInit {
  episodesData$: Observable<Episodes[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.episodesData$ = this.dataService.getEpisodes();
  }
}
