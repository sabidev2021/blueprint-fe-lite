import {AuthService} from "../auth/auth.service";
import {SabiLangService} from "../lang/sabi-lang.service";

export class SabiBaseComponent {
  private langList: Map<string, string>

  constructor(
    protected auth: AuthService,
    langService: SabiLangService,
    componentName: string
  ) {
    this.langList = langService.getListCaption(componentName)!
  }

  lang(code: string) {
    return this.langList.get(code)
  }
}
