# React + Vite

# 💰 Personal Loan EMI Calculator

A React-based EMI (Equated Monthly Installment) calculator that helps users estimate their monthly loan repayments in real time.

## 📸 Overview

This component allows users to input loan parameters via sliders or text fields and instantly see their monthly EMI. Built with React hooks and styled using Bootstrap.

---

## ✨ Features

- **Real-time EMI calculation** — updates automatically as inputs change using `useEffect`
- **Dual input controls** — each parameter can be set via a range slider or a text input field
- **Three configurable parameters:**
  - Loan Amount (₹25,000 – ₹1,00,00,000)
  - Loan Tenure (1 – 7 Years)
  - Interest Rate (9.99% – 24% per annum)
- **Displays monthly EMI** rounded to 2 decimal places
- Responsive two-column layout using Bootstrap grid

---

## 🧮 EMI Formula

```
EMI = P × R × (1 + R)^N / ((1 + R)^N - 1)
```

| Variable | Description |
|----------|-------------|
| `P` | Principal loan amount |
| `R` | Monthly interest rate (Annual Rate ÷ 12 ÷ 100) |
| `N` | Loan tenure in months (Years × 12) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn
- A React project (Create React App, Vite, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/emi-calculator.git
   cd emi-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Bootstrap** (if not already installed)
   ```bash
   npm install bootstrap
   ```
   Then import it in your entry file (`main.jsx` / `index.js`):
   ```js
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap-icons/font/bootstrap-icons.css';
   ```

4. **Start the development server**
   ```bash
   npm run dev   # or npm start
   ```

---

## 📁 Project Structure

```
src/
├── components/
│   └── EMICalculator.jsx      # Main calculator component
├── EMI-Calculator.css         # Component-specific styles
└── App.jsx                    # Root component
```

---

## 🛠️ Usage

Import and render the `EMICalculator` component anywhere in your app:

```jsx
import { EMICalculator } from './components/EMICalculator';

function App() {
  return <EMICalculator />;
}
```

---

## ⚙️ Input Ranges

| Parameter       | Min        | Max          | Step   | Default    |
|----------------|------------|--------------|--------|------------|
| Loan Amount     | ₹25,000    | ₹1,00,00,000 | ₹5,000 | ₹25,000    |
| Loan Tenure     | 1 Year     | 7 Years      | 1 Year | 1 Year     |
| Interest Rate   | 9.99% p.a. | 24% p.a.     | 0.1%   | 9.99% p.a. |

---

## 🧰 Tech Stack

- **React** — UI library with `useState` and `useEffect` hooks
- **Bootstrap 5** — Responsive grid and utility classes
- **Bootstrap Icons** — Icon set for UI elements
- **CSS** — Custom component styles via `EMI-Calculator.css`

---

## 🔮 Future Improvements

- [ ] Display **Total Payable Amount** and **Interest Amount** in the results card
- [ ] Add an **amortization schedule** table (month-by-month breakdown)
- [ ] Add a **pie chart** showing principal vs. interest split
- [ ] Make the **"Apply Now"** button link to a loan application flow
- [ ] Add **input validation** to prevent invalid or out-of-range entries
- [ ] Support for **multiple loan types** (home, car, education)

---



---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
