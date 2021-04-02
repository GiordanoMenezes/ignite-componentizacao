import { useEffect, useState } from 'react';
import { Genre } from '../models/Genre';
import { Button } from './Button';

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  changeSelectGenre: Function;
}

export function SideBar({ genres, changeSelectGenre, selectedGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    changeSelectGenre(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
