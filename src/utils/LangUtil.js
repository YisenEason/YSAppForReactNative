import I18n from 'i18n-js';
import en from '../assets/locale/en.json';
import zh from '../assets/locale/zh.json';
import * as RNLocalize from "react-native-localize";
import _ from 'lodash';

I18n.fallbacks = true;
I18n.translations = {
  'zh': zh,
  'en': en
}

class LangUtil {

  static t = (...args) => {
    return I18n.t(...args)
  }

  static setup(locale) {
    let lang = locale;
    // 为空则使用系统语言，否则使用所设置的语言    
    if (_.isEmpty(locale)) {
      lang = _.first(RNLocalize.getLocales()).languageCode;
    }
    I18n.locale = lang;
  }
}

export default LangUtil;
