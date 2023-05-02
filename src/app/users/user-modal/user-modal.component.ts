import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUsersService } from '../api-users.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})

export class UserModalComponent {
  userCreationForm: FormGroup;

  constructor(private userService: ApiUsersService) {
    this.userCreationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    });
  }

  onSaveUser() {
    console.log(this.userCreationForm.value);
  }
}
