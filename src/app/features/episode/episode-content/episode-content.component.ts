import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-episode-content',
  templateUrl: './episode-content.component.html',
  styleUrls: ['./episode-content.component.scss'],
})
export class EpisodeContentComponent implements OnInit {
  episode: Observable<Episodes>;

  public id: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.episode = this.dataService.getEpisode(this.id);
  }

  onDeleteEpisodes(id) {
    return this.dataService.deleteEpisodes(id);
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
