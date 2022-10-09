import {products} from './Data';

export default function Math() {
    const Arr1 = products.map(x => <i>{x.title}</i>);

    return (
        <>
         {Arr1} 
         </>
    );

}