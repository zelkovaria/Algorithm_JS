function solution(dots) {
  const [x1, y1] = dots[0];
  const [x2, y2] = dots[1];
  const [x3, y3] = dots[2];
  const [x4, y4] = dots[3];
    
  if ((y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1)) return 1;
    
  if ((y3 - y1) * (x4 - x2) === (y4 - y2) * (x3 - x1)) return 1;
    
  if ((y4 - y1) * (x3 - x2) === (y3 - y2) * (x4 - x1)) return 1;
    
  return 0;
}