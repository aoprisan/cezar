# In memoriam — Prof. univ. dr. ing. Cezar Oprișan (1955–2018)

Site comemorativ dedicat profesorului **Cezar Oprișan**, prorector al Universității
Tehnice „Gheorghe Asachi" din Iași și fost decan al Facultății de Mecanică.

Realizat cu **React + TypeScript + Vite**, publicat ca pagină statică pe **GitHub Pages**.

🔗 **Adresa site-ului:** https://aoprisan.github.io/cezar/

## Rularea locală

Aveți nevoie de [Node.js](https://nodejs.org/) 18 sau mai nou.

```bash
npm install      # instalează dependențele
npm run dev      # pornește serverul local de dezvoltare
npm run build    # generează versiunea de producție în folderul dist/
npm run preview  # previzualizează local versiunea de producție
```

## Editarea conținutului

Tot textul (biografie, repere ale carierei, mărturii, surse) se află într-un singur
fișier, ușor de modificat:

```
src/data/content.ts
```

Modificați acolo datele, paragrafele sau citatele — restul site-ului se actualizează automat.

## Adăugarea unei fotografii

În prezent se afișează un portret-substitut. Pentru a adăuga o fotografie reală:

1. Copiați fotografia în folderul `public/` (ex. `public/portrait.jpg`).
2. În `src/data/content.ts`, actualizați câmpul `portrait` cu numele fișierului
   (ex. `portrait: 'portrait.jpg'`).

## Publicare pe GitHub Pages

Publicarea este automată prin GitHub Actions (`.github/workflows/deploy.yml`): la fiecare
push pe branch, site-ul este construit și publicat.

**Pas unic de configurare** (necesar o singură dată, din interfața GitHub):

> Settings → Pages → Build and deployment → **Source: GitHub Actions**

După activare, fiecare push declanșează publicarea, iar site-ul devine disponibil la
adresa de mai sus.

> Notă: dacă schimbați numele repository-ului, actualizați `base` în `vite.config.ts`
> (ex. `base: '/nume-nou/'`).

## Surse

Conținutul a fost redactat pe baza paginilor comemorative publice ale Universității
Tehnice „Gheorghe Asachi" din Iași și ale Facultății de Mecanică din Iași.
Linkurile complete se găsesc în subsolul site-ului.
