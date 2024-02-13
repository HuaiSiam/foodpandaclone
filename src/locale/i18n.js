import { createI18n } from 'vue-i18n';
import EN from './en.json';
import MY from './my.json';

function customRule(choice, choicesLength, orgRule) {
    if (choice === 0) {
      return 0
    }

    return choicesLength < 15 ? choice : 3
}

export const i18n = createI18n({
    locale: 'EN',
    fallbackLocale: 'EN',
    messages: {
        EN: EN,
        MY: MY
    },
    pluralizationRules: {
        EN: customRule,
        MY: customRule
    },
});