import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CREATE_ARTICLE = gql`
  mutation createArticle($title: String!, $body: String!) {
    createArticle(article: { title: $title, body: $body }) {
      title
      body
    }
  }
`;

const GET_ARTICLES = gql`
  {
    articles {
      title
      body
    }
  }
`;

export default function CreateArticle() {
  const [createArticle] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: GET_ARTICLES }],
  });

  const handleSubmit = () => {
    createArticle({ variables: { title: title.value, body: body.value } });
    body.value = "";
    title.value = "";
  };

  let body;
  let title;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin: "50px",
      }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          style={{
            width: "100%",
          }}
        >
          <label
            style={{
              fontFamily: "B612Mono-regular",
              color: "#3bb457",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Titre
          </label>
          <input
            ref={(value) => (title = value)}
            placeholder="Entrer un joli titre"
            style={{ fontFamily: "B612Mono-regular", color: "#b43b98" }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "B612Mono-regular",
              color: "#3bb457",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Texte
          </label>

          <textarea
            ref={(value) => (body = value)}
            placeholder="Ici le texte de votre article"
            style={{ fontFamily: "B612Mono-regular", color: "#b43b98" }}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", margin: "12px" }}
        >
          <button
            onClick={() => handleSubmit()}
            style={{
              borderRadius: "4px",
              border: "2px solid #b43b5c",
              backgroundColor: "#3bb494",
              fontFamily: "B612Mono-regular",
              padding: "8px",
              color: "#b43b5c",
            }}
          >
            Créer l'article
          </button>
        </div>
      </form>
    </div>
  );
}
