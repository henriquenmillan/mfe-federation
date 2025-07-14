import { initListenRemoteModule } from './remote-module.factory';
import { RemoteModuleService } from './remote-module.service';

describe('initListenRemoteModule', () => {
  let remoteModuleService: jasmine.SpyObj<RemoteModuleService>;

  beforeEach(() => {
    remoteModuleService = jasmine.createSpyObj('RemoteModuleService', ['listenRemoteModule']);
  });

  it('deve retornar uma função que chama listenRemoteModule', () => {
    const initializer = initListenRemoteModule(remoteModuleService);
    initializer(); // Executa a função retornada

    expect(remoteModuleService.listenRemoteModule).toHaveBeenCalled();
  });
});