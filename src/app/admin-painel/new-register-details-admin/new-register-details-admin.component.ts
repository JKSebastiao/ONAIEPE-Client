import { Component, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-graduate-details',
  templateUrl: './new-register-details-admin.component.html',
  styleUrls: ['./new-register-details-admin.component.scss']
})
export class NewRegisterDetailsAdminComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  constructor() { }

  ngOnInit() {
  }

}
