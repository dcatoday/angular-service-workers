import { Component } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatePromptComponent } from './update-prompt/update-prompt.component';
import { SwControllerService } from './sw-controller.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-service-workers a change has happened again!';

  constructor(public dialog: MatDialog, private swController: SwControllerService) {}

  ngOnInit() {
    this.swController.bootstrapUpdater();
    this.swController.changeReady$.subscribe(()=>this.openDialog());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdatePromptComponent, {
      width: '251px',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
