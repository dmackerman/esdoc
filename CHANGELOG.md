# Changelog

## 0.3.1 (2015-09-27)
- **Fix**
  - Multi-line description truncated in summary ([#85](https://github.com/esdoc/esdoc/issues/85))

## 0.3.0 (2015-09-21)
- **Breaking**
  - Change side bar navigation style ([#84](https://github.com/esdoc/esdoc/issues/84))
- **Fix**
  - Inner link in user markdown ([#80](https://github.com/esdoc/esdoc/issues/80))

## 0.2.6 (2015-09-13)
- **Fix**
  - Crash when array destructuring is exist ([#77](https://github.com/esdoc/esdoc/pull/77) Thanks @noraesae, [#76](https://github.com/esdoc/esdoc/issues/76))
  - Crash when computed property method is exist ([#78](https://github.com/esdoc/esdoc/pull/78) Thanks @noraesae, [#73](https://github.com/esdoc/esdoc/issues/73))
  - Crash when loading config without .js and .json ([#74](https://github.com/esdoc/esdoc/issues/74))
  - Crash when unknown class new expression variable is exist ([#75](https://github.com/esdoc/esdoc/issues/75))

## 0.2.5 (2015-09-06)
- **Feat**
  - Support JavaScript code as esdoc config ([#71](https://github.com/esdoc/esdoc/pull/71) Thanks @raveclassic)
  - Add ``config.includeSource`` ([#67](https://github.com/esdoc/esdoc/issues/67), [#68](https://github.com/esdoc/esdoc/issues/68))
    - If you do not want to include source code into documentation, set ``config.includeSource: false``
  - Display undocument lines in source file ([#61](https://github.com/esdoc/esdoc/issues/61))
- **Fix**
  - Excludes member that has same name getter/setter/method ([#64](https://github.com/esdoc/esdoc/issues/64), [#70](https://github.com/esdoc/esdoc/issues/70))
  - Crash when destructuring is exist at top ([#65](https://github.com/esdoc/esdoc/issues/65))

## 0.2.4 (2015-08-30)
- **Fix**
  - Crash if un-initialized let/const variables are exist ([#60](https://github.com/esdoc/esdoc/issues/60))
  - Invalid documentation when computed members(``this[prop] = 123``) are exist ([#59](https://github.com/esdoc/esdoc/issues/59))

## 0.2.3 (2015-08-29)
- **Fix**
  - Fail if config.source is ``./`` ([#56](https://github.com/esdoc/esdoc/issues/56))
  - Not match ``includes, excludes`` in config ([#57](https://github.com/esdoc/esdoc/issues/57))
  - Not process ``@param`` in ``@typedef`` of function ([#58](https://github.com/esdoc/esdoc/issues/58))

## 0.2.2 (2015-08-23)
- **Fix**
  - Badge color ([645a256](https://github.com/esdoc/esdoc/commit/645a2569c4d814a0a494d3759d2b3be47c68f25f))
  - Crash if package.json is not exits ([#50](https://github.com/esdoc/esdoc/issues/50))
- **Deprecated**
  - config.importPathPrefix ([#46](https://github.com/esdoc/esdoc/issues/46))
  - coverage badge in README.md ([#47](https://github.com/esdoc/esdoc/issues/47))

## 0.2.1 (2015-08-09)
- **Fix**
  - Fail loading plugin ([#44](https://github.com/esdoc/esdoc/issues/44))

## 0.2.0 (2015-08-03)
- **Feat**
  - Support coverage badge ([#34](https://github.com/h13i32maru/esdoc/issues/34))
  - Plugin feature ([#27](https://github.com/h13i32maru/esdoc/issues/27))
- **Fix**
  - Anonymous class document tag ([#38](https://github.com/h13i32maru/esdoc/issues/38))
  - Repository style in package.json ([#39](https://github.com/esdoc/esdoc/pull/39)) Thanks [@r7kamura](https://github.com/r7kamura)
  - Repeat @typedef in document ([#40](https://github.com/esdoc/esdoc/issues/40))

## 0.1.4 (2015-07-20)
- **Feat**
  - Support Complex class extends ([#26](https://github.com/h13i32maru/esdoc/issues/26))
  - Support caption tag in ``@example`` ([#33](https://github.com/h13i32maru/esdoc/issues/33))
  - Support separated function and variable exporting ([#30](https://github.com/h13i32maru/esdoc/issues/30))
- **Fix**
  - Crash when object pattern argument does not have @param ([#24](https://github.com/h13i32maru/esdoc/issues/24))

## 0.1.3 (2015-07-05)
- **Feat**
  - Support instance export([#11](https://github.com/h13i32maru/esdoc/issues/11), [#19](https://github.com/h13i32maru/esdoc/issues/19))
    - ``export default new Foo()``
    - ``export let foo = new Foo()``
  - Support anonymous class/function export ([#13](https://github.com/h13i32maru/esdoc/issues/13))
    - ``export default class{}`` and ``export default function(){}``
  - Show a detail log when ESDoc could not process a input code ([#14](https://github.com/h13i32maru/esdoc/issues/14))
  - Support ``git@github.com:foo/bar.git`` style url ([#22](https://github.com/h13i32maru/esdoc/issues/22))
- **Fix**
  - Broken ``@desc`` when it has html code ([#12](https://github.com/h13i32maru/esdoc/issues/12))
  - Crash complex ``ExportDefaultDeclaration`` and ``ExportNamedDeclaration``([957d61a](https://github.com/h13i32maru/esdoc/commit/957d61a8febb4fe3dda4d65bae8dc1cbc210250c))
  - Crash when a class extends unexported class ([bf87643](https://github.com/h13i32maru/esdoc/commit/bf876430c49937932b2ba07602363b6927f211cc))
  - Tab in document tag ([#20](https://github.com/h13i32maru/esdoc/pull/20))
- **Internal**
  - Change internal tags name ([#23](https://github.com/h13i32maru/esdoc/issues/23))

## 0.1.2 (2015-06-06)
- **Breaking Changes**
  - drop `esdoc ./path/to/dir` implementation ([b4d2121](https://github.com/h13i32maru/esdoc/commit/b4d21219221b8307a155fdee85e2ed5fed9c4429))
- **Fix**
  - Fail parsing of React JSX syntax ([#3](https://github.com/h13i32maru/esdoc/pull/3)). Thank you [@koba04](https://github.com/koba04)
  - Home link does not work as expected ([97f47cf](https://github.com/h13i32maru/esdoc/commit/97f47cf8a8e90cdd6066417fbe9ce835e8a370c8))
  - Separated export is not shown in document ([6159c3a](https://github.com/h13i32maru/esdoc/commit/6159c3ad28f5c0736d2a2c22f39c94e2e1b6de61))
  - Crash when a class extends nested super class. ([2d634d0](https://github.com/h13i32maru/esdoc/commit/2d634d06f7a9475e92fae5c0773dfae579b5b314))
  - Web font loading protocol ([5ba8d82](https://github.com/h13i32maru/esdoc/commit/5ba8d82684d84a498e5285c929bbfcccc5ca6013))

## 0.1.1 (2015-05-10)
- **Feat**
  - Support Windows ([edd09cb](https://github.com/h13i32maru/esdoc/commit/edd09cbdf5f4032aa59a5e6e59ab62727475a61a) , [2d34d46](https://github.com/h13i32maru/esdoc/commit/2d34d464f4584820450041bff2e64888b08b5aad))

## 0.1.0 (2015-05-05)
- First release
