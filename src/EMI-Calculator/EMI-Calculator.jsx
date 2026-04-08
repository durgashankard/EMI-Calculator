

import './EMI-Calculator.css';

import { useEffect, useState } from "react"

export function EMICalculator() {

    const [loanAmount, setLoanAmount] = useState(25000)
    const [loanYear, setLoanYear] = useState(1)
    const [interestRate, setInterestRate] = useState(9.99)
    const [total, setTotal] = useState(0);

    // function handleAmount(e) {
    //     setLoanAmount(`${e.target.value}`);
    //     handleTotalCalculat();
    // }

    // function handleYear(e) {
    //     setLoanYear(e.target.value);
    //     handleTotalCalculat();

    // }

    // function handleInterestRate(e) {
    //     setInterestRate(e.target.value);
    //     handleTotalCalculat();

    // }

    function handleAmount(e) {
        setLoanAmount(Number(e.target.value));

    }

    function handleYear(e) {
        setLoanYear(Number(e.target.value));
    }

    function handleInterestRate(e) {
        setInterestRate(Number(e.target.value));
    }

    // function handleTotalCalculat() {

    //     let P = parseInt(loanAmount);
    //     let R = parseFloat(interestRate) / 12 / 100;
    //     let N = parseInt(loanYear) * 12;

    //     let EMI = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    //     setTotal(EMI);

    // }


    const handlecalculate = useEffect(() => {

        let P = loanAmount;
        let R = interestRate / 12 / 100;
        let N = loanYear * 12;

        let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

        setTotal(EMI);

    }, [loanAmount, loanYear, interestRate]);

    return (
        <div className="container-fluid p-4">
            <h3 className="text-center">Personal Loan EMI Calculator</h3>

            <div className="row mt-3 gx-3">

                <div className="col-7 rounded rounded-2">
                    <div className="card bg-body-secondary p-4">

                        <div className="d-flex justify-content-between">
                            <div className="fw-bold fs-5">Loan Amount </div>
                            <div>
                                <div className="">
                                    <span className="">₹ &nbsp;
                                        <input type="text" value={`${loanAmount}`} onChange={handleAmount} name="" id="" size={15} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-3">
                            <input type="range" value={loanAmount} onChange={handleAmount} name="" id="" min={25000} max={10000000} step={5000} style={{ width: "100%" }} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>{'25,000'}</div>
                            <div>{"100,00,000"}</div>
                        </div>

                        <div className="mt-3 d-flex justify-content-between">
                            <div className="fw-bold">Loan Tenure</div>
                            <div><input type="text" onChange={handleYear} value={loanYear} name="" id="" size={15} /></div>
                        </div>


                        <div className=" mt-3">
                            <input type="range" value={loanYear} onChange={handleYear} min={1} max={7} step={1} style={{ width: "100%" }} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>{'1 Year '}</div>
                            <div>{'7 Year '}</div>
                        </div>

                        <div className="mt-3 d-flex justify-content-between">
                            <div className="fw-bold">Interest rate </div>
                            <div><input type="text" onChange={handleInterestRate} value={interestRate} name="" id="" size={15} /></div>
                        </div>

                        <div className=" mt-3">
                            <input type="range" value={interestRate} onChange={handleInterestRate} min={9.99} max={24} step={0.1} style={{ width: "100%" }} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>{'9.99% PA'}</div>
                            <div>{'24% PA'}</div>
                        </div>

                    </div>
                </div>

                <div className="col-5 rounded rounded-2">
                    <div className="card bg-body-secondary p-4">
                        <div className="text-center bg-body-tertiary rounded rounded-3">
                            <p>Your Monthly EMI will be</p>
                            <h1 >
                                <span>₹ {total.toFixed(2)}</span>

                            </h1>
                        </div>

                        <div className="d-flex mt-3 justify-content-between">
                            <div>Amount Payable</div>
                            <div>------</div>
                        </div>

                        <div className="d-flex mt-3 justify-content-between">
                            <div>Interest Amount</div>
                            <div>------</div>
                        </div>

                        <div className="d-flex mt-3 justify-content-between">
                            <div>Principal Amount</div>
                            <div>------</div>
                        </div>

                        <div className="mt-3"><button className="btn btn-primary" onClick={handlecalculate}>Apply Now <span className=" bi bi-chevron-right"></span></button></div>

                    </div>
                </div>

            </div>

        </div>
    )
}