import {products} from './Data';

export default function Math() {
    const Arr1 = products.map(x => <li>{x.title}</li>);

    return (
        <>
            <header>
                <p> Fruits and Veggies</p>

            </header>
        
            {Arr1}
         </>
    );

}

