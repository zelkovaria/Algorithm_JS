function solution(genres, plays) {
    const genresInfo = {}
    const songsByGenre = {}
    
    for(let i = 0; i < genres.length; i ++) {
        const genre = genres[i];
        const play = plays[i];
        
        // 장르별 재생 횟수
        genresInfo[genres[i]] = (genresInfo[genres[i]] || 0) + plays[i];
        
        if(!songsByGenre[genre]) songsByGenre[genre] = [];
        songsByGenre[genre].push({index: i, play});
    }
    
    // 재생횟수가 많은 장르순
    const bestGenres = Object.entries(genresInfo).sort((a,b) => b[1] - a[1]).map(([key, value]) => key);
    
    return pickAlbums(bestGenres, songsByGenre);
    
}

function pickAlbums(bestGenres, songsByGenre) {
    const answer = [];
    
    bestGenres.forEach((genre) => {
        songsByGenre[genre].sort((a, b) => {
            // 횟수 같으면 앨범id순
            if(b.play === a.play) return a.index - b.index;
            // 아니면 재생횟수
            return b.play - a.play;
        });
        
        answer.push(songsByGenre[genre][0].index);
        if (songsByGenre[genre].length > 1) {
      answer.push(songsByGenre[genre][1].index);
        }
    })
    
    return answer;
}