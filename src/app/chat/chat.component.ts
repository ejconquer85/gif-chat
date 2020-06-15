import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Message } from './chat.mode';
import { MatDialog } from '@angular/material/dialog';
import { GiphyFinderComponent } from '../giphy-finder/giphy-finder.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  
  messages: Message[]=[];
  loading = false;
  text: string;
  @ViewChild('formContentDiv')
  formContentDiv: ElementRef;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.messages.push({ message: 'This is a hardcoded received Text', sent: false, isGiphy:false});
    this.messages.push({ message: 'This is a hardcoded sent Text', sent: true, isGiphy: false});

  }

  loadGiphyFinder(){ 
    const matDialogInstance = this.matDialog.open(GiphyFinderComponent, {
      width: '60%'
    });

    matDialogInstance.afterClosed().subscribe(result => {
      this.messages.push({ message: result.image, sent: true, isGiphy:true });
    });
  }

  sendMessage(){ 
    this.messages.push({ message: this.text, sent: true, isGiphy: false});
  }

  ngAfterViewChecked() {        
    this.scroll();        
} 

  scroll() {
    if (this.formContentDiv) {
      this.formContentDiv.nativeElement.scrollTop = this.formContentDiv.nativeElement.scrollHeight;
    }
  }

}
