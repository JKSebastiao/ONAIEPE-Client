import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-offers',
  templateUrl: './offers-admin.component.html',
  styleUrls: ['./offers-admin.component.scss'],
})
export class OffersAdminComponent implements OnInit {

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
        title: 'Empresa',
        type: 'string',
        editable: false,
      },
      age: {
        title: 'Número de Candidatos',
        type: 'number',
        editable: false,
      },
      username: {
        title: 'Selecionados',
        type: 'string',
        editable: false,
      },
    },
    actions: {
      columnTitle: 'Opções',
      position: 'right',
      delete: false,
    },
    mode: 'external',
    noDataMessage: 'Nenhum daddo encontrado',
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit(): void {

  }
  onCreate(event): void {
    // tslint:disable-next-line: no-console
    console.log('Create new');
    this.settings.actions.delete = true;
  }

  onUserRowSelected(event): void {
   // tslint:disable-next-line: no-console
   console.log(event.data);
  }
  onViewDetails(event): void {
    this.router.navigate(['admin-painel/graduates', event.data.id]);
   }

}
