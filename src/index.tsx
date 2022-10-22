import React from 'react';
import IProgressBar from './types/iprogress-bar';

const ProgressBar: React.FunctionComponent<IProgressBar> = (props: IProgressBar) => {
  return (<p>Progressbar</p>)
}

export default React.memo(ProgressBar);
