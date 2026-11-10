const menuIcons = {
  House : 'House',
  Search : 'Search',
  InfoFilled : 'InfoFilled',
  CircleCheck : 'CircleCheck',
  Warning : 'Warning',
  Lock : 'Lock',
  CircleClose : 'CircleClose',
} as const

type MenuIconName = keyof typeof menuIcons;

export interface MenuModel {
  name: string;
  link: string;
  icon: MenuIconName;
}