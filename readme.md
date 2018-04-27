* Для работы сборки необходимо устновить **node.js** и все необходимы плагины командой **npm i**
* **npm start** - запуск разработки и сборки
* **npm run final** - запуск сборки на продакшен без sourcemaps
* **npm run sort** - запуск сортировки свойств стилей в блоках
* **npm run web** - публикация проекта на хостинг github
* **node block.js [имя блока] [доп. расширения через пробел]** - создание БЭМ блока (по умолчанию *.html и *.scss)
* **npm run symbols** - сборка svg-спрайта из файлов папки /img/icon
* **npm run fonts** - конвертация шрифтов ttf в woff, woff2 из папки /fonts
* **pyftsubset fonts/(из файла).ttf --output-file=fonts/(в файл).ttf --unicodes-file=codes.txt** - вырезка лишних символов из шрифтов ttf в папке /fonts
