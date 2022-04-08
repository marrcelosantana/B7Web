import './header.css';

type HeaderProps = {
  title: string;
}

export default function Header(props: HeaderProps){
  return(
    <header>
      <span>{props.title}</span>
    </header>
  );
}