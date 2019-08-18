import { NbMenuItem } from '@nebular/theme';

export const MAIN_PAGE_MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/home',
  },
  {
    title: 'Nossos Quadros',
    icon: 'people-outline',
    link: '/home/graduates',
  },
  {
    title: 'Sobre nós',
    icon: 'book-outline',
    link: '/home/about',
  },
  {
    title: 'Contactos',
    icon: 'email-outline',
    link: '/home/contact',
  },
];
