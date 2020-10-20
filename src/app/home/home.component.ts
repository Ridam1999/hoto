import { Component, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {  MatDialog} from "@angular/material";
import { DataComponent } from '../data/data.component';
import { ComponentType } from '@angular/cdk/portal';
import { FlipComponent } from '../flip/flip.component';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 public isDisable="false";

  constructor(public dialog: MatDialog){}

  openDialog(i: String ){
   if(i=="FlipComponent")
    this.dialog.open(FlipComponent);
    else
    this.dialog.open(DataComponent);
   
  }


  applications = [
    {
      name: 'flip',
    },
    {
      name: 'sesam',
    },
    {
      name: 'salto',
    },
    {
      name: 'gini',
    },
    {
      name: 'fileade',
    },
    {
      name: 'mars',
    },
    {
      name: 'master',
    },
    {
      name: 'oceane',
    },
    {
      name: 'orain',
    },
    {
      name: 'orchestra',
    }
  ];

  selected = [  ];
 
  
  

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
    
  }
  

   onSubmit(){
    $("button[id=submit]").prop("disabled", "disabled");
    this.isDisable="true";
    $(".disable").css("background", "#ccc");
    $(".disable").css("cursor", "no-drop");
  var parent = document.getElementsByClassName("three");
  $(".a").attr('colspan',this.selected.length);
 
  for(var i=0;i<this.selected.length;i++){
  var newel = document.createElement('td');
  newel.innerHTML = this.selected[i].name;
  console.log(this.selected[i].name);
  var n=this.selected[i].name.charAt(0).toUpperCase()+this.selected[i].name.slice(1).toLowerCase();
    const temp=n+"Component";
    console.log(temp);

  newel.onclick=()=>this.openDialog(temp);
  
  newel.setAttribute("id",this.selected[i].name);
  newel.setAttribute("class","data");
  $(".three").css("text-align", "center");
  $(".three").css("cursor", "pointer");
  $(".three").append(newel);
  }
  }
  reset(){
    location.reload(true);
}
}
