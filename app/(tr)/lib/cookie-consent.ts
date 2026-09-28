export const COOKIE_PREFERENCES_STORAGE_KEY = "pro-makina-cookie-preferences";

// Çerez bandı sunucuda HTML'e dahil edilir (LCP'yi hydrate sonrasına ertelememesi için).
// Onayı daha önce kaydedilmiş ziyaretçilerde bant, bu betik ilk boyamadan önce
// <html data-cookie-consent> işaretini koyduğu için CSS ile hiç görünmeden gizlenir.
export const cookieConsentBootstrapScript = `try{if(localStorage.getItem(${JSON.stringify(
  COOKIE_PREFERENCES_STORAGE_KEY,
)}))document.documentElement.setAttribute("data-cookie-consent","1")}catch(e){}`;
