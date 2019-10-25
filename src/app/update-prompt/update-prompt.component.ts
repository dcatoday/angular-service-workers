import { Component, OnInit, Inject } from '@angular/core';
import { SwControllerService } from '../sw-controller.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-prompt',
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.scss']
})
export class UpdatePromptComponent implements OnInit {

  constructor(
    private swController: SwControllerService,
    public dialogRef: MatDialogRef<UpdatePromptComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  activateUpdate() {
    this.swController.activateUpdate();
  }

}
