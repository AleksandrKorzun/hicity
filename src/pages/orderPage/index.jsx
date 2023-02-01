import { Autocomplete, Divider, TextField } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/section";
import { getRegions, getRegionsService } from "../../services/services";
import s from "./index.module.css";
import * as Yup from "yup";
import { Context } from "../../context";

const initialState = {
  email: "",
  firstName: "",
  secondName: "",
  state: "",
  city: "",
  department: "",
  phone: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  secondName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  department: Yup.number().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email"),
});

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

  const { getProductCart } = useContext(Context);
  const getProduct = () => getProductCart();

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);

    const { firstName, secondName, state, city, department, phone, email } =
      values;
    const name = `ФИО: ${firstName} ${secondName}`;
    const tel = `Тел: ${phone}`;
    const delName = `Область: ${state}`;
    const town = `Город: ${city}`;
    const departments = `Отд: ${department}`;
    const model = `Модель: ${totalProductsCart.reduce(
      (acc, { name, count }) => (acc += `${name} x ${count} | `),
      " "
    )}`;
    const price = `Цена: ${totalPrice}`;
    const chat_id = 291340498;
    axios.post(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${town}%0A${departments}%0A${model}%0A${price}`)
    axios
      .post(
        `https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${town}%0A${departments}%0A${model}%0A${price}`
      )
      .then(console.log("done"));
    localStorage.setItem("myCart", "[]");
    setTotalProductsCart([]);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    getProduct();
  };

  return (
    <Section style={{ minHeight: "75vh" }}>
      <div className={s.orderWrapper}>
        <div className={s.formWrapper}>
          <h3 className={s.title}>Shipping Details</h3>
          <Formik
            initialValues={initialState}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({ errors, touched, isValid }) => (
              <Form className={s.form}>
                <label className={s.label}>
                  <span>Email Address</span>
                  <Field
                    type="email"
                    className={s.inputText}
                    id="email"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </label>
                <label
                  className={s.label}
                  style={{ width: "40%", marginRight: "10%" }}
                >
                  <span>First Name</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="firstName"
                    name="firstName"
                    // value={stateForm.firstName}
                    placeholder="First Name"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div style={{ color: "red" }}>{errors.firstName}</div>
                  ) : null}
                </label>
                <label className={s.label} style={{ width: "40%" }}>
                  <span>Second Name</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="secondName"
                    name="secondName"
                    // value={stateForm.secondName}
                    placeholder="Second Name"
                  />
                  {errors.secondName && touched.secondName ? (
                    <div style={{ color: "red" }}>{errors.secondName}</div>
                  ) : null}
                </label>
                <label className={s.label}>
                  <span>State</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="state"
                    name="state"
                    // value={stateForm.state}
                    placeholder="State"
                  />
                  {errors.state && touched.state ? (
                    <div style={{ color: "red" }}>{errors.state}</div>
                  ) : null}
                </label>
                <label className={s.label}>
                  <span>City</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="city"
                    name="city"
                    // value={stateForm.city}
                    placeholder="City"
                  />
                  {errors.city && touched.city ? (
                    <div style={{ color: "red" }}>{errors.city}</div>
                  ) : null}
                </label>
                <label className={s.label}>
                  <span>Department</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="department"
                    name="department"
                    // value={stateForm.department}
                    placeholder="Department"
                  />
                  {errors.department && touched.department ? (
                    <div style={{ color: "red" }}>{errors.department}</div>
                  ) : null}
                </label>
                <label className={s.label}>
                  <span>Phone</span>
                  <Field
                    type="text"
                    className={s.inputText}
                    // onChange={onHandleChange}
                    id="phone"
                    name="phone"
                    // value={stateForm.phone}
                    placeholder="+38 067 777 77 77"
                  />
                  {errors.phone && touched.phone ? (
                    <div style={{ color: "red" }}>{errors.phone}</div>
                  ) : null}
                </label>
                <button
                  type="submit"
                  // onClick={onHandleSubmit}
                  // disable={!isValid }
                  className={s.buttonSend}
                >
                  Place order
                </button>
              </Form>
            )}
          </Formik>
          {/* <form>
            <label className={s.label}>
              <span>Email Address</span>
              <input
                type="text"
                className={s.inputText}
                onChange={onHandleChange}
                name="email"
                value={stateForm.email}
                placeholder="Email Address"
                required="required"
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
          </form> */}
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
                      <p className={s.cartOrderText}>₴ {price * count}</p>
                    </li>
                  )
                )}
              <Divider sx={{ marginBottom: "20px" }} />
              <li key="total" className={s.cartOrderItem}>
                <p className={s.cartOrderText}>
                  <b>Total</b>
                </p>
                <p className={s.cartOrderText}>
                  <b>₴ {totalPrice}</b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OrderPage;
