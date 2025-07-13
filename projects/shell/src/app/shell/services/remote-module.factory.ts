import { RemoteModuleService } from "./remote-module.service";

export function initListenRemoteModule(remoteModuleService: RemoteModuleService): () => void {
    return () => {
        remoteModuleService.listenRemoteModule();
    }
}