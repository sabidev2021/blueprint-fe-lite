import {Injectable} from '@angular/core';
import {DbLocalService} from '../dblocal/db-local.service';
import {SabiLogService} from "@core/logs/sabi-log.service";
import {environment} from "@env/environment.dev";
import {User} from "@core/auth/user";
import {Observable, map, of} from "rxjs";
import {Router} from "@angular/router";

const USERS = [
  new User(1, 'admin', 'admin', 'ADMIN'),
  new User(2, 'user', 'user', 'USER'),
];
let usersObservable = of(USERS);

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

  constructor(private db: DbLocalService, private log: SabiLogService, private router: Router) {
  }

  initializeUserOptions(): void {
    this._jwtResult = '';
    this._user = 'username';
    this._email = 'username.email@mailinator.com';
    this._name = 'user name'
    this._roles = ['role'];
    this._accessAllowed = true;
    this._beId = '';
    this._beName = '';
    this._userId = ''
    this._workplaceId = '';
    this._verified = '';
    this.db.save(this.ACTIVE_USER, this._user);
  }

  saveTokenLocally(token: string) {
    this.db.save(this.ACTIVE_TOKEN, token)
    this.initializeUserOptions()
  }

  public login(redirectUrl: string) {
    console.log('redirectUrl : ', redirectUrl);
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
    }
  }

  public register(): void {
    console.log('register');
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
    console.log('token expired');
  }

  //dummy auth
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser!: User;
  private authentication: boolean = false;

  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().pipe(map((users: any) => {
      let user = users.find(
        (user:any) => user.username == username && user.password == password
      );
      if (user) {
        this.isAuthentication(username, password, user['role']);
        this.isloggedIn = true;
        this.loggedInUser = user;
      } else {
        this.isloggedIn = false;
      }
      return this.isloggedIn;
    }));
  }

  isAuthentication(username: string, password: string, role: string) {
      this.db.save('authentication', true);
      this.db.save('username', username);
      this.db.save('password', password);
      this.db.save('role', role);
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.db.clear();
    this.isloggedIn = false;
    this.router.navigate([ this.loginUrl ]);
  }
}
