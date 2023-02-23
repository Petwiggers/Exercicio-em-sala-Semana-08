import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})

export class LeiaComponent {
  @Input() nome: String = '';
  @Input() informacoes: String = '';
  @Input() imagem: String = '';
}
