import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';
import { GridApi } from 'ag-grid-community';
import * as moment from 'moment';

@Component({
  selector: 'app-load-episodes',
  templateUrl: './load-episodes.component.html',
  styleUrls: ['./load-episodes.component.scss'],
})
export class LoadEpisodesComponent implements OnInit {
  episodesData$: Observable<Episodes[]>;
  gridApi;
  constructor(private dataService: DataService) {}
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Topic', field: 'topic', sortable: true, filter: true },
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
    },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;

    api.sizeColumnsToFit();
  }
  ngOnInit(): void {
    this.episodesData$ = this.dataService.getEpisodes();
  }
}
