import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    form: FormGroup;

    nameCtrl: FormControl;

    refCtrl: FormControl;

    stateCtrl: FormControl;

    constructor (fb: FormBuilder, private modalService: NgbModal, private _service: CollectionService) {

      this.nameCtrl = fb.control('', [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.pattern('')]);
      this.refCtrl = fb.control('', [
                                    Validators.required,
                                    Validators.minLength(4)]);
      this.stateCtrl = fb.control(0);

      this.form = fb.group({
        name: this.nameCtrl,
        reference: this.refCtrl,
        state: this.stateCtrl
      });

    }

  ngOnInit() {
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isError (field: string) {
    return this.form.get(field).dirty && this.form.get(field).hasError('minlength');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a été enregistrée!';
  }

  addItem() {
    this._service.addItem(this.form.value);
    this.reset();
    this.open();
  }

}
