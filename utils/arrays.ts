import { IPlanOptions, PlanTypes, AddOnsTypes, IAddOnsOptions } from '../interfaces/form';

export const returnArray = ( array1: PlanTypes[] | AddOnsTypes[], array2: IPlanOptions[] | IAddOnsOptions[] ): IPlanOptions[] | IAddOnsOptions[] => {

    let newArray: any = [] as IPlanOptions[] | IAddOnsOptions[];
    
    for ( let i = 0; i < array1.length; i++ ){
        for ( let j = 0; j < array2.length; j++ ){

            if ( array2[j].name === array1[i] ){
                
                newArray.push( array2[j] )
            }
        }
    }

    newArray = newArray.map(( n: IAddOnsOptions | IPlanOptions ) => ({
        name: n.name,
        price: n.price
    }) )

    return newArray 
} 

export const reducePriceArray = ( priceService: number, array: IAddOnsOptions[] ): number => {
    const numberReduce = array.reduce(( prev, curr ) => prev + curr.price, priceService );
   
    return numberReduce;
}