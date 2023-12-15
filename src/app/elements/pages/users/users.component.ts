import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsersList(this.currentPage).subscribe(
      (response: any) => {
        this.users = response.data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }
}
