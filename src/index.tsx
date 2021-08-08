//import Application from './Application';
import Application from "./BoxChildren";
import { render } from 'react-dom';
import './style.scss';

const rootElement = document.getElementById("root");

render(<Application />, rootElement);
