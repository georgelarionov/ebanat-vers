# Структура проекта E-AT Next.js

## 📁 Файловая структура

```
e-at-nextjs/
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx             # Страница "О нас"
│   ├── catalog/
│   │   └── page.tsx             # Страница каталога
│   ├── product/
│   │   └── page.tsx             # Страница товара
│   ├── globals.css              # Глобальные стили (Webflow CSS)
│   ├── layout.tsx               # Корневой Layout
│   └── page.tsx                 # Главная страница
├── components/                   # React компоненты
│   ├── Header.tsx               # Шапка сайта
│   ├── Footer.tsx               # Подвал сайта
│   └── BurgerMenu.tsx           # Мобильное меню
├── public/                       # Статические файлы
│   ├── css/                     # Оригинальные CSS из Webflow
│   │   ├── e-at-clean.webflow.css
│   │   ├── normalize.css
│   │   └── webflow.css
│   └── images/                  # Все изображения
│       ├── hero-img.webp
│       ├── logo-svg.svg
│       └── ...
├── next.config.ts               # Конфигурация Next.js
├── package.json                 # Зависимости
├── tsconfig.json                # TypeScript конфигурация
├── README.md                    # Основная документация
├── DEPLOY.md                    # Инструкция по деплою
└── STRUCTURE.md                 # Этот файл
```

## 🧩 Компоненты

### Header (`components/Header.tsx`)
**Ответственность:**
- Фиксированная навигация
- Лого
- Меню навигации (Shop, About, Services)
- Иконки (Instagram, Cart)
- Кнопка бургер-меню (мобильная версия)

**Состояние:**
- `isBurgerOpen` - состояние открытия/закрытия мобильного меню

**Брейкпоинты:**
- Desktop (> 767px): полное меню с навигацией
- Mobile (< 767px): скрытая навигация, видна кнопка бургер-меню

### BurgerMenu (`components/BurgerMenu.tsx`)
**Ответственность:**
- Полноэкранное мобильное меню
- Навигационные ссылки
- Контактная информация
- Кнопка закрытия

**Props:**
- `isOpen: boolean` - состояние видимости меню
- `onClose: () => void` - callback для закрытия

**Особенности:**
- Отображается только на мобильных устройствах
- Фиксированная позиция (z-index: 199)

### Footer (`components/Footer.tsx`)
**Ответственность:**
- Форма подписки на новости
- Галерея Instagram (PC и Mobile версии)
- Футер-меню с навигацией
- Контакты и социальные сети
- Copyright информация

**Интеграции:**
- Swiper для мобильной галереи Instagram

**Брейкпоинты:**
- Desktop (> 991px): grid галерея из 6 изображений
- Tablet/Mobile (< 991px): Swiper слайдер

## 📄 Страницы

### Главная страница (`app/page.tsx`)

**Секции:**

1. **Hero секция**
   - Полноэкранный баннер
   - Текст "MINIMALISTIC ARTEFACTS"
   - Декоративная полоса внизу "i can afford"
   - Адаптивные изображения (PC/Mobile)

2. **Main Products**
   - Grid из 2 продуктов
   - Изображения на фоне
   - Информация о продукте
   - Кнопки "Add to cart" и "Learn more"

3. **About секция**
   - Описание бренда
   - Миссия компании
   - Grid layout (desktop) / Stack (mobile)

4. **Lookbook**
   - Слайдер изображений
   - Описание коллекции
   - Статическое изображение (desktop only)

5. **Footer**

### Страница About (`app/about/page.tsx`)

**Структура:**
- Полноэкранный баннер с изображением
- Breadcrumbs (навигационные хлебные крошки)
- Текстовый блок с философией бренда
- Footer

**Особенности:**
- Минималистичный дизайн
- Философский текст
- Адаптивные изображения

### Страница Catalog (`app/catalog/page.tsx`)

**Структура:**
- Полноэкранный баннер
- Breadcrumbs
- Левая колонка:
  - Карточка с описанием продукта
  - "Learn more" ссылка
- Правая колонка:
  - Product line информация
  - Coming soon продукты
- Footer

**Layout:**
- Desktop: 65% левая / 35% правая
- Mobile: stack layout

### Страница Product (`app/product/page.tsx`)

