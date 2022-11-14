const getTheNearestLocation = (locations, point) => {
  return locations.reduce(
    (nearest, n) => {
      const d = Math.sqrt(
        (n[1][0] - point[0]) ** 2 + (n[1][1] - point[1]) ** 2
      );
      return nearest.distance < d ? nearest : { distance: d, location: n };
    },
    { distance: Infinity, location: null }
  ).location;
};

const locations = [
  ["Park", [10, 5]],
  ["Sea", [1, 3]],
  ["Museum", [8, 4]],
];

const currentPoint = [15, 5];

console.log(getTheNearestLocation(locations, currentPoint));
