import React, { useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import WebView, { WebViewProps } from 'react-native-webview';

import { useTheme } from '@hooks/useTheme';
import { ChapterItem } from '@database/types';
import { useReaderSettings } from '@redux/hooks';
import { getString } from '@strings/translations';

import { sourceManager } from '../../../sources/sourceManager';
import { useSettings } from '../../../hooks/reduxHooks';

import WebViewReader from './WebViewReader';

const InfinityReader = ({
  chapterInfo,
  html,
  chapterName,
  minScroll,
  nextChapter,
  webViewRef,
  onPress,
  onLayout,
  doSaveProgress,
  navigateToChapterBySwipe,
  onWebViewNavigationStateChange,
}) => {
  const [chapterData, useChapterData] = useState([]);

  // function to get next chapter

  return (
    // chapterData.map((data) => WebView)
    <></>
  );
};

export default InfinityReader;
