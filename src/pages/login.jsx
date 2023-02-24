import React, {useState} from "react";
import styled from "styled-components";
import {InstaContext, useEAI} from "../App";
import {Button} from "../ui/button";
import {Text} from "../ui/text";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 5% auto;
  background-color: #b4b0b0;
  padding: 20px;
  border-radius: 5px;
  border: 7px solid #e1d9d9;
`;

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  input {
    width: 100%;
    height: 40px;
    border: 0;
    padding: 10px;
  }
`;

export const useLoginForm = (userDefaultValue = "", passDefaultValue = "") => {
  const [user, setUser] = useState(userDefaultValue);
  const [pass, setPass] = useState(passDefaultValue);

  return {
    user,
    setUser,
    pass,
    setPass,
  };
};

export const Login = () => {
  const state = React.useContext(InstaContext);
  const {user, setUser, pass, setPass} = useLoginForm();

  useEAI();

  const onClickHomeHandler = () => {
    if (pass && user) {
      state.meuDispatch({type: "change_current_page", payload: "home"});
      state.meuDispatch({type: "add_user", payload: {username: user}});
    }
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };

  const handleChangePass = (event) => {
    setPass(event.currentTarget.value);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text color="darkblue">Login</Text>
      </TitleWrapper>
      <Form>
        <InputWrapper>
          <input
            type="text"
            placeholder="Digite o usuário"
            onChange={handleChangeUser}
          />
        </InputWrapper>
        <InputWrapper>
          <input
            type="password"
            onChange={handleChangePass}
            value={pass}
            placeholder="Digite a senha"
          />
        </InputWrapper>
      </Form>
      <Button onClick={onClickHomeHandler}>Ir para a home</Button>
    </Wrapper>
  );
};
