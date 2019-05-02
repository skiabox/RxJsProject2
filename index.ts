import { Person } from "./person";
import * as _ from 'lodash';

const foo = new Person();
foo.firstName = "Test";
foo.lastName = "LastName";

console.log(foo);

const array1 = [1, 2, 3, 4, 5];

const reverseArray = _.reverse(array1);