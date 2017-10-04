import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private _router: Router) {}

  redirectFromCross(){
    this.activeModal.dismiss('Cross click');
    this._router.navigate(['/list']);
  }

  redirectFromClose(){
    this.activeModal.close('Close click');
    this._router.navigate(['/list']);
  }

  ngOnInit() {
  }

}
