import { Component, TemplateRef } from '@angular/core';
import { LanguageService } from './language.service';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ilanguage } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'API CALLING';
  lanData:any;
  editForm: FormGroup;
  
  constructor ( private getApi:LanguageService,
                private dialogService: NbDialogService,
                private editformbuilder: FormBuilder ) {

    this.getApi.getData().subscribe((data)=>{
      // console.log(data)
      this.lanData = data;
      console.log(this.lanData)
    });

    this.editForm = this.editformbuilder.group({
      languageCode: [''],
      languageName: ['']
    });
  }

  onAdd(editDialog: TemplateRef<any>, rowData?: Ilanguage): void {
    if ( rowData != null ) {
      this.editForm.controls['languageCode'].setValue(rowData.languageCode);
      this.editForm.controls['languageName'].setValue(rowData.languageName);
    }
    this.dialogService.open(editDialog, { 
      context: 'Dialog box works...!!' });
  }

}