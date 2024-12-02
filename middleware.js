// middleware.js (or middleware.ts)

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",  
    "/about",      
    "/contact",    
    "/grade",      
    "/study",      
  ]
};
