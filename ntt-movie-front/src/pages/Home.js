import { useState } from "react";
import Form from "../components/Form";
import PageWrapper from "../styled-components/PageWrapper";
import styled from "styled-components";

export function Home() {
  const [movie, setMovie] = useState("");

  return (
    <PageWrapper>
      <HomeWrapper>
        <Form movie={movie} setMovie={setMovie} />
      </HomeWrapper>
    </PageWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`; 