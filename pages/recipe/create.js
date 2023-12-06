import { useRouter } from "next/router";
import { useState } from "react";
import { prepareFormData } from "@/utils/utils";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";

export default function CreatePage({ onAddRecipe, recipes }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = await prepareFormData(newRecipeData);

    if (formData.get("file").size > 0) {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const cloudinaryImgURL = await response.json();
      preparedNewRecipeData.imageURL = cloudinaryImgURL.url;
      preparedNewRecipeData.imageId = cloudinaryImgURL.id;
    }

    if (recipes.find((recipe) => recipe.name === preparedNewRecipeData.name)) {
      const errorString = `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`;
      setError(errorString);
      setInputValidation("already-created");
      return;
    } else {
      setInputValidation("valid");
    }

    onAddRecipe(preparedNewRecipeData);
    router.push("/");
  }

  return (
    <>
      <CreateOrUpdateRecipeForm
        onSubmit={handleSubmit}
        errorMessage={error}
        inputValidation={inputValidation}
      />
    </>
  );
}
