import {Injectable} from "@angular/core";
import {DbLocalService} from "@core/dblocal/db-local.service";
import EnvHeader, {ScopeType} from "@core/model/envHeader.model";
import {AuthService} from "@core/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class HttpEnvHeaderService {
    private workplaceId!: number | null

    constructor(
        private auth: AuthService,
        private dbLocalService: DbLocalService) {
        this.workplaceId = this.dbLocalService.get('workplaceId') !== null ? this.dbLocalService.get('workplaceId') : 0;
    }

    fillEnvAttributes() {
        const envHeader = new EnvHeader();
        envHeader.beId = Number(this.auth.beId);
        envHeader.wpId = this.workplaceId !== 0 ? this.workplaceId : 0;
        envHeader.whId = 0;
        envHeader.scope = this.workplaceId !== 0 ? ScopeType[ScopeType.wp] : ScopeType[ScopeType.cp];
        return envHeader
    }

    get attributesEnv() {
        return JSON.stringify(this.fillEnvAttributes())
    }
}