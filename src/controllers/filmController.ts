import { Request, Response } from "express";
import films from "../data/films";
import { Film } from "../models/Film";

export const getAllFilms = (req: Request, res: Response) => {
  res.json(films);
};

export const getFilmById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const film = films.find(f => f.id === id);
  if (!film) return res.status(404).json({ message: "Film not found" });
  res.json(film);
};

export const createFilm = (req: Request, res: Response) => {
  const newFilm: Film = {
    id: films.length + 1,
    ...req.body
  };
  films.push(newFilm);
  res.status(201).json(newFilm);
};

export const updateFilm = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const film = films.find(f => f.id === id);
  if (!film) return res.status(404).json({ message: "Film not found" });

  Object.assign(film, req.body);
  res.json(film);
};

export const deleteFilm = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = films.findIndex(f => f.id === id);
  if (index === -1) return res.status(404).json({ message: "Film not found" });

  films.splice(index, 1);
  res.status(204).send();
};
