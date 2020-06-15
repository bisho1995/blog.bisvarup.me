import get from 'lodash/get';
import IAnalytics from './IAnalytics';

// todo: need to check if sending custom  data to GA is actually working

 class GoogleAnalytics implements IAnalytics {
    ga: undefined | (any) => void: any

    constructor() {
      // @ts-ignore
      this.ga = get(window || null, 'ga');
    }

    private track = (pageName: string, options: { [key: string]: string | number; }) => {
      if (!this.ga || !pageName) {
          console.log({pageName,...options,})
          return;
        }

      this.ga('send', {
        pageName,
        ...options,
      });
    }

    public trackPageView = (pageName: string, options: { [key: string]: string | number; }) => {
        this.track(pageName,options)
    }

    trackLink = (pageName: string, options: { [key: string]: string | number; }) => {
        this.track(pageName,options)
    }
}

export default new GoogleAnalytics()