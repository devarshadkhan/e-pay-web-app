// import Axiosintance from "@/services/axios/axiosInterceptor";
// import { API } from "@/services/endpoints/apiendpoint";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const index = () => {
//   const [aadharkyc, setAadharKyc] = useState();
//   const [aadharOTP, setAadhatOTP] = useState();
//   const [dataToStore, setDataToStore] = useState("");
//   const [aadharclient_id, setAadharclient_id] = useState("");
//   const aadharOTPsend = async () => {
//     await Axiosintance.post(API.aadhar_KYC, {
//       id_number: aadharkyc,
//       _id: dataToStore._id,
//     })
//       .then((res) => {
//         console.log(res.data.message);
//         setAadharclient_id(res?.data?.result?.data?.client_id);
//         toast(res.data.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       })
//       .catch((err) => {
//         toast(err.data.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       });
//   };
//   const verifyOTPaadhar = async () => {
//     //call api here to get aadhar kyc data and save it in state variable aadharkyc
//     await Axiosintance.post(API.verify_aadhar_OTP, {
//       otp: aadharOTP,
//       _id: dataToStore._id,
//       client_id: aadharclient_id,
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         toast("Aadhar OTP is Wrong", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       });
//   };

//   useEffect(() => {
//     // Get the data from local storage when the component mounts (if it exists)
//     const storedData = localStorage.getItem("userInfo");

//     if (storedData) {
//       setDataToStore(JSON.parse(storedData));
//     }
//   }, []);
//   return (
//     <>
//       <div className="aadhar_kyc">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1>Aadhar KYC</h1>

//               <form action="">
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   className="form-control"
//                   value={aadharkyc}
//                   onChange={(e) => setAadharKyc(e.target.value)}
//                   placeholder="please enter your kyc number"
//                 />
//                 <br />
//                 <br />
//                 <p>
//                   verify your aadhar{" "}
//                   <button type="button" onClick={aadharOTPsend}>
//                     get OTP
//                   </button>
//                 </p>

//                 <div>
//                   <div>
//                     <input
//                       type="text"
//                       name=""
//                       className="form-control"
//                       id=""
//                       value={aadharOTP}
//                       onChange={(e) => setAadhatOTP(e.target.value)}
//                       placeholder="please enter OTP"
//                     />

//                     <button type="button" onClick={verifyOTPaadhar}>
//                       verify OTP Aadhar
//                     </button>
//                   </div>
//                 </div>
//               </form>
//               <button type="button">next</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;

