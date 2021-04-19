import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Article from "./Article";
import CreateArticle from "./CreateArticle";

const GET_ARTICLES = gql`
  {
    articles {
      title
      body
    }
  }
`;

export default function Articles() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        paddingTop: "100px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          fontFamily: "B612Mono-700",
          color: "#573bb4",
          fontSize: "42px",
          textAlign: "center",
        }}
      >
        GraphQL / React / MongoDB
      </h1>
      <CreateArticle />
      {data.articles.map((article, i) => (
        <Article key={i} article={article} />
      ))}
    </div>
  );
}
