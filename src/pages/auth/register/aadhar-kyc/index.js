import Axiosintance from "@/services/axios/axiosInterceptor";
import { API } from "@/services/endpoints/apiendpoint";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [aadharkyc, setAadharKyc] = useState();
  const [aadharOTP, setAadhatOTP] = useState();
  const [dataToStore, setDataToStore] = useState("");
  const [aadharclient_id, setAadharclient_id] = useState("");
//   console.log(aadharclient_id);
  console.log(dataToStore._id);
  const aadharOTPsend = async () => {
    
    await Axiosintance.post(API.aadhar_KYC, {
        id_number: aadharkyc,
      _id: dataToStore._id,
    }).then((res) => {
        console.log(res.data.message);
        setAadharclient_id(res?.data?.result?.data?.client_id)
        toast(res.data.message , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })   
    })
    .catch((err)=>{
      toast(err.data.message , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })   
    })
    
  };
  const verifyOTPaadhar = async () => {
    //call api here to get aadhar kyc data and save it in state variable aadharkyc
    await Axiosintance.post(API.verify_aadhar_OTP, {
    otp:aadharOTP,
      _id: dataToStore._id,
      client_id:aadharclient_id
    }).then((res) => {
      console.log(res);
    })
    .catch((err)=>{
      toast("Aadhar OTP is Wrong" , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  };

  useEffect(() => {
    // Get the data from local storage when the component mounts (if it exists)
    const storedData = localStorage.getItem("userInfo");

    if (storedData) {
      setDataToStore(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
      <div className="aadhar_kyc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Aadhar KYC</h1>

              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  value={aadharkyc}
                  onChange={(e) => setAadharKyc(e.target.value)}
                  placeholder="please enter your kyc number"
                />
                <br />
                <br />
                <p>
                  verify your aadhar{" "}
                  <button type="button" onClick={aadharOTPsend}>
                    get OTP
                  </button>
                </p>

                <div>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      id=""
                      value={aadharOTP}
                      onChange={(e) => setAadhatOTP(e.target.value)}
                      placeholder="please enter OTP"
                    />

                    <button type="button" onClick={verifyOTPaadhar}>verify OTP Aadhar</button>
                  </div>
                </div>
              </form>
              <button type="button">next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
