// GET_CALL

// useEffect(() => {
//     onSnapshot(collection(db, "recipes"), (snapshot) => 
//         setSavedRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id })))
//     )
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [updateSavedRecipes])



// POST_CALL

// async function addRecipeInfo() {
//     try {
//     const docRef = await addDoc(collection(db, "recipes"), {
//         ingredients: ingredients,
//         recipeLabel: recipeLabel,
//         recipeYield: recipeYield,
//         recipeImage: recipeImage,
//         userUID: user.uid,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//     console.error("Error adding document: ", e);
//     }
// }



// DELETE_CALL

// const handleDelete = async (recipe) => {
//     await deleteDoc(doc(db, "recipes", recipe))
//     await setUpdateSavedRecipes(Math.random())
// }



// QUERY_CALL 

// useEffect(() => {
//     const queryRecipes = async () => {
//         const recipeRef = collection(db, "recipes")
//         const q = query(recipeRef, where("userUID", "==", user.uid))
//         const snapshot = await getDocs(q)
//         const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
//         setSavedRecipes(results)
//     }
//     queryRecipes()
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [updateSavedRecipes])
