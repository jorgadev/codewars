function findOdd(A) {
    const uniq = [...new Set(A)];
    for(let i = 0; i < uniq.length; i++){
        let counter = 0;
        for(let j = 0; j < A.length; j++){
            if(A[j] == uniq[i]){
                counter++;
            }
        }
        if(counter % 2 != 0){
            return uniq[i];
        }
    }
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))