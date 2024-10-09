

export function detectAcademicPeriod(degree) {
  const termCount = degree.curriculum.length;
  let academicPeriod = 'semestres';
  let yearsCount = 0;

  // Check if it's a quarter system
  if (degree.curriculum[0].term.toLowerCase().includes('cuatrimestre')) {
    academicPeriod = 'cuatrimestres';
    yearsCount = termCount / 3;
  } else {
    yearsCount = termCount / 2;
  }

  // Round yearsCount to 1 decimal place
  yearsCount = Math.round(yearsCount * 10) / 10;

  return {
    duration: termCount,
    academicPeriod,
    yearsCount
  };
}
