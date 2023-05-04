import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUser } from 'src/app/models/user.interface';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
  userCreationForm: FormGroup;
  isAddedSuccesfully: boolean = false;

  constructor(private userService: ApiUsersService) {
    this.userCreationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{7}')])
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
