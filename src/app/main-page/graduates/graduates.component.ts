import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class=" fas fa-plus-circle"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="far fa-id-card" title="Mais detalhes"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fas fa-user-plus" title = Adicionar></i>',
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
        editable: false,
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
        editable: false,
      },
      username: {
        title: 'Username',
        type: 'string',
        editable: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        editable: false,
      },
      age: {
        title: 'Age',
        type: 'number',
        editable: false,
      },
    },
    actions:{
      columnTitle: 'Opções',
      position: 'right',
      delete: false
    },
    mode: 'external',
    noDataMessage: 'Nenhum daddo encontrado'
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit(): void {
    
  }
  onCreate(event):void{
    console.log("Create new");
    this.settings.actions.delete = true;
  }

  onUserRowSelected(event): void {
   console.log(event.data);
  }
  onViewDetails(event): void {
    this.router.navigate(['home/graduates', event.data.id]);
   }

}
