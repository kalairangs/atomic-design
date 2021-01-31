export interface Props {
    data: {
      navBar: NavBar;
      carousel: Array<Carousel>;
    };
  }
  
  interface NavBar {
    logo: string;
    menuItem: Array<string>;
    buttonText: string;
    searchPlaceholder:string;
  }
  
  interface Carousel {
    src: string;
    title: string;
    subTitle: string;
    label1: string;
    label2: string;
  }
  
  