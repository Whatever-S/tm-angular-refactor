import { Pipe, PipeTransform } from '@angular/core';
import { UserWithCheck } from 'src/app/models/user.interface'; 

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {
  transform(users: UserWithCheck[], searchTerm: string): UserWithCheck[] {
    if (!users) {
      return [];
    }

    if (!searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    return users.filter(user => user.firstName.toLowerCase().includes(searchTerm) || user.lastName.toLowerCase().includes(searchTerm));
  }
}
