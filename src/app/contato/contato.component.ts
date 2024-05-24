import { NotificacaoService } from 'src/app/notificacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  formContato = this.formBuilder.group({
    nome:    [ "", [Validators.required, Validators.minLength(4)] ],
    assunto: [ "", [Validators.required, Validators.minLength(10)] ],
    tel:     [ "", [Validators.required, Validators.minLength(11)] ],
    email:   [ "", [Validators.required, Validators.email] ],
    mensagem:[ "", [Validators.required, Validators.minLength(20)] ],
  });

  constructor(private formBuilder: FormBuilder,
              private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.formContato.reset();
    this.notificacaoService.notificar("Dados enviados com sucesso!");
  }
}
