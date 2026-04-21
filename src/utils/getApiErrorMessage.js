export default function getApiErrorMessage(error, fallback = "Something went wrong") {
  const data = error?.response?.data;
  if (typeof data?.message === "string" && data.message.trim()) {
    return data.message;
  }
  if (typeof data?.error === "string" && data.error.trim()) {
    return data.error;
  }
  if (Array.isArray(data?.fieldErrors) && data.fieldErrors.length > 0) {
    const first = data.fieldErrors[0];
    if (first?.message) return first.message;
  }
  if (typeof error?.message === "string" && error.message.trim()) {
    return error.message;
  }
  return fallback;
}
