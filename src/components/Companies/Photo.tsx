import React from 'react';
import { PhotoType }from './types';
import { PhotoWrapper, PhotoImg, PhotoTitle, PhotoDate, PhotoRemove } from './styled';
import moment from 'moment';
import { Remove } from '../../assets/icons';

interface PhotoProps extends PhotoType {
  onRemove: () => void
}

export const Photo: React.FC<PhotoProps> = (props) => {
  const {
    filepath,
    name,
    onRemove
  } = props;

  return (
    <PhotoWrapper>
      <PhotoImg>
        <img src={filepath} alt=""/>
        <PhotoRemove onClick={onRemove} src={Remove} />
      </PhotoImg>
      <PhotoTitle>
        {name}
      </PhotoTitle>
      {/*<PhotoDate>
        {moment(date).format('DD/MM/YYYY')}
      </PhotoDate>*/}
    </PhotoWrapper>
  )
}
