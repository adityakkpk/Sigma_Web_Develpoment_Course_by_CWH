let arr = [1,4,2,4,2,6,7,8,9];

const seen = new Set();

const double = (num)=>{
    if(!seen.has(num)){
        seen.add(num);
        console.log(num*2);
    }
};

for (const num of arr) {
    double(num);
}

