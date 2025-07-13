export class RemoteMoluleList {
    [key: string]: RemoteMoluleData;
}
export class RemoteMoluleData {
    remoteEntry!: string;
    remoteName!: string;
    exposedModule!: string;
    moduleName!: string;
    url!: string;
}