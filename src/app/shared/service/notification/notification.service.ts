import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) { }

  showSuccess(message: string): void {
    this.zone.run(() => {
      console.log("success-", message)
      this.snackBar.open(message);
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      console.log("error-", message)
      this.snackBar.open(message, 'X', { duration: 4000, panelClass: ['error'] });
    });
  }
}


