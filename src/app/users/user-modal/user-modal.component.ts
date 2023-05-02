import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUsersService } from '../api-users.service';
import { ApiUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})

export class UserModalComponent {
  userCreationForm: FormGroup;
  isAddedSuccesfully: boolean = false;

  constructor(private userService: ApiUsersService) {
    this.userCreationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    });
  }

  onSaveUser() {
    if (this.userCreationForm.valid) {
      const user: ApiUser = this.userService.userAfterSave(this.userCreationForm.value);
      this.userService.addUser(user);
      this.isAddedSuccesfully = true;
      setTimeout(() => {
        this.isAddedSuccesfully = false;
      }, 3000);
      this.userCreationForm.reset();
    }
  }
}
