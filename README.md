# mydagon portfolio

## локальный запуск

требуется node.js 26.

```sh
npm run dev
```

откройте `http://localhost:3000`.

## деплой на vercel

импортируйте проект в vercel или запустите vercel cli из этой папки. дополнительных зависимостей и переменных окружения нет. vercel направит запрос к `/` в node.js function, которая отдаёт текущую страницу `@mydagon.html`.
