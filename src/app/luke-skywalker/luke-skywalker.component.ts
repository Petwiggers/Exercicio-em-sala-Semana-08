import { Component } from '@angular/core';

@Component({
  selector: 'app-luke-skywalker',
  templateUrl: './luke-skywalker.component.html',
  styleUrls: ['./luke-skywalker.component.css']
})
export class LukeSkywalkerComponent {
  public nome = "Luke Skywalker";
  public informacoes = `Luke Skywalker é o protagonista da trilogia original da série Star Wars,
   faz participação em Star Wars: O Despertar da Força em Star Wars: Os Últimos Jedi. 
   É interpretado pelo ator norte-americano Mark Hamill. 
   Um personagem essencial e importante na luta da Aliança Rebelde contra o Império Galáctico, 
   é o irmão gêmeo da líder rebelde Princesa Leia Organa de Alderaan, foi amigo do mercenário e 
   contrabandista Han Solo, aprendiz do grão-mestre jedi Yoda, e o filho do Jedi caído Darth Vader 
   (Anakin Skywalker) e da Rainha de Naboo/Senadora da República Padmé Amidala. Ele é o tio e antigo 
   mestre de Kylo Ren, antes deste ter se convertido ao Lado Negro da Força. O yoda também.`
   public imagem = 'https://upload.wikimedia.org/wikipedia/pt/c/cf/LukeTatooine.jpg';
}
