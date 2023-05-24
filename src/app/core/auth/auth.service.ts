import {Injectable} from '@angular/core';
import {KeycloakEventType, KeycloakService} from "keycloak-angular";
import {DbLocalService} from '../dblocal/db-local.service';
import {SabiLogService} from "@core/logs/sabi-log.service";
import {environment} from "@env/environment.dev";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  ACTIVE_TOKEN = 'activeToken';
  ACTIVE_USER = 'activeUser';
  private _accessAllowed = false;
  private _user = '';
  private _email = '';
  private _tokenId: any = '';
  private _roles: any[] = [];
  private _beId = '';
  private _beName = '';
  private _userId = ''
  private _workplaceId = '';
  private _name = '';
  private _token: any = '';
  private _verified = '';
  private _jwtResult: any;
  private _env: string = '';

  get accessAllowed(): boolean {
    return this._accessAllowed;
  }

  get user(): string {
    return this._user;
  }

  get email(): string {
    return this._email;
  }

  get tokenId(): any {
    return this._tokenId;
  }

  get roles(): any[] {
    return this._roles;
  }

  get beId(): string {
    return this._beId;
  }

  get beName(): string {
    return this._beName;
  }

  get userId(): string {
    return this._userId;
  }

  get workplaceId(): string {
    return this._workplaceId;
  }

  get name(): string {
    return this._name;
  }

  get token(): string {
    return this._token;
  }

  get verified(): string {
    return this._verified
  }

  get envAttributes(): string {
    return this._env;
  }

  constructor(private keycloak: KeycloakService, private db: DbLocalService, private log: SabiLogService) {
    this.keycloak.keycloakEvents$.subscribe({
      next: (e) => {
        if (e.type == KeycloakEventType.OnTokenExpired) {
          console.log('Token has expired need to refresh')
          if (this.keycloak.isTokenExpired())
            this.updateToken()
        }
      }
    });
  }

  initializeUserOptions(): void {
    this._jwtResult = this.getJwtResult()
    this._user = this.keycloak.getUsername();
    this._email = this.keycloak.getUsername();
    this._name = this._jwtResult.name
    this._roles = this.keycloak.getUserRoles();
    this._accessAllowed = this._jwtResult;
    this._beId = this._jwtResult.beId == undefined ? '' : this._jwtResult.beId;
    this._beName = this._jwtResult.beName == undefined ? '' : this._jwtResult.beName;
    this._userId = this._jwtResult.sub
    this._workplaceId = this._jwtResult.workplaceId == undefined ? '' : this._jwtResult.workplaceId;
    this._verified = this._jwtResult.email_verified;
    this.db.save(this.ACTIVE_USER, this._user);
  }

  isAccessAllowed(): boolean {
    return this._accessAllowed;
  }

  saveTokenLocally(token: string) {
    this.db.save(this.ACTIVE_TOKEN, token)
    this.initializeUserOptions()
  }

  public async updateToken() {
    await this.keycloak.updateToken(-1)
      .then(async (refreshed) => {
        if (refreshed) {
          const tk = await this.keycloak.getToken()
          this.saveTokenLocally(tk)
          this.log.info("Token was successfully refreshed");
        } else {
          console.info("Token is still valid");
        }
      }).catch(() => {
        this.log.warning("Failed to refresh the token, or the session has expired");
        this.logout('/').then(() => {
          this.log.info("user has forced to logout")
        })
      })
  }

  public login(redirectUrl: string) {
    this.keycloak.login({
      redirectUri: redirectUrl,
    })
  }

  public loginDefault(): void {
    this.keycloak.login();
  }

  public async logout(redirectUrl: string) {
    try {
      if (environment.tracker) {
        await (window as any).Moengage.track_event('logout success', {lifetime_usage: 'no access'})
        await (window as any).Moengage.destroy_session()
      }
    } catch (err) {
      this.log.error(err)
    } finally {
      this.db.clear()
      this.log.info("Db local has destroyed")
      await this.keycloak.logout(redirectUrl)
    }
  }

  public register(): void {
    this.keycloak.register();
  }

  getJwtResult() {
    this._token = this.db.get(this.ACTIVE_TOKEN);
    if (this._token != null) {
      return AuthService.parseJwt(this._token)
    } else {
      this._token = ''
      return null
    }
  }

  private static parseJwt(token: any) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  isTokenExpired() {
    return this.keycloak.isTokenExpired()
  }

}
