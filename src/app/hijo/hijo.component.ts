import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

@Output() mensajeRecibido = new EventEmitter<string>();

enviarMensaje(){
  
} 

}
