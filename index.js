const JadwalKuliah = require('./JadwalKuliah')

const data = [
  {
    nama : 'Bahasa Indonesia',
    start : 7,
    end : 9
  },
  {
    nama : 'Kewarganegaraan',
    start : 7,
    end : 8
  },
  {
    nama : 'Fisika',
    start : 9,
    end : 12
  },
  {
    nama : 'Matematika 1',
    start : 9,
    end : 10
  },
  {
    nama : 'Struktur Data',
    start : 10,
    end : 12
  },
  {
    nama : 'English 1',
    start : 11,
    end : 12
  },
  {
    nama : 'Algoritma',
    start : 12,
    end : 13
  }
]

console.log(new JadwalKuliah(data).getChange());