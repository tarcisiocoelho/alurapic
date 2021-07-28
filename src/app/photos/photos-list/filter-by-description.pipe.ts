import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filterByDescription' })

export class FilterByDescription implements PipeTransform{

  //o primeiro parametro é em quem voce deseja aplicar o pipe
  //o segundo é o parametro de busca
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    //Se estiver o valor digitado pela busca retorna esse valor
    if(descriptionQuery){
      //Pegar a lista de fotos, para cada foto pegar a description, joga para lowercase, e vê se o que digitou faz parte dessa string
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery))
    }
    //Se não tiver nenhum valor na busca retorna as photos sem filtrar
    else {
      return photos;
    }
  }

}