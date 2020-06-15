export default interface IAnalytics {
     trackPageView: (pageName: string, options: {[key:string]: string | number})=>void
     trackLink: (pageName:string, options: {[key:string]: string | number})=>void
};
