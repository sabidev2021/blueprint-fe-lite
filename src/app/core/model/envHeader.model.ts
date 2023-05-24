export default class EnvHeader {
    beId: number = 0;
    wpId: number | null = 0;
    whId: number = 0;
    scope: string = '';
}

export enum ScopeType {
    cp, wp, wh
}

