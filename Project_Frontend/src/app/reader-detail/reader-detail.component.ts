import { Component } from '@angular/core';
import { Reader } from '../reader';
import { ActivatedRoute } from '@angular/router';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-reader-detail',
  templateUrl: './reader-detail.component.html',
  styleUrls: ['./reader-detail.component.scss']
})
export class ReaderDetailComponent {

  user_id : number;
  reader : Reader;

  constructor(private route : ActivatedRoute,
    private readerService : ReaderService) { }

  ngOnInit() : void {
    this.user_id = this.route.snapshot.params['user_id'];

    this.reader = new Reader();
    this.readerService.getReaderById(this.user_id).subscribe(data => {
      this.reader = data;
    })
  }
}
