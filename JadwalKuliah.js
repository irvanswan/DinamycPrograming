const Dynamic = require('./Dynamic');
class JadwalKuliah extends Dynamic{
  getChange(n = 0) {
    console.log(this.data)
        if(this.cache[n] !== undefined) {
            return this.cache[n];
        }
        let data = this.data
        let result = [];
        let maxSchedule = 0;
        for(let i = 0; i < data.length; i++) {
            let start = data[i].start;
            if(start >= n) {
                console.log('Menyesuaikan jadwal: ', data[i]);
                let temp_result = data[i]; // [20];
                let resultLain = this.getChange(data[i].end); // [?, ?, ?}]
                let merged=[]
                if(resultLain === undefined){
                  merged = [temp_result]
                }else{
                  merged = [temp_result, ...resultLain]
                }

                result[i] = merged;
                if(result[maxSchedule] === undefined) {
                    maxSchedule = i;
                } else if(result[maxSchedule].length < merged.length) {
                    maxSchedule = i;
                }
            }
        }
        this.cache[n] = result[maxSchedule];
        return result[maxSchedule];
  }
}

module.exports = JadwalKuliah;