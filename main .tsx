import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App'

import App from './App';
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";

import '/src/index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
class Board extends Component {
    render() {
          const textstyle={
            color: 'blue',
          };
          return(
            <div>
                <h1 style={textstyle}>Our Founder</h1>
                <p style={textstyle}></p>
                <p>
                  I<strong> Dr. Amrutha Konijeti, </strong>the founder of <strong>ARKA DENTAL CARE,</strong> I extend a warm welcome to our valued patients and visitors.

At ARKA, our mission is to provide comprehensive and compassionate dental care that goes beyond the conventional approach. With a foundation built on extensive education, including BDS and MDS degrees, specializing in Micro Endodontics and Aesthetic Dentistry, I am dedicated to ensure that each individual receives the highest quality treatment tailored to their unique needs.</p>
            </div>
        )
      }
    }
export default Board;