import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/auth/Aadhar.module.css";
import classNames from "classnames";
import AuthImgSidebar from "@/components/AuthImgSidebar/AuthImgSidebar";
const Index = () => {
  // const router = useRouter();
  // const params = router.query;
  // const _data = new URLSearchParams(params).toString();
  // const [emailLoader, setEmailLoader] = useState(false);
  // const [aadharkyc, setAadharKyc] = useState();
  // const [frontAadharImage,setFrontAadharImage] = useState(null)
  // const [backAadharImage,setBackAadharImage] = useState(null)
  // const [dataToStore, setDataToStore] = useState("");
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
  //     setFrontAadharImage(imageURL);
  //   }
  // };
  // const handleImageChangeBack = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const imageURL = URL.createObjectURL(file); // Create a URL for the selected file
  //     setBackAadharImage(imageURL);
  //   }
  // };
  // const aadharOTPsend = async () => {
  //       await Axiosintance.post(API.aadhar_KYC, {
  //         id_number: aadharkyc,
  //         _id: dataToStore._id,
  //       })
  //         .then((res) => {
  //           console.log(res.data.message);
  //           setAadharclient_id(res?.data?.result?.data?.client_id);
  //           toast(res.data.message, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         })
  //         .catch((err) => {
  //           toast(err?.message, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         });
  //     };


  // // next page clicked buton
  // const handleNextButtonClick = () => {
  //   router.push(`/auth/register/verify-otp/?${_data}`);
  //   // if (areBothOTPsEntered()) {
  //   //   router.push(`/auth/register/verify-otp/?${_data}`);
  //   // } else {
  //   //   // setErrorMessage("Please enter both email and phone OTPs.");
  //   //   toast("Please enter both email and phone OTPs.", {
  //   //     position: "top-right",
  //   //     autoClose: 5000,
  //   //     hideProgressBar: false,
  //   //     closeOnClick: true,
  //   //     pauseOnHover: true,
  //   //     draggable: true,
  //   //     progress: undefined,
  //   //     theme: "dark",
  //   //   });
  //   // }
  // };
  //  useEffect(() => {
  //   // Get the data from local storage when the component mounts (if it exists)
  //   const storedData = localStorage.getItem("userInfo");

  //   if (storedData) {
  //     setDataToStore(JSON.parse(storedData));
  //   }
  // }, []);


  const router = useRouter();
  const params = router.query;
  const _data = new URLSearchParams(params).toString();
  const [emailLoader, setEmailLoader] = useState(false);
  const [aadharkyc, setAadharKyc] = useState();
  const [frontAadharImage, setFrontAadharImage] = useState(null);
  const [backAadharImage, setBackAadharImage] = useState(null);
  const [dataToStore, setDataToStore] = useState("");
  const [aadharclient_id, setAadharclient_id] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFrontAadharImage(file); // Store the image file instead of the URL
    }
  };

  const handleImageChangeBack = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setBackAadharImage(file); // Store the image file instead of the URL
    }
  };

  const aadharOTPsend = async () => {
    const formData = new FormData();
    formData.append("frontImage", frontAadharImage);
    formData.append("backImage", backAadharImage);
    formData.append("id_number", aadharkyc);
    formData.append("_id", dataToStore._id);

    try {
      const response = await Axiosintance.post(API.aadhar_KYC, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      console.log(response.data.message);

      // Handle the response as needed
      setAadharclient_id(response?.data?.result?.data?.client_id);

      toast(response.message, {
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
      console.error(error.message);
      // Handle errors
      toast(error.message, {
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

  const handleNextButtonClick = () => {
    router.push(`/auth/register/verify-otp/?${_data}`);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userInfo");

    if (storedData) {
      setDataToStore(JSON.parse(storedData));
    }
  }, []);


  const verifyOTPaadhar = async () => {
        //call api here to get aadhar kyc data and save it in state variable aadharkyc
        await Axiosintance.post(API.verify_aadhar_OTP, {
          otp: aadharOTP,
          _id: dataToStore._id,
          client_id: aadharclient_id,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            toast("Aadhar OTP is Wrong", {
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
      const [aadharOTP, setAadhatOTP] = useState();

  return (
    <>
      <div className={styles.verify_otp}>
        <div className={classNames(styles.container_fluid, "container-fluid")}>
          <div className="row">
            <div className="col-4">
              <AuthImgSidebar />
            </div>
            <div className={classNames("col-8", styles.col)}>
              <div className={classNames(styles.container, "container")}>
                <div className="row h-100">
                  <div className="col-12 d-flex align-items-center justify-content-center flex-wrap">
                    <h1>Verify Aadhar</h1>
                    {/* <p>Fill the details to complete your profile</p> */}
                  </div>
                  <div className="row">
                    <div className="col-12">
                        <p className="text-center">Fill the details to complete your profile</p>
                  
                    </div>
                    <div className="col-6">
                    <div class={styles.image_upload}>
                      <div className={styles.aadharSec}>
                        <label htmlFor="file-input4">
                          <img
                            src={
                              backAadharImage || 
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                            }
                            alt="Uploaded"
                            className={styles.Uploaded}
                          />
                         
                        </label>
                        <input
                          id="file-input4"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChangeBack}
                        />
                      </div>
                    </div>
                  </div>
                    <div className="col-6">
                    <div class={styles.image_upload}>
                      <div className={styles.aadharSec}>
                        <label htmlFor="file-input4">
                          <img
                            src={
                              frontAadharImage ||
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                            }
                            alt="Uploaded"
                            className={styles.Uploaded}
                          />
                       
                        </label>
                        <input
                          id="file-input4"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className={styles.centr}>
                    <div className={styles.columset}>
                      <div className={classNames(styles.customInpOpt, "mb-5")}>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Aadhar Card Number
                          </label>
                          <div className="d-flex justify-content-between ">
                            <input
                              type="email"
                              // class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              // disabled
                              value={aadharkyc}
                              placeholder="1322 2345 3890"
                              onChange={(e) => setAadharKyc(e.target.value)}
                            />

                            {emailLoader ? (
                              <>
                                <div
                                  class="spinner-grow text-secondary"
                                  role="status"
                                >
                                  <span class="visually-hidden"></span>
                                </div>
                              </>
                            ) : (
                              <>
                                {" "}
                                <button onClick={aadharOTPsend}>
                                  send OTP
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* <input
                  type="text"
                  name="email"
                  id="emailInput"
                  disabled
                  value={params.email || "jjh@gmail.com"}
                /> */}
                      </div>
<input type="text" name="" id="" value={aadharOTP} onChange={(e)=>setAadhatOTP(e.target.value)} />
<button onClick={verifyOTPaadhar}>otp send</button>
                      <div className="text-center">
                        <button
                          //  disabled={!areBothOTPsEntered()}
                          onClick={handleNextButtonClick}
                          className={styles.next_btn}
                        >
                          Next
                        </button>
                        {/* <p>Fill the details to complete your profile</p> */}
                        {/* <p className="mt-3 fs-6 fw-bold">OTP fill next page please click the next button 👉</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

//  {/* {!isEmailOTPVerified && (
//                 <>
//                   <div className={styles.customInpOpt}>
//                   <label for="exampleInputEmail1" class="form-label">
//                     Email OTP
//                   </label>
//                   <div className="d-flex justify-content-between ">
//                   <input
//                       type="text"
//                       name="emailOTP"
//                       placeholder="Enter Email OTP"
//                       value={emailOTP}
//                       onChange={(e) => setEmailOTP(e.target.value)}
//                     />
//                     <button onClick={handleEmailOTPSubmit}>
//                       Submit Email OTP
//                     </button>
//                   </div>

//                   </div>
//                 </>
//               )} */}

//               {/* {isEmailOTPVerified && (
//                 <>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phoneInput"
//                     disabled
//                     value={params.phone || "90909****"}
//                   />
//                   <button onClick={handlePhoneGetOTPClick}>
//                     Get Phone OTP
//                   </button>
//                   <input
//                     type="text"
//                     name="phoneOTP"
//                     placeholder="Enter Phone OTP"
//                     value={phoneOTP}
//                     onChange={(e) => setPhoneOTP(e.target.value)}
//                   />
//                   <button onClick={handlePhoneOTPSubmit}>
//                     Submit Phone OTP
//                   </button>
//                 </>
//               )} */}

//               {/* {isEmailOTPVerified && phoneOTP && (
//                 <div>
//                   <button
//                     onClick={() =>
//                       router.push(`/auth/register/password/?${_data}`)
//                     }
//                   >
//                     Next
//                   </button>
//                 </div>
//               )} */}
