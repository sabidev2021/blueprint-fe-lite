export interface menuItem {
  label?: string;
  items?: childMenuItem[];
  icon?: string;
  separator?: boolean;
}

export interface childMenuItem {
  label: string;
  icon: string;
  items?: menuItem[];
  routerLink?: Array<string>;
  routerLinkActiveOptions?: childMenuItemActiveOption
}

export interface childMenuItemActiveOption {
  paths: string;
  queryParams: string;
  matrixParams: string;
  fragment: string
}

export interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
}