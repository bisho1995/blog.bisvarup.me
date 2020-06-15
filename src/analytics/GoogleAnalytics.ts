import get from 'lodash/get';
import IAnalytics from './IAnalytics';
import {HIT_TYPE} from "./Models"

// todo: need to check if sending custom  data to GA is actually working

 class GoogleAnalytics implements IAnalytics {
    ga: undefined | (any) => void: any

    constructor() {
      // @ts-ignore
      this.ga = get(window || null, 'ga');
    }

    private track = (hitType: HIT_TYPE, pageName: string, options: { [key: string]: string | number; }) => {
      if (!this.ga || !pageName) {
          console.log({pageName,...options,}, {ga:this.ga}, {pageName})
          return;
        }

      this.ga('send', {
        hitType,
         pageName,
        ...options,
      });
    }

    private trackPage = (pageName: string, options: { [key: string]: string | number; })=>{
      this.track(HIT_TYPE.PAGE_VIEW,pageName,options)
    }

    private trackEventData = (pageName: string, options: { [key: string]: string | number; })=>{
      this.track(HIT_TYPE.EVENT,pageName,options)
    }

    public trackPageView = (pageName: string, options: { [key: string]: string | number; }) => {
        this.trackPage(pageName,options)
    }

    public trackEvent = (pageName: string, options: { [key: string]: string | number; }) => {
        this.trackEventData(pageName,options)
    }
}

export default new GoogleAnalytics()