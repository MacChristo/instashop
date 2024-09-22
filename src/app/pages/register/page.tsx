"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import instagram from "../../../public/images/instagram-icon.svg";
import tiktok from "../../../public/images/tiktok-icon.svg";
import google from "../../../public/images/google-icon.svg";
import addLogo from "../../../public/images/add-logo.svg";

const Register: React.FC = () => {
  const [visibleRegister, setVisibleRegister] =
    useState<string>("RegisterDetails");
  return (
    <main className="text-[#1a1a1a] w-[90%] min-h-screen overflow-y-scroll flex justify-start flex-col items-start py-4 gap-5 absolute">
      {visibleRegister === "RegisterDetails" && (
        <RegisterDetails
          visibleRegister={visibleRegister}
          setVisibleRegister={setVisibleRegister}
        />
      )}
      {visibleRegister === "ProfileSetup" && (
        <ProfileSetup
          visibleRegister={visibleRegister}
          setVisibleRegister={setVisibleRegister}
        />
      )}
      {visibleRegister === "RegisterStore" && (
        <RegisterStore
          visibleRegister={visibleRegister}
          setVisibleRegister={setVisibleRegister}
        />
      )}
    </main>
  );
};

//Register details {name, email} page
interface RegisterDetailsProps {
  visibleRegister: string;
  setVisibleRegister: React.Dispatch<React.SetStateAction<string>>;
}
const RegisterDetails: React.FC<RegisterDetailsProps> = ({
  setVisibleRegister,
}) => {
  let [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center gap-2">
        <IoIosArrowRoundBack
          size={35}
          className="font-light"
          onClick={() => {
            router.push("/");
          }}
        />
        <p className="font-semibold">Get started</p>
      </div>
      <div className="flex flex-row w-[100%] justify-between gap-6">
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Enter your phone number or email to get started
        </h2>
        <p className="text-base">
          We will send you a verification code for confirmation
        </p>
      </div>
      <form action="" method="post" className="w-[100%]">
        <input
          type="email"
          name="email"
          id="reg-email"
          placeholder="Enter phone number or email"
          value={email}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button
        type="submit"
        className="flex self-center w-[100%] bg-[#8a226f] text-[#ffffff] justify-center p-3 rounded-[100px] absolute bottom-3 before:' ' before:w-[100%] before:h-[1px] before:bg-[#1a1a1a] before:absolute before:bottom-14 before:rounded-full"
        onClick={() => {
          setVisibleRegister("ProfileSetup");
        }}
      >
        Continue
      </button>
    </div>
  );
};

//Profile setup page
interface ProfileSetupProps {
  visibleRegister: string;
  setVisibleRegister: React.Dispatch<React.SetStateAction<string>>;
}
const ProfileSetup: React.FC<ProfileSetupProps> = ({ setVisibleRegister }) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  return (
    <div className="flex flex-col items-start gap-3 w-[100%]">
      <div className="flex flex-row items-center gap-2">
        <IoIosArrowRoundBack
          size={35}
          className="font-light"
          onClick={() => {
            setVisibleRegister("RegisterDetails");
          }}
        />
        <p className="font-semibold">Get started</p>
      </div>
      <div className="flex flex-row w-[100%] justify-between gap-6">
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
      </div>
      <div className="flex flex-col gap-5 w-[100%] items-start">
        <div className="flex justify-center flex-col gap-0 items-center text-center">
          <h1 className="text-2xl text-left text-[#1a1a1a] font-[600]">
            Complete profile setup
          </h1>
          <p className="text-base text-[#1a1a1a]">
            Connect your socials for quick setup
          </p>
        </div>
        <div className="flex w-[100%] items-center gap-3">
          <Image
            src={instagram}
            alt="instagram"
            className="w-1/3 p-6 rounded-[5px] bg-[#f7f7f7]"
          />
          <Image
            src={tiktok}
            alt="tiktok"
            className="w-1/3 p-6 rounded-[5px] bg-[#f7f7f7]"
          />
          <Image
            src={google}
            alt="google"
            className="w-1/3 p-6 rounded-[5px] bg-[#f7f7f7]"
          />
        </div>
        <div className="flex flex-col gap-3 w-[100%]">
          <p>Or enter manually</p>
          <form
            action=""
            method="post"
            className="flex flex-col w-[100%] gap-5"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
              onChange={(f) => {
                setFullName(f.target.value);
              }}
              value={fullName}
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
              onChange={(u) => {
                setUsername(u.target.value);
              }}
              value={username}
            />
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              placeholder="Phone number"
              required
              inputMode="numeric"
              className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
              onChange={(p) => {
                setPhoneNumber(p.target.value);
              }}
              value={phoneNumber}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
              onChange={(e) => {
                setProfileEmail(e.target.value);
              }}
              value={profileEmail}
            />
          </form>
        </div>
      </div>
      <button
        type="submit"
        className="flex self-center w-[100%] bg-[#8a226f] text-[#ffffff] justify-center p-3 rounded-[100px] absolute bottom-3 before:' ' before:w-[100%] before:h-[1px] before:bg-[#1a1a1a] before:absolute before:bottom-14 before:rounded-full"
        onClick={() => {
          setVisibleRegister("RegisterStore");
        }}
      >
        Continue
      </button>
    </div>
  );
};

