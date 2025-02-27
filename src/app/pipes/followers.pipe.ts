import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Followers'
})
export class FollowersPipe implements PipeTransform {
  transform(value: number): string {
    return value > 0 ? `${value} seguidores` : 'Sin seguidores';
  }
}
