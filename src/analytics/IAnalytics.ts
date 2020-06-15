export default interface IAnalytics {
     trackPageView: (pageName: string, options: {[key:string]: string | number})=>void
     trackEvent: (pageName:string, options: {[key:string]: string | number})=>void
};
