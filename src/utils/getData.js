let isRequestMade = false;

export const getData = async () => {
  if (isRequestMade) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject("Request already made.");
  }

  isRequestMade = true;

  try {
    const resp = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");

    if (!resp.ok) {
      throw new Error(`Request failed with status ${resp.status}: ${resp.statusText}`);
    }

    const data = await resp.json();

    return data.results;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return "Network error. Please check your internet connection and try again.";
    } else {
      return "An error occurred. Please try again later.";
    }
  }
};
