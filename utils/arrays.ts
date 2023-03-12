import { IPlanOptions, PlanTypes } from '../interfaces/form';

export const returnArray = ( array1: PlanTypes[], array2: IPlanOptions[] ): IPlanOptions[] => {

    let newArray = [] as IPlanOptions[];
    
    for ( let i = 0; i < array1.length; i++ ){
        for ( let j = 0; j < array2.length; j++ ){

            if ( array2[j].name === array1[i] ){
                
                newArray.push( array2[j] )
            }
        }
    }
    return newArray
} 