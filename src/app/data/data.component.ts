import { Component, ViewChild,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Orchestra } from '../orchestra';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  resultsLength = 0;

  displayedColumns: string[] = ["deviceName","itreference","devicestatus", "timer", "execution_Date","hoto_Checks"];

  constructor(private _service: DataService) { }

   orch: Orchestra[] = [];
    dataSource = new MatTableDataSource(this.orch);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  
  ngOnInit(): void {

    
    this._service.getOrchestra().subscribe(
      data => {
        console.log("response recieved");
        
        this.orch = data;
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
       
        this.resultsLength = data.length;
        

      },
      error => {
        console.log("exception occured")
      }
    )

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