**Структура:**
- Breadcrumbs
- Галерея изображений:
  - Desktop: grid 4 изображения
  - Mobile: Swiper слайдер
- Название и цена продукта
- Селекторы:
  - Color selector
  - Size selector
- Кнопка "Add to cart"
- Описание продукта
- Footer

**Интеграции:**
- Swiper для мобильной галереи

## 🎨 Стили

### Глобальные стили (`app/globals.css`)

**Подключения:**
- Google Fonts (Raleway)
- Все Webflow CSS классы
- Media queries для адаптивности

**Основные классы:**

#### Навигация
- `.menu` - фиксированное меню
- `.menu-links` - навигационные ссылки
- `.menu-buttons` - кнопки меню

#### Hero секция
- `.hero` - контейнер
- `.hero--bg--img--pc` / `.hero--bg--img--mobile` - адаптивные фоны
- `.hero--text` - главный текст

#### Продукты
- `.main_products` - grid контейнер
- `.main_product_block` - блок продукта
- `.hero_block_text` - текст на продукте

#### Footer
- `.footer` - контейнер
- `.subscription` - форма подписки
- `.ig_images_pc` / `.ig_images_mobile` - галереи

### Адаптивность

**Breakpoints:**
```css
@media screen and (max-width: 991px)  /* Tablet */
@media screen and (max-width: 767px)  /* Mobile */
@media screen and (max-width: 479px)  /* Small Mobile */
```

## 🔧 Конфигурация

### Next.js Config (`next.config.ts`)

```typescript
{
  images: {
    unoptimized: true,  // Для статического экспорта
    remotePatterns: []
  }
}
```

### TypeScript Config (`tsconfig.json`)

- Strict mode включен
- Path alias: `@/*` -> `./*`

## 📦 Зависимости

### Production
- `next`: 16.0.1
- `react`: 19.x
- `react-dom`: 19.x
- `swiper`: 8.x

### Development
- `typescript`: 5.x
- `@types/react`: 19.x
- `@types/react-dom`: 19.x
- `@types/node`: 22.x
- `tailwindcss`: 4.x
- `eslint`: 9.x

## 🚀 Команды

```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm start            # Запуск production сервера
npm run lint         # Проверка линтером
```

## ⚡ Производительность

### Оптимизации

1. **Изображения**
   - Next.js Image component
   - Автоматическая оптимизация
   - Lazy loading
   - Адаптивные размеры (srcset)

2. **CSS**
   - Минификация при сборке
   - Critical CSS inline
   - Удаление неиспользуемых стилей

3. **JavaScript**
   - Code splitting
   - Dynamic imports (Swiper)
   - Tree shaking

4. **Шрифты**
   - Google Fonts с display: swap
   - Preconnect для оптимизации

## 🌐 SEO

### Метаданные (`app/layout.tsx`)

```typescript
{
  title: 'e-at-clean',
  description: 'Minimalistic artefacts',
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/webclip.png'
  }
}
```

## 🔄 Интерактивность

### Клиентские компоненты

Используют директиву `'use client'`:
- `Header.tsx` - для состояния бургер-меню
- `BurgerMenu.tsx` - для анимаций
- `Footer.tsx` - для Swiper
- `app/product/page.tsx` - для Swiper галереи

### Серверные компоненты

По умолчанию все остальные компоненты:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/catalog/page.tsx`

## 📱 Адаптивность

### Desktop (> 991px)
- Полное меню навигации
- Grid layouts
- Статические галереи

### Tablet (768px - 991px)
- Упрощенные layouts
- Stack вместо grid
- Swiper слайдеры

### Mobile (< 767px)
- Бургер-меню
- Вертикальные layouts
- Оптимизированные изображения
- Touch-friendly интерфейсы

### Small Mobile (< 479px)
- Минимальные отступы
- Уменьшенные шрифты
- Компактные элементы

## 🎯 Pixel-Perfect реализация

**Гарантии:**
1. Все CSS из Webflow перенесен без изменений
2. Сохранены все классы и их названия
3. Media queries идентичны оригиналу
4. Grid и Flexbox layouts точно повторены
5. Отступы, размеры шрифтов, цвета - все совпадает

**Отличия от оригинала:**
- Использование Next.js Image вместо обычных `<img>`
- React компоненты вместо статического HTML
- TypeScript вместо JavaScript
- Server-side rendering для лучшей производительности

