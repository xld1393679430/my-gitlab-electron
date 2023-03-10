import React from 'react';
import './index.less';
// ๐ ๅผๅฅ็ฎๅๆจก็
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.Template />
    </MyScrollBox>
  );
}
export default ResumeContent;