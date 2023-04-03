const scrapeSchoolFull = require("../sscResultSchollWise");

const schoolList = [
  {
    id: 160,
    EIIN: "103399",
    schoolName: "BITGHAR RADHA NATH HIGH SCHOOL, BITGHAR",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
  {
    id: 161,
    EIIN: "103400",
    schoolName: "SALIMGONJ A. R. M. HIGH SCHOOL",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
  {
    id: 162,
    EIIN: "103401",
    schoolName: "BARAIL HIGH SCHOOL",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
];

(async () => {
  for (const data of schoolList) {
    await scrapeSchoolFull(data?.EIIN);
  }
})();
