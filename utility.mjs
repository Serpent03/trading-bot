export function last(array, fromlast=1) {
  return array[array.length - fromlast]
}

export function crossover(s1, s2) {
  try {
    return (last(s1) > last(s2) && last(s1, 2) <= last(s2, 2))
  } catch {
    return false
  }
}

export function inRange(s1, lr, ur) {
  return s1 >= lr && s1 <= ur
}

export function trendLine() {
  
}