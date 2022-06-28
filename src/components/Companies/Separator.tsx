import React from 'react';
import {Section} from '../layouts/common/styled';

interface SectionTitleProps {
  title?: string
  children?: any,
  withSeparator?: boolean | undefined
}

export const Separator: React.FC<SectionTitleProps> = ({ title, children, withSeparator }) => {
  return (
    <Section withSeparator={withSeparator}>
      {title}
      {children}
    </Section>
  )
}
