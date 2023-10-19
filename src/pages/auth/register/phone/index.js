import React, { useState } from "react";
import styles from "@/styles/auth/Phone.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { toast } from "react-toastify";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";

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
    setLoading(true);
    await Axiosintance.post(API.register_user, data)
      .then((res) => {
        console.log(res.data.result);
        const params = new URLSearchParams(data).toString();
        router.push(`/auth/register/verify-number-send-otp/?${params}`);
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast(err?.data?.message, {
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
        <div className={classNames(styles.container_fluid , "container-fluid")}>
          <div className="row">
            <div className="col-4">
            <AuthImgSidebar />
            </div>
            <div className={classNames("col-8", styles.colsecNum)}>
              <div className={styles.phoneNumber}>
                <h3>
                  Join & Connect this Fast Growing{" "}
                  <span className="break">Community</span>
                </h3>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      maxLength: 10,
                    }} // Add validation rules
                    render={({ field }) => (
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          {...field}
                          placeholder="90909090"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                           {errors.phone && (
                    <span className={styles.err}>Phone number is required</span>
                  )}
                      </div>
                    )}
                  />
               

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
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
                     {errors.email && (
                    <span className={styles.err}>
                      {" "}
                      Email Address is required
                    </span>
                  )}
                  </div>
                 

                  <button type="submit" className={classNames(styles.otpBtn)}>
                    {loading ? (
                      <>
                        <div
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
