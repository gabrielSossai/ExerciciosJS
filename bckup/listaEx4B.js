var arrayB = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

for(k=0;k<arrayB.length;k++){
    for(l=k+1;l<arrayB.length;l++){
        if (arrayB[k]<arrayB[l]){
            aux = arrayB[k];
            arrayB[k] = arrayB[l];
            arrayB[l] = aux;
        }
    }
}

console.log(arrayB);