const states = {
  success: { title: "Order complete", message: null },
  error: {
    NO_STOCK: {
      title: "Error page",
      message: "No stock has been found",
    },
    INCORRECT_DETAILS: {
      title: "Error page",
      message: "Incorrect details have been entered",
    },
    DEFAULT: { title: "Error page", message: null },
  },
};

export default states;
