import { NbMenuItem } from '@nebular/theme';

export const ADMIN_PAINEL_MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/admin-painel',
  },
  {
    title: 'Quadros',
    icon: 'people-outline',
    link: '/admin-painel/graduates',
  },
  {
    title: 'Cadastros em análise',
    icon: 'people-outline',
    link: '/admin-painel/new-register',
  },
  {
    title: 'Contactos',
    icon: 'email-outline',
    link: '/home/contact',
  },
];
