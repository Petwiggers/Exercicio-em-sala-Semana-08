import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EX-AULA-01';
  public nomeLeia: String = 'Léia';
  public infoLeia: String = `Leia Organa (nascida Leia Amidala Skywalker) era uma Humana sensível à Força que serviu como Princesa de Alderaan, membro do Senado Imperial, General da Aliança pela Restauração da República e da Nova República, e a general fundadora da Resistência. Apesar de tudo, ela se tornou fundamental na derrota do Império Galáctico na Guerra Civil Galáctica e liderou a guerra contra a Primeira Ordem. Ela nasceu dezenove anos antes da Batalha de Yavin como filha do Cavaleiro Jedi Anakin Skywalker e da Senadora Padmé Amidala. Depois que sua mãe morreu e seu pai caiu para o lado sombrio da Força para se tornar Darth Vader, Leia foi adotada pela Casa dos Organa. Ela tomou o lugar de seu pai adotivo, Bail Organa, no Senado e ajudou a liderar a batalha contra o Império.`;
  public imagemLeia: String = "https://s2.glbimg.com/564iUm_qElitbPk70KZZJrP83zQ=/0x0:620x465/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2016/J/R/xAVoPdSaApvuYrSmcAoA/leia.jpg";
}
