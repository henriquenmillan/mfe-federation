import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import HelperValidators from '../helpers/validators';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  public formCadastro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
  ) {

  }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(120),
        HelperValidators.multipleSpaces,
        HelperValidators.onlyLetters
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    this.cadastroService.saveNewUser(this.formCadastro.value).subscribe({
      next(response) {
        window.dispatchEvent(new CustomEvent('navigateToMfe', {
          detail: {
            url: 'sucesso',
            param: { id: response.id },
            callback: (result: any) => {
              console.log('Resposta:', result);
            }
          }
        }));
      }
    });
  }

}
