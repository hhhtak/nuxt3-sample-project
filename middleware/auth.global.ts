export default defineNuxtRouteMiddleware((to, from) => {
  console.log("to:", to);
  console.log("from:", from);
  // if (from.fullPath === "/") {
  //   // ↓リダイレクトさせる
  //   // return navigateTo("/");
  //   // ↓ページ移動を中止させる
  //   return abortNavigation();
  // }
});
