import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '60e32b8633fc4c65b91e64a42877687f',


  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '88c4709d-f416-4a44-98c6-fce37a3724d6',

  // basic site info (required)
  name: 'Vimarsh',
  domain: 'vimarsh.co',
  author: 'Vimarsh Shah',

  // open graph metadata (optional)
  description: 'Thoughts of a 17 y/o maker and learner',

  // social usernames (optional)
  twitter: 'vimarshtweets',
  github: 'vimarsh244',
  linkedin: 'vimarsh-shah',
  newsletter: 'https://newsletter.vimarsh.info/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: '5cc4b3bb61104033879a939219feda95'
  //   },
  //   {
  //     title: 'Projects',
  //     pageId: '66d74e05c0aa47f8b311af231a8cac0c'
  //   }
  // ]
})
