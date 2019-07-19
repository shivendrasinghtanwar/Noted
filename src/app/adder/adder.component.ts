import { Component, OnInit } from '@angular/core';
import { faPlusCircle,faBackspace,faSave } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {


  faPlusCircle = faPlusCircle;
  faBackspace = faBackspace;
  faSave = faSave;
  textContent = "Write Here!";
  editorForm : FormGroup;

  constructor(private formBuilderService:FormBuilder) { }

  clickedAdd = false;

  ngOnInit() {
    this.clickedAdd = false;
     this.editorForm = this.formBuilderService.group({
        content:''
      })

      this.editorForm.valueChanges.subscribe(console.log)
  }

  toggleClickedAddIcon(){
      this.clickedAdd=!this.clickedAdd
     
  }

  saveFile(){

    // console.log(this.textContent)
    console.log(this.editorForm.controls)
    const blob = new Blob([this.textContent], { type: 'text/plain' });
    // saveAs(blob, "filename");
  }
}
