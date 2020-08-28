import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-episodes',
  templateUrl: './add-episodes.component.html',
  styleUrls: ['./add-episodes.component.scss'],
})
export class AddEpisodesComponent implements OnInit {
  constructor(private fb: FormBuilder, private dataService: DataService) {}
  episodeForm: any;
  ngOnInit(): void {
    this.episodeForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      topic: ['', Validators.required],
      duration: [''],
      guests: ['', Validators.required],
      soundCloud: ['', Validators.required],
      instagram: ['', Validators.required],
    });
  }
  // onAddEpisodes() {
  //   this.dataService.postEpisodes(
  //     this.episodeForm.get('name').value,
  //     this.episodeForm.get('date').value,
  //     this.episodeForm.get('topic').value,
  //     this.episodeForm.get('duration').value,
  //     this.episodeForm.get('guests').value,
  //     this.episodeForm.get('soundCloud').value,
  //     this.episodeForm.get('instagram').value
  //   );
  // }
}
