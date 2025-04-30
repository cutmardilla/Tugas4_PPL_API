# API FILM FAVORITE
API ini dibangun menggunakan Express dan TypeScript untuk mengelola data film favorit, termasuk informasi seperti judul, sutradara, tahun rilis, dan genre. API ini mendukung operasi CRUD (Create, Read, Update, Delete) dan menggunakan JSON sebagai format data.

## Fitur

- Melihat Semua Film
- Method: GET
- Endpoint: /api/films
- Contoh Response:

    [
      {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "year": 2010,
        "genre": "Sci-Fi"
      },
      {
        "id": 2,
        "title": "Parasite",
        "director": "Bong Joon-ho",
        "year": 2019,
        "genre": "Thriller"
      }
    ]

## Melihat Film Berdasarkan ID

    - Method: GET
    - Endpoint: /api/films/:id
    - Contoh Response:

    {
      "id": 1,
      "title": "Inception",
      "director": "Christopher Nolan",
      "year": 2010,
      "genre": "Sci-Fi"
    }
## Menambahkan Film Baru

    - Method: POST
    - Endpoint: /api/films
    - Body Request:

{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi"
}

- Contoh Response:

    {
      "id": 3,
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "year": 2014,
      "genre": "Sci-Fi"
    }

## Mengupdate Data Film
- Method: PUT
- Endpoint: /api/films/:id
- Body Request:

{
  "title": "Inception Updated",
  "director": "Christopher Nolan",
  "year": 2010,
  "genre": "Sci-Fi"
}

- Contoh Response:

        {
          "id": 1,
          "title": "Inception Updated",
          "director": "Christopher Nolan",
          "year": 2010,
          "genre": "Sci-Fi"
        }

# Menghapus Film

- Method: DELETE

- Endpoint: /api/films/:id

- Response:

            - Status: 204 No Content (berhasil menghapus)


# Teknologi yang Digunakan

    Node.js: Runtime JavaScript di sisi server

    Express: Framework web untuk Node.js

    TypeScript: Superset JavaScript dengan pengetikan statis

    Nodemon: Alat untuk pengembangan yang secara otomatis me-restart server saat ada perubahan kode
