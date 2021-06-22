import React from 'react';
import lessStyles from './index.less';

interface IProps {
  text: string;
  styles?: React.CSSProperties;
}

const Title = ({ text, styles }: IProps) => {
  console.log(lessStyles, 'lessStyles');
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
};

export default Title;
