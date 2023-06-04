import { useState } from "react";
import { AuthForm } from '../feature/AuthForm';
import { RegisterForm } from "../feature/RegisterForm";

export default function Root() {
    const [isRegistered, setRegistered] = useState(false);

    return (
      <>
        {
        isRegistered 
          ? <AuthForm onCheckRegistered={()=>setRegistered(false)} />
          : <RegisterForm onCheckRegistered={()=>(setRegistered(false))} />
        }
        
        <div id="detail"></div>
      </>
    );
  }
  