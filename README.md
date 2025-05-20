# 🚀 SkwnFrontendDev-1-Tunggul_Wido_K

Project ini dibangun menggunakan [Bun](https://bun.sh) – sebuah runtime JavaScript modern yang cepat dan efisien.

## DEMO APP
[Landing Page Furnitur](https://skwn-frontend-dev-1-tunggul-wido-k.vercel.app/)

## 📦 Prasyarat

Pastikan kamu sudah menginstal:

* [Bun](https://bun.sh) – bisa diinstal via:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
* Git (opsional, jika ingin clone repo)
* Node.js & npm tidak diperlukan (karena menggunakan Bun)

## 📁 Instalasi

1. **Clone repositori**

   ```bash
   git clone https://github.com/username/nama-project.git
   cd nama-project
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

## ▶️ Menjalankan Proyek

Untuk menjalankan development server:

```bash
bun run dev
```

Atau sesuai script yang tersedia di `package.json`. Misalnya:

```bash
bun run start     # Untuk production
bun run build     # Untuk build project
```

## 📂 Struktur Direktori (Opsional)

```
.
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
├── public/
├── bun.lockb
├── package.json
└── README.md
```

## 📝 Catatan

* Jika kamu menggunakan package yang belum mendukung Bun, kamu mungkin perlu fallback ke `npm`/`node` di beberapa kasus.
* Bun menggunakan file `bun.lockb` sebagai pengganti `package-lock.json` atau `yarn.lock`.

---
