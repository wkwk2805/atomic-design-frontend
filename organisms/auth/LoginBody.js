import React from "react";
import { TextField, Container } from "@material-ui/core";
import SubmitButton from "../../atoms/SubmitButton";
import Anchor from "../../atoms/Anchor";
import InputText from "../../atoms/InputText";
import { useRouter } from "next/router";

const LoginBody = () => {
  const router = useRouter();
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <InputText label="아이디" error={false} />
      <InputText label="비밀번호" type="password" error={false} />
      <div style={{ textAlign: "center", margin: 10 }}>
        <SubmitButton
          text="로그인"
          onClick={() => {
            router.push("/main");
          }}
        />
      </div>
      <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
        <Anchor href="/signup" text="회원가입" />
      </div>
    </Container>
  );
};

export default LoginBody;
