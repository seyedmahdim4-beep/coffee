import React, { useState, useEffect, Activity } from 'react'
import './Buying.css'
import bank from './data.js'
import { useNavigate } from 'react-router'

function Buying() {

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")
  const [cvv2, setCvv2] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [bankName, setBankName] = useState("")
  const fullCardNumber = `${input1}${input2}${input3}${input4}`;
  const navigate = useNavigate()


  useEffect(() => {
    const sliced = fullCardNumber.slice(0, 6);
    if (sliced.length === 6) {
      const foundBank = bank[sliced];
      setBankName(foundBank);

    }
  }, [fullCardNumber]);




  return (
    <div className="page">
      <div id="form-root">
        {/* <!-- CreditCard UI --> */}
        <div id="credit-card">

          <Activity mode={bankName ? "visible" : "hidden"} >
            <div className="card-header">
              <div className="card-price-field">
                <span> بانک شما: </span>
                <span className="payment-price"> {bankName} </span>
              </div>
            </div>
          </Activity>

          <div className="card-content">
            <div id="cardNumber-field" className="field!">
              <p className="field-label">شماره کارت:</p>
              <div className="card-number-field">
                <p className={fullCardNumber ? "card-text-area" : "cardNumber-is-empty card-text-area"}>{fullCardNumber}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full! mt-6">
              <div id="cvv2-field" className="field">
                <p className="field-label"> cvv2:</p>
                <div className="card-cvv2-field">
                  <p className={cvv2 ? "card-text-area" : "cvv2-is-empty card-text-area"}>{cvv2}</p>
                </div>
              </div>
              <div
                className="grid max-w-max grid-cols-2 justify-end ms-auto! gap-2"
              >
                <div id="expire-month-field" className="field">
                  <p className="field-label">ماه انقضا:</p>
                  <div className="card-expireDate-field">
                    <p className={month ? "card-text-area" : "expireDate-is-empty card-text-area"}>{month}</p>
                  </div>
                </div>
                <div id="expire-date-field" className="field">
                  <p className="field-label">سال انقضا:</p>
                  <div className="card-expireDate-field">
                    <p className={year ? "card-text-area" : "expireDate-is-empty card-text-area"}>{year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-body">
          <div>
            <label htmlFor="first-digits" className="form-label"> شماره کارت: </label>
            <div dir="ltr" className="form-cardNumber">
              <input
                id="first-digits"
                placeholder="****"
                maxLength={4}
                type="text"
                inputMode='numeric'
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value)
                  if (e.target.value.length === 4) {
                    document.querySelector(".in2").focus()
                  }

                }}
                className="cardNumber-input in1"
              />

              <input
                placeholder="****"
                maxLength={4}
                type="text"
                inputMode='numeric'
                value={input2}
                onChange={(e) => {
                  setInput2(e.target.value)
                  if (e.target.value.length === 4) {
                    document.querySelector(".in3").focus()
                  } else if (e.target.value.length === 0) {
                    document.querySelector(".in1").focus()
                  }

                }}

                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && e.target.value === '') {
                    document.querySelector(".in1").focus();
                  }
                }}
                className="cardNumber-input in2"
              />

              <input
                placeholder="****"
                maxLength={4}
                type="text"
                inputMode='numeric'
                value={input3}
                onChange={(e) => {
                  setInput3(e.target.value)
                  if (e.target.value.length === 4) {
                    document.querySelector(".in4").focus()
                  } else if (e.target.value.length === 0) {
                    document.querySelector(".in2").focus()
                  }
                }}

                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && e.target.value === '') {
                    document.querySelector(".in2").focus();
                  }
                }}
                className="cardNumber-input in3"
              />

              <input
                placeholder="****"
                maxLength={4}
                type="text"
                inputMode='numeric'
                value={input4}
                onChange={(e) => {
                  if (e.target.value.length === 4) {
                    document.querySelector(".in5").focus()
                  };
                  setInput4(e.target.value)
                  if (e.target.value.length === 0) {
                    document.querySelector(".in3").focus()
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && e.target.value === '') {
                    document.querySelector(".in3").focus();
                  }
                }}

                className="cardNumber-input in4"
              />
            </div>
          </div>
          <div className="w-full!">
            <label htmlFor="cvv2-num" className="form-label"> CVV2: </label>
            <div className="w-full">
              <input
                placeholder="***"
                value={cvv2}
                onChange={(e) => {
                  setCvv2(e.target.value)
                }}
                maxLength={4}
                id="cvv2-num"
                type="text"
                inputMode='numeric'
                className="form-input in5"
              />
            </div>
          </div>
          <div className="w-full! form-expiration" dir="ltr">
            <div>
              <label htmlFor="yearExpiration-num" className="form-label">
                سال انقضا:
              </label>
              <div className="w-full">
                <input
                  id="yearExpiration-num"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value)
                    if (e.target.value.length === 2) {
                      document.querySelector(".in7").focus()
                    }

                  }}
                  maxLength={2}
                  type="text"
                  inputMode='numeric'
                  placeholder="**"
                  className="form-input in6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="monthExpiration-num" className="form-label">
                ماه انقضا:
              </label>
              <div className="w-full">
                <input
                  id="monthExpiration-num"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value)
                    if (e.target.value.length === 0) {
                      document.querySelector(".in6").focus()
                    }

                  }}
                  maxLength={2}
                  type="text"
                  inputMode='numeric'
                  placeholder="**"
                  className="form-input in7"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="form-buttons">
          <button onClick={() => navigate(-1)} id="cancel-button">انصراف</button>
          <button id="submit-button">تائید و پرداخت</button>
        </div>
        <div
          className="text-yellow-600 rounded-lg border border-yellow-300 text-xs space-y-1.5 p-3 bg-yellow-500/10 w-full border-t"
        >
          <p className="">* تمامی فیلد ها اجباری هستند</p>
          <p className="">
            * جهت جلوگیری از باطل شدن کارت, اطلاعات خود را با دقت وارد نمائید
          </p>
          <p className="">* تمامی اطلاعات برای گلدن کافی محفوظ می‌باشد</p>
        </div>
      </div>

      <div id="background-overlay">
        <div id="background-orb"></div>
      </div>

    </div>
  )
}

export default Buying