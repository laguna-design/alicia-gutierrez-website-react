import mixpanel from 'mixpanel-browser';

mixpanel.init('e6e74ac479efda6c7332b81ceee6edf6', {
  debug: true,
  track_pageview: true,
  persistence: 'localStorage',
});

export default mixpanel;