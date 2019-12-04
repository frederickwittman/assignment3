dist = [ [5, 5, 5, 7, 10, 5, 5, 6, 6, 5],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [5, 10, 10, 10, 10, 10, 1, 10, 10, 10],
  [9,10, 10, 10, 1, 10, 10, 6, 5, 10],
  [5, 1, 1, 1, 10, 1, 6, 6, 8, 9],
  [4, 9, 9, 10, 10, 10, 9, 10, 7, 9],
  [1, 1, 1, 10, 6, 6, 5, 10, 10, 5],
  [5, 10, 10, 5, 6, 10, 5, 10, 110, 1],
  [10, 4, 5, 10, 15, 10, 6, 1, 0, 10],
  [10, 10, 4, 10, 1, 10, 6, 1, 6, 6] ];

//dist = [[0, 2, 3, 5], [4, 0, 6, 6], [5, 3, 0, 4], [4, 2, 10, 0]]


//console.log(heldKarp(cities1, 0))

/*
var dist = [];
for(var i=0; i<10; i++) {
    dist[i] = [];
    for(var j=0; j<10; j++) {
      if (i == j) {
        dist[i][j] = 0
      }
      else {
        dist[i][j] = Math.round(Math.random() * 10);
      }
    }
}
*/
cities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var cities1 = [];
for (var j = 0; j < 10; j++) {
  cities1[j] = j;
}

console.log(heldKarp(cities, 0))

/*
for ( var i = 0; i < 10; i++) {
  console.log(dist[i])
}
*/

console.log(cities1)
function heldKarp (cities, start) {
  if (cities.length == 2) {
    if (cities[0] != start) {
      return dist[start][cities[0]]
    }
    else {
      return dist[start][cities[1]]
    }
  }
  else {
    list = [];
    temp = cities.slice(0);
    temp.splice(cities.indexOf(start), 1);
    
    min = heldKarp(temp, temp[0]) + dist[start][temp[0]];
    for (var i = 1; i < temp.length; i++) {
      if (heldKarp(temp, temp[i]) + dist[start][temp[i]] < min) {
        min = heldKarp(temp, temp[i]) + dist[start][temp[i]];
      }
    }
    return min;
  }
}

