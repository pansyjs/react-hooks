import type { LoadResult, Status } from './types';

export const loadScript = (path: string, props = {}): LoadResult => {
  const script = document.querySelector(`script[src="${path}"]`);

  if (!script) {
    const newScript = document.createElement('script');
    newScript.src = path;

    Object.keys(props).forEach((key) => {
      newScript[key] = props[key];
    });

    newScript.setAttribute('data-status', 'loading');
    document.body.appendChild(newScript);

    return {
      ref: newScript,
      status: 'loading',
    };
  }

  return {
    ref: script,
    status: (script.getAttribute('data-status') as Status) || 'ready',
  };
};

export const loadCss = (path: string, props = {}): LoadResult => {
  const css = document.querySelector(`link[href="${path}"]`);
  if (!css) {
    const newCss = document.createElement('link');

    newCss.rel = 'stylesheet';
    newCss.href = path;
    Object.keys(props).forEach((key) => {
      newCss[key] = props[key];
    });
    // IE9+
    const isLegacyIECss = 'hideFocus' in newCss;
    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && newCss.relList) {
      newCss.rel = 'preload';
      newCss.as = 'style';
    }
    newCss.setAttribute('data-status', 'loading');
    document.head.appendChild(newCss);

    return {
      ref: newCss,
      status: 'loading',
    };
  }

  return {
    ref: css,
    status: (css.getAttribute('data-status') as Status) || 'ready',
  };
};
