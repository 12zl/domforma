# DomForma

Polska aplikacja do treningu w domu: sześć gotowych planów, 18 ćwiczeń, animowane instrukcje, timer, własne presety i łączenie planów.

## Funkcje

- Całe ciało, szyja i barki, wzrost i postawa, mocna sylwetka, rozgrzewka, reset.
- Sesje z wieloma planami, zmiana kolejności, 1–10 rund i 0–120 sekund przerwy.
- Własne presety: dodawanie, edycja, kopiowanie, usuwanie, eksport i import JSON.
- Pokazy ruchu SVG z wolniejszym tempem i instrukcjami krok po kroku.
- Timer oparty na rzeczywistym czasie: pauza, wznawianie, poprzedni/następny etap, dźwięk, opcjonalne polskie komunikaty głosowe, pełny ekran i blokada wygaszania.
- Historia ukończonych sesji i statystyki, lokalnie w przeglądarce.
- Responsywny interfejs, obsługa klawiatury, ograniczanie animacji zgodnie z preferencjami systemu.

## Uruchomienie

Wymagany Node.js; brak zależności:

```sh
node server.mjs
```

Otwórz `http://127.0.0.1:4173`. Na GitHub Pages wybierz wdrożenie z gałęzi `main`, katalog główny `/`.

Aplikacja jest statyczna i nie wymaga konta. Dane są przechowywane w `localStorage` na danym urządzeniu i domenie. Eksportuj presety przed zmianą urządzenia. Pokazy SVG są schematycznymi instrukcjami, a nie nagraniami wideo. Google Fonts jest opcjonalne; przy braku sieci używane są fonty systemowe.

Preset „Wzrost i postawa” zawiera ćwiczenia mobilności i postawy. Nie obiecuje przyrostu długości kości. Ruchy szyi są łagodne, bez obciążania lub pełnych krążeń. Wskazówki bazowe: [CUH](https://www.cuh.nhs.uk/patient-information/neck-exercises-and-advice/), [NHS](https://www.nhs.uk/live-well/exercise/strength-exercises/).
