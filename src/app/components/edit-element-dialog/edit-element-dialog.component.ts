import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-element-dialog',
  templateUrl: './edit-element-dialog.component.html',
  styleUrls: ['./edit-element-dialog.component.scss']
})
export class EditElementDialogComponent implements OnInit {
  optionForm = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
