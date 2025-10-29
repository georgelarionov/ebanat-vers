# Инструкция по деплою

## Vercel (Рекомендуется)

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Установите Vercel CLI:
```bash
npm i -g vercel
```

3. Запустите деплой:
```bash
cd /Users/george/Documents/code/e-at-nextjs
vercel
```

4. Следуйте инструкциям в терминале

## Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Подключите GitHub репозиторий или загрузите папку `.next` после сборки
3. Настройте build команды:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Собственный сервер

1. Соберите проект:
```bash
npm run build
```

2. Запустите на сервере:
```bash
npm start
```

Проект будет доступен на порту 3000.

## Docker

Создайте Dockerfile:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Соберите и запустите:
```bash
docker build -t e-at-nextjs .
docker run -p 3000:3000 e-at-nextjs
```

## Переменные окружения

При необходимости создайте файл `.env.local`:

```env
# Добавьте переменные окружения при необходимости
```

## Оптимизация производительности

- ✅ Все изображения оптимизированы через Next.js Image
- ✅ Шрифты загружаются асинхронно
- ✅ CSS минифицируется автоматически
- ✅ JavaScript код разделен на чанки
- ✅ Статические страницы генерируются во время сборки

## Проверка перед деплоем

```bash
# Сборка без ошибок
npm run build

# Линтер
npm run lint

# Проверка типов
npx tsc --noEmit
```

