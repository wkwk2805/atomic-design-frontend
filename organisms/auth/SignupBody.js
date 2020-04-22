import React from "react";
import InputText from "../../atoms/InputText";
import { Container } from "@material-ui/core";
import SubmitButton from "../../atoms/SubmitButton";
import Anchor from "../../atoms/Anchor";

const SignupBody = () => {
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <InputText label="아이디" name="id" error={false} />
      <InputText
        label="비밀번호"
        name="password"
        type="password"
        error={false}
      />
      <InputText
        label="비밀번호확인"
        name="confirm"
        type="password"
        error={false}
      />
      <div style={{ textAlign: "center", margin: 10 }}>
        <SubmitButton text="회원가입" />
      </div>
      <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
        <Anchor href="/login" text="로그인" />
      </div>
    </Container>
  );
};

export default SignupBody;