//Register product page
interface RegisterStoreProps {
  visibleRegister: string;
  setVisibleRegister: React.Dispatch<React.SetStateAction<string>>;
}
const RegisterStore: React.FC<RegisterStoreProps> = ({
  setVisibleRegister,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-[100%] gap-3">
      <div className="flex flex-row items-center gap-2">
        <IoIosArrowRoundBack
          size={35}
          className="font-light"
          onClick={() => {
            setVisibleRegister("ProfileSetup");
          }}
        />
        <p className="font-semibold">Get started</p>
      </div>
      <div className="flex flex-row w-[100%] justify-between gap-6">
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
        <div className="w-1/3 bg-[#8a226f] h-[4px] rounded-[100px]"></div>
      </div>
      <div className="flex w-[100%]">
        <LogoUploader />
      </div>
      <button
        type="submit"
        className="flex self-center w-[100%] bg-[#8a226f] text-[#ffffff] justify-center p-3 rounded-[100px] absolute bottom-3 before:' ' before:w-[100%] before:h-[1px] before:bg-[#1a1a1a] before:absolute before:bottom-14 before:rounded-full"
        onClick={() => {
          router.push("/pages/createProduct");
        }}
      >
        Continue
      </button>
    </div>
  );
};

//Works together in the profile setup page to upload and change product logo
const LogoUploader: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const [storeTagName, setStoreTagName] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [category, setCategory] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState(addLogo);

  const activateUploadInput = () => {
    //this will trigger a click event on the upload input without even clicking it
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const newLogoUrl = URL.createObjectURL(file);
      setLogo(newLogoUrl);
      console.log("selected file is: ", file, newLogoUrl);
    }
  };

  return (
    <form action="" className="flex flex-col w-[100%] gap-3">
      <div className="flex flex-col justify-center items-center gap-2 p-3 w-[100%] rounded-xl border-[1px] border-solid border-[#1a1a1a]">
        <Image
          src={logo}
          alt="upload logo"
          onClick={activateUploadInput}
          width={100}
          height={100}
          className="rounded-full"
        />
        <p>Upload store logo</p>
        <input
          type="file"
          placeholder="upload logo"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className="flex flex-col w-[100%] gap-3">
        <input
          type="text"
          name="store-name"
          id="store-name"
          placeholder="Store name"
          onChange={(n) => {
            setStoreName(n.target.value);
          }}
          value={storeName}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
        <input
          type="text"
          name="store-tag-name"
          id="store-tag-name"
          placeholder="Store tag name"
          onChange={(t) => {
            setStoreTagName(t.target.value);
          }}
          value={storeTagName}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
        <input
          type="tel"
          name="store-phone-number"
          id="store-phone-number"
          placeholder="Store phone number"
          onChange={(p) => {
            setStorePhoneNumber(p.target.value);
          }}
          value={storePhoneNumber}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
        <input
          type="email"
          name="store-email"
          id="store-email"
          placeholder="Store email"
          onChange={(e) => {
            setStoreEmail(e.target.value);
          }}
          value={storeEmail}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          onChange={(c) => {
            setCategory(c.target.value);
          }}
          value={category}
          className="w-[100%] rounded-[10px] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
      </div>
    </form>
  );
};
export default Register;
