import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SucessoService } from '../services/sucesso.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrl: './sucesso.component.scss'
})
export class SucessoComponent implements OnInit, AfterViewInit {

  private idCadastro!: string;

  public registredUser!: User;

  constructor(
    private activeRoute: ActivatedRoute,
    private sucessoService: SucessoService
  ) {
  }
  
  ngOnInit(): void {
    this.registredUser = new User();
    this.idCadastro = this.activeRoute.snapshot.queryParams['id'] || '';
  }
  
  ngAfterViewInit(): void {
    this.sucessoService.getUser<User>(this.idCadastro).subscribe({
      next: (user: User) => {
        this.registredUser = user;
        console.log('Usuário cadastrado com sucesso:', user);
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
      }
    });
  }
}
