var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')
var getTranslation = require('./translations/index.js').getTranslation

/**
 * @category Locales
 * @summary French locale.
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}
