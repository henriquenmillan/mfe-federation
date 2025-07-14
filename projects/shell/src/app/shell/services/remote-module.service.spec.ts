import { RemoteModuleService } from './remote-module.service';
import { Router } from '@angular/router';

describe('RemoteModuleService', () => {
  let service: RemoteModuleService;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockEventDetail = {
    url: 'cadastro',
    param: { },
    callback: jasmine.createSpy('callback')
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate', 'resetConfig']);
    service = new RemoteModuleService(routerSpy);
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve escutar o evento "navigateToMfe"', () => {
    const listenerSpy = spyOn<any>(service, 'loadRemoteModule');
    service.listenRemoteModule();

    window.dispatchEvent(new CustomEvent('navigateToMfe', { detail: mockEventDetail }));

    expect(listenerSpy).toHaveBeenCalledWith(mockEventDetail);
  });

  it('deve navegar diretamente se o módulo já estiver carregado', () => {
    service['loadedRemotes'].add('cadastro');
    service['loadRemoteModule'](mockEventDetail);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['cadastro'], { queryParams: { } });
  });

  it('deve carregar e configurar o módulo remoto se ainda não estiver carregado', async () => {
    const mockModule = { CadastroModule: class {} };

    spyOn(window.console, 'error');

    spyOn<any>(service, 'loadRemoteModule').and.callThrough();

    await service['loadRemoteModule'](mockEventDetail);

    expect(routerSpy.resetConfig).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('deve disparar callback de erro se módulo remoto não for encontrado', () => {
    service['loadRemoteModule']({ url: 'invalido', callback: mockEventDetail.callback });

    expect(mockEventDetail.callback).toHaveBeenCalledWith({
      status: 'error',
      message: 'Módulo remoto não encontrado.'
    });
  });
});