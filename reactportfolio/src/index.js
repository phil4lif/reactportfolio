import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>;
const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
// ReactDOM.render(myelement, document.getElementById('root'));
ReactDOM.render(myfirstelement, document.getElementById('root'));
var hello = () => {
    document.write("Hello World!")
}
hello()
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        document.write(this.present() + ', it is  a ' + this.model)
    }
}




var mycar = new Model("toyota", "4runner");
mycar.show();

