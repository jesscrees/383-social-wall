import { NgxLinkifyOptions } from 'ngx-linkifyjs';

export const paginationLimit = 20;

export const progressSpinnerOptions = {
  diameter: 60,
  strokeWidth: 8
};


export const linkifyOptions: NgxLinkifyOptions = {
  attributes: null,
  className: 'linkified',
  defaultProtocol: 'http',
  events: null,
  format: (value, type) => {
    // console.log(value, type);
    return value;
  },
  formatHref: (href, type) => {
    console.log(href, type);
    if (type === 'mention') {
      return 'https://twitter.com/' + href;

    } else if (type === 'hashtag') {
      return 'https://twitter.com/search?q=%23' + href.substr(1);

    } else {
      return href;
    }
  },
  ignoreTags: [],
  nl2br: false,
  tagName: 'a',
  target: {
    // hashtag: '_blank',
    // mention: '_blank',
    url: '_blank'
  },
  validate: true
};
