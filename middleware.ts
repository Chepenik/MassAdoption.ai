import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/videos", "/merch", "/freedom-festival-2024", "/team", "/about", "/MrNakamoto", "/api/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};