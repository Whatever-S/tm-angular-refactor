import { Pipe, PipeTransform } from '@angular/core';
import { UserWithCheck } from '../../models/user.interface';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(users: UserWithCheck[], sortBy: string): UserWithCheck[] {
    if (sortBy === 'firstName') {
      return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortBy === 'lastName') {
      return [...users].sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
    return users;
  }
}
