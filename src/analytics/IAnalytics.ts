export default interface IAnalytics {
     trackPageView: (pageName: string, options: {[key:string]: any})=>void
     trackEvent: (pageName:string, options: {[key:string]: any})=>void
};
