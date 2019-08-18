import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
})
export class CreateOfferComponent implements OnInit {

  offerForm: FormGroup;

  continents = ['Africa', 'Europa', 'America', 'Asia'];
  paises = ['Angola', 'Brasil', 'Portugal', 'Poland'];
  degrees = ['doutor engenheiro', 'doutor', 'mestre engenheiro', 'mestre', 'engenheiro', 'licenciado'];
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.offerForm = this.fb.group({
      company: ['', Validators.required],
      nrCandidate: ['', Validators.required],
      observation: ['', Validators.required],
    });
  }

  onOfferFormSubmit() {
    this.offerForm.markAsDirty();
  }

}
