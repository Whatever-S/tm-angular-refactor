import { Pipe, PipeTransform } from '@angular/core';
import { ApiUser } from 'src/app/models/user.interface'; 

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {
  transform(users: ApiUser[], searchTerm: string): ApiUser[] {
    if (!users) {
      return [];
    }

    if (!searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    return users.filter(user => user.name.toLowerCase().includes(searchTerm) || user.username.toLowerCase().includes(searchTerm));
  }
}
