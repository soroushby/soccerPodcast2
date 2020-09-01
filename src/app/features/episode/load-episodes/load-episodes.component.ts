import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';
import { GridApi } from 'ag-grid-community';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-episodes',
  templateUrl: './load-episodes.component.html',
  styleUrls: ['./load-episodes.component.scss'],
})
export class LoadEpisodesComponent implements OnInit {
  episodesData$: Observable<Episodes[]>;
  gridApi: GridApi;
  deleteEpisode;

  selection = new BehaviorSubject<string>('');
  video = new BehaviorSubject<string>('');
  constructor(
    private router: Router,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}
  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
    },
    {
      headerName: 'Topic',
      field: 'topic',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
    },
    {
      headerName: 'Date',
      field: 'date',
      sortable: true,
      filter: true,
      cellRenderer: (data) => {
        return moment(data.createdAt).format('MM/DD/YYYY HH:mm');
      },
    },

    { headerName: 'Guests', field: 'guests', sortable: true, filter: true },
    {
      headerName: 'Sound cloud',
      field: 'soundCloud',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Instagram',
      field: 'instagram',
      sortable: true,
      filter: true,
      cellRenderer: function (params) {
        return '<a [routerLink]="episodes/episodecontent/${this.selected}" target="_blank" rel="noopener">Watch video</a>';
      },
    },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;

    api.sizeColumnsToFit();
  }

  onSelctionChanged() {
    const selectedId = this.gridApi
      .getSelectedRows()
      .map((row) => row.id)
      .join(', ');
    // this.selection.next(selected);

    this.router.navigate(['/episode', selectedId]);
  }

  onShowVideo() {
    const selected = this.gridApi
      .getSelectedRows()
      .map((row) => row.instagram)
      .join(', ');
    this.video.next(selected);
  }

  sendUrl(url: string): SafeResourceUrl {
    // const lastChar = url.substr(url.length - 1);
    // if (url !== '/') url += '/';
    const trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      url
    );
    return trustedDashboardUrl;
  }

  ngOnInit(): void {
    this.episodesData$ = this.dataService.getEpisodes();
  }
}
