import { Component, OnInit, Input } from '@angular/core';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-episode-content',
  templateUrl: './episode-content.component.html',
  styleUrls: ['./episode-content.component.scss'],
})
export class EpisodeContentComponent implements OnInit {
  @Input() episode: Episodes;
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(this.episode.instagram);
  }
  onDeleteEpisodes(id) {
    //return this.dataService.deleteEpisodes(id);
  }
  sendUrl(url: string): SafeResourceUrl {
    // const lastChar = url.substr(url.length - 1);
    // if (url !== '/') url += '/';
    const trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      url
    );

    return trustedDashboardUrl;
  }
}
