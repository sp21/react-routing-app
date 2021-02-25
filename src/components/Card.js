import React, { Component } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Employee from './Employee';

const emp1 = {
    empId: 100,
    ename: "Jack",
    age: 20,
    salary: 50000,
    image: image1,
    achievements: "Has got 10 bravo and one mvp award"
};
const emp2 = {
    empId: 101,
    ename: "Russel",
    age: 30,
    salary: 50000,
    image: image2,
    achievements: "Has got 3 bravo and one mvp award"
};
class Card extends Component {
    empArr = [emp1, emp2];

    render() {

        return (
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                <div className="row">
                    {this.empArr.map((employee, index) => {
                        return <Employee key={index} emp={employee} />
                    })}
                </div>
            </div>
        );
    }
}

export default Card;