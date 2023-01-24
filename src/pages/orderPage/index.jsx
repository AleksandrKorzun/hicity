import { Autocomplete, Divider, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../../components/section";
import { getRegions, getRegionsService } from "../../services/services";
import s from "./index.module.css";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

const initialState = {
  email: "",
  firstName: "",
  secondName: "",
  state: "",
  city: "",
  department: "",
  phone: "",
};

const OrderPage = () => {
  useEffect(() => {
    const getTotalProductsCart = JSON.parse(localStorage.getItem("myCart"));
    setTotalProductsCart(getTotalProductsCart);
  }, []);
  const [totalProductsCart, setTotalProductsCart] = useState([]);
  const totalPrice = totalProductsCart.reduce(
    (acc, { count, price }) => (acc += count * price),
    0
  );
  const [stateForm, setStateForm] = useState(initialState);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setStateForm((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("sent")
    const {firstName, secondName, state, city, department, phone, email} = stateForm
    const name = `ФИО: ${firstName} ${secondName}`
    const tel = `Тел: ${phone}`
    const delName = `Область: ${state}`
    const town = `Город: ${city}`
    const departments = `Отд: ${department}`
    const model = `Модель: ${totalProductsCart.reduce(
      (acc, { name, count }) => acc += `${name} x ${count} | `, ' ')}`
    const price = `Цена: ${totalPrice}`
    const chat_id = 291340498;
    // axios.post(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${town}%0A${departments}%0A${model}%0A${price}`)
    axios.post(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${town}%0A${departments}%0A${model}%0A${price}`).then(setStateForm(initialState)).then(console.log("done"))
    localStorage.setItem('myCart', "[]");
    setTotalProductsCart([]);
  }
  return (
    <Section style={{ minHeight: '75vh' }}>
      <div className={s.orderWrapper}>
        <div className={s.formWrapper}>
          <h3 className={s.title}>Shipping Details</h3>
          <form>
            <label className={s.label}>
              <span>Email Address</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="email"
                value={stateForm.email}
                placeholder="Email Address"
              />
            </label>
            <label
              className={s.label}
              style={{ width: "40%", marginRight: "10%" }}
            >
              <span>First Name</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="firstName"
                value={stateForm.firstName}
                placeholder="First Name"
              />
            </label>
            <label className={s.label} style={{ width: "40%" }}>
              <span>Second Name</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="secondName"
                value={stateForm.secondName}
                placeholder="Second Name"
              />
            </label>
            <label className={s.label}>
              <span>State</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="state"
                value={stateForm.state}
                placeholder="State"
              />
            </label>
            <label className={s.label}>
              <span>City</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="city"
                value={stateForm.city}
                placeholder="City"
              />
            </label>
            <label className={s.label}>
              <span>Department</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="department"
                value={stateForm.department}
                placeholder="Department"
              />
            </label>
            <label className={s.label}>
              <span>Phone</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="phone"
                value={stateForm.phone}
                placeholder="+38 067 777 77 77"
              />
            </label>
          </form>
        </div>
        <div className={s.resultWrapper}>
          <div>
            <h3 className={s.title}>Your Order</h3>
            <ul className={s.cartOrderList}>
              <li key="product" className={s.cartOrderItem}>
                <p className={s.cartOrderText}>Product</p>
                <p className={s.cartOrderText}>Subtotal</p>
              </li>

              {!!totalProductsCart.length &&
                totalProductsCart.map(
                  ({ name, price, characters, photo, link, id, count }) => (
                    <li key={id} className={s.cartOrderItem}>
                      <p className={s.cartOrderText}>
                        {name} × {count}{" "}
                      </p>
                      <p className={s.cartOrderText}>${price * count}.00</p>
                    </li>
                  )
                )}
              <Divider sx={{ marginBottom: "20px" }} />
              <li key="total" className={s.cartOrderItem}>
                <p className={s.cartOrderText}>
                  <b>Total</b>
                </p>
                <p className={s.cartOrderText}>
                  <b>${totalPrice}.00</b>
                </p>
              </li>
            </ul>
            <button type="button" onClick={onHandleSubmit} className={s.buttonSend}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OrderPage;
