import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  responsePhotoList: Photo[] = [];
  buscar: string = '';
  hasMoreList: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void{
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.responsePhotoList = this.activatedRoute.snapshot.data['photos'];
  }

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.buscar = '';
      //Adicionando uma nova referencia para responsePhotoList, contatenando e acrescentando o photos e automaticamente o Angular entende que o valor mudou e atualiza.
      this.responsePhotoList = this.responsePhotoList.concat(photos);

      if(!photos.length)
        this.hasMoreList = false;
    })
  }

  onKeyUp(target: any){
    if(target instanceof EventTarget){
      let element = target as HTMLInputElement;
      this.buscar = element.value;
    }
  }
}
