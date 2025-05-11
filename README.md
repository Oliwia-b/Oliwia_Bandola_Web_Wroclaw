# Smaczny Koszyk – Aplikacja e-commerce

Główna część aplikacji działa jako **SPA (Single Page Application)** zbudowana w technologii **React** i **React Router**, natomiast **strona potwierdzenia zamówienia (confirmation)** ładowana jest jako osobny plik HTML poza systemem routingu React.

## Technologie

- React
- React Router DOM
- TypeScript
- JavaScript
- CSS, HTML
- LocalStorage (do przechowywania danych o zamówieniu)

## Struktura aplikacji

- **Lista produktów** – możliwość dodania produktów do koszyka.
- **Koszyk** – podgląd zawartości koszyka z możliwością edycji ilości lub usunięcia pozycji.
- **Podsumowanie zamówienia** – pokazuje szczegóły zamówienia i umożliwia jego złożenie.
- **Potwierdzenie zamówienia (confirmation.html)** – osobna strona HTML, która pobiera dane z `localStorage` i wyświetla je po złożeniu zamówienia.

## Uruchomienie aplikacji

1. Zainstaluj zależności:

   ```bash
   npm install
   
2. Uruchom aplikację:

   ```bash
   npm run dev

3. Wejdź w przeglądarce na http://localhost:5173/ (lub adres podany w terminalu).

## Założenia

- Aplikacja nie posiada backendu – dane są przechowywane tymczasowo w localStorage.
- Wszystkie dane produktów są załadowane statycznie.
- Nie ma obsługi logowania użytkowników.
