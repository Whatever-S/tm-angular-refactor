import { Pipe, PipeTransform } from '@angular/core';
import { ApiUser, } from '../../models/user.interface';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(users: ApiUser[], sortBy: string): ApiUser[] {
    if (sortBy === 'straight') {
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'reverse') {
      return [...users].sort((a, b) => b.name.localeCompare(a.name));
    }
    return users;
  }
}
