function day9Solution1(data) {
    data = data.split('\n');
    let cities = {};
    for (let row of data) {
        let parts = row.split(' = ');
        let distance = parseInt(parts[1]);
        let locations = parts[0].split(' to ')
        let origin = locations[0];
        let destination = locations[1];
        if (cities[origin]) {
            cities[origin][destination] = distance;
        }
        if (!cities[origin]) {
            cities[origin] = {};
            cities[origin][destination] = distance;
        }
        if (cities[destination]) {
            cities[destination][origin] = distance
        }
        if (!cities[destination]) {
            cities[destination] = {};
            cities[destination][origin] = distance;
        }
    }
    let possiblePaths = permutator(Object.keys(cities));
    let pathDistances = [];
    for (let path of possiblePaths) {
        let distance = 0;
        for (let i = 0; i < path.length; i++) {
            if (i != path.length - 1) {
                distance += cities[path[i]][path[i+1]];
            }
        }
        pathDistances.push(distance)
    }
    pathDistances.sort(function(a,b) {
        return a - b;
    })
    return pathDistances[0];

    function permutator(inputArr) {
        var results = [];
      
        function permute(arr, memo) {
          var cur, memo = memo || [];
      
          for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
              results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
          }
      
          return results;
        }
      
        return permute(inputArr);
    }
}