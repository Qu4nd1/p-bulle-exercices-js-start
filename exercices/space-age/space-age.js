//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const planet="";
const ageSeconds = 1000000000;
export const age = (planet, ageSeconds) => {
  const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
  
  const yearToSecond = 31557600;
  const yearsOnEarth = ageSeconds / yearToSecond;
  
  const scale = planets[planet.toLowerCase()];
  
  if (scale !== undefined) {
    return Number((yearsOnEarth / scale).toFixed(2));
  }
  else 
    throw new Error('not a planet');;
};
