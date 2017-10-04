import { Component, Input, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnDestroy {

  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private _router: Router) {}

  ngOnDestroy() {
    this._router.navigate(['/list']);
  }

}
