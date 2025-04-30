import express from "express";
import filmRoutes from "./routes/filmRoutes";
import films from "./data/films"; // pastikan path ini sesuai

const app = express();
const PORT = 3000;

app.use(express.json());

// Tambahkan route GET /
app.get("/", (req, res) => {
  let html = "<h1>Film Favorite</h1>";
  html += "<ul>";

  films.forEach(film => {
    html += `<li><strong>${film.title}</strong> (${film.year}) - Disutradarai oleh ${film.director}, Genre: ${film.genre}</li>`;
  });

  html += "</ul>";
  html += "<p>Atau akses <code>/api/films</code> untuk data JSON.</p>";

  res.send(html);
});

// Gunakan route untuk endpoint film
app.use("/api/films", filmRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
