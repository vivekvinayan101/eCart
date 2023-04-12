import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //method to covert data
  transform(value: any[],filterString:String,propName:any): any {

    const result:any=[]

    if(!value || filterString=="" || propName==""){
      return value
    }else{
      value.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }

    return null;
  }

}
