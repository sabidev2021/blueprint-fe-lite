import {Injectable} from '@angular/core';
import EnvHeader, {ScopeType} from "@core/model/envHeader.model";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import EnvAttribute from "@core/model/envAttribute.model";
import {HTTP_CONTENT_TYPE} from "@core/constant";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {AuthService} from "@core/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class HttpHeaderService {

    private workplaceId!: number | null;
    envAttr!: EnvAttribute;
    operations!: string;
    isParams: HttpParams | undefined = new HttpParams();

    constructor(
        private auth: AuthService,
        private dbLocalService: DbLocalService
    ) {
    }

    initSabiHttpHeader(operations: string, params?: HttpParams) {
        this.workplaceId = this.dbLocalService.get('workplaceId') !== null ? this.dbLocalService.get('workplaceId') : 0;
        this.envAttr = this.auth.envAttributes.length > 0 ? JSON.parse(this.auth.envAttributes) : null
        this.isParams = params ? params : undefined
        this.operations = operations
        this.initSabiHeaderOptions()
    }

    fillEnvAttributes() {
        const envHeader = new EnvHeader();
        envHeader.beId = Number(this.auth.beId);
        envHeader.wpId = this.workplaceId !== 0 ? this.workplaceId : 0;
        envHeader.whId = 0;
        envHeader.scope = this.workplaceId !== 0 ? ScopeType[ScopeType.wp] : ScopeType[ScopeType.cp];
        return envHeader
    }

    initSabiHeaderOptions() {
        if (this.envAttr !== null) {
            this.fillEnvAttributes()
        }
    }

    setHeaderOptions() {
        const isHttpContentType = this.operations.substring(this.operations.indexOf(':') + 1);
        const encodeENV = JSON.stringify(this.attributesEnv);
        if (this.auth.envAttributes !== "") {
            if (HTTP_CONTENT_TYPE.MULTI_PART === isHttpContentType) {
                return {
                    headers: new HttpHeaders({
                        "Content-Type": "multipart/form-data",
                        "env_header": `${encodeENV}`
                    })
                }
            } else {
                if (this.isParams !== undefined) {
                    let params = this.isParams
                    return {
                        headers: new HttpHeaders({
                            "Content-Type": "application/json",
                            "env_header": `${encodeENV}`
                        }), params
                    }
                } else {
                    return {
                        headers: new HttpHeaders({
                            "Content-Type": "application/json",
                            "env_header": `${encodeENV}`
                        })
                    }
                }
            }
        } else {
            if (HTTP_CONTENT_TYPE.MULTI_PART === isHttpContentType) {
                return {
                    headers: new HttpHeaders({
                        "Content-Type": "multipart/form-data",
                    })
                }
            } else {
                if (this.isParams !== undefined) {
                    let params = this.isParams
                    return {
                        headers: new HttpHeaders({
                            "Content-Type": "application/json",
                        }), params
                    }
                } else {
                    return {
                        headers: new HttpHeaders({
                            "Content-Type": "application/json",
                        })
                    }
                }
            }
        }

    }

    get attributesEnv() {
        return this.fillEnvAttributes()
    }

}
