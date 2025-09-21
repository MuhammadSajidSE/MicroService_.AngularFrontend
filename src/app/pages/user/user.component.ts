import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  newUser: any = { name: '', email: '', password: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load users from API
  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        if (res.result) {
          this.users = res.data;
        }
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  // Add new user
  addUser(): void {
    if (!this.newUser.name || !this.newUser.email || !this.newUser.password) {
      alert('All fields are required');
      return;
    }

    this.userService.addUser(this.newUser).subscribe({
      next: (res) => {
        if (res.result) {
          alert('User added successfully');
          this.newUser = { name: '', email: '', password: '' }; // reset form
          this.loadUsers(); // refresh table
        } else {
          alert(res.errormessage || 'Error adding user');
        }
      },
      error: (err) => console.error('Error adding user:', err)
    });
  }
}
