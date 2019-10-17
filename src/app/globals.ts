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
    return value;
  },
  formatHref: (href, type) => {
    return href;
  },
  ignoreTags: [],
  nl2br: false,
  tagName: 'a',
  target: {
    url: '_blank',
  },
  validate: true
};
