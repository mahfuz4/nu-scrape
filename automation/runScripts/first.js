const scrapeSchoolFull = require("../sscResultSchollWise");

const schoolLIst = [
  {
    id: 156,
    EIIN: "103395",
    schoolName: "BHOLACHANG HIGH SCHOOL, BHOLACHANG",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
  {
    id: 157,
    EIIN: "103396",
    schoolName: "SHYAMGRAM MOHINI KISHORE SCHOOL AND COLLEGE",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
  {
    id: 158,
    EIIN: "103397",
    schoolName: "BIDYAKUT AMAR BOHU MUKHI HIGH SCHOOL, BIDYAKUT",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
  {
    id: 159,
    EIIN: "103398",
    schoolName: "SATMORA HIGH SCHOOL",
    zilla: "BRAHMANBARIA",
    upazila: "NABINAGAR",
  },
];

(async () => {
  for (const data of schoolLIst) {
    await scrapeSchoolFull(data?.EIIN);
  }
})();
