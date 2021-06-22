import React, { useEffect } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useDispatch, useSelector } from 'react-redux';

function Root() {
  const appName = useSelector((state: any) => {
    return state.globalModel.appName;
  });
  console.log('appName = ', appName);

  const history = useHistory();
  const dispatch = useDispatch();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('3s 后修改...');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumeMook',
        },
      });
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个制作平台, 让你更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
