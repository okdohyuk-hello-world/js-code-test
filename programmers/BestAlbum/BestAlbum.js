function solution(genres, plays) {
  let albums = [];
  /** {
   key: number;
   genre: string;
   play: number;
  }[] */
  let albumCount = [];
  /** {
   genre: string; *super key
   play: number;
  }[] */
  let answer = [];

  for (let i = 0; i < genres.length; i++) {
    albums.push({ key: i, genre: genres[i], play: plays[i] });

    if (
      albumCount.filter((album) => album.genre === albums[i].genre).length !== 0
    ) {
      const index = albumCount.findIndex(
        (album) => album.genre === albums[i].genre
      );
      albumCount[index] = {
        genre: albumCount[index].genre,
        play: albumCount[index].play + albums[i].play,
      };
    } else {
      albumCount.push({ genre: albums[i].genre, play: albums[i].play });
    }
  }

  albumCount.sort((a, b) => b.play - a.play);

  albumCount.map((albumCount) => {
    const genreOnly = albums
      .filter((album) => album.genre === albumCount.genre)
      .sort((a, b) => b.play - a.play);

    genreOnly.map((genreItem, index) => {
      if (index < 2) {
        answer.push(genreItem.key);
      }
    });
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
