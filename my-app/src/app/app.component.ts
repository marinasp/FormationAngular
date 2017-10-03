import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];

  form: FormGroup;

  nameCtrl: FormControl;

  refCtrl: FormControl;

  stateCtrl: FormControl;

  constructor (fb: FormBuilder, private modalService: NgbModal) {

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

  ngOnInit(): void {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '3456', name: 'Julie', state: 1}),
      new Item({reference: '6789', name: 'Aurélie', state: 2})
    ];

  }

  addItem() {
    console.log(this.form.value);
    // si les names du form sont différents du model (exemple ref dans form et reference côté model)
    // this.collection.push({
    //  name:this.form.get('name').value,
    //  reference:this.form.get('ref').value,
    //  state:this.form.get('state').value,});
    this.collection.push(this.form.value);
    this.reset();
    this.open();

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


}
