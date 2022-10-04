export default function Button (props) {
    return (
        <div>
            <h1>Hello, this is a test!</h1>
            {/* <h2>I love {props.color} color Car.</h2>
            <h2>I love {props.brand} Car.</h2> */}

            <h2>I love {props.testCar.testColor} color Car.</h2>
            <h2>I love {props.testCar.testBrand} Car.</h2>            
        </div>
    );
}