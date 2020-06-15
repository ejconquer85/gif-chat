import { Component, OnInit } from '@angular/core';
import { GiphyModel } from './giphy-finder.model';
import { GiphyFinderService } from './giphy-finder.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-giphy-finder',
  templateUrl: './giphy-finder.component.html',
  styleUrls: ['./giphy-finder.component.scss']
})
export class GiphyFinderComponent implements OnInit {

  loading= false;
  text: string;
  giphys: GiphyModel[];
 

  constructor(private giphyFinderService: GiphyFinderService,
    public matDialogRef: MatDialogRef<GiphyFinderComponent>) { }

  ngOnInit(): void {
    this.loading = true;
      this.giphyFinderService.getAll().subscribe(data => { 
        this.giphys = data;
        this.loading = false;
      });
  }

  selectedGiphy(giphy: GiphyModel) {
      this.matDialogRef.close(giphy);
  }

  inputTextChanged(newValue) {
    this.text = newValue;
    if (this.text.length >= 3) {
      this.loading = true;
      this.giphyFinderService.searchGiphy(this.text).subscribe(data => {
        this.giphys = data;
        this.loading = false;
      });
    }
  }

}
