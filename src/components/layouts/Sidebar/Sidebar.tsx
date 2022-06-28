import React from 'react';
import { Wrapper, Title, Subtitle, Link } from './styled';

type SidebarMenuType = {
  title: string
  icon: string
  to: string
}

type SideBarProps = {
  title: string
  subtitle: string
  menu: SidebarMenuType[]
}

export const Sidebar: React.FC<SideBarProps> = (props) => {
  const {
    title,
    subtitle,
    menu
  } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {menu.map((item: SidebarMenuType) => {
        return (
          <Link to={item.to} key={item.title}>
            <img src={item.icon} alt=""/>
            {item.title}
          </Link>
        )
      })}
    </Wrapper>
  )
}
