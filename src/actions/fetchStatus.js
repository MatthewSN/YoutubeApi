export const setError = (error = "") => ({
  type: "SET_ERROR",
  error
});

export const setLoading = (loading = false) => ({
  type: "SET_LOADING",
  loading
});

export const setEmptyMessage=(emptyMessage="")=>({
    type:"SET_EMPTY_MESSAGE",
    emptyMessage
})
