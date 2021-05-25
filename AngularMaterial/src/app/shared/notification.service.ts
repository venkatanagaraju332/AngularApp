import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config:MatSnackBarConfig = {
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }

  constructor(public snackBar:MatSnackBar) { }

  success(msg: string){
    this.config['panelClass']=['notification','success'];
    this.snackBar.open(msg,'OK',this.config)
  }

}
