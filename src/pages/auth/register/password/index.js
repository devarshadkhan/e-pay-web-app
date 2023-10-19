// // import { useRouter } from 'next/router';
// // import React from 'react'

// // const index = () => {
// //     const router = useRouter();
// //     const params = router.query;
// //     const _data = new URLSearchParams(params).toString();

// //   return (
// //    <>
// //     <div className="set_otp">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-12">
// //                            <h1>Set Password</h1>

// //                           <form action="">
// //                           <input type="password" name="" id=""  />
// //                            <br />
// //                            <br />
// //                            <input type="password" name="" id=""  />

// //                            <div>
// //                            <button type='button' onClick={() => router.push(`/auth/register/aadhar-kyc/?${_data}`)}>next</button>
// //                            </div>
// //                           </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //    </>
// //   )
// // }

// // export default index

// import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
// import Axiosintance from "@/services/axios/axiosInterceptor";
// import { API } from "@/services/endpoints/apiendpoint";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { toast } from "react-toastify";

// const Index = () => {
    
//     const [dataToStore, setDataToStore] = useState('');
// console.log(dataToStore._id);
//   const router = useRouter();
//   const params = router.query;
//   const _data = new URLSearchParams(params).toString();
//   const { handleSubmit, control, watch, errors } = useForm();

// //   const onSubmit = async (data) => {
// //     const password = watch("password");
// //     const confirmPassword = watch("confirmPassword");
// //     await Axiosintance.post(API.set_Password, 
// //       data,
// //       _id: localStorage.getItem("_id"),
// //     ).then((res) => {
// //         console.log(res);
// //     });

// //     if (password !== confirmPassword) {
// //       // Passwords don't match, you can handle the error here
// //       toast("Passwords don't match", {
// //         position: "top-right",
// //         autoClose: 5000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         progress: undefined,
// //         theme: "light",
// //       });
// //     } else {
// //       // Passwords match, navigate to the next page
// //       router.push(`/auth/register/aadhar-kyc/?${_data}`);
// //     }
// //   };
// const onSubmit = async (data) => {
//     const password = watch("password");
//     const confirmPassword = watch("confirmPassword");
   
// //     // Get the _id from local storage
// //     const userId = localStorage.getItem("userInfo");
// //   console.log("ertyui",userId);
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       toast("Passwords don't match", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     } else {
//       try {
//         // Make an API call to set the password
//         const response = await Axiosintance.post(API.set_Password, {
//           ...data,
//           _id: dataToStore._id, // Pass the _id obtained from local storage
//         });
  
//         console.log(response);
        
//         // Assuming that the API call was successful and you want to navigate to the next page
//         router.push(`/auth/register/aadhar-kyc/?${_data}`);
//       } catch (error) {
//         // Handle API call errors here
//         console.error("API call failed:", error);
//         // You can display an error message or toast to the user
//         toast("Failed to set password. Please try again.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     }
//   };

// //   const [item,setItem] = useState('')
// //   console.log("sredtfgyuihjnkm",item);
// //   useEffect(() => {
// //     // Perform localStorage action
// //     const item = localStorage.getItem('userInfo')
// //     setItem(JSON.parse(item._id))
// //     console.log(JSON.parse(item));
// //   }, [])



// useEffect(() => {
//     // Get the data from local storage when the component mounts (if it exists)
//     const storedData = localStorage.getItem('userInfo');

//     if (storedData) {
     
//       setDataToStore(JSON.parse(storedData));
//     }
//   }, []);
//   return (
//     <div className="set_otp">
//       <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <AuthImgSidebar />
//         </div>
//           <div className="col-8">
//             <h1>Set Password</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group">
//                 <label>Password</label>
//                 <Controller
//                   name="password"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       type="password"
//                       className={`form-control ${
//                         errors?.password ? "is-invalid" : ""
//                       }`}
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors?.password && (
//                   <div className="invalid-feedback">Password is required</div>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label>Confirm Password</label>
//                 <Controller
//                   name="confirmPassword"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       type="password"
//                       className={`form-control ${
//                         errors?.confirmPassword ? "is-invalid" : ""
//                       }`}
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors?.confirmPassword && (
//                   <div className="invalid-feedback">Passwords do not match</div>
//                 )}
//               </div>

//               <div>
//                 <button type="submit">Next</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;















































































import React, { useEffect, useState } from "react";
import styles from "@/styles/auth/Password.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { toast } from "react-toastify";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";

const Index = () => {
  const [dataToStore, setDataToStore] = useState('');
console.log(dataToStore._id);
  const router = useRouter();
  const params = router.query;
  const _data = new URLSearchParams(params).toString();
  const { handleSubmit, control, watch, errors } = useForm();

//   const onSubmit = async (data) => {
//     const password = watch("password");
//     const confirmPassword = watch("confirmPassword");
//     await Axiosintance.post(API.set_Password, 
//       data,
//       _id: localStorage.getItem("_id"),
//     ).then((res) => {
//         console.log(res);
//     });

//     if (password !== confirmPassword) {
//       // Passwords don't match, you can handle the error here
//       toast("Passwords don't match", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     } else {
//       // Passwords match, navigate to the next page
//       router.push(`/auth/register/aadhar-kyc/?${_data}`);
//     }
//   };
const onSubmit = async (data) => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
   
//     // Get the _id from local storage
//     const userId = localStorage.getItem("userInfo");
//   console.log("ertyui",userId);
    // Check if passwords match
    if (password !== confirmPassword) {
      toast("Passwords don't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        // Make an API call to set the password
        const response = await Axiosintance.post(API.set_Password, {
          ...data,
          _id: dataToStore._id, // Pass the _id obtained from local storage
        });
  
        console.log(response);
        
        // Assuming that the API call was successful and you want to navigate to the next page
        router.push(`/auth/register/aadhar-kyc/?${_data}`);
      } catch (error) {
        // Handle API call errors here
        console.error("API call failed:", error);
        // You can display an error message or toast to the user
        toast("Failed to set password. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

//   const [item,setItem] = useState('')
//   console.log("sredtfgyuihjnkm",item);
//   useEffect(() => {
//     // Perform localStorage action
//     const item = localStorage.getItem('userInfo')
//     setItem(JSON.parse(item._id))
//     console.log(JSON.parse(item));
//   }, [])



useEffect(() => {
    // Get the data from local storage when the component mounts (if it exists)
    const storedData = localStorage.getItem('userInfo');

    if (storedData) {
     
      setDataToStore(JSON.parse(storedData));
    }
  }, []);
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
                <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Password</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      placeholder="passowrd"
                      className={`form-control ${
                        errors?.password ? "is-invalid" : ""
                      }`}
                      {...field}
                    />
                  )}
                />
                {errors?.password && (
                  <div className="invalid-feedback">Password is required</div>
                )}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      placeholder="confirm password"
                      className={`form-control ${
                        errors?.confirmPassword ? "is-invalid" : ""
                      }`}
                      {...field}
                    />
                  )}
                />
                {errors?.confirmPassword && (
                  <div className="invalid-feedback">Passwords do not match</div>
                )}
              </div>

              <div>
                <button type="submit" className="otpBtn" >Next</button>
              </div>
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
