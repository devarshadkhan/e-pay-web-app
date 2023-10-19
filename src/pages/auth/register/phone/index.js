import React, { useState } from "react";
import styles from "@/styles/auth/Phone.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { toast } from "react-toastify";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    await Axiosintance.post(API.register_user, data)
      .then((res) => {
        console.log(res.data.result);
        const params = new URLSearchParams(data).toString();
        router.push(`/auth/register/verify-otp/?${params}`);
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false)
        toast(err?.data?.message , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <div className={styles.phonelogin}>
        <div className="container">
          <div className="row">
            <div className={classNames("col-6", styles.colsecNum)}>
              <div className={styles.phoneNumber}>
                <h3>Sign in to E-pay</h3>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      maxLength: 10,
                    }} // Add validation rules
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        class="form-control"
                        maxLength={10}
                        placeholder="enter your mobile number"
                        id="exampleFormControlInput1"
                      />
                      // <PhoneInput
                      //   {...field}
                      //   buttonClass="phonecountry"
                      //   inputClass={classNames(
                      //     "phonenumbercls",
                      //     styles.errBorder
                      //   )}
                      //   country={"in"}
                      // />
                    )}
                  />
                  {errors.phone && (
                    <span className={styles.err}>Phone number is required</span>
                  )}

                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>
                  {errors.email && (
                    <span className={styles.err}>
                      {" "}
                      Email Address is required
                    </span>
                  )}

                  <button type="submit" className={classNames(styles.otpBtn)}>
                    {loading ? (
                      <>
                        <div class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden"></span>
                        </div> 

                      </>
                    ) : (
                      "Next"
                    )}
                  </button>
                  <p>
                    Your journey to hassle-free utility payments begins here
                  </p>
                </form>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://payrup.com/assets/images/signin/signin3.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
