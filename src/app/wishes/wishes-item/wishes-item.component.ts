import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-wishes-item',
  templateUrl: './wishes-item.component.html',
  styleUrls: ['./wishes-item.component.scss']
})
export class WishesItemComponent implements OnInit {
  @Input() Tempdata: {
    name: string,
    level: string,
    dob: string,
    project: string,
    email: string,
    skills: string,
    picture: string,
  };

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(){
    
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  send(f){
    alert('Form submitted!!');
  }

}
