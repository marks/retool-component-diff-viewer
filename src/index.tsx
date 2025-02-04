import React from 'react'
import { type FC } from 'react'
import ReactDiffViewer, {DiffMethod} from 'react-diff-viewer-continued';

import { Retool } from '@tryretool/custom-component-support'

export const ReactDiffViewerComponent: FC = () => {
  // Left/right values
  const [leftValue, _setLeftValue] = Retool.useStateString({
    name: 'leftValue'
  })
  const [rightValue, _setRightValue] = Retool.useStateString({
    name: 'rightValue'
  })
  // Diff options
  const [splitView, _setSplitView] = Retool.useStateBoolean({
    name: 'splitView',
    initialValue: true,
    inspector: 'checkbox'
  })
  const [disableWordDiff, _setDisableWordDiff] = Retool.useStateBoolean({
    name: 'disableWordDiff',
    initialValue: true,
    inspector: 'checkbox'
  })

  console.debug({ leftValue, rightValue })
  return <ReactDiffViewer oldValue={leftValue} compareMethod={DiffMethod.JSON} newValue={rightValue} splitView={splitView} disableWordDiff={disableWordDiff} />
}