// // import { useRouter } from 'next/router'
// // import React from 'react'

// // const index = () => {
// //     const router = useRouter()
// //     const  params  = router.query
// //     const _data = new URLSearchParams(params).toString();
// //     // console.log("ROUTER",params.phone);
// //   return (
// //    <>
// //         <>
// //             <div className="verify_otp">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-12">
// //                             <h1>Verify OTP</h1>
// //                             <input type="text" name="" id="" disabled value={params.email || "jjh@gmail.com"} /> <button>get otp</button>
// //                             <input type="text" name="" id="" placeholder='otp' /> <button>submit otp</button>
// //                             <br />
// //                             <br />
// //                             <input type="text" name="" id="" disabled value={params.phone || "90909"} /> <button>get otp</button>
// //                             <input type="text" name="" id="" placeholder='otp' /> <button>submit otp</button>

// //                             <div>
// //                                 <button onClick={()=> router.push(`/auth/register/password/?${_data}`)}>next</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //    </>
// //   )
// // }

// // export default index

// import Axiosintance from "@/services/axios/axiosInterceptor";
// import { API } from "@/services/endpoints/apiendpoint";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const Index = () => {
//   const router = useRouter();
//   const params = router.query;
//   const _data = new URLSearchParams(params).toString();
//   const [emailOTP, setEmailOTP] = useState("");
//   const [phoneOTP, setPhoneOTP] = useState("");

//   //   const handleEmailGetOTPClick = async () => {
//   //     await Axiosintance.post(API.verify_email_otp,_data.email).then((response) => {
//   //         console.log(response);
//   //       if (response.status === 200 || response.status === 304) {
//   //         toast( ("Successfully sent the otp to your registered Email Id"),{
//   //             position: "top-right",
//   //             autoClose: 5000,
//   //             hideProgressBar: false,
//   //             closeOnClick: true,
//   //             pauseOnHover: true,
//   //             draggable: true,
//   //             progress: undefined,
//   //             theme: "light",
//   //             });

//   //       } else {
//   //         toast( ("Failed to send the otp to your registered Email Id"),{
//   //             position: "top-right",
//   //             autoClose: 5000,
//   //             hideProgressBar: false,
//   //             closeOnClick: true,
//   //             pauseOnHover: true,
//   //             draggable: true,
//   //             progress: undefined,
//   //             theme: "light",
//   //             });

//   //       }
//   //     });
//   //   };

//   const handleEmailGetOTPClick = async () => {
//     await Axiosintance.put(API.send_email_otp, {
//       email: params.email,
//     }).then((response) => {
//       console.log(response);
//       toast("Successfully sent the otp to your registered Email Id", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     });
//   };

//   const handleEmailOTPSubmit = async () => {
//     await Axiosintance.post(API.verify_email_otp, {
//       email: params.email,
//       emailOtp: Number(emailOTP),
//     }).then((response) => {
//       console.log(response.data.message);
//       toast(response.data.message, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     });
//   };

//   const handlePhoneGetOTPClick = async () => {
//     await Axiosintance.post(API.send_phone_otp, {
//       phone: Number(params.phone),
//     }).then((response) => {
//       console.log(response);
//       toast("Attend the call OTP ", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     });
//   };

//   const handlePhoneOTPSubmit = async () => {
//     await Axiosintance.post(API.verify_phone_otp, {
//       phone: params.phone,
//       phoneOtp: Number(phoneOTP),
//     }).then((response) => {
//       console.log(response.data.message);
//       toast(response.data.message, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     });
//   };

//   return (
//     <>
//       <div className="verify_otp">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1>Verify OTP</h1>
//               <input
//                 type="text"
//                 name="email"
//                 id="emailInput"
//                 disabled
//                 value={params.email || "jjh@gmail.com"}
//               />
//               <button onClick={handleEmailGetOTPClick}>Get Email OTP</button>
//               <input
//                 type="text"
//                 name="emailOTP"
//                 placeholder="Enter Email OTP"
//                 value={emailOTP}
//                 onChange={(e) => setEmailOTP(e.target.value)}
//               />
//               <button onClick={handleEmailOTPSubmit}>Submit Email OTP</button>

//               <br />
//               <br />

//               <input
//                 type="text"
//                 name="phone"
//                 id="phoneInput"
//                 disabled
//                 value={params.phone || "90909****"}
//               />
//               <button onClick={handlePhoneGetOTPClick}>Get Phone OTP</button>
//               <input
//                 type="text"
//                 name="phoneOTP"
//                 placeholder="Enter Phone OTP"
//                 value={phoneOTP}
//                 onChange={(e) => setPhoneOTP(e.target.value)}
//               />
//               <button onClick={handlePhoneOTPSubmit}>Submit Phone OTP</button>

//               <div>
//                 <button
//                   onClick={() =>
//                     router.push(`/auth/register/password/?${_data}`)
//                   }
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;




import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Index = () => {
  const router = useRouter();
  const params = router.query;
  const _data = new URLSearchParams(params).toString();
  const [emailOTP, setEmailOTP] = useState("");
  const [phoneOTP, setPhoneOTP] = useState("");
  const [isEmailOTPVerified, setIsEmailOTPVerified] = useState(false);

  const handleEmailGetOTPClick = async () => {
    try {
      await Axiosintance.put(API.send_email_otp, {
        email: params.email,
      });
      toast("Successfully sent the OTP to your registered Email Id", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast("Failed to send the OTP to your registered Email Id", {
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
  };

  const handleEmailOTPSubmit = async () => {
    try {
      const response = await Axiosintance.post(API.verify_email_otp, {
        email: params.email,
        emailOtp: Number(emailOTP),
      });
      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Mark email OTP as verified
      setIsEmailOTPVerified(true);
    } catch (error) {
      toast(error?.message ?   error.response?.data?.message : error?.message, {
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
  };

  const handlePhoneGetOTPClick = async () => {
    try {
      await Axiosintance.post(API.send_phone_otp, {
        phone: Number(params.phone),
      });
      toast("Attend the call OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast(err?.message, {
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
  };

  const handlePhoneOTPSubmit = async () => {
    try {
      const response = await Axiosintance.post(API.verify_phone_otp, {
        phone: params.phone,
        phoneOtp: Number(phoneOTP),
      });
      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast(err?.data?.message,  {
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
  };

  return (
    <>
      <div className="verify_otp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Verify OTP</h1>
              <input
                type="text"
                name="email"
                id="emailInput"
                disabled
                value={params.email || "jjh@gmail.com"}
              />
              {!isEmailOTPVerified && (
                <>
                  <button onClick={handleEmailGetOTPClick}>Get Email OTP</button>
                  <input
                    type="text"
                    name="emailOTP"
                    placeholder="Enter Email OTP"
                    value={emailOTP}
                    onChange={(e) => setEmailOTP(e.target.value)}
                  />
                  <button onClick={handleEmailOTPSubmit}>Submit Email OTP</button>
                </>
              )}

              <br />
              <br />

              {isEmailOTPVerified && (
                <>
                  <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    disabled
                    value={params.phone || "90909****"}
                  />
                  <button onClick={handlePhoneGetOTPClick}>Get Phone OTP</button>
                  <input
                    type="text"
                    name="phoneOTP"
                    placeholder="Enter Phone OTP"
                    value={phoneOTP}
                    onChange={(e) => setPhoneOTP(e.target.value)}
                  />
                  <button onClick={handlePhoneOTPSubmit}>Submit Phone OTP</button>
                </>
              )}

              {isEmailOTPVerified && phoneOTP && (
                <div>
                  <button
                    onClick={() => router.push(`/auth/register/password/?${_data}`)}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;








