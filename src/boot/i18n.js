import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { LocalStorage, Quasar } from "quasar";
import messages from "src/i18n";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do

  const lang = LocalStorage.getItem("lang") || Quasar.lang.isoName;

  const i18n = createI18n({
    locale: lang,
    legacy: false, // comment this out if not using Composition API
    messages,
  });

  // Tell app to use the I18n instance
  app.use(i18n);
});
